import PromoHeading from "./Child";

const data = {
    heading: "50% Off all items!",
    callToAction: "Everything must go!",
    autor: "Fernando"
}

function Promo(props) {
    return (
        <div>
            <PromoHeading heading = {data.heading} callToAction = {data.callToAction}
            autor = {data.autor}/>
            <h1>{props.message}</h1>
        </div>
    )
}

export default Promo;