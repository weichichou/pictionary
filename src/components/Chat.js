import React from "react";
import { connect } from "react-redux";

class Chat extends React.Component {
  state = {
    correctness: "",
    text: "",
    //isSubmitted: false,
    chat: [],
    userGuess: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    /* this.setState({ isSubmitted: true }); */

    this.setState({ chat: [...this.state.chat, this.state.text] });
    this.setState({ text: "" });
    this.setState({ userGuess: this.state.text });
    this.checkAnswer(this.state.text);
  };

  checkAnswer = (text) => {
    this.setState({
      correctness: text === this.props.question ? "correct" : "incorrect",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.correctness}</div>
        <div>
          {this.state.chat.map((item) => (
            <ul key={item}>{item}</ul>
          ))}
        </div>
        <form onSubmit={this.handleSubmit}>
          {/* <lable>answer</lable> */}
          <input
            onChange={this.handleChange}
            name="text"
            value={this.state.text}
            type="text"
            placeholder="Your answer"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    question: state,
  };
};

export default connect(mapStateToProps)(Chat);
