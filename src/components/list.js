//functional components:
import React from 'react';
//to desplay dummyData from  the dummy_list_data.js step 1)
// import dummyData from '../dummy_data/dummy_list_data';

//to desplay dummyData from  the dummy_list_data.js step 2)
const List = (props)=>{
  console.log('dummy data from dummy_data folder: ', props.data)
   if(!props.data.length){
     return <h1 className="center grey-text text-lighten-2"> No Data</h1>
   }
//dynamically display all the dummy data to the webpage; dummyData is equail to the array name; .map(itemInArray, indesOfArray); .map is a for loop *** key is a prop of the component; Key have to be unique 
//Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
// list_element === props.data  === dummyData  === a array with different objects as item
const list_element = props.data.map((item, index)=>{
    return (
        <div className ="collection-item"  key = {item.id}>
        
           <span>{item.name}</span> 
           <span>{item.course}</span>
           {/* <span>{arrayItem.id}</span> */}
        </div>  
    )
  })
  return (
    <div className="collection"> 
          {/* showing the data from dummyData */}
         {list_element}
     </div>
  )
}


export default List;