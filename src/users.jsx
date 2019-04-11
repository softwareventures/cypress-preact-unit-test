import {h, Component} from 'preact';
import axios from 'axios'

export class Users extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    axios.get('http://jsonplaceholder.typicode.com/users?_limit=3')
    .then(response => {
      // JSON responses are automatically parsed.
      console.log("set state %o", response.data);
      this.setState({
        users: response.data
      })
    })
  }

  render () {
    return <div>
      {this.state.users.map(user =>
        <li key={user.id}><strong>{user.id}</strong> - {user.name}</li>)}
    </div>
  }
}
