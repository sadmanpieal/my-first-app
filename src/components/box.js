import { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


class Box extends Component {
      state = {
        
          className: 'btn btn-primary'
    }
    constructor(props){
        super(props);
    }
        

        



    increment = () => {
          this.props.onIncrement(this.props.id)

    }
    decrement = () =>{
        this.props.onDecrement(this.props.id)
    }
    delete = () =>{
        const {id} =this.props;
        this.props.onDelete(id)
    }
  

     render () {
        return (
            <div>
                <button type="button" class = {this.state.className} onClick ={ this.decrement}> -</button>
                <span class = "p-3"> {this.props.num}</span>
                <button type="button" class = 'btn btn-primary' onClick ={ this.increment}> +</button>
                <button className="btn btn-danger p-2 ms-5" onClick={this.delete}>Delete Box</button>
            </div>
        );
     }
}
export default Box;