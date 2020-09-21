import React from 'react'
import { TableHeader } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(() => ({ [e.target.name]: e.target.value }))
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.appFormHandler(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler} />
            <Form.Input fluid label="hp" placeholder="hp" type="number" name="hp" value={this.state.hp} onChange={this.changeHandler} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.changeHandler} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.changeHandler} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
