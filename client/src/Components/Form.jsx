import React,{Component} from 'react'
import S1 from './step1'
import S2 from './step2'
import S3 from './step3'
import S4 from './step4'
import S5 from './step5'
import S6 from './step6'
import S8 from './step8'
import S10 from './step10'
import axios from 'axios'; 


export default class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            step:1,
            Name: '',
            Phone: '',
            Dept:'',
            Year:'',
            Q1:'',
            Q2:'',
            Q3:'',
            Q4:'',
            Q5:'',
            Q6:'',

        }
    }
    
    increase=()=>{
        this.setState({step:this.state.step+1})
    }
    decrease=()=>{
        this.setState({step:this.state.step-1})
    }
    onChangeName=(e)=>{
        this.setState({Name:e.target.value})
    }
    onChangePhone=(e)=>{
        this.setState({Phone:e.target.value})
    }
    onChangeDept=(e)=>{
        this.setState({Dept:e})
    }
    onChangeYear=(e)=>{
        this.setState({Year:e})
    }
    onChangeQ1=(e)=>{
        this.setState({Q1:e.target.value})
    }
    onChangeQ2=(e)=>{
        this.setState({Q2:e.target.value})
    }
    onChangeQ3=(e)=>{
        this.setState({Q3:e})
    }
    onChangeQ4=(e)=>{
        this.setState({Q4:e})
    }
    onChangeQ5=(e)=>{
        this.setState({Q5:e.target.value})
    }
    onChangeQ6=(e)=>{
        this.setState({Q6:e.target.value})
    }
    onSubmit=()=>{
        const form={
            Name:this.state.Name,
            Phone:this.state.Phone,
            Dept:this.state.Dept,
            Year:this.state.Year,
            Q1:this.state.Q1,
            Q2:this.state.Q2,
            Q3:this.state.Q3,
            Q4:this.state.Q4,
            Q5:this.state.Q5,
            Q6:this.state.Q6,
        }
        axios.post("https://ieeeauditions21.herokuapp.com/submit",form)
        .then(res=>console.log(res.data))
    }
    render(){
    switch(this.state.step){
        case 1:
            return(
                <S1 
                step={this.increase} 
                name={this.onChangeName} 
                phn={this.onChangePhone}
                dept={this.onChangeDept}
                yr={this.onChangeYear}
                />
            )
        case 2:
            return(
                <S2 
                step={this.increase} 
                dec={this.decrease}
                q1={this.onChangeQ1}
                
                />
            )
        case 3:
            return(
                <S3 
                step={this.increase} 
                dec={this.decrease}                   
                q2={this.onChangeQ2}
                />
            )
        case 4:
            return(
                <S4 
                step={this.increase} 
                dec={this.decrease}                   
                q3={this.onChangeQ3}
                />
            )
        case 5:
            return(
                <S5 
                step={this.increase} 
                dec={this.decrease}                   
                q4={this.onChangeQ4}
                />
            )
        case 6:
            return(
                <S6 
                step={this.increase} 
                dec={this.decrease}                   
                q5={this.onChangeQ5}
                />
            )
        case 7:
            return(
                <S10 
                step={this.increase} 
                sub={this.onSubmit}                   
                q6={this.onChangeQ6}
                />
            )
                
    }
    }
}
