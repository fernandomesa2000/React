function Main (props) {
    return <Header msg = {props.msg}/>
}

function Header (props) {
    return (
        <div style = {{border: `10px solid gray`}}>
            <h1>Header here</h1>
            <Wrapper msg = {props.msg}/>
        </div>
    )
}

function Wrapper (props) {
    return (
        <div style = {{border: `10px solid aqua`}}>
            <h2>Wrapper here</h2>
            <Button msg = {props.msg}/>
        </div>
    )
}
function Button (props) {
    return (
        <div>
            <h3>This is the Button  component</h3>
            <button onClick = {() => alert(props.msg)}>Click me!</button>
        </div>
    )
}

export { Main, Header, Wrapper, Button };

/* App.js

import { Main } from  './components/PropDrilling';


    <Main
      msg = "I passed through the Header and the Wrapper and I reached the Button component"
    />

*/