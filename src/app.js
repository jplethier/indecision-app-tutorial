class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
    }
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleRemoveOption = this.handleRemoveOption.bind(this)
  }

  handleRemoveOption(deletedOption) {
    console.log('delete option', deletedOption)
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== deletedOption)
    }))
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter a valid value to add item'
    }

    if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
  }

  handleRemoveAll() {
    this.setState(() => ({ options: [] }))
  }

  handlePick() {
    const position = Math.floor(Math.random() * this.state.options.length)
    alert(`Option choosed was: ${this.state.options[position]}`)
  }

  render() {
    const { options } = this.state

    return (
      <div>
        <Header subtitle="Put your life in the hands of a computer" />
        <Action
          hasOptions={options.length > 0}
          onClick={this.handlePick}
        />
        <Options
          options={options}
          onRemoveAll={this.handleRemoveAll}
          onRemoveOption={this.handleRemoveOption}
        />
        <AddOption onSubmit={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: [],
}

const Header = (props) => {
  const { title, subtitle } = props;

  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision',
}

const Action = (props) => {
  const { hasOptions, onClick } = props;

  return (
    <div>
      <button disabled={!hasOptions} onClick={onClick}>What should I do?</button>
    </div>
  )
}

const Option = (props) => {
  const { label, onRemove } = props;

  return (
    <li>
      {label}
      <button onClick={() => onRemove(label)}>
        Remove
      </button>
    </li>
  )
}

const Options = (props) => {
  const { options, onRemoveAll, onRemoveOption } = props;

  return (
    <div>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {options.map((option, index) => (
          <Option
            key={index}
            label={option}
            onRemove={onRemoveOption} />
        ))}
      </ol>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()

    const error = this.props.onSubmit(option);

    if(error) {
      this.setState(() => ({ error }))
    }
    e.target.elements.option.value = null;
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
