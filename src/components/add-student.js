// 1) make a new component for add item; add-item.js state component; 
import React, { Component } from 'react';
class AddStudent extends Component {
  // 3). creating states
  constructor(props){
    super(props); 
    this.state = {
      id:"",
      name: "",
      course: ""
    };
  }
// handle the submit of the form   
handleAddStudent(event){
  // prevent the page to refresh;
  event.preventDefault();
  // console.log the added student;
   console.log('Added Student: ', this.state)
  //
  this.props.add(this.state);

}

   render(){
    // 4) object destructuring  to define id, name, course
    // const id = this.state.name; 
    // const name = this.state.name; 
    // const course = this.state.course;
    const {id, name, course} = this.state; 

     return (
      // 2)  create a  form  for input  id , name and course
       <form onSubmit = {this.handleAddStudent.bind(this)}> 
       <div className="row">
            <div className = "col s12 m8 offset-m2"> 
                <input type = "number" placeholder = "ID" value ={id}  onChange = {(e)=>{this.setState({id: e.target.value})}}/> 
            </div>
         </div>
         <div className="row">
            <div className = "col s12 m8 offset-m2"> 
                <input type = "text" placeholder = "Name" value ={name}  onChange = {(e)=>{this.setState({name: e.target.value})}}/> 
            </div>
         </div>
         <div className="row">
            <div className = "col s12 m8 offset-m2"> 
                <input type = "text" placeholder = "Course" value = {course} onChange = {(e)=>{this.setState({course: e.target.value})}}/> 
            </div>
         </div>
         {/* adding add button  */}
         <div className="row">
            <div className = "right-align"> 
                <button className="btn red darken-2">Add Student</button>
            </div>
         </div>
       </form>
       
     )
   }
}

export default AddStudent;
