import React, { useState } from 'react'
const FormWithoutYup = () => {
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
    const validateForm = ()=>{

    };
    const handlerSubmit = (e) => {
e.preventDefault();
const isValid = validateForm ();
if(isValid){
    console.log('form submitted', formData)
}else {
    console.log("form validation failed");
}
    };
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
                <input type='text' name='firstName' placeholder='Enter your first name' value={formData.firstName} onChange={handlerChange} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type='text' name='lastName' placeholder='Enter your Last name' value={formData.lastName} onChange={handlerChange}/>
            </div>
            <div>
                <label>Email: </label>
                <input type='email' name='email' placeholder='Enter your email' value={formData.email} onChange={handlerChange}/>
            </div>
            <div>
                <label>Phone Number: </label>
                <input type='text' name='phoneNumber' placeholder='Enter your phoneNumber' value={formData.phoneNumber} onChange={handlerChange} />
            </div>
            <div>
                <label>Password: </label>
                <input type='password' name='password' placeholder='Enter your password' value={formData.password} onChange={handlerChange}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type='password' name='confirmPassword' placeholder='Enter your ConfirmPassword' value={formData.confirmPassword} onChange={handlerChange} />
            </div>
            <div>
                <label>Age : </label>
                <input type='number' name='age' placeholder='Enter your age' value={formData.age} onChange={handlerChange}/>
            </div>
            <div>
                <label>Gender : </label>
                <select name='gender' value={formData.gender} onChange={handlerChange}>
                    <option value=''>Enter Your gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
            </div>
            <div>
                <label>Date of Birth: </label>
                <input type='date' name='birthDate' placeholder='Enter your date og birth' value={formData.birthDate} onChange={handlerChange}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default FormWithoutYup
