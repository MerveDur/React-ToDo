import { Component } from "react";
import '../App.css';

// import { MDBCheckbox } from 'mdb-react-ui-kit';
// import CheckBox from "./CheckBox";

class ToDo extends Component{
    /*const [checked, setChecked] = useState(false);
    console.log('checked', checked);
    // const {todo}=this.props;

    const handleChange = (event) =>{
        setChecked({...checked, [event.target.name] : event.target.checked });
    }*/
    
    render(){

        const {todo}=this.props;


            // const [checked, setChecked] = this.state(false);
            // console.log('checked', checked);
            // // const {todo}=this.props;
        
            // const handleChange = (event) =>{
            //     setChecked({...checked, [event.target.name] : event.target.checked });
            // }
        // const {data, changeStatus} =this.props;
        // const handleChange = (checked) => changeStatus(data.id, checked);
        // const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

        return(
            <div className="checkbox">
                <ul className="list-unstyled">
                <li class="todo-item ui-state-default completed">
                    <div class="checkbox">
                        <label   >
                        <input type="checkbox" name="packersOff" class="strikethrough" value="1" />
  
                            {/* <input type="checkbox" 
                            //  value="on"
                            name='packersOff'
                            class="strikethrough" 
                            value="1"
                            // value={checked.checkbox1}
                            // onChange={handleChange}
                            // type="checkbox" 
                            className="w-16 h-16 rounded-lg"/> */}
                                <span>{todo}</span>
                           
                                {/* <!-- react-text: 14 --> <!-- /react-text --><!-- react-text: 15 -->Learn Javascript<!-- /react-text --> */}
                        </label>

                        


                    </div>
                </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                


{/*                 
        // <li className={className}>
        //     <div className="checkbox">
        //         <label>
        //             <CheckBox checked={data.completed} onChange={handleChange}/> {data.text}
        //         </label>
        //     </div>
        // </li> */}
    
    {/* <div className="checkList">
    <div className="title">Your CheckList:</div>
    <div className="list-container">

        {todo.map(issue => {
                                const {id,todo}=issue;
                                return<ToDo key={id} id={id} todo={todo}/>
                            })}
      {todo.map((item, index) => (
         <div key={todo.index}>
           <span>{item}</span>
         </div>
      ))}
    </div>
  </div> */}
               
            </div>

        );
    }
}

export default ToDo;