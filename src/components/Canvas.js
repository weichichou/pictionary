import React from "react";
import CanvasDraw from "react-canvas-draw";

export default class Canvas extends React.Component {
  render() {
    return (
      <div>
        <h2>this is canvas div</h2>
        <CanvasDraw
          className="canvas-drawing-div"
          ref={(element) => (this.myCanvas = element)}
          brushRadius={5}
          lazyRadius={0}
          canvasHeight="300px"
          canvasWidth="500px"
        />
      </div>
    );
  }
}
