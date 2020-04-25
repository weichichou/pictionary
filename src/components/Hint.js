import React from "react";
import { connect } from "react-redux";

class Hint extends React.Component {
  state = {
    charNum: this.props.question.length,
  };

  render() {
    let initialDisplay = "";
    for (let i = 0; i < this.state.charNum; i++) {
      initialDisplay = initialDisplay.concat("_ ");
    }

    return <div>{initialDisplay}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    question: state,
  };
};

export default connect(mapStateToProps)(Hint);
