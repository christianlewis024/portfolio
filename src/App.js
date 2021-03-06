import React from "react";
import "./App.css";
function App() {
  return (
    <>
      <div className="project-wrapper">
        <div className="box-1">
          <header>
            Hi my name is<span> Christian Lewis</span> and I am a{" "}
            <span>Full Stack Web Developer</span>
          </header>
        </div>
        <div className="top2">
          <div className="project-1">
            <a
              href="https://main.d2njpi9j1s76mb.amplifyapp.com/"
              target="_blank"
            >
              <img src="hrfss.png" className="apiss"></img>{" "}
            </a>
          </div>
          <span className="link-span">
            {" "}
            <a
              href="https://main.d2njpi9j1s76mb.amplifyapp.com/"
              target="_blank"
            >
              Deployed <i class="fas fa-globe"></i>
            </a>
            <a
              href="https://github.com/Lambda-School-Labs/Labs25-Human_Rights_First-TeamB-FE"
              target="_blank"
            >
              Repository <i class="fab fa-github"></i>
            </a>
          </span>
          <div className="proj-about">
            {" "}
            Group project for mapping police brutality across the US. Worked on
            by 8 developers from front end, backend, and data science.
            Implemented with React, CSS, Google Maps, AWS on the front end.
          </div>

          <div className="project-2">
            <a href="https://www.sciencewithmrslewis.com/" target="_blank">
              <img src="chanelss.png" className="apiss"></img>
            </a>
          </div>
          <span className="link-span">
            {" "}
            <a href="https://www.sciencewithmrslewis.com/" target="_blank">
              Deployed <i class="fas fa-globe"></i>
            </a>
            <a
              href="https://github.com/christianlewis024/chanelv2"
              target="_blank"
            >
              Repository <i class="fab fa-github"></i>
            </a>
          </span>
          <div className="proj-about">
            A website for a teacher who needed more online presence during the
            COVID 19 pandemic. Has a blog that only logged in admins can post
            in. Any visitor can see posts. Implemented with HTML, CSS, JS,
            Materialize and Firebase for the backend and auth.
          </div>
        </div>
        <div className="bottom2">
          <div className="project-3">
            <a href="https://apimountain.netlify.app/" target="_blank">
              <img src="apiss.png" className="apiss"></img>
            </a>
          </div>
          <span className="link-span">
            {" "}
            <a href="https://apimountain.netlify.app/" target="_blank">
              Deployed <i class="fas fa-globe"></i>
            </a>
            <a
              href="https://github.com/christianlewis024/apimountain"
              target="_blank"
            >
              Repository <i class="fab fa-github"></i>
            </a>
          </span>
          <div className="proj-about">
            A group project by students during our "spring break". We wanted to
            make an app that would allow us to track our favorite public APIs
            for small projects. Has an upvote and downvote, search, and
            authentication to create posts. Implemented with HTML, CSS, JS,
            Firebase and Vue.
          </div>
          <div className="project-4">
            <a href="https://weeklyhistoryquiz.netlify.app/" target="_blank">
              <img src="quizss.png" className="apiss"></img>
            </a>
          </div>
          <span className="link-span">
            {" "}
            <a href="https://weeklyhistoryquiz.netlify.app/" target="_blank">
              Deployed <i class="fas fa-globe"></i>
            </a>
            <a
              href="https://github.com/christianlewis024/historyquizfinal"
              target="_blank"
            >
              Repository <i class="fab fa-github"></i>
            </a>
          </span>
          <div className="proj-about">
            A weekly history quiz that I made for a history club that I belong
            to. Got about 20-30 users per week. This was the project that got me
            interested in coding full time. Scores are instantly sent to
            firebase. Implemented with HTML, CSS, JS, Materialize, and Firebase
            for the auth and backend.
          </div>
        </div>
        <div className="footerClass">
          <h1>Christian Lewis - 2020 </h1>
          <div className="footer-links">
            <p>
              <a href="https://github.com/christianlewis024" target="_blank">
                My Github <i class="fab fa-github"></i>
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/christianlewis92/"
                target="_blank"
              >
                My LinkedIn <i class="fab fa-linkedin"></i>
              </a>
            </p>
            <p>
              <a href="https://github.com/christianlewis024" target="_blank">
                My Resume <i class="fas fa-file-upload"></i>
              </a>
            </p>
            <p>
              <a
                href="https://medium.com/@christianlewis024/developing-a-group-project-with-real-world-uses-6fe525c3c2c0"
                target="_blank"
              >
                My Blog <i class="fas fa-book-reader"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
