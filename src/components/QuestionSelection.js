import React from "react";
import { connect } from "react-redux";
import wordlist from "./question-list";
import { selectedQuestion } from "../actions/guessAction";

class QuestionSelection extends React.Component {
  getRandomNum = () => {
    return Math.floor(Math.random() * wordlist.length);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("got clicked?");
    console.log(event.currentTarget.value);
    this.props.selectedQuestion(event.currentTarget.value);
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
      <div>
        <button onClick={this.handleSubmit} value={wordlist[q1]}>
          {wordlist[q1]}
        </button>
        <button onClick={this.handleSubmit} value={wordlist[q2]}>
          {wordlist[q2]}
        </button>
        <button onClick={this.handleSubmit} value={wordlist[q3]}>
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

export default connect(mapStateToProps, { selectedQuestion })(
  QuestionSelection
);
