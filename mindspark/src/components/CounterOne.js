import React,{ Component } from 'react'
import data from "../PeriodicTableJSON.json"
import Sample from './Sample';

class CounterOne extends Component{
    
    constructor(props){
        super(props);
        var storedClicks = 0;
        this.state={
            count:0,
            name:1000,
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
    
    render(props){
        const boil={props};
    return (
        <div>
            <h1><b>Temperature</b></h1>
            <br/>
            
            <h4>
            <input onChange={this.onChangeStartingPoint}value=
            {this.state.count}/>
            </h4>
            value2={this.props.name}
            <br/>
            <br/>
            <button onClick={this.countUp}>CountUP</button>
            <p> Boiling:{this.props.name}</p>
            
    
            <button onClick={this.reset}>Reset</button>
        </div>
    )
    }
}

export default CounterOne 
    
