import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'

function addDateRange({dates}){
  return { type: 'TOGGLE_DATES', dates }
}

export default function PriceDate() {

  const { initialDate, finalDate } = useSelector(state => state)
  const dispatch = useDispatch()

  function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(formatDay(startDate));
    var stopDate = moment(formatDay(stopDate));
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format('DD/MM/YYYY'))
      currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  }

  function formatDay(date) {
    const day = date.substring(0, 2)
    const month = date.substring(3, 5)
    const year = date.substring(6, date.length)
    return `${month}/${day}/${year}`
  }

  function dispatchDateRange(dates){
    dispatch(addDateRange({
      dates
    }))
  }

  useEffect(() => {
    if (initialDate.indexOf('/') > 0) {
      console.log(getDates(initialDate, finalDate))
    }
  }, [initialDate])

  return (
    <>
      <div className="Date">
        <br />
        <label>{initialDate} - {finalDate}</label>
      </div>
    </>
  );
}
