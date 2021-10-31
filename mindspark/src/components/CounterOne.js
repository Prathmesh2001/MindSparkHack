import React,{ Component } from 'react'
import data from "../PeriodicTableJSON.json"
import Sample from './Sample';

class CounterOne extends Component{
    
    constructor(props){
        super(props);
        var storedClicks = 0;
        this.state={
            count:0,
            upperlimit:10,
        }        
    }
     
    countUp=()=>{
 
        this.clearInterval();
        this.interval=setInterval(()=>{
            if(this.props.upperlimit && this.state.count <= this.props.upperlimit)
            {
        this.setState(prevState=>({
            count:parseFloat(prevState.count)+0.01,
        }));
    }
    else{
        this.clearInterval();
    }
    },1)
    // var x = document.getElementById("myDIV");
    // if (x.display === "none") {
    //   x.display = "block";
    // } else {
    //   x.display = "none";
    // }
    };
    

    reset=()=>{
        this.clearInterval();
        this.setState(prevState=>({
            count:0,
        }));
    };
    onChangeStartingPoint=e=>{
        this.clearInterval();
        this.setState({
            count:parseFloat(e.target.value),
        });
    };
    onChangeLimitingPoint=e=>{
        this.clearInterval();
        this.setState({
            upperlimit:parseFloat(e.target.value),
        });
    };
    
    clearInterval=()=>{
        clearInterval(this.interval)
    }
    
    render(props){
        const boil={props};
    return (
        <div>
        <div>
            
            <h1><b>Temperature</b></h1>
            <br/>
            <div>
            <h4>

            <input onChange={this.onChangeStartingPoint}value=
            {this.state.count}/>
            </h4>
            </div>
            {/* <div>
            <h4>
            <input onChange={this.onChangeLimitingPoint}value=
            {this.props.upperlimit}/>
            </h4>
            </div> */}

            {/* value2={this.props.name} */}
            <br/>
            <br/>
            <div>
            <button className='btn btn-danger mx-3' onClick={this.countUp}>Start Heating</button>
            {/* <p> Boiling:{this.props.name}</p> */}
            <button className='btn btn-primary mx-3' onClick={this.reset}>Reset</button>
            </div>
            <br/>

            
        </div>
        <div>

        </div>
        </div>
    )
    }
}

export default CounterOne 
    
