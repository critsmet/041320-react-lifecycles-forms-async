import React from 'react'

export default class Form extends React.Component {
  //controlled forms mean that the input reflects a value stored in state,
  //which should be a reflection of what the user has written, but is not directly

  state = {
    name: '',
    image: ''
  }

  handleInput = (e) => {
    let value = e.target.value
    let inputName = e.target.name
    this.setState(prevState => ({[inputName]: value}))
  }

  makeNewToy = () => {
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({...this.state, likes: 0})
    })
    .then(res => res.json())
    .then(this.props.addNewToy)
  }

  render(){
    return (
      <div id="search-bar">
          <label>Name</label>
          <input name="name" onChange={this.handleInput} value={this.state.name}/>
          <br/>
          <label>Image URL</label>
          <input name="image" onChange={this.handleInput} value={this.state.image}/>
          <br/>
          <button onClick={this.makeNewToy}> Make New Toy!!</button>
      </div>
    )
  }
}
