import React, { Component } from "react";
import Experimental from "./Experimental";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class ExperimentalClass extends Component {

  state = {
    iii: "one"
  };

  selectOC = event => {
    this.setState({
      iii: event.target.value
    });
  };

  render() {
    return (
      <Experimental
        act={() => this.props.testReducerAction}
        test={this.props.test}
        selectOC={this.selectOC}
        iii={this.state.iii}
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
