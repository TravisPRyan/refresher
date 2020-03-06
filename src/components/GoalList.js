import React from "react";

const GoalList = props => {
  return (
    <ul className="goalList">
      {props.goals.map(goal => {
        return <li>{goal.text}</li>;
      })}
    </ul>
  );
};

export default GoalList;
