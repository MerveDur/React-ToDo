import {useState} from 'react';
// import ToDo from "./ToDo";
import '../App.css';
// import { createStackNavigator, createAppContainer } from "react-navigation";
// import Filter from './Filter';
// import ButtonWrapper from './ButtonWrapper';

export default function Footer(props) {
    const {todolist}=props;
    // const {count, filter, changeFilter} = props;
    const {query, setSearchQuery} = useState("");
    const filtered=todolist.filter((item)=>{
      return Object.keys(item).some((key)=>
      item[key].todo
      // .toString()
      // .toLowerCase()
      // .includes(query.toLocaleLowerCase())
      );
    });
     console.log("filtered",filtered);

    // const filterBySearch = (event) => {
    //     // Access input value
    //     const query = event.target.value;
    //     // Create copy of item list
    //     var updatedList = [...this.props];
    //     // Include all elements which includes the search query
    //     updatedList = updatedList.filter((item) =>{ 
    //       return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    //     });
    //     // Trigger render with updated values
    //     setSearchQuery(updatedList);
    // };

    return (
         <footer className="clearfix">
            <div className="pull-left buttons">
               
               < input
            type="text" autoFocus
            className="form-control search"
            value={query}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search"
        />
         <ul>
          {todolist.map((td,i)=>(
            <li key={i}>{td.todo}</li>
          ))}
        
        </ul> 
        
        
           {/* <Footer {...{query, setSearchQuery}}/>; */}
           {/* <div class="form-field">
  <input/>
  <span class="icon">🔍</span> */}
{/* </div>
<div className="search-header">
      <div className="search-text">Search:</div>
      <input id="search-box" onChange={filterBySearch} />
    </div>
    <div id="item-list">
      <ol>
        {query.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div> */}
{/* return items.filter((item) => {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            });
        } */}
            {/* </div> */}
             </div>
            {/* <div className="pull-left">
        //         {`${count} items left`}
        //     </div>
        //     <div className="pull-right">
        //         <Footer {...{filter, changeFilter}}/>
        //     </div> */}
         </footer>
    );
}