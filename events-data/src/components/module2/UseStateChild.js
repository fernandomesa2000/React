function Heading(props) {
    return (
        <>
            <input value={props.value} onChange={props.onChange} />
            <p>You typed: {props.value}</p>
        </>
    )
}

export default Heading