import React from 'react'

export default class ToyCard extends React.Component {

  shouldComponentUpdate(nextProps){
    console.log(this.props, nextProps);
  }

  // constructor(props){
  //   super(props)
    //local state
    //this.state = {likes: props.likes, name: "Buzz"}
    //you should never assign a value that you get from props to state in a component
    //the expectation of putting anything in state is that it's going to change, or has the potential to
    //so, if you ever need to change information that you're receiving in from props, YOU NEED TO GO CHANGE THE ORIGINAL SOURCE
  //}

  // state = {likes: this.props.likes}

  //write a callback function that we can pass to the button to change the likes in state
  //IF YOU'RE WRITING AN INSTANCE METHOD THAT IS GOING TO BE USED AS A CALLBACK ANYWHERE, IT NEEDS TO BE BOUND EITHER WITH AN ARROW FUNCTION OR WITH THE BIND KEYWORD

  //addLike = () => {
    //this.setState is an instance method that comes from the Component class we're inheriting from
    //It accepts TWO potential FIRST arguments, and a second argument of a callback to run once setState has completed running:
    //The first potential first agument is an object with a key of the value in state we want to change plus the new value
    // INCORRECT WAY BECAUSE WE NEED PREVIOUS VERSION OF STATE, SEE BELOW:
    //this.setState({likes: this.state.likes + 1}, () => console.log(this.state))
    //React BATCHES setState calls...meaning that it is ASYNCHRONOUS not necessarily in the way of PROMISES, what I mean is that if React senses a bunch of setStates at once, it may wait to execute them all at the same time
    //What this means is, we can never expect this.state to be the most-up-to-date-version of state
    //SO whenever we need a value for the next version of state that depends on a PREVIOUS version of state, we have to use the SECOND potential first argument for setState, which is a function that receives the previous state as an argument
    //CORRECT WAY:
    //this.setState((prevState) => ({likes: prevState.likes + 1}), () => console.log(this.state))
    //setState triggers a re-render
  //}

  render(){
    //ALWAYS ASK YOURSELF WHEN DOES THE RENDER FUNCTION RUN
    console.log("RENDERING!");
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img alt={this.props.name} src={this.props.img} className="toy-avatar"/>
        <p>{this.props.likes} Likes </p>
        <button data-toy={this.props.name} onClick={this.props.addLike} className="like-btn">Like &lt;3</button>
      </div>
    )
  }
}

// export default function ToyCard(props){
//   return (
//     <div className="card">
//       <h2>{props.name}</h2>
//       <img alt={props.name} src={props.img} className="toy-avatar"/>
//       <p>{props.likes} Likes </p>
//       <button className="like-btn">Like &lt;3</button>
//     </div>
//   )
// }

//Three signs for when you want class components in React:
//1: You need state management - you expect your component to change at some point in time likely due to user interaction
//2: You need to utilize a lifecycle method
//3: PureComponents - components that will rarely change and don't need to be re-rendered too frequently


// class Component {
//   constructor(props){
//     this.props = props
//   }
//
//   setState = (arg) => {
//     if (arg.isAnObject?){
//       return {...this.state, arg}
//     } else (ifItSAFunction){
//       arg(this.state) //this.state in this case is the most upToDate version of state BASED on Reacts setState batching
//     }
//   }
//
// }
//
// class OurOwnComponent extends Component {
//   constructor(props){
//     super(props)
//   }
// }
//
//




// let studentInGradeTwelve = {name: "Osha", grade: 12}
// let anotherStudentInGradeTwelve = {...studentInGradeTwelve, name: "Chris" }
//
//
//














//
