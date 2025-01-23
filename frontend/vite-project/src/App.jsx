import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Kaniska's Portfolio</h1>
        <p>Electronics and Communication Engineering - 2nd Year</p>
        <p>Sri Krishna College of Engineering and Technology</p>
    </header>
    <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="container">
        <section id="about" class="section">
            <h2>About Me</h2>
            <p>Hi, I'm Kaniska, a passionate 2nd-year Electronics and Communication Engineering student at Sri Krishna College of Engineering and Technology. I enjoy exploring technology, working on innovative projects, and building skills for a successful engineering career.</p>
        </section>
        <section id="projects" class="section">
            <h2>Projects</h2>
            <div class="project">
                <h3>IoT-Based Smart Home Automation</h3>
                <p>Developed a smart home system using IoT technology to control lights and appliances remotely via a mobile app.</p>
            </div>
            <div class="project">
                <h3>Line Following Robot</h3>
                <p>Built a robot that can autonomously follow a line using sensors and basic microcontroller programming.</p>
            </div>
            <div class="project">
                <h3>Basic Signal Processing using MATLAB</h3>
                <p>Implemented basic signal processing techniques using MATLAB to analyze and process signals.</p>
            </div>
        </section>
        <section id="contact" class="section">
            <h2>Contact</h2>
            <p>If you'd like to get in touch, feel free to contact me through the details below:</p>
            <ul>
                <li>Email: kaniska@example.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>LinkedIn: <a href="https://linkedin.com/in/kanishka" target="_blank">linkedin.com/in/kanishka</a></li>
            </ul>
        </section>
    </div>
    <footer>
        <p>&copy; 2025 Kaniska. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App

