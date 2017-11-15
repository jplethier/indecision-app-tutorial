class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this)
    this.state = {
      visible: false
    }
  }

  handleVisibilityToggle() {
    this.setState((prevState) => ({ visible: !prevState.visible }))
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibilityToggle}>{visible ? 'Hide details' : 'Show details'}</button>
        {visible && <p>Details</p>}
      </div>
    )
  }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
