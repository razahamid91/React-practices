import React, { Component } from "react";

class Name extends Component 
{ 
    state= { name: "Anshuman Singh!" };



    constructor(props) {
    super(props);
    this.setName = this.setName.bind(this);
    }

    setName(e) {
    this.setState({...this.state,name:"Amrit Anand" }); }

render()
{
return (
    <>
    <h1>The name is: {this.state.name}</h1>
    <button onClick={this.setName}>Click Mel</button>
    </>
    );
}
}