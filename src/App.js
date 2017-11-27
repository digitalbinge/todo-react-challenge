import React, { Component } from 'react';
import './App.css';

import ToDos from './components/todo-list'
import toDos from './data';
import { Jumbotron } from 'reactstrap';

function Heading(props) {
	return (    		
		<div>
    		<h1>{props.head}</h1>
    		<h2>{props.sub}</h2>
  	</div>
	)
}

class App extends Component {
  render() {
    return (
    	<div className="container">
	    	<Jumbotron>
		    	<div className="heading">
						<Heading head="My Todo list" />
						<Heading sub="Things I need to get done!" />
					</div>
				</Jumbotron>
				<ToDos tasks={toDos}/>
      </div>
    );
  }
}

export default App;
