import React, { Component } from "react";
import propTypes from "prop-types";

export default function(ComponentToWrap) {
  class WrapperComponent extends Component {
    //here got to go checking of authentication state/flag
    //and render available resources according to it

    //static are class level variables
    static contextTypes = {
      // getting access to proper type of context properties
      router: propTypes.object
    };

    UNSAFE_componentWillMount() {
      if (!this.props.authenticated) {
        // forcibly setting current route to homepage
        WrapperComponent.contextTypes.router.push("/");
      }
    }

    UNSAFE_componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        WrapperComponent.contextTypes.router.push("/");
      }
    }

    render() {
      return <ComponentToWrap {...this.props} />;
    }
  }

  return WrapperComponent;
}
