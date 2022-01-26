import React from 'react';
import PrimeiroComponente from './PrimeiroComponente';
import './App.css';

class App extends React.Component  {
  constructor() {
    super()
    this.state = {
      selected: '',
      textArea: '',
      password: '',
      email: '',
      check: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const { name } = target
    const value = (target.type === 'checkbox') ? target.checked : target.value
    this.setState({
      [name]: value
    }) 
  }

  render() {
    return (
      <div className='App'>
        <h1>Teste</h1>
        <form>
          <fieldset>
            <legend>select and check</legend>
            <label>
              select number
              <select name="selected" onChange={this.handleChange} value={this.state.selected}>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
            </label>
            <label>
              ready?
              <input type="checkbox" name="check" onChange={this.handleChange}></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Type</legend>
            <textarea name="textArea" onChange={this.handleChange} value={this.state.textArea}></textarea>
          </fieldset>
          <fieldset>
            <legend>Register</legend>
            <label>
              password
              <input name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Upload a file</legend>
            <input type="file"/>
          </fieldset>
          <PrimeiroComponente handleChange={this.handleChange} value={this.state.email} />
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default App;
