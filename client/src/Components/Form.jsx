import React,{Component} from 'react'
import S1 from './step1'
import S2 from './step2'


export default class Form extends Component{
    
        state={
            step:1
        }
        increase=()=>{
            this.setState({step:this.state.step+1})
        }
        decrease=()=>{
            this.setState({step:this.state.step-1})
        }
    render(){
        switch(this.state.step){
            case 1:
                return(
                    <S1 step={this.increase} />
                )
            case 2:
                return(
                    <S2 dec={this.decrease}/>
                )
        }
    }
   
}
