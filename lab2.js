/* /SRC
    App.js
    Heading.js
    index.js

    Heading.js---------------------------|

function Heading() {
    return (
        <h1>This is an h1 heading</h1>
    )
}

export default Heading;

    App.js-------------------------------|

import Heading from "./Heading";

function App() {
  return (
    <div className="App">
      <Heading />
    </div>
  );
}

export default App;

 */