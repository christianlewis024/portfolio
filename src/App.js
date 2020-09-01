import React from "react";
import "./App.css";
function App() {
  return (
    <>
      <div className="box-1">
        <header>
          Hi my name is<span> Christian Lewis</span> and I am a{" "}
          <span>Full Stack Web Developer</span>
        </header>
      </div>
      <div className="project-wrapper">
        <div className="top2">
          <div className="project-1">
            <h3>Project #1</h3>
            <h4>brief overview</h4>
            <p>whats being used</p>
          </div>
          <div className="project-2">
            <h3>Project #2</h3>
            <h4>brief overview</h4>
            <p>whats being used</p>
          </div>
        </div>
        <div className="bottom2">
          <div className="project-3">
            <h3>Project #3</h3>
            <h4>brief overview</h4>
            <p>whats being used</p>
          </div>
          <div className="project-4">
            <h3>Project #4</h3>
            <h4>brief overview</h4>
            <p>whats being used</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
