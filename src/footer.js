import React from "react";

function Footer() {
  return (
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
  );
}

export default Footer;
