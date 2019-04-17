import React, { Component } from "react";

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      globalTitle: 'Titre',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  submitForm(event) {
    event.preventDefault();
    this.setState({
      globalTitle: this.state.title,
    })
  }
  componentDidMount() {
    console.log('formulaire rendu');
  }
  render() {
    return (
      <div>
        <h1>Mon Formulaire - {this.state.globalTitle}</h1>
        <form onSubmit={this.submitForm}> 
          <fieldset>
            <legend>Formulaire</legend>
            <div>
              <label htmlFor="title">text </label>
              <input type="text" id="title" name="title" value={this.state.title} onChange={this.onChange}/>
            </div>
            <div className="form-data">
              <input type="submit" value="submit" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
  componentDidUpdate(prevProps) {
    console.log('Titre Changé');
  }
}

export default Formulaire;
