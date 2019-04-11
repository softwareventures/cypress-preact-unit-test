import {h, Component} from 'preact';

// pass name via props
export class HelloX extends Component {
  render () {
    return <p>Hello {this.props.name}!</p>
  }
}

export class HelloState extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Spider-man'
    }
  }

  render () {
    return <p>Hello {this.state.name}!</p>
  }
}
