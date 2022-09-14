import React, { useState } from "react";
// import { createStackNavigator, createAppContainer } from "react-navigation";

export default function Search(props) {
    const {todolist}=props;
    const [search, setNewSearch] = useState("");
    const handleSearchChange = (e) => {
      setNewSearch(e.target.value);
    };
  
    const filtered = !search
      ? todolist
      : todolist.filter((person) =>
          person.todo.toLowerCase().includes(search.toLowerCase())
        );
  
    return (
        <footer className="clearfix">
          <div className="pull-left buttons">
            <input type="text" value={search} onChange={handleSearchChange} placeholder="Search" />
               {filtered.map((person) => {
        return (
          <p key={person.id}>
            {person.todo} - {person.todo}
          </p>
        );
      })}
        </div>
      </footer>
    );
}