import {h, Component} from 'preact';

export class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { error: null, info: '' }
  }

  static getDerivedStateFromError (error) { // Requires Preact X (i.e. 10)
    console.error(error)
    return { error }
  }

  render () {
    const { name } = this.props
    const { error } = this.state
    if (error) {
      return (
        <div> /* was React.Fragment */
          <header>
            <h1>Something went wrong.</h1>
            <h3>{`${name} failed to load`}</h3>
          </header>
          <section>
            <pre>
              <code>{JSON.stringify(error)}</code>
            </pre>
          </section>
        </div>
      )
    }
    return this.props.children
  }
}
