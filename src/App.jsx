import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [bloomModal, setBloomModal] = useState(false);

  function toggleBloomModal() {
    setBloomModal(prev => !prev);
  }

  const [okModal, setOkModal] = useState(false);

  function toggleOkModal() {
    setOkModal(prev => !prev);
  }

  const [cs1Modal, setcs1Modal] = useState(false);

  function togglecs1Modal() {
    setcs1Modal(prev => !prev);
  }

  const [cs2Modal, setcs2Modal] = useState(false);

  function togglecs2Modal() {
    setcs2Modal(prev => !prev);
  }

  const [cs3Modal, setcs3Modal] = useState(false);

  function togglecs3Modal() {
    setcs3Modal(prev => !prev);
  }

  const [infoToggle, setInfoToggle] = useState("Education");

  function setEducation() {
    setInfoToggle("Education")
  }

  function setTech() {
    setInfoToggle("Tech")
  }

  const [projects, setProjects] = useState("Personal")

  function setPersonal() {
    setProjects("Personal")
  }

  function setCapstone() {
    setProjects("Capstone")
  }

  return (

    <section id="background" className="has-background-dark has-text-white-bis">
      <div className="is-flex is-flex-direction-column header">
        <nav className="level is-flex mb-3 mt-2">
          <div className="level-item has-text-centered">
            <div>
              <p className="has-text-white-bis"><i class="fa-solid fa-house-chimney-window"></i>&nbsp;Home</p>
              <p className="has-text-white-bis is-size-6">Pittsburgh, PA</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="has-text-white-bis"><i class="fa-regular fa-envelope"></i>&nbsp;Email</p>
              <p className="has-text-white-bis is-size-6">TobyGershon@gmail.com</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <a href="https://linkedin.com/in/tobygershon" target="_blank"><div>
              <p className="has-text-white-bis"><i class="fa-brands fa-linkedin"></i>&nbsp;LinkedIn</p>
              <p className="has-text-white-bis is-size-6">linkedin.com/in/tobygershon</p>
            </div></a>
          </div>
          <div className="level-item has-text-centered">
            <a href="https://github.com/tobygershon" target="_blank"><div>
              <p className="has-text-white-bis"><i class="fa-brands fa-github"></i>&nbsp;GitHub</p>
              <p className="has-text-white-bis is-size-6">github.com/tobygershon</p>
            </div>
            </a>
          </div>

        </nav>
        <h1 className="is-flex is-justify-content-center mb-0 is-size-3 has-text-white-bis">Dr. Toby N Gershon</h1>
      </div>

      <div id="head" className="columns is-flex is-justify-content-space-evenly">


        <div className="column is-one-third is-flex is-align-items-center ml-4 px-6">

          <p className="has-text-white-bis">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After over 13 years in optometry practice
            I am looking for my next challenge.  I will use the interpersonal, scientific, and detail-oriented skills that I honed
            as an optometrist towards a career in software development.  As a former Division 1 athlete I am looking forward to
            working as a team player in my new position.</p>

        </div>

        <div className="column is-flex is-justify-content-center is-align-items-center is-one-fifth">
          <img className="" src="/headshot.jpeg" />
        </div>

        <div className="column is-one-third is-flex is-flex-direction-column is-justify-content-center mr-4">
          <div class="tabs is-centered has-text-white-bis">
            <ul>
              <li className={infoToggle === "Education" ? "is-active" : ""}><a onClick={setEducation}>Education</a></li>
              <li className={infoToggle === "Tech" ? "is-active" : ""}><a onClick={setTech}>Tech Stack</a></li>
            </ul>
          </div>
          <div>{infoToggle === "Education" ?
            <ul>
              <li className="is-size-6 is-flex is-justify-content-space-between has-text-white-bis"><span>Tech Elevator - Full stack Java development</span><span>2024</span></li>
              <li className="is-size-6 is-flex is-justify-content-space-between has-text-white-bis"><span>Salus University - O.D. Optometry</span><span>2006 - 2010</span></li>
              <li className="is-size-6 is-flex is-justify-content-space-between has-text-white-bis"><span>Univ. of Maryland - B.S. Bio Engineering</span><span>2000 - 2004</span></li>
            </ul>
            :
            <ul>
              <li className="is-size-6 is-flex is-justify-content-space-between has-text-white-bis"><span>Object Oriented Programming&nbsp;&nbsp;</span><span>Java, C#, Spring Boot</span></li>
              <li className="is-size-6 is-flex is-justify-content-space-between has-text-white-bis"><span>Front End&nbsp;&nbsp;</span><span>Vue.js, React.js, JavaScript</span></li>
              <li className="is-size-6 is-flex is-justify-content-space-between has-text-white-bis"><span>Database&nbsp;&nbsp;</span><span>postgreSQL, firebase NoSQL, E/R diagrams</span></li>
              <li className="is-size-6 is-flex is-justify-content-space-between has-text-white-bis"><span>Other&nbsp;&nbsp;</span><span>Unit and Integration Testing, Git, Responsive Design</span></li>
            </ul>
          }</div>
        </div>

      </div>

      <div className="project-box my-4 mx-6 pb-2">

        <div class="tabs is-centered">
          <ul>
            <li onClick={setPersonal} className={projects === "Personal" ? "is-active" : ""} ><a>Personal Projects</a></li>
            <li onClick={setCapstone} className={projects === "Capstone" ? "is-active" : ""} ><a>Capstone Projects</a></li>
          </ul>
        </div>

        <div className="">{projects === "Personal" ?

          <div className="columns has-text-centered">

            <div className="column is-flex is-flex-direction-column is-justify-content-space-between">
              <div className="mb-5">
                <p className="has-text-white-bis is-size-6">Current</p>
                <p className="has-text-white-bis is-size-5">Python / OpenAI API</p>
              </div>
              <div className="is-flex is align-items-center">
                <p className="px-4 has-text-white-bis">I am interested in exploring the potential of implementing AI within personal projects.  I am learning Python in order to use the OpenAI API library.</p>
              </div>
              <div><br /><br /></div>
            </div>

            <div className="column">
              <p className="is-size-6 has-text-grey-light">My Bloomborhood - May 2024</p>
              <p className="is-size-5 has-text-white-bis">Plant-Share WebApp</p>
              <div className="is-flex is-flex-direction-column">

                <button onClick={toggleBloomModal} className="button is-small mb-0 mt-2 mx-6">View in Modal</button>

                <div className="column is-flex is-justify-content-center">

                  <figure onClick={toggleBloomModal} class="image is-128x128 is-flex is-align-items-center">
                    <img src="OK2PlantPage.png" />
                  </figure>

                </div>
              </div>
            </div>

            <div className="column">
              <p className="is-size-6 has-text-grey-light">OK 2 Plant - March 2024</p>
              <p className="is-size-5 has-text-white-bis">Vegetable Garden Weather Forecaster</p>

              <div className="is-flex is-flex-direction-column">

                <button onClick={toggleOkModal} className="button is-small mb-0 mt-2 mx-6">View in Modal</button>
              </div>
              <div className="column is-flex is-justify-content-center">

                <figure onClick={toggleOkModal} class="image is-128x128 is-flex is-align-items-center">
                  <img src="OK2PlantPage.png" />
                </figure>

              </div>

            </div>

          </div>


          :

          <div className="columns has-text-centered">

            <div className="column">
              <p className="is-size-6 has-text-grey-light">Capstone 1</p>
              <p className="is-size-5 has-text-white-bis">NHL Trading Platform</p>
              <div className="is-flex is-flex-direction-column">

                <button onClick={togglecs1Modal} className="button is-small mb-0 mt-2 mx-6">View in Modal</button>
              </div>
              <div className="column is-flex is-justify-content-center">

                <figure onClick={togglecs1Modal} class="image is-128x128 is-flex is-align-items-center">
                  <img src="TradingCLI.png" />
                </figure>

              </div>

            </div>
            <div className="column">
              <p className="has-text-grey-light is-size-6">Capstone 2</p>
              <p className="has-text-white-bis is-size-5">Peer to Peer Payment App</p>
              <div className="is-flex is-flex-direction-column">

                <button onClick={togglecs2Modal} className="button is-small mb-0 mt-2 mx-6">View in Modal</button>
              </div>
              <div className="column is-flex is-justify-content-center">

                <figure onClick={togglecs2Modal} class="image is-128x128 is-flex is-align-items-center">
                  <img src="TEbucksHome.png" />
                </figure>

              </div>
            </div>
            <div className="column">
              <p className="has-text-grey-light is-size-6">Final Capstone</p>
              <p className="has-text-white-bis is-size-5">City Tour Planner</p>
              <div className="is-flex is-flex-direction-column">

                <button onClick={togglecs3Modal} className="button is-small mb-0 mt-2 mx-6">View in Modal</button>
              </div>
              <div className="column is-flex is-justify-content-center">

                <figure onClick={togglecs3Modal} class="image is-128x128 is-flex is-align-items-center">
                  <img src="ToursNat.png" />
                </figure>
              </div>
            </div>
          </div>

        }</div>

      </div>

{/* modals */}


      < div className={bloomModal ? "modal is-active" : "modal"} >
        <div onClick={toggleBloomModal} class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head  has-background-grey-darker">
            <p class="modal-card-title">My Bloomborhood</p>
            <button onClick={toggleBloomModal} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body has-background-grey-dark">
            <div className="mb-3">
              <h4 className="title mb-3 is-size-5">About</h4>
              <p>- I wanted to learn React.js and gain experience with a NoSQL database.<br />
                - The web app serves as a platform for locals to share extra plants.</p>
              <h4 className="title mt-3 mb-3 is-size-5">Tech</h4>
              <p>- React.js and Bulma css <br /> - Firebase DB and Auth</p>
              <h4 className="title mt-3 mb-3 is-size-5">Capabilities</h4>
              <p>- Login, Auth <br /> - Create and Search Local Posts<br /> - Search Plant Info via web API <br /> - Update User Profiles and Earn 'Share Credits'</p>
            </div>
            <div className="is-flex is-flex-direction-column is-justify-content-center">
              <figure class="image ">
                <img className="" src="OK2PlantPage.png" />
              </figure>
            </div>
          </section>
          <footer className="modal-card-foot has-background-grey-darker">
            <div className="buttons">
              <button onClick={toggleBloomModal} class="button">Close</button>
            </div>
          </footer>
        </div>
      </div >

      <div className={okModal ? "modal is-active" : "modal"}>
        <div onClick={toggleOkModal} class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head has-background-grey-darker">
            <p class="modal-card-title">The OK 2 Plant Forecaster</p>
            <button onClick={toggleOkModal} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body has-background-grey-dark">
            <div className="mb-3">
              <h4 className="title mb-3 is-size-5">About</h4>
              <p>- While in bootcamp I produced my own full-stack application from scratch<br />
                - The forecaster takes in a zip code and predicts ideal spring planting dates based on weather forecasts</p>
              <h4 className="title mt-3 mb-3 is-size-5">Tech</h4>
              <p>- Java/Spring Boot server and back-end<br /> - PostgreSQL database<br /> - HTML, css, vanilla JavaScrip front-end <br />- Utilizes several web API's for data retrieval <br />- Fully functional command line application as well</p>
              <h4 className="title mt-3 mb-3 is-size-5">Capabilities</h4>
              <p>- The forecaster analyzes local 14 day weather predictions<br /> - Returns crop-specific forecasts based on temperatures <br /> - Returns ideal planting dates based on precipitation forecasts<br /> - User provided email address stored in DB for forecast updates </p>
            </div>
            <div className="is-flex is-flex-direction-column is-justify-content-center">
              <figure class="image mb-3">
                <img className="" src="OK2PlantPage.png" />
              </figure>
              <figure class="image ">
                <img className="" src="OK2PlantCLI.png" />
              </figure>
            </div>
          </section>
          <footer class="modal-card-foot has-background-grey-darker">
            <div class="buttons">
              <button onClick={toggleOkModal} class="button">Close</button>
            </div>
          </footer>
        </div>
      </div>

      <div class={cs1Modal ? "modal is-active" : "modal"}>
        <div onClick={togglecs1Modal} class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head has-background-grey-darker">
            <p class="modal-card-title">NHL Trading Platform</p>
            <button onClick={togglecs1Modal} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body has-background-grey-dark">
            <div className="mb-3">
              <h4 className="title mb-3 is-size-5">About</h4>
              <p>- Our first capstone had us work in pairs to produce a Java command-line application<br />
                - We utilized OOP principles of encapsulation, polymorphism, inheritance, and abstraction</p>
              <h4 className="title mt-3 mb-3 is-size-5">Tech</h4>
              <p>- Java object oriented programming<br /> - File reading/writing<br /> - JUnit testing</p>
              <h4 className="title mt-3 mb-3 is-size-5">Capabilities</h4>
              <p>- Trading/waiving players from rosters<br /> - Approving trades based on salary-cap and team size <br /> - Logging transactions<br /> - Reading in files to build rosters</p>
            </div>
            <div className="is-flex is-flex-direction-column is-justify-content-center">
              <figure class="image ">
                <img className="" src="TradingCLI.png" />
              </figure>
              <figure class="image mb-3">
                <img className="" src="TradingCLI2.png" />
              </figure>
              <figure class="image ">
                <img className="" src="TradingCLI3.png" />
              </figure>
            </div>
          </section>
          <footer class="modal-card-foot has-background-grey-darker">
            <div class="buttons">
              <button onClick={togglecs1Modal} class="button">Close</button>
            </div>
          </footer>
        </div>
      </div>

      <div class={cs2Modal ? "modal is-active" : "modal"}>
        <div onClick={togglecs2Modal} class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head has-background-grey-darker">
            <p class="modal-card-title">Peer to Peer Payment App</p>
            <button onClick={togglecs2Modal} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body has-background-grey-dark">
            <div className="mb-3">
              <h4 className="title mb-3 is-size-5">About</h4>
              <p>- Our second capstone had us work in pairs to produce and connect a backend to an already made front-end application<br />
                - We first designed and built the database, and then build the server and controller using the DAO model </p>
              <h4 className="title mt-3 mb-3 is-size-5">Tech</h4>
              <p>- Java/Spring Boot server and controller<br /> - PostgreSQL database<br />- Integration testing <br /> - Postman <br /> - JSON web tokens</p>
              <h4 className="title mt-3 mb-3 is-size-5">Capabilities</h4>
              <p>- Get, Post, Update, Delete methods <br /> - Verified transactions <br /> - Logged suspicious transactions to external web API </p>
            </div>
            <div className="is-flex is-flex-direction-column is-justify-content-center">
              <figure class="image mb-3">
                <img className="" src="TEbucksBackEnd.png" />
              </figure>
              <figure class="image ">
                <img className="" src="TEbucksHome.png" />
              </figure>
            </div>
          </section>
          <footer class="modal-card-foot has-background-grey-darker">
            <div class="buttons">
              <button onClick={togglecs2Modal} class="button">Close</button>
            </div>
          </footer>
        </div>
      </div>

      <div class={cs3Modal ? "modal is-active" : "modal"}>
        <div onClick={togglecs3Modal} class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head has-background-grey-darker">
            <p class="modal-card-title">City Tour Planner</p>
            <button onClick={togglecs3Modal} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body has-background-grey-dark">
            <div className="mb-3">
              <h4 className="title mb-3 is-size-5">About</h4>
              <p>- For our final capstone we worked in groups of 4 to produce a full-stack application<br />
                - We worked with a mock scrum-master and mock product owner to build our application to their specifications</p>
              <h4 className="title mt-3 mb-3 is-size-5">Tech</h4>
              <p>- Vue.js front-end<br /> - Java/Spring Boot back-end<br />- PostgreSQL database <br />- Integrates several external web API's for data retrieval <br /></p>
              <h4 className="title mt-3 mb-3 is-size-5">Capabilities</h4>
              <p>- User authentication/authorization<br /> - Users can search local attractions <br /> - Users can create, update itineraries<br /> - Connecting to Google API's allowed us to render directions and maps with polylines for itinerary routes <br /> - Connecting to Google's geocoder and places API's allowed users to search addresses and places as well as render detailed place information</p>
            </div>
            <div className="is-flex is-flex-direction-column is-justify-content-center">
              <figure class="image mb-3">
                <img className="" src="ToursNat.png" />
              </figure>
            </div>
          </section>
          <footer class="modal-card-foot has-background-grey-darker">
            <div class="buttons">
              <button onClick={togglecs3Modal} class="button">Close</button>
            </div>
          </footer>
        </div>
      </div>


    </section >



  )
}

export default App
