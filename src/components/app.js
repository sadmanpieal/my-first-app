import  { Component } from "react";
 import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './box.js'

class App extends Component {
    state = {
        boxes : [ ]
    }
    createBox = ()=>{
        const { boxes } =this.state;
        this.setState({boxes: [...boxes, 0]})

    }
     onDelete =id =>{
       function filterArray (number,index){
          if(id === index) return false;
          else return true;
       }
       const updateBoxes = this.state.boxes.filter(filterArray);
       this.setState({boxes : updateBoxes});
    } 
    onIncrement = id =>{
       const arr =[...this.state.boxes];
       arr[id]++;
       this.setState({boxes:arr});

    }
    onDecrement =id =>{
        const arr =[...this.state.boxes];
        arr[id]--;
        this.setState({boxes:arr}); 
    }
   
    
    render (){
        return (
             <div style = { {margin: '50px'}}>
                
                <button className="btn btn-danger mb-5"onClick={this.createBox}>add New Box</button>
                {this.state.boxes.map((number, index)=>(
                    <div key={number}>
                        <Box 
                        num={number}
                        id ={index}
                        onDelete={this.onDelete}
                        onIncrement={this.onIncrement} 
                        onDecrement ={this.onDecrement}
                        />
                            
                        <br/>

                 
                    </div>

                
            
                ))}
                 <br/>
        
            </div> 
          

        )

        
    }
}

    

export default App;