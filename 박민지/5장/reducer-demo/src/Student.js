import React, { useReducer, useState } from "react";
import Person from "./Person";

const ACTION_TYPE = {
  submit: "submit",
  delete: "delete",
  change: "change-here",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.submit:
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        studentList: [...state.studentList, newStudent],
      };
    case ACTION_TYPE.delete:
      return {
        count: state.count - 1,
        studentList: state.studentList.filter(
          (a) => a.id !== action.payload.id
        ),
      };
    case ACTION_TYPE.change:
      return {
        count: state.count,
        studentList: state.studentList.map((a) => {
          if (a.id === action.payload.id) {
            return { ...a, isHere: !action.payload.isHere };
          }
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  studentList: [],
};

function Student() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "submit",
            payload: { name },
          });
        }}
      >
        추가
      </button>
      {studentsInfo.studentList.map((student) => {
        return (
          <Person
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
}

export default Student;
