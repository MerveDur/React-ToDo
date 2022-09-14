import { Component } from "react"
import '../App.css';

class AddToDo extends Component{
   
    constructor (props) {
        super(props);
        this.state = {
           // updatable: false,
            todo: props.todo,
            //status: props.status
        };
      }
    // state={
    //     todo:""
    // }

    initialState = { todo: '' }

    state = this.initialState
    // onTodoChange(e){
    //     this.setState({
    //         [e.target.todo]:e.target.value
    //     });
    // }
    onTodoChange(value){
        this.setState({
             todo: value
        });
    }
    onAddSubmit(e)
    {

      
        const {addTodo}=this.props;
        const {todo}=this.state;
        const newTodo={
            id:Math.random(),
            todo:todo
        };
        addTodo(newTodo);
        e.preventDefault();
        this.setState(() => this.initialState)
       
    }
    render(){
        const {todo}=this.state;
        return(
            <div className="card">
                {/* <h4 className="card header">Add New To Do</h4> */}
                <div className="card body">
                    <form onSubmit={this.onAddSubmit.bind(this)}>
                        <div className="form-group">
                            {/* <label htmlFor="name"></label> */}
                            <input type="text" 
                            name="name" 
                            id="name"
                            placeholder="Add New" 
                             className="formControl" 
                            value={todo || " "}
                            // onChange={this.onTodoChange.bind(this)}
                            onChange={e => this.onTodoChange(e.target.value)}
                            />
                        </div>
                        {/* <button  type="submit" className="btn btn-primary btn-block">Add New to do</button> */}
                    </form>
                </div>
            </div>
        );
    }
}
export default AddToDo;