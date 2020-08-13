import React from 'react'

import ToyCard from './ToyCard'

//React chooses to re-render a component when its props change or when a state change (setState) is triggered

export default class ToysContainer extends React.Component {


  render(){
    console.log("Toy container rendering!");
    return(
      <div id="toy-container">
        {this.props.toys.map(toyObj => <ToyCard key={toyObj.name} name={toyObj.name} img={toyObj.image} likes={toyObj.likes} addLike={this.props.addLike}/>)}
      </div>
    )
  }
}

//WHEN A PARENT COMPONENT RE-RENDERS, ALL OF ITS CHILDREN ARE EXPECTED TO RE-RENDER AS WELL
//* I think this is where PureComponents come in? I could be wrong, but to prevent them from re-rendering when there parents do? Even that seems impossible right...not sure
