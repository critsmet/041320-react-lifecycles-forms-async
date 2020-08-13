import React from 'react';
import './App.css';

import ToysContainer from './ToysContainer'
import Form from './Form'
import ToyHeader from './ToyHeader'

export default class App extends React.Component {

  state = {
    toys: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys")
      .then(res => res.json())
      .then(toysArray => this.setState({toys: toysArray}))
  }

  //we're going to change state for the App component. HOWEVER the button lives in the ToyCard component
  //I need to define the callback function that is going to change state here in the App
  //BUT I need to pass that function as a prop to the ToyContainer AND THEN each ToyCard so that a button click in the ToyCard will cause a stateChange in the App component

  addLike = (e) => {
    let toyName = e.target.dataset.toy
    this.setState(prevState => ({toys: prevState.toys.map(toyObj => toyObj.name === toyName ? {...toyObj, likes: toyObj.likes + 1} : toyObj)}), () => console.log(this.state))
  }

  addNewToy = (obj) => {
    this.setState(prevState => ({toys: [...prevState.toys, obj]}))
  }

  render(){
    return (
      <div className="App">
        <ToyHeader />
        <Form addNewToy={this.addNewToy}/>
        <ToysContainer toys={this.state.toys} addLike={this.addLike}/>
      </div>
    )
  }
}
