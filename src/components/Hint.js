import React from "react";
import { connect } from "react-redux";

class Hint extends React.Component {
  render() {
    let display = "";
    if (this.props.question) {
      display =
        this.props.hint === null
          ? this.props.question.split("").map((e) => "_ ")
          : this.props.hint.join("");
    }

    return <div>{display}</div>;
  }
}
const mapStateToProps = (reduxState) => {
  return {
    hint: reduxState.hint,
    question: reduxState.question,
  };
};

export default connect(mapStateToProps)(Hint);
