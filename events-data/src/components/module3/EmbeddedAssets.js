import cat from '../../assets/cat.jpeg'
const randomImage = "https://picsum.photos/seed/picsum/200";

function EmbeddedAssets () {
    return (
        <div className='App'>
            <h1>Adding Images with some styling</h1>
            <img
            height = {200}
            src = {cat}
            alt = "A cool profile orange guy"
            />
            <img
            height = {200}
            src = {require("../../assets/logo512.png")}
            alt = "A little react logo"/>
            <img
            src = {randomImage}
            alt = "Internet link"
            />
        </div>
    )
}

export default EmbeddedAssets;