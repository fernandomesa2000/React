import Main from "./Grandchild";
function PromoHeading (props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <h1>{props.callToAction}</h1>
            <h3><i><Main autor = {props.autor}/></i></h3>
        </div>
    )
}

export default PromoHeading;