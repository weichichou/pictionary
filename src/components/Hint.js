import React from "react";
import { connect } from "react-redux";
import { hint as triggerHint } from "../actions/guessAction";

class Hint extends React.Component {
  /* state = {
    display: this.props.hint,
  }; */

  render() {
    let hint = "";
    let newArr = [];
    for (let i = 0; i < this.props.question.length; i++) {
      hint = hint.concat("_ ");
    }
    /*  let hint = []; */
    if (this.props.guess) {
      hint = this.props.question.split("").map((element, index) => {
        if (this.props.guess.split("").includes(element)) {
          newArr[index] = element;
          this.props.triggerHint(index, element);
          return element;
        }
        return "_ ";
      });
    }

    return (
      <div>
        {/* {this.state.display.map((element) => "_ ")} */}

        {/*   {if(this.props.guess){
            
        }}
        {this.props.question.split("").map((element) => {
          if (this.props.guess.split("").includes(element)) {
            return element;
          }
          return "_ ";
        })} */}
        <div>To display: {this.props.hint.join("")}</div>
        {console.log("inside render", this.props.hint)}
        {/* {hint} */}
        {/* <div>
          <p>local state: {this.state.display}</p>
        </div> */}
        <div>
          <p>guess:{typeof this.props.guess}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => {
  console.log(reduxState);
  return {
    question: reduxState.question,
    guess: reduxState.guess,
    hint: reduxState.hint,
  };
};

export default connect(mapStateToProps, { triggerHint })(Hint);
