import React, { useState } from 'react';
import *as Yup from 'yup';


const FormWithYup = () => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: " ",
        email: " ",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: '',
        gender: "",
        birthDate: "",
    })
    
    const validationSchema = Yup.object({
        firstName: Yup.string().required("firstName is requied"),
        lastName: Yup.string().required("lastName is requied"),
        email: Yup.string().required("email is requied").email("invalived email"),
        phoneNumber: Yup.string().matches(/^\d{10}$/, "phone number mus be 10 Didits").required(),
        password: Yup.string().required('Please Enter your password').min(8, "password must be 8 characters")
.matches(/[!@#$%^&*(),.?":{}|<>]/, "password must be contain one symbol")
.matches(/[0-9]/, "password must be contain one number")
.matches(/[A-Z]/, "password must be contain one upper case letter")
.matches(/[a-z]/, "password must be contain one lower case letter"),
confirmPassword: Yup.string().oneOf([Yup.ref("password")], "confirmpassword must be match").required("password must requied"),
age: Yup.number().typeError("age must be number")
.min(18, "you must be at least 18 old").max(100, "you can not older than 100 years").required(),
birthDate : Yup.date().required("date of birth is requied")
    })
    const handlerSubmit =async (e) => {
e.preventDefault();
try{
await validationSchema.validate(formData, {abortEarly: false});
console.log("form submitted", formData)
} catch(error){
const newError = {};
error.inner.forEach((err)=>{
    newError[err.path] = err.message;
});
setErrors(newError);
}
    }
    const handlerChange =(e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    return (
        <form className='form' onSubmit={handlerSubmit}>
            <div>
                <label>First Name: </label>
                <input type='text' name='firstName'   placeholder='Enter your first name' value={formData.firstName} onChange={handlerChange} />
                {errors.firstName && <div className='error'>{errors.firstName}</div>}
            </div>
            <div>
                <label>Last Name: </label>
                <input type='text' name='lastName' placeholder='Enter your Last name' value={formData.lastName} onChange={handlerChange}/>
                {errors.lastName && <div className='error'>{errors.lastName}</div>}
            </div>
            <div>
                <label>Email: </label>
                <input type='email' name='email' placeholder='Enter your email' value={formData.email} onChange={handlerChange}/>
                {errors.email && <div className='error'>{errors.email}</div>}
            </div>
            <div>
                <label>Phone Number: </label>
                <input type='text' name='phoneNumber' placeholder='Enter your phoneNumber' value={formData.phoneNumber} onChange={handlerChange} />
                {errors.phoneNumber && <div className='error'>{errors.phoneNumber}</div>}
            </div>
            <div>
                <label>Password: </label>
                <input type='password' name='password' placeholder='Enter your password' value={formData.password} onChange={handlerChange}/>
                {errors.password && <div className='error'>{errors.password}</div>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type='password' name='confirmPassword' placeholder='Enter your ConfirmPassword' value={formData.confirmPassword} onChange={handlerChange} />
                {errors.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}
            </div>
            <div>
                <label>Age : </label>
                <input type='number' name='age' placeholder='Enter your age' value={formData.age} onChange={handlerChange}/>
                {errors.age && <div className='error'>{errors.age}</div>}
            </div>
            <div>
                <label>Gender : </label>
                <select name='gender' value={formData.gender} onChange={handlerChange}>
                    <option value=''>Enter Your gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
                {errors.gender && <div className='error'>{errors.gender}</div>}
            </div>
            <div>
                <label>Date of Birth: </label>
                <input type='date' name='birthDate' placeholder='Enter your date og birth' value={formData.birthDate} onChange={handlerChange}/>
                {errors.birthDate && <div className='error'>{errors.birthDate}</div>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default FormWithYup
