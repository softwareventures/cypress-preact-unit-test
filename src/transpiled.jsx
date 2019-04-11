import {h, Component} from 'preact';

export class Transpiled extends Component {
  state = {
    count: 0
  }

  click () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return <p onClick={this.click.bind(this)}>count: {this.state.count}</p>
  }
}
