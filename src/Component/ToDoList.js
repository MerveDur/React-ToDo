import React, { Component } from "react";
import ToDo from "./ToDo";
class toDoList extends Component{

render()
{
    const {todolist}=this.props;
    return(
        <div>
            <table class="table">
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todolist.map(issue => {
                                const {id,todo}=issue;
                                return<ToDo key={id} id={id} todo={todo}/>
                            })
                        }
                        
                    </tbody>
                    </table>
        </div>
    );
}    
}

export default toDoList;