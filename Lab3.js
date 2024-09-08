// App.js

import "./App.css";
import Card from './Card'

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card
        h2 = "First card's h2"
        h3 = "First card's h3"
      />
      <Card
        h2 = "Second card's h2"
        h3 = "Second card's h3"
      />
      <Card
        h2 = "Third card's h2"
        h3 = "Third card's h3"
      />
    </div>
  );
}

export default App;

// Card.js

function Card(props) {
    return (
        <div className = "card">
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    )
}

// export default Card;

// App.css

// .card {
//     margin: 20px;
//     max-width: 300px;
//     border: 1px solid gray;
//     padding: 20px;
//     border-radius: 10px;
// }
