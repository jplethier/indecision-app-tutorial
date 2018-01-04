import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  }

  handleAddOption = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()

    const error = this.props.onSubmit(option);

    this.setState(() => ({ error }))
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
