import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [bloomImg, setBloomImg] = useState(true);

  function toggleBloomImg() {
    setBloomImg(prev => !prev);
  }

  const [infoToggle, setInfoToggle] = useState("Education");

  function setEducation() {
    setInfoToggle("Education")
  }

  function setTech() {
    setInfoToggle("Tech")
  }

  return (

    <section id="background">
      <div className="is-flex is-flex-direction-column header">
        <nav className="level is-flex mb-3 mt-2">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Home</p>
              <p className="title is-size-6">Pittsburgh, PA</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Email</p>
              <p className="title is-size-6">TobyGershon@gmail.com</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">LinkedIn</p>
              <p className="title is-size-6">linkedin.com/in/tobygershon</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">GitHub</p>
              <p className="title is-size-6">github.com/tobygershon</p>
            </div>
          </div>

        </nav>
        <h1 className="is-flex is-justify-content-center mb-0 has-text-weight-bold is-size-3">Dr. Toby N Gershon</h1>
      </div>

      <div id="head" className="columns is-flex is-justify-content-space-evenly">


        <div className="column is-one-third is-flex is-align-items-center ml-4">

          <p className="has-text-weight-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>I wanted a more challenging
            and rewarding career than optometry.  I know that if given an opportunity as a junior developer, I will
            be driven to elevate any team and grow individually.</strong> </p>

        </div>

        <div className="column is-flex is-justify-content-center is-align-items-center is-one-fifth">
          <img className="" src="/headshot.jpeg" />
        </div>

        <div className="column is-one-third is-flex is-flex-direction-column is-justify-content-center mr-4">
          <div class="tabs is-centered">
            <ul>
              <li className={infoToggle === "Education" ? "is-active" : ""}><a onClick={setEducation}>Education</a></li>
              <li className={infoToggle === "Tech" ? "is-active" : ""}><a onClick={setTech}>Tech Stack</a></li>
            </ul>
          </div>
          <div>{infoToggle === "Education" ?
            <ul>
              <li className="is-size-6 is-flex is-justify-content-space-between"><strong>Tech Elevator - Full stack Java development</strong><span>April 2024</span></li>
              <li className="is-size-6 is-flex is-justify-content-space-between"><strong>Salus University - Optometry</strong><span>May 2010</span></li>
              <li className="is-size-6 is-flex is-justify-content-space-between"><strong>University of Maryland - B.S. Biological Engineering</strong><span>May&nbsp;2004</span></li>
            </ul>
            :
            <ul>
              <li className="is-size-6 is-flex is-justify-content-space-between"><strong>Object Oriented Programming&nbsp;&nbsp;</strong><span>Java, C#, Spring Boot</span></li>
              <li className="is-size-6 is-flex is-justify-content-space-between"><strong>Front End&nbsp;&nbsp;</strong><span>Vue.js, React.js, JavaScript</span></li>
              <li className="is-size-6 is-flex is-justify-content-space-between"><strong>Database&nbsp;&nbsp;</strong><span>postgreSQL, firebase NoSQL, E/R diagrams</span></li>
              <li className="is-size-6 is-flex is-justify-content-space-between"><strong>Other&nbsp;&nbsp;</strong><span>Unit and Integration Testing, Git, Responsive Design</span></li>
            </ul>
          }</div>
        </div>

      </div>

      <div className="projects mx-4 my-4">
        <h2 className="has-text-weight-semibold is-size-4">Personal Projects</h2>
        <div className="section px-2 py-2 mt-2">
          <div className="columns has-text-centered">
            <div className="column ">
              <div className="mb-5">
                <p className="heading is-size-6">Current</p>
                <p className="title is-size-5">Python / OpenAI API</p>
              </div>
              <div className="is-flex is align-items-center">
                <p>I am interested in exploring the potential of implementing AI within personal projects.  I am learning Python in order to use the OpenAI API library.</p>
              </div>
            </div>
            <div className="column">
              <p className="heading is-size-6">My Bloomborhood - May 2024</p>
              <p className="title is-size-5">Plant-Share WebApp</p>
              <div className="is-flex is-flex-direction-column">
                
                  {/* <h3>About</h3>
                  <p>Inspired by friendly neighbors and 'buy nothing' groups,
                    the web application serves as a platform for locals to share extra plants.</p> */}
                 <button className="button is-small mb-0 mx-6">View in Modal</button>
                
                <div onClick={toggleBloomImg} className="column is-flex is-justify-content-center">
                  {bloomImg ?
                    <figure class="image is-128x128">
                      <img src="headshot.jpeg" />
                    </figure>
                    : <p>test</p>}
                </div>
              </div>
            </div>
            <div className="column">
              <p className="heading is-size-6">OK 2 Plant - March 2024</p>
              <p className="title is-size-5">Vegetable Garden Weather Forecaster</p>
              
                <div className="is-flex is-flex-direction-column">
                  {/* <h3>About</h3>
                  <p>Inspired by friendly neighbors and 'buy nothing' groups,
                    the web application serves as a platform for locals to share extra plants.</p> */}
                    <button className="button is-small mb-0 mx-6">View in Modal</button>
                </div>
                <div onClick={toggleBloomImg} className="column is-flex is-justify-content-center">
                  {bloomImg ?
                    <figure class="image is-128x128">
                      <img src="OK2PlantPage.png" />
                    </figure>
                    : <p>test</p>}
                </div>
              
            </div>
          </div>
        </div>
      </div>




      <h2 className="has-text-weight-semibold is-size-4">Tech Elevator Bootcamp Capstone Projects</h2>
      <div className="section">
        <div className="columns has-text-centered">
          <div className="column">
            <p className="heading is-size-6">Capstone 1</p>
            <p className="title is-size-5">NHL Trading Platform</p>
          </div>
          <div className="column">
            <p className="heading is-size-6">Capstone 2</p>
            <p className="title is-size-5">Peer to Peer Payment App</p>
          </div>
          <div className="column">
            <p className="heading is-size-6">Final Capstone</p>
            <p className="title is-size-5">City Tour Planner</p>
          </div>
        </div>
      </div>

    </section>



  )
}

export default App
