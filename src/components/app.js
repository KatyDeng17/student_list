//1) import materialize-css ; materialize-css is in the node_modules
import 'materialize-css/dist/css/materialize.min.css';
//2) import the app.css file inside the client folder 
import '../assets/css/app.css';
import React from 'react';
//inmport list.js here to show the dummy data; import Name the file (List) from the actually location of the file; 
import List from './list';

const App = ()=>(
    <div className = "container">
        <h1 className = 'center'> Student List </h1>
        {/* calling the List (list.js) component here */}
        <List />
    </div>
);

export default App;
