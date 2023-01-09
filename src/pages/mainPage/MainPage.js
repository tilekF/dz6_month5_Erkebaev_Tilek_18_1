import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAdd} from "../../store/reducer";
import Input from "../../component/Input";
import Button from "../../component/Button";

function MainPage() {
    const [input1,setInp1]= useState('')
    const [input2,setInp2]= useState('')

    const dispatch = useDispatch()
    const { final} = useSelector(state=>state.titleReducer)
    console.log(final)

    const setInput1=(e)=>{
        setInp1(e.target.value)
    }

    const setInput2=(e)=>{
        setInp2(e.target.value)
    }

    const handleFunc=(e)=>{
        if(input1!=='' && input2!== ''){
            const n1 =Number(input1)
            const n2 =Number(input2)
            switch(e.target.id){
                case '+':
                    const Plus =  n1+n2
                    dispatch(getAdd(Plus))
                    break
                case '-':
                    const Minus =  n1-n2
                    dispatch(getAdd(Minus))
                    break
                case '/':
                    const Divide =  n1/n2
                    dispatch(getAdd(Divide))
                    break
                case '*':
                    const Multiply =  n1*n2
                    dispatch(getAdd(Multiply))
                    break
                default:alert('error')
            }
            setInp1('')
            setInp2('')
        }else{
            alert('The field is not filled!')
        }

    }


    return (
        <div>
            <Input fc={setInput1} val={input1} />
            <Input fc={setInput2}  val={input2}/>
            <Button fc={handleFunc} name ='+'/>
            <Button fc={handleFunc} name= '-'/>
            <Button fc={handleFunc} name = '/'/>
            <Button fc={handleFunc} name = '*'/>
            <h1>{final}</h1>
        </div>
    )
}

export default MainPage