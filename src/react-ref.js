/*
 * @Author: ryuusennka
 * @Date: 2021-08-06 08:35:32
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-06 08:40:35
 * @FilePath: /text-adventure-game/src/react-ref.js
 * @Description:
 */
import React, { Component } from 'react';

export class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.h1Ref = React.createRef();
  }

  componentDidMount() {
    // this.h1Ref.current.innerHTML = 'Foobar';
    console.log(this.h1Ref.current.children);
  }

  render() {
    return (
      <div>
        <h1 ref={this.h1Ref}>
          Hello World!
          <span style={{ color: 'yellow' }}>1</span>
          <span style={{ color: 'red' }}>2</span>
        </h1>
      </div>
    );
  }
}

export default Demo;
