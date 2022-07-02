import React from 'react'
import{useFormik} from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import {useState,useEffect}from 'react';
import axios from 'axios';

function Edit() {
    let navigate=useNavigate();
    let [loading,setLoading]=useState(false);
     let params=useParams();
    // useEffect(()=>{
    //     let fetchData= async()=>{
    //       let userData= await axios.get(`https://62bc613c6b1401736cf94b10.mockapi.io/users${params.id}`)
    //       //setUsers(userData.data)
    //       formik.setValues(userData.data)
    //     }
    //     fetchData()
    //   },[])

    let formik=useFormik({
        initialValues:{
            name:"",
            position:"",
            age:"",
            office:"",
            startDate:"",
            salary:""
        },
        validate:(values)=>{
           let errors ={}
           //let pattern = new RegExp(/^[a-zZ-Z\-]+$)

           if(!values.name){
            errors.name="Enter valid name"
           }else if(values.name.length < 5){
                  errors.name="name is les than 5"
           }else if(values.name.length < 15){
            errors.name="name is to short "}
//      else if(pattern.test(formik.values.name)){
//         errors.name="uername invalid "
//  }
           if (!values.position){
            errors.position="Enter position"
           }
           return errors;  
        },
        onSubmit:async(values)=>{
             //console.log(values)
            // navigate("/Users");
         try{ 
              await axios.put(`https://62bc613c6b1401736cf94b10.mockapi.io/users/${params.id}`,values)
              navigate("/Users")
            //  setLoading(true)
            //  await axios.post("https://62bc613c6b1401736cf94b10.mockapi.io/users",values)
            // let data=await fetch("https://62bc613c6b1401736cf94b10.mockapi.io/users",{
            //  method:"POST",
            //  body:JSON.stringify(values) })

             }catch(error){
               alert("somthing went wrong")
            }
            
        }
    });
    useEffect(()=>{
        let fetchData= async()=>{
          let userData= await axios.get(`https://62bc613c6b1401736cf94b10.mockapi.io/users/${params.id}`)
          //setUsers(userData.data)
          formik.setValues(userData.data)
        }
        fetchData()
      },[])

   

  return (
    <div className='container'>
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>


            <div className='col-lg-6'>
             <label>Name</label>
             <input name="name" onChange={formik.handleChange} value={formik.values.name} type="text" className='form-control'/>
             {
                formik.errors.name? <div style={{color:'red'}}>{formik.errors.name}</div>:null
             }
             <label>Office</label>
             <input name="office" onChange={formik.handleChange} value={formik.values.office} type="text" className='form-control'/>
             <label>Start Date</label>
             <input name="startDate" onChange={formik.handleChange} value={formik.values.startDate} type="date" className='form-control'/>
             {/* {
                formik.isValid ?'true':'false'
             } */}
             
             <input type={'submit'} disabled={!formik.isValid} value="Done" className='btn btn-primary mt-2'/>
            </div>
            <div className='col-lg-6'>
            <label>Position</label>
            <input name="position" onChange={formik.handleChange} value={formik.values.position} type="text" className='form-control'/>
            {
                formik.errors.position? <div style={{color:'red'}}>{formik.errors.position}</div>:null
             }
             <label>Age</label>
             <input name="age" onChange={formik.handleChange} value={formik.values.age} type="text" className='form-control'/>
             <label>Salary</label>
             <input name="salary" onChange={formik.handleChange} value={formik.values.salary} type="text" className='form-control'/>

            </div>



        </div>

        </form>
    </div>
  )
}

export default Edit;