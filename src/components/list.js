//functional components:
import React from 'react';
//to desplay dummyData from  the dummy_list_data.js step 1)
import dummyData from '../dummy_data/dummy_list_data';

//to desplay dummyData from  the dummy_list_data.js step 2)
const List = (props)=>{
  console.log('dummy data from dummy_data folder: ', dummyData)

//dynamically display all the dummy data to the webpage; dummyData is equail to the array name; .map(itemInArray, indesOfArray); .map is a for loop *** key is a prop of the component; Key have to be unique 
//Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
  const list_element = dummyData.map((item, index)=>{
    return (
        <div className ="center"  key = {item.id}>
        
           <span>{item.name}</span> 
           <span>{item.course}</span>
           <span>{item.id}</span>
        </div>  
    )
  })
  return (
    <div> 
    
          {/* showing the data from listData */}
         {list_element}
     </div>
  )
}


export default List;