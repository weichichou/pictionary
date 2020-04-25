import React from "react";
import { connect } from "react-redux";

class Hint extends React.Component {
  render() {
    console.log("hint?", this.props.hint);
    return <div>{this.props.hint.join("")}</div>;
  }
}
const mapStateToProps = (reduxState) => {
  return {
    hint: reduxState.hint,
  };
};

export default connect(mapStateToProps)(Hint);
