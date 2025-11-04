import React from "react";
import "./TimeTable.css";

const timetable = [
  { day: "Monday", subjects: ["Math", "Physics", "Break", "Chemistry", "English"] },
  { day: "Tuesday", subjects: ["Biology", "Math", "Break", "CS", "PE"] },
  { day: "Wednesday", subjects: ["English", "Math", "Break", "Physics", "Chemistry"] },
  { day: "Thursday", subjects: ["CS", "Biology", "Break", "Math", "Art"] },
  { day: "Friday", subjects: ["Physics", "English", "Break", "Chemistry", "CS"] },
];

function TimeTable() {
  return (
    <div className="timetable-container">
      <h1>My Weekly Time Table</h1>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Period 1</th>
            <th>Period 2</th>
            <th>Break</th>
            <th>Period 3</th>
            <th>Period 4</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((row, index) => (
            <tr key={index}>
              <td>{row.day}</td>
              {row.subjects.map((subj, i) => (
                <td key={i}>{subj}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimeTable;
