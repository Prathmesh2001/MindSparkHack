import React,{ Component } from 'react'
import data from "../PeriodicTableJSON.json"

class CounterOne extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    countUp=()=>{
        this.interval=setInterval(()=>{
        this.setState(prevState=>({
            count:parseFloat(prevState.count)+0.01,
        }));
    },10)
    };

    reset=()=>{
        this.clearInterval();
        this.setState(prevState=>({
            count:0,
        }));
    };
    onChangeStartingPoint=()=>{};

    clearInterval=()=>{
        clearInterval(this.interval)
    }
    
    render(){
    return (
        <div>
            <h1><b>Temperature</b></h1>
            <br/>
            
            <h4>
            <input onChange={this.onChangeStartingPoint}value=
            {this.state.count}/>
            </h4>
            <br/>
            <br/>
            <button onClick={this.countUp}>CountUP</button>
            
            <button onClick={this.reset}>Reset</button>
            
        </div>
    )
    }
}

export default CounterOne 
    
