/*
 * @Author: ryuusennka
 * @Date: 2021-08-04 12:06:03
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-18 22:20:50
 * @FilePath: /text-adventure-game/src/App.js
 * @Description:
 */
import React, { Component, createRef } from 'react';
import textNodes from './assets/gamedata/data';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: {},
    };
    this.textElement = createRef();
    this.optionButtonsElement = createRef();
  }
  componentDidMount() {
    // console.log(this.textElement.current);
    // console.log(this.optionButtonsElement.current);
    this.startGame();
  }
  startGame = () => {
    this.setState({ gameState: {} }); // 重置
    this.showTextNode(1);
  };
  showTextNode = textNodeIndex => {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    this.textElement.current.innerHTML = textNode.text;
    // console.log(this.optionButtonsElement.current.children);
    // console.log(this.optionButtonsElement.current.firstChild);

    while (this.optionButtonsElement.current.firstChild) {
      this.optionButtonsElement.current.removeChild(
        this.optionButtonsElement.current.firstChild
      );
    }

    textNode.options.forEach(option => {
      if (this.showOption(option)) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.innerText = option.text;
        btn.classList.add('btn');
        btn.addEventListener('click', () => this.selectOption(option));
        this.optionButtonsElement.current.appendChild(btn);
      }
    });
  };
  showOption = option => {
    return (
      option.requiredState == null || option.requiredState(this.state.gameState)
    );
  };
  selectOption = option => {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
      return this.startGame();
    }
    console.log(option.setState);
    console.log(this.state);

    this.setState({
      gameState: Object.assign(this.state.gameState, option.setState),
    });
    this.showTextNode(nextTextNodeId);
  };

  render() {
    return (
      <div className="container">
        <div className="foo"></div>
        <div id="text" ref={this.textElement}>
          Text
        </div>
        <div
          id="option-buttons"
          className="btn-grid"
          ref={this.optionButtonsElement}
        >
          <button className="btn">Option 1</button>
          <button className="btn">Option 2</button>
          <button className="btn">Option 3</button>
          <button className="btn">Option 4</button>
        </div>
      </div>
    );
  }
}

export default App;
