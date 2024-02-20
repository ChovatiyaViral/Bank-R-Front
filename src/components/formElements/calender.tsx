"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Calender = (props: any) => {
  const [startDate, setStartDate] = useState(new Date());
  const getDateValue = (date: any) => {
    setStartDate(date);
    props.handleValueChange({ "value": date }, "reservation_date")
  }
  return (
    <span className="custom-date-picker-input customLabel">
      <DatePicker className="reservation" selected={startDate} onChange={(date: any) => getDateValue(date)} minDate={new Date()} selectsStart dateFormat={`yyyy-MM-dd`} startDate={startDate} />
      {/* <label>Start Date</label> */}
    </span>
  );
};

export default Calender;
