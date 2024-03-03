import { Component } from 'react';

import Cardlist from './components/card-list/card-list.components.jsx';
import Searchbox from './components/search box/search box.components.jsx'
import './App.css';

class App extends Component  {
  constructor(){
    super();

    this.state={
       monster:[] , 
       searchfield:''
    };
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((Response)=>Response.json())
  .then((users)=>
   this.setState(
    ()=> {
      return{monster:users};
    },
   )
  );
}

onsearchchange=(event)=>{
  const searchfield=event.target.value.toLocaleLowerCase();
 
  this.setState(()=>{
    return{searchfield};
  })
 }

  render(){
  const {monster,searchfield  }=this.state;
  const {onsearchchange  }=this

    const filtermonsters=monster.filter((Monsters)=>{
      return Monsters.name.toLocaleLowerCase().includes(searchfield);
   });

  return (
    <div className="App">
      <Searchbox onchangeHandler={onsearchchange} />
     <Cardlist monsters={filtermonsters} />
     </div>
  );
  }
}

export default App;
