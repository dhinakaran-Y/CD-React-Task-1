import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style-1.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div class="card">
          <div class="upper-section">
          <h1 class="title">Developer Profile</h1>
        
          <section class="basic-info">
            <p><strong>Name:</strong> Dhinakaran-Y</p>
            <p><strong>Role:</strong> Frontend Developer</p>
          </section>
        

          <section class="skills-section">
            <h2 class="title">Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </section>
          </div>
        
          
          <section class="projects-section">
            <h2 class="title">Projects</h2>
        
            <div class="project">
              <h3>Portfolio Website</h3>
              <p>Personal portfolio built using React.</p>
              <span>Status: Completed</span>
            </div>
        
            <div class="project">
              <h3>Task Manager</h3>
              <p>A simple task management app.</p>
              <span>Status: In Progress</span>
            </div>
          </section>
        </div>
  </StrictMode>,
)
