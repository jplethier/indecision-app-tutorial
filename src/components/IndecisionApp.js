import React from "react";

import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
  }

  handleRemoveOption = (deletedOption) => {
    console.log('delete option', deletedOption)
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== deletedOption)
    }))
  }

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter a valid value to add item'
    }

    if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
  }

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }))
  }

  handlePick = () => {
    const position = Math.floor(Math.random() * this.state.options.length)
    alert(`Option choosed was: ${this.state.options[position]}`)
  }

  componentDidMount() {
    const json = localStorage.getItem('options')
    if (json) {
      try {
        const options = JSON.parse(json)
        this.setState(() => ({ options }))
      } catch(e) {
        // do nothing, keep empty array
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options))
    }
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
