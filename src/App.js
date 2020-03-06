import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GoalList from "./components/GoalList";

const App = () => {
  const myGoals = [
    { id: "g1", text: "Finish Portfolio" },
    { id: "g2", text: "Learn Graphql" },
    { id: "g3", text: "Work on non-profit" }
  ];
  return (
    <div className="goals">
      <h2>Goals</h2>
      <GoalList goals={myGoals} />
    </div>
  );
};

export default App;
