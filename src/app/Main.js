import React, { Component } from 'react';
import { connect } from 'react-redux';
import { windowResize } from './actions';
import _ from 'lodash';
import { Routes, Route } from 'react-router-dom';
import Firstpage from './pages/Firstpage';
import "./stylesheets/style.scss";
import Project1 from './pages/Project1';

class Main extends Component {
  
  componentDidMount(){

    window.addEventListener('resize', this.resizeHandler.bind(this));
    this.resizeHandler();

  }

  resizeHandler(e){
    this.props.dispatch(windowResize({
      width: window.innerWidth,
      height: window.innerHeight
    }));
    
  }

  render() {  

    return (
      <section>
        <Routes>
          <Route exact path="/" element={<Firstpage />} />
          <Route exact path="/project-1" element={<Project1 />} />
        </Routes>
      </section>
    );
  }
}

let mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Main);