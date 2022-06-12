import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Project1 extends Component {

  componentDidMount(){
  }


  render() {

    return (
      <div>
        <h1>
          Project 1: App 1222
        </h1>

        <Link to="/">Home</Link>
      </div>
    );
  }
}


let mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Project1);