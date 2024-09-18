function Button() {

    const clickHandler = () => console.log('Clicked')

    return (
        // <button onClick = {clickHandler} >
        //     Click Me!
        // </button>

        // Short way (Const variable can be removed)
        <button onClick={() => console.log('second example')}>
            An inline anonymous ES6 function event handler
        </button>
    )
}


// function Button() {

//     const clickHandler = () => console.log('Mouse over')

//     return (
//         <button onMouseOver = {clickHandler} >
//             Click Me!
//         </button>
//     )
// }



export default Button