import React from "react";

// Greeting

// function Sidebar(props) {
//     return <h2>{props.greet} from Sidebar</h2>
// }

// Styles

function Sidebar(props) {

    const asideStyle = {
        gridArea: 'sidebar',
        backgroundColor: '#45aaf2'
    }

    return (
        <aside style={asideStyle}>
            <h2>Sidebar content here</h2>
        </aside>
    )
}

export default Sidebar;