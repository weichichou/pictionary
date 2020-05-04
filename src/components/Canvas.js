import React from "react";
//import io from "socket.io-client";

//import CanvasDraw from "react-canvas-draw";

export default class Canvas extends React.Component {
  componentDidMount = () => {
    //const socket = io("http://localhost:3001/");
    var canvas = document.getElementsByClassName("whiteboard")[0];
    //var colors = document.getElementsByClassName("color");
    var context = canvas.getContext("2d");

    var current = {
      color: "black",
    };
    var drawing = false;

    canvas.addEventListener("mousedown", onMouseDown, false);
    canvas.addEventListener("mouseup", onMouseUp, false);
    canvas.addEventListener("mouseout", onMouseUp, false);
    canvas.addEventListener("mousemove", throttle(onMouseMove, 10), false);

    //Touch support for mobile devices
    canvas.addEventListener("touchstart", onMouseDown, false);
    canvas.addEventListener("touchend", onMouseUp, false);
    canvas.addEventListener("touchcancel", onMouseUp, false);
    canvas.addEventListener("touchmove", throttle(onMouseMove, 10), false);

    /* for (var i = 0; i < colors.length; i++) {
      colors[i].addEventListener("click", onColorUpdate, false);
    } */

    this.props.socket.on("drawing", onDrawingEvent);
    console.log("what is this?", this);
    console.log("what is props?", this.props);
    // window.addEventListener("resize", onResize, false);
    // onResize();

    function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top,
      };
    }
    // 把傳統的function改成arrow function, 解決this的問題
    const drawLine = (x0, y0, x1, y1, color, emit) => {
      context.beginPath();
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
      context.strokeStyle = color;
      context.lineWidth = 2;
      context.stroke();
      context.closePath();

      if (!emit) {
        return;
      }
      /* var w = canvas.width;
      var h = canvas.height; */

      this.props.socket.emit("drawing", {
        x0: x0,
        y0: y0,
        x1: x1,
        y1: y1,
        color: color,
      });
    };

    function onMouseDown(e) {
      current.x = getMousePos(canvas, e).x;
      current.y = getMousePos(canvas, e).y;

      drawing = true;
      //current.x = e.clientX || e.touches[0].clientX;
      //current.y = e.clientY || e.touches[0].clientY;
    }

    function onMouseUp(e) {
      if (!drawing) {
        return;
      }
      drawing = false;
      drawLine(
        current.x,
        current.y,
        getMousePos(canvas, e).x,
        getMousePos(canvas, e).y,
        current.color,
        true
      );
    }

    function onMouseMove(e) {
      console.log("client", e.clientX, e.clientY);
      if (!drawing) {
        return;
      }
      drawLine(
        current.x,
        current.y,
        getMousePos(canvas, e).x,
        getMousePos(canvas, e).y,
        current.color,
        true
      );
      current.x = getMousePos(canvas, e).x;
      current.y = getMousePos(canvas, e).y;
    }

    function onColorUpdate(e) {
      current.color = e.target.className.split(" ")[1];
    }

    // limit the number of events per second
    function throttle(callback, delay) {
      var previousCall = new Date().getTime();
      return function () {
        var time = new Date().getTime();

        if (time - previousCall >= delay) {
          previousCall = time;
          callback.apply(null, arguments);
        }
      };
    }

    function onDrawingEvent(data) {
      drawLine(data.x0, data.y0, data.x1, data.y1, data.color);
    }

    // make the canvas fill its parent
    /*function onResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    } */
  };

  render() {
    return <canvas className="whiteboard" width="300" height="300"></canvas>;
  }
}
