// import Header from './components/Header.js';
// import Main from './components/Main.js';
// import Sidebar from './components/Sidebar.js';
// import './App.css';

// Greeting

// function App() {
//   return (
//     <div>
//       <Header name = 'Fernando' color = 'Purple'/>
//       <Main greet= 'Howdy'/>
//       <Sidebar greet= 'Hi'/>
//     </div>
//   );
// }

// export default App;

// Fruits Bag----------------------------------------------

// import './App.css';

// function Bag(props) {
//   const bag = {
//       padding: "20px",
//       border: "2px solid red",
//       background: "#8a8a8a",
//       margin: "20px 0"
//   }
//   return (
//       <div style={bag}>
//           {props.children}
//       </div>
//   )
// }

// function Pears(props) {
//   return (
//       <h2>I don't like pears, but my friend, {props.friend}, does</h2>
//   )
// }

// function Apples(props) {
//   return (
//       <div className="promo-section">
//           <div>
//               <h2>These apples are: {props.color}</h2>
//               </div>
//               <div>
//               <h3>There are {props.number} apples.</h3>
//           </div>
//       </div>
//   )
// }
// function App() {
//   return (
//     <Bag>
//       <Apples color = 'Red' number = '5'/>
//       <Pears friend = 'Peter'/>
//     </Bag>
//   )
// }

// Styles---------------------------------------------------

// import Header from './components/Header';
// import Main from './components/Main.js';
// import Sidebar from './components/Sidebar.js';
// import './App.css';

// function App() {
//   return (
//     <div className='wrapper'>
//       <Header/>
//       <Main name ='Fernando'/>
//       <Sidebar/>
//     </div>
//   );
// }

// Tertiary expressions-----------------------

// const bool = false;
// const str1 = "just";

// function Example(props) {
//     return (
//         <div>
//             <h2>
//                 The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
//             </h2>
//             <p>The value of the math prop is: <em>{props.math}</em></p>
//             <p>The value of the str prop is: <em>{props.str}</em></p>
//         </div>
//     );
// };

// export function App() {
//     return (
//         <div className="App">
//             <Example
//                 toggleBoolean={!bool}
//                 math={(10 + 20) / 3}
//                 str={str1 + ' another ' + 'string'}
//             />
//         </div>
//     );
// };

import profile from './profile.jpeg'

function Logo () {
  const userPic = <img src = {profile} />;
  return userPic;
}
export function App() {
  return (
    <div>
      <h1>Adding images</h1>
      <Logo/>
    </div>
  );
}

export default App;