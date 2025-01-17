import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

import "./Choice.css"
const Choice = () => {
    const navigate = useNavigate();

    const Data=[
        {
           id:1,
           subject:"Internship",
           selected:false
        },
        {
            id:2,
            subject:"New_Graduates",
            selected:false
         }
         ,{
            id:3,
            subject:"Experienced",
            selected:false
         }
    ]
   const [select,setSelect]= useState(Data)
    const handleonClick=(item)=>{
        const newItems=select.map((val)=>{
            if(val.id===item.id){
                return {...val,selected:!val.selected}
            }
            else
            {
                return val;
            }

        })   
            
        setSelect(newItems) 
    
        
            navigate('/loading',{state:newItems })
    
       
        
      
    }

    
 


  return (
    
    <div className='choice'>
        <Navbar/>
    <div className='user_form_title'>
            Job Type Selection
            </div>
            <div className='type_description'>
            You can choose your ideal job match, from the following three options
            </div>
            
            <div className='main_options'>
                <div className='image_row'>
                 <div className='image1'>
                    <img src='./image/intern.png' height='120px' width='120px'/>
                  </div>
                  <div className='image1'>
                    <img src='./image/new_grad.png' height='120px' width='120px'/>
                  </div>
                  <div className='image1'>
                    <img src='./image/experienced.png' height='120px' width='120px'/>
                  </div>
                </div>
                <div className='button_row'>
                {
                    
                    select.map((item, idx)=>(
                       
                    <div className='options' onClick={()=>handleonClick(item)} >
                        {item.subject}
                        </div>
                       
                       
                    ))
                }
                </div>
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6FBLdTfaMvSCP_YNKDa0YiG26znI44d2PooB2B19ghWqh-1HuwWe71vhexanpdJylAI&usqp=CAU"></img>
                <img src="https://www.shutterstock.com/image-vector/graduated-student-logo-260nw-1174254523.jpg"></img> */}
            
                 
        
               
                
            </div>



    </div>
  )
}

export default Choice
