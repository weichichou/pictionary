import React from "react";
import { connect } from "react-redux";
import wordlist from "./question-list";
import { selectedQuestion, triggerHint } from "../actions/guessAction";

class QuestionSelection extends React.Component {
  state = {
    hidden: false,
  };

  componentDidMount = () => {
    this.props.socket.on("question", (word) => {
      this.props.selectedQuestion(word);
      this.props.triggerHint("", word);
      console.log("question selection component?");
      this.setState({ hidden: true });
    });
    this.props.socket.on("roundover", (username) => {
      this.setState({ hidden: false });
    });
  };

  getRandomNum = () => {
    return Math.floor(Math.random() * wordlist.length);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.selectedQuestion(event.currentTarget.value);
    this.props.socket.emit("question", event.currentTarget.value);
    this.props.triggerHint("", event.currentTarget.value);
  };

  render() {
    let q1 = this.getRandomNum();
    let q2 = this.getRandomNum();
    while (q2 === q1) {
      q2 = this.getRandomNum();
    }
    let q3 = this.getRandomNum();
    while (q3 === q1 || q3 === q2) {
      q3 = this.getRandomNum();
    }

    return (
      <div className={this.state.hidden ? "hidden" : "showing"}>
        <span
          style={{
            fontSize: 20,
            fontWeight: 900,
            color: "orange",
            verticalAlign: "middle",
          }}
        >
          SELECT A WORD:{" "}
        </span>
        <button
          className="btn btn-warning"
          onClick={this.handleSubmit}
          value={wordlist[q1]}
        >
          {wordlist[q1]}
        </button>
        <button
          className="btn btn-warning"
          onClick={this.handleSubmit}
          value={wordlist[q2]}
        >
          {wordlist[q2]}
        </button>
        <button
          className="btn btn-warning"
          onClick={this.handleSubmit}
          value={wordlist[q3]}
        >
          {wordlist[q3]}
        </button>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return {
    question: reduxState.question,
  };
};

export default connect(mapStateToProps, { selectedQuestion, triggerHint })(
  QuestionSelection
);
