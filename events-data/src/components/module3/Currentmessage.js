import Header from "../module1/Header";
import Main from "../module1/Main";

function CurrentMessage(day) {
    const weekday = day
    let message;

    weekday >= 1 && weekday <= 5
    ? message = <Header/>
    : message = <Main/>

    return (
         <div>
          {message}
         </div>
     )
}

export default CurrentMessage;