import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Loader2 } from "lucide-react"
import { Link } from "react-router-dom"

const Signup = () => {

const [input, setInput] = useState({
    fullname:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    profile:""
})

const [loading,setLoading] = useState(false)

const changeEventHandler = (e)=>{
    setInput({...input,[e.target.name]:e.target.value})
}

const changeFileHandler = (e)=>{
    setInput({...input,profile:e.target.files[0]})
}

const submitHandler = (e)=>{
    e.preventDefault()
    console.log(input)
}

return (
<div>
<Navbar/>

<div className='flex items-center justify-center max-w-7xl mx-auto'>
<form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>

<h1 className='font-bold text-xl mb-5'>Sign Up</h1>

<div className='my-2'>
<Label>Full Name</Label>
<Input
type="text"
name="fullname"
value={input.fullname}
onChange={changeEventHandler}
/>
</div>

<div className='my-2'>
<Label>Email</Label>
<Input
type="email"
name="email"
value={input.email}
onChange={changeEventHandler}
/>
</div>

<div className='my-2'>
<Label>Phone</Label>
<Input
type="text"
name="phoneNumber"
value={input.phoneNumber}
onChange={changeEventHandler}
/>
</div>

<div className='my-2'>
<Label>Password</Label>
<Input
type="password"
name="password"
value={input.password}
onChange={changeEventHandler}
/>
</div>

<RadioGroup className="flex gap-6 my-4">

<div className="flex items-center gap-2">
<Input
type="radio"
name="role"
value="student"
checked={input.role==="student"}
onChange={changeEventHandler}
/>
<Label>Student</Label>
</div>

<div className="flex items-center gap-2">
<Input
type="radio"
name="role"
value="recruiter"
checked={input.role==="recruiter"}
onChange={changeEventHandler}
/>
<Label>Recruiter</Label>
</div>

</RadioGroup>

<div className='flex items-center gap-2'>
<Label>Profile</Label>
<Input
type="file"
accept="image/*"
onChange={changeFileHandler}
/>
</div>

{
loading
?
<Button className="w-full my-4">
<Loader2 className='mr-2 h-4 w-4 animate-spin'/>
Please wait
</Button>
:
<Button type="submit" className="w-full my-4">
Signup
</Button>
}

<span className='text-sm'>
Already have an account?
<Link to="/login" className='text-blue-600'> Login</Link>
</span>

</form>
</div>
</div>
)
}

export default Signup