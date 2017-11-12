class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    const { label } = this.props;

    return <li>{label}</li>
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <Option label="Option 1" />
          <Option label="Option 2" />
          <Option label="Option 3" />
        </ol>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <button>Add option</button>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
