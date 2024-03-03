import { Component }  from "react";

class Searchbox extends Component{
    render(){
        return(
        
      <input className='search-box'
             type='search' 
             placeholder='Search Monsters'
             onChange={this.props.onchangeHandler}/>
             
        )
    }
}

export default Searchbox;