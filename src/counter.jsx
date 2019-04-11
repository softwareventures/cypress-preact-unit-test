// @jsx h
import {h, Component} from 'preact';

export class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  click () {
    console.log("Clicked");
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render () {
    console.log("Render");

    return <p onClick={this.click.bind(this)}>count: {this.state.count}</p>
  }
}
