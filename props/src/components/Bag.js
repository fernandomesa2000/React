function Bag(props) {
    const bag = {
        padding: "20px",
        border: "2px solid red",
        background: "#8a8a8a",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag;