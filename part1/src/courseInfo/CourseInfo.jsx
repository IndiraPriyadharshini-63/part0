import React from "react";

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};
const Content = (props) => {
  return (
    <div>
      <Part
        part={props.parts.parts[0].name}
        exercises={props.parts.parts[0].exercises}
      />
      <Part
        part={props.parts.parts[1].name}
        exercises={props.parts.parts[1].exercises}
      />
      <Part
        part={props.parts.parts[2].name}
        exercises={props.parts.parts[2].exercises}
      />
    </div>
  );
};
const Total = (props) => {
  const total =
    props.parts.parts[0].exercises +
    props.parts.parts[1].exercises +
    props.parts.parts[2].exercises;
  return <p>No of Excercises {total}</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const CourseInfo = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  );
};

export default CourseInfo;
