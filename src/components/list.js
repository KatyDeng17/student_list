//functional components:
import React from 'react';
//to desplay dummyData from  the dummy_list_data.js step 1)
import dummyData from '../dummy_data/dummy_list_data';

//to desplay dummyData from  the dummy_list_data.js step 2)
const List = (props)=>{
  console.log('dummy data from dummy_data folder: ', dummyData)
  console.log('dummy data from dummy_data folder: ', dummyData[0].title);
  const list_element = dummyData.map((item, index)=>{
    return (
        <li key = {index}>
           {item.name}
        </li>  
    )
  })
  return (
    <div> 
      <ul>
          {/* showing the data from listData */}
          <h3>{list_element}</h3> 
       </ul>
     </div>
  )
}


export default List;