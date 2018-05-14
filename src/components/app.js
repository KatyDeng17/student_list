//1) import materialize-css ; materialize-css is in the node_modules
import 'materialize-css/dist/css/materialize.min.css';
//2) import the app.css file inside the client folder 
import '../assets/css/app.css';
// chaning App from functional component to class component to allow added student show on the webpage
import React, { Component } from 'react';
// import React from 'react';
//import list.js here to show the dummy data; import Name the file (List) from the actually location of the file; 
import List from './list';
//import add-item.js
import AddStudent from './add-student';
import dummyData from '../dummy_data/dummy_list_data';
 

// chaning below to class component 
// const App = ()=>(
//     <div className = "container">
//         <h1 className = 'center'> Student List </h1>
//         {/* calling the Additem (add-item.js) component here */}
//         <AddStudent/>
//         {/* calling the List (list.js) component here */}
//         <List />
//     </div>
// );

class App extends Component {
    constructor(props){
        super(props); 
        this.state = {
            dummy_student_data: []
        };
    }
    // displaying the dummy data on
    componentDidMount(){
        this.getDummyData();

    }
    //adding student to the data
    addNewStudent(item){
        this.setState({
            dummy_student_data: [item, ...this.state.dummy_student_data]
        })
    }
// change the state of App from dummy_student_data : []; to dummy_student_data: dummyData
    getDummyData(){
        this.setState({dummy_student_data: dummyData}) 

    }

    render(){
        return (
        <div className = "container">
                <h1 className = 'center'> Student List </h1>
                {/* calling the Additem (add-item.js) component here */}
                <AddStudent add={this.addNewStudent.bind(this)}/>
                {/* calling the List (list.js) component here */}
                {/* data is the props for List because this.getDummyData()...now dummy_student_data is equail to dummyData; this will pass to the list.js */}
               <List data ={this.state.dummy_student_data} />

        </div>
        
        )
    }
}



export default App;
