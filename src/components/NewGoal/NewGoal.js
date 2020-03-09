import React from "react";

const NewGoal = props => {
  const addGoalHandler = event => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: "A new Goal has arrived"
    };

    props.onAddGoal(newGoal);
  };

  return (
    <form className="newGoal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
