import React from "react";
import Scorebox from "../Scorebox";
import Circle from "../Circle";
import ActionButton from "../ActionButton";
import constants from "../../utils/constants";

import "./index.css";

// Global state
const initialState = {
  started: false,
  circleId: null,
  totalScore: 0,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onCircleClick = (currentId) => {
    if (!this.state.started) {
      return;
    }
    const { totalScore, circleId } = this.state;
    const isCorrectClick = currentId === circleId;
    // Increase or decrease score based on correct click
    this.setState({
      totalScore: isCorrectClick ? totalScore + 1 : totalScore - 1,
    });
    // Generate next random circleId when answer is right
    isCorrectClick && this.generateRandomCircleId();
  };

  generateRandomCircleId = () => {
    // Generate a random number between 1 and 36
    const circleId = Math.floor(Math.random() * 36) + 1;
    this.setState({ circleId }, () => {
      // Just printing newly generated circleId to test
      console.log(this.state.circleId);
    });
  };

  renderCircleMatrix = () => {
    let nodes = [];
    for (let i = 1; i <= 36; i++) {
      nodes.push(
        <Circle
          index={i}
          key={i}
          circleId={this.state.circleId}
          onClick={() => this.onCircleClick(i)}
        />
      );
    }
    return nodes;
  };

  handleAction = (cmd) => {
    switch (cmd) {
      case constants.actionButtons.PLAY:
        // Act only if game is not started
        if (!this.state.started) {
          this.setState({ started: true }, () => {
            this.generateRandomCircleId();
          });
        }
        break;

      case constants.actionButtons.STOP:
        // Act only if game is started
        if (this.state.started) {
          window.alert(`Hurray! Your final score is ${this.state.totalScore}`);
          this.setState({ ...initialState });
        }
        break;

      default:
        break;
    }
  };

  render() {
    const { totalScore } = this.state;
    return (
      <div className="appContainer">
        <Scorebox totalScore={totalScore} />
        <hr />
        <div className="circleBoard">{this.renderCircleMatrix()}</div>
        <hr />
        <div className="actionButtons">
          <ActionButton
            name="Play"
            onClick={() => this.handleAction(constants.actionButtons.PLAY)}
            type={constants.actionButtons.PLAY}
          />
          <ActionButton
            name="Stop"
            onClick={() => this.handleAction(constants.actionButtons.STOP)}
            type={constants.actionButtons.STOP}
          />
        </div>
      </div>
    );
  }
}

export default App;
