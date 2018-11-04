import React, { Component } from "react";
import Experimental from "./Experimental";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class ExperimentalClass extends Component {

  render() {
    return <Experimental act={() => this.props.testReducerAction} test={this.props.test} />;
  }
}

function mapStateToProps({test}){
  return { test };
}

export default connect(
  mapStateToProps,
  actions
)(ExperimentalClass);
