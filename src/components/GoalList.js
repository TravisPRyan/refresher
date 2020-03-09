import React from "react";

//returns myGoals array in JSX format. (maps every object within array to jsx equivelent)
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
