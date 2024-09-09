import React from 'react';

// Greeting

// function Header(props) {
//     return (
//         <header><h1>Hello there indeed {props.name}, {props.color}</h1></header>
//     )
// }

// Styles--------------------------------------------

function Header() {

    const header = {
        gridArea: 'header',
        backgroundColor: '#fed330',
        padding: '20px'
    }
    return (
        <header style = {header}><h1>Header content here</h1></header>
    )
}

export default Header;


