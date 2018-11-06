import React, { Component } from "react";
import Experimental from "views/Experimental/Experimental.jsx";
//import { connect } from "react-redux";
//import * as actions from "store/actions";

//TODO uncontrolled CustomForm component + redux-form
class ExperimentalClass extends Component {
  state = {
    mockSelectVal: "one"
  };

  selectOC = event => {
    this.setState({
      mockSelectVal: event.target.value
    });
  };

  render() {
    return (
      <Experimental selectOC={this.selectOC} iii={this.state.mockSelectVal} />
    );
  }
}

// function mapStateToProps({ test }) {
//   return { test };
// }

export default ExperimentalClass;
