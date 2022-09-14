import './App.css';
import React, { Component } from 'react';
import AddToDo from './Component/AddTodo';
import ToDoList from './Component/ToDoList';
// import Footer from './Component/Footer';
import Search from './Component/Search';
// import { createDrawerNavigator, createAppContainer } from "react-navigation";
// import AboutScreen from './Component/AboutScreen';
// import { Button, View, Text } from 'react-native';
// import { BrowserRouter as Router, Route, Switch, Link, Routes } from "react-router-dom";



export default class App extends Component{
  constructor(props)
  {
    super(props);
  
    this.state=
    {
      todos:[
        {
          id:1,
          todo:"Learn React"
        },
        {
          id:2,
          todo:"Learn Js"
        },
        {
          id:3,
          todo:"Learn Css"
        }
      ]
    };
    this.addTodo=this.addTodo.bind(this);
  }
  addTodo(newTodo)
  {
    let updateTodos=this.state.todos;
    updateTodos.push(newTodo);
    this.setState({
      todos:updateTodos,
    });
  }
  
  render()
  {
    const title= "Things To Do"
    return (

      <div className="container">
        {/* <header className="App-header"> */}
          <h1>{title}</h1>

          <AddToDo addTodo={this.addTodo}/>
          <ToDoList todolist={this.state.todos}/>
          {/* <Footer todolist={this.state.todos}/> */}
          <Search todolist={this.state.todos}/>
          {/* <AppContainer /> */}
          {/* <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate(<Search todolist={this.state.todos}/>)}
        /> */}
      {/* <Button title="Go to About" 
      onPress={() => this.props.navigation.navigate(<AboutScreen/>)}
      /> */}
</div>
    );
  }

}

