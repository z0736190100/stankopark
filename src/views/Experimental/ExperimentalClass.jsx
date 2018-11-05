import React, { Component } from "react";
import Experimental from "./Experimental";
import { connect } from "react-redux";
import * as actions from "../../store/actions";


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
      <Experimental
        act={() => this.props.testReducerAction}
        test={this.props.test}
        selectOC={this.selectOC}
        iii={this.state.mockSelectVal}
      />
    );
  }
}

function mapStateToProps({ test }) {
  return { test };
}

export default connect(
  mapStateToProps,
  actions
)(ExperimentalClass);
