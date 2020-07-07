/** @jsx jsx */
import { useState, useEffect } from "react";
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";
import { jsx } from "@emotion/core";
import Month from "./Month";
import NavButton from "./NavButton";
import DatepickerContext from "./datepickerContext";
import { useDispatch } from "react-redux";

function Datepicker({ className, modalRef }) {

    const [state, setState] = useState({
        startDate: null,
        endDate: null,
        focusedInput: START_DATE
    });
    const {
        firstDayOfWeek,
        activeMonths,
        isDateSelected,
        isDateHovered,
        isFirstOrLastSelectedDate,
        isDateBlocked,
        isDateFocused,
        focusedDate,
        onDateHover,
        onDateSelect,
        onDateFocus,
        goToPreviousMonths,
        goToNextMonths
    } = useDatepicker({
        startDate: state.startDate,
        endDate: state.endDate,
        focusedInput: state.focusedInput,
        onDatesChange: handleDateChange
    });
    const dispatch = useDispatch()

    function handleDateChange(data) {
        if (!data.focusedInput) {
            setState({ ...data, focusedInput: START_DATE });
        } else {
            setState(data);
        }
    }

    function addDateAction({ initialDate, finalDate }) {
        return { type: 'TOGGLE_DATE', initialDate, finalDate }
    }

    function dispatchDate() {
        if (
            state.startDate && state.startDate.toLocaleString()
            &&
            state.endDate && state.endDate.toLocaleString()
        ) {
            const initDate = state.startDate.toLocaleString()
                .substring(0, state.startDate.toLocaleString().indexOf(' '))
            const finalDatee = state.endDate.toLocaleString()
                .substring(0, state.endDate.toLocaleString().indexOf(' '))
            dispatch(addDateAction({
                initialDate: initDate,
                finalDate: finalDatee
            }))
        }
    }

    useEffect(() => {
        dispatchDate()
    }, [state])

    return (
        <DatepickerContext.Provider
            value={{
                focusedDate,
                isDateFocused,
                isDateSelected,
                isDateHovered,
                isDateBlocked,
                isFirstOrLastSelectedDate,
                onDateSelect,
                onDateFocus,
                onDateHover
            }}
        >
            <div>
                <strong>Focused input: </strong>
                <p>{state.focusedInput}</p>
            </div>
            <div>
                <strong>Data Inicial: </strong>
                <p>{state.startDate && state.startDate.toLocaleString()}</p>
            </div>
            <div>
                <strong>Data Final: </strong>
                <p>{state.endDate && state.endDate.toLocaleString()}</p>
            </div>

            <NavButton onClick={goToPreviousMonths}>Meses Posteriores</NavButton>
            <NavButton onClick={goToNextMonths}>Meses Anteriores</NavButton>

            <div
                css={{
                    display: "grid",
                    margin: "32px 0 0",
                    gridTemplateColumns: `repeat(${activeMonths.length}, 300px)`,
                    gridGap: "0 64px"
                }}
            >
                {activeMonths.map(month => (
                    <Month
                        key={`${month.year}-${month.month}`}
                        year={month.year}
                        month={month.month}
                        firstDayOfWeek={firstDayOfWeek}
                    />
                ))}
            </div>
        </DatepickerContext.Provider>
    );
}

export default Datepicker