import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import Nurse from './Nurse.js'
import Doctor from './Doctor.js'




const Home = () => (
  <div className="App">
    <div className="App-header">
      <h2>Team BP</h2>
    </div>
    <div className="images">
      <a href="nurse"><img className="Image" src="./nurse.png" /></a>
      <p>Nurse</p>
    </div>
    <div className="images">
      <a href="doctor"><img className="Image" src="./doctor.png" /></a>
      <p>Doctor</p>
    </div>
    
  </div>
)




const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const TeamBPApp = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/nurse" component={Nurse} />
      <Route path="/doctor" component={Doctor} />
    </div>
  </Router>
)
export default TeamBPApp



