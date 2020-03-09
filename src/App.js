import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [myGoals, setMyGoals] = useState([
    { id: "g1", text: "Finish Portfolio" },
    { id: "g2", text: "Learn Graphql" },
    { id: "g3", text: "Work on non-profit" }
  ]);

  const addNewGoalHandler = newGoal => {
    setMyGoals(prevMyGoals => prevMyGoals.concat(newGoal));
  };

  return (
    <div className="goals">
      <h2>My Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={myGoals} />
    </div>
  );
};

export default App;
