import React from "react";

// Greeting

// function Main(props) {
//     return (<h2> {props.greet} from Main</h2>)
// }

// Styles ---------------------------------------

function Main(props) {

    const main = {
        gridArea: 'content',
        backgroundColor: '#21c06b',
        padding: '20px'
    }
    return (
        <main style={main}><h2>Hello {props.name}, you're seeing main</h2></main>
    )
}

export default Main;