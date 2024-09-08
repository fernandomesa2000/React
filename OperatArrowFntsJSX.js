// ARROW FUNCTIONS

const example = function() {}

const exampleArrow = () => {}

// No brackets needed if it's 1 parameter
const exampleProps = props => {}

// Brackets for multiple parameters

const exampleMultiProps = (prop1, prop2) => {}

// Implicit Return (Works just in a single line) doesn't need curly brackets

const Nav = () => <ul><li>Home</li></ul>

// Short if...else -----------------------------------------------------------

// comparison ? true : false

let name = 'Juancho';
name == 'Juancho' ? console.log('Hello, Juancho') : console.log('Hello, Friend');

// Tertiary expressions JSX --------------------------------------------------

function Example() {
    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    );
};

function Example2() {
    return (
        <div className="heading">
            <h1>Here's a random number from 0 to 10:
                { Math.floor(Math.random() * 10) + 1 }
            </h1>
        </div>
    );
};

function Example3() {

    const getRandomNum = () => Math.floor(Math.random() * 10) + 1

    return (
        <div className="heading">
            <h1>Here's a random number from 0 to 10: { getRandomNum() }</h1>
        </div>
    );
};