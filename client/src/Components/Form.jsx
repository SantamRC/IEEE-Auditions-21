import React,{Component} from 'react'
import S1 from './step1'
import S2 from './step2'
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
            Q2:''
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
        this.setState({Dept:e.target.value})
    }
    onChangeYear=(e)=>{
        this.setState({Year:e.target.value})
    }
    onChangeQ1=(e)=>{
        this.setState({Q1:e.target.value})
    }
    onChangeQ2=(e)=>{
        this.setState({Q2:e.target.value})
    }
    onSubmit=()=>{
        const form={
            Name:this.state.Name,
            Phone:this.state.Phone,
            Dept:this.state.Dept,
            Year:this.state.Year,
            Q1:this.state.Q1,
            Q2:this.state.Q2,
        }
        axios.post(process.env.FORM_SUBMIT,form)
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
                dec={this.decrease}
                q1={this.onChangeQ1}
                q2={this.onChangeQ2}
                submit={this.onSubmit}
                />
            )
    }
    }
}
