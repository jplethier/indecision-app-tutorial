class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    }
    this.addOption = this.addOption.bind(this)
  }

  addOption(option) {
    const options = this.state.options;
    options.push(option)
    this.setState({ options: options })
  }

  render() {
    const { options } = this.state

    return (
      <div>
        <Header
          title="Indecision"
          subtitle="Put your life in the hands of a computer"
        />
        <Action />
        <Options options={options} />
        <AddOption onSubmit={this.addOption} />
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
  handleRemoveAll() {
    console.log('Remove all')
  }

  render() {
    const { options } = this.props;

    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <ol>
          {options.map((option, index) => <Option key={index} label={option} />)}
        </ol>
      </div>
    )
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    if(option) {
      this.props.onSubmit(option)
      e.target.elements.option.value = null;
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
