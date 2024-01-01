import {
  eachDayOfInterval,
  endOfMonth,
  getDay,
  isSameDay,
  startOfMonth,
} from "date-fns";
import React from "react";

const EventsCalendar = (props) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfmonth = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfmonth,
  });
  const startingOfMonth = getDay(firstDayOfMonth);
  return (
    <>
      <div className="grid grid-cols-7 gap-2 text-center">
        {days.map((day) => {
          return <div key={day}>{day}</div>;
        })}
        {Array.from({ length: startingOfMonth }).map((_, index) => {
          return <div className="bg-zinc-300" key={`empty-${index}`}></div>;
        })}
        {daysInMonth.map((date, i) => (
          <div className="border rounded-md p-0" key={i}>
            {date.getDate()}
            {props.events
              .filter((event) => {
                return isSameDay(event.date, date);
              })
              .map((event) => {
                return <div className="bg-green-300" key={event.title}>{event.title}</div>;
              })}
          </div>
        ))}
      </div>
    </>
  );
};

export default EventsCalendar;
