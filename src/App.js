import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TextItem from "./components/TextItem";
import Button from "@mui/material/Button";
import UserData from "./utils/UserData";

function App() {
  const [allUsers, setAllUsers] = useState([UserData()]);
  function addItem() {
    const newUser = UserData();
    setAllUsers([...allUsers, newUser]);
  }

  function updateDetails(userId) {
    //Remove current name and replace with blank
    const updatedUser = allUsers.map((user) =>
      user.id === userId ? { ...user, age: "", name: "" } : user
    );
    setAllUsers(updatedUser);
  }

  //Whenever name is updated, print it
  // console.log(names);

  return (
    <div className="App">
      <header className="App-header">
        <div className="appContainer">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="appName">Welcome to the EazyDraft test application.</p>
        </div>
        <Button onClick={addItem}>Click to add a field</Button>
        <div className="mainContainer">
          {allUsers.map((user) => (
            <TextItem
              key={user.id}
              userDetails={user}
              updateDetails={updateDetails}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
