class IndecisionApp extends React.Component {
  render() {
    const options = ['Thing 1', 'Thing 2', 'Thing 3']

    return (
      <div>
        <Header
          title="Indecision"
          subtitle="Put your life in the hands of a computer"
        />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
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
    const { options } = this.props;

    return (
      <div>
        <ol>
          {options.map((option, index) => <Option key={index} label={option} />)}
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
