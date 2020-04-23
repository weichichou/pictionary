import React from "react";

export default class Chat extends React.Component {
  state = {
    text: "",
    //isSubmitted: false,
    guessed: [],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    /* this.setState({ isSubmitted: true }); */

    this.setState({ guessed: [...this.state.guessed, this.state.text] });
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.guessed.map((item) => (
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
