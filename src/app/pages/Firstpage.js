import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Firstpage extends Component {

  componentDidMount(){
  }


  render() {

    let { windowWidth } = this.props; 
    return (
      <div>
        <h1>
          Soyeon Kang's website { windowWidth }
        </h1>

        <Link to="/kangsoyeon.com/project-1">Project 1</Link>
      </div>
    );
  }
}


let mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Firstpage);