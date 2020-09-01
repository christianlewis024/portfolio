import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ButtonToolbar } from "react-bootstrap";
import App from "./App";

class Box extends React.Component {
  render() {
    return <div className={this.props.boxClass} id={this.props.id} />;
  }
}
class Grid extends React.Component {
  render() {
    const width = this.props.cols * 16;
    var rowsArr = [];

    var boxClass = "";
    for (var i = 0; i < this.props.rows; i++) {
      for (var j = 0; j < this.props.cols; j++) {
        let boxId = i + "_" + j;

        boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        );
      }
    }

    return (
      <div className="grid" style={{ width: width }}>
        {rowsArr}
      </div>
    );
  }
}
class Main extends React.Component {
  constructor() {
    super();
    this.speed = 350;
    this.rows = 60;
    this.cols = 120;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false)),
    };
  }

  seed = () => {
    let gridCopy = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    this.setState({
      gridFull: gridCopy,
    });
  };

  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };

  play = () => {
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        // above for loops will go thru every element on the grid
        // below are the rules
        let count = 0;
        // count is how many neighbors it has
        if (i > 0) if (g[i - 1][j]) count++;
        // if there is a neighbor, increase count by 1
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && j < this.cols - 1)
          if (g[i + 1][j + 1])
            // above running checks on each direction a neighbor could exist
            count++;
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        // if less than 2 or more than 3, it will die
        if (!g[i][j] && count === 3) g2[i][j] = true;
        // if its dead and has 3 neighbors, then it becomes alive
      }
    }
    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1,
      // state to manage the generation increases
    });
  };

  componentDidMount() {
    this.seed();
    this.playButton();
  }

  render() {
    return (
      <div>
        <App />
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
        />
      </div>
    );
  }
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

ReactDOM.render(<Main />, document.getElementById("root"));
