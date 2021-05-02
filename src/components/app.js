// components make up the application. We put together all of these components and thats what gives us the full application. Each component has its own role that can be shared across the entire application.
import React, { Component } from 'react';
import moment from "moment"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Randee Johnson's React Portfolio</h1>
        <h2>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
      </div>
    );
  }
}
