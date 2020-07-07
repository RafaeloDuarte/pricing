/** @jsx jsx */
import { useMonth } from "@datepicker-react/hooks";
import { jsx } from "@emotion/core";
import Day from "./Day";
import { translateMonth, translateDay } from './utils/translate'

function Month({ year, month, firstDayOfWeek }) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek
  });

  return (
    <div>
      <div css={{ textAlign: "center", margin: "0 0 16px" }}>
        <strong>{translateMonth(monthLabel)}</strong>
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center",
          marginBottom: "10px",
          fontSize: "10px"
        }}
      >
        {weekdayLabels.map(dayLabel => (
          <div css={{ textAlign: "center" }} key={dayLabel}>
            {translateDay(dayLabel)}
          </div>
        ))}
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center"
        }}
      >
        {days.map((day, index) => {
          if (typeof day === "object") {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              />
            );
          }

          return <div key={index} />;
        })}
      </div>
    </div>
  );
}

export default Month;
