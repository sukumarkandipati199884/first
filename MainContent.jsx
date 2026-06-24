import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <section id="about">
        <h2>About Me</h2>
        <p>This is the about section.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>This is the projects section.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>This is the contact section.</p>
      </section>
    </main>
  );
}

export default MainContent;