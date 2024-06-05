import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

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

      <div id="head" className="columns">
        <div className="column">

        </div>

        <div className="column">

        </div>

        <div className="column is-flex is-justify-content-center is-align-items-center is-one-third">
          <img className="" src="/headshot.jpeg" />
        </div>

        <div className="column">

        </div>
        <div className="column">

        </div>
      </div>

      <h2 className="has-text-weight-semibold is-size-4">Personal Projects</h2>
      <div className="section">
        <div className="columns has-text-centered">
          <div className="column">
          <p className="heading is-size-6">My Bloomborhood</p>
          <p className="title is-size-5">Plant-Share WebApp</p>
          </div>
          <div className="column">
          <p className="heading is-size-6">OK 2 Plant</p>
          <p className="title is-size-5">Vegetable Garden Weather Forecaster</p>
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
