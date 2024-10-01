import { useState, useEffect } from "react";
function FetchAPI() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch(`https://randomuser.me/api/?results=1`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
    console.log(user)
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
        <h1>Bro Returned</h1>
        <h2>Gender: {user.results[0].gender}</h2>
        <h2>First Name: {user.results[0].name.first}</h2>
        <h2>Last Name: {user.results[0].name.last}</h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  )
}


export default FetchAPI;