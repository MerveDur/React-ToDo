import React,{useState} from "react";

const LineThrough=()=>{

    const [checked, setChecked] = useState(false);
    console.log('checked', checked);
    // const {todo}=this.props;

    const handleChange = (event) =>{
        setChecked({...checked, [event.target.name] : event.target.checked });
    }

    return (
        <React.Fragment>
        <section>
          <div className="bg-white w-auto h-auto pb-10 mt-28 mx-5 rounded-lg sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
            {/* header section */}
            <div className="h-24 flex justify-center items-center shadow">
              <p className="uppercase font-bold text-4xl text-center">
                line-through app
              </p>
            </div>
  
            {/* body section */}
            <div className="grid justify-center space-y-5 mt-10">
              <div className="flex space-x-4 items-center ">
                <input 
                name='checkbox1'
                value={checked.checkbox1}
                onChange={handleChange}
                type="checkbox" 
                className="w-16 h-16 rounded-lg"/>

                <label       style={ checked ? {textDecoration: 'line-through'} : {textDecoration: 'solid'}}        textDecorationLine={`text-4xl ${(checked.checkbox1 === true)? 'line-through': ''}`}>checkbox 1</label>
                
                <p style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
  Solid line-through
</p>
                </div>
  
              {/* checkbox2 section */}
              <div className="flex space-x-4 items-center ">
                <input 
                   name='checkbox2'
                   value={checked.checkbox2}
                   onChange={handleChange}
                type="checkbox" 
                className="w-16 h-16 rounded-lg"
                 />
               <p className={`text-4xl ${(checked.checkbox2 === true)? 'line-through': ''}`}>checkbox 2</p>
              </div>
  
              {/* checkbox3 section */}
              <div className="flex space-x-4 items-center ">
                <input 
                   name='checkbox3'
                   value={checked.checkbox3}
                   onChange={handleChange}
                type="checkbox" 
                className="w-16 h-16 rounded-lg"
                 />
    <p className={`text-4xl ${(checked.checkbox3 === true)? 'line-through': ''}`}>checkbox 3</p>

    
              </div>
  
              {/* checkbox4 section */}
              <div className="flex space-x-4 items-center ">
                <input
                   name='checkbox4'
                   value={checked.checkbox4}
                   onChange={handleChange} 
                type="checkbox" 
                className="w-16 h-16 rounded-lg"
                 />
   <p className={`text-4xl ${(checked.checkbox4 === true)? 'line-through': ''}`}>checkbox 4</p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )


}

export default LineThrough;