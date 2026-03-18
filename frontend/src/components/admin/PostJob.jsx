import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '../ui/select'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const PostJob = () => {

    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experienceLevel: "0",
        position: 1,
        companyId: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { companies } = useSelector(store => store.company);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        setInput(prev => ({ ...prev, companyId: value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        //  VALIDATION
        if (!input.companyId) return toast.error("Please select a company");
        if (!input.title || !input.description || !input.requirements) {
            return toast.error("Please fill all required fields");
        }

        try {
            setLoading(true);

            const finalData = {
                ...input,
                requirements: input.requirements
                    .split(",")
                    .map(r => r.trim())
                    .filter(r => r !== "")
            };

            console.log("FINAL DATA:", finalData);

            const res = await axios.post(
                `${JOB_API_END_POINT}/post`,
                finalData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );

            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }

        } catch (error) {
            console.log("POST ERROR:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />

            <div className='flex justify-center my-5'>
                <form onSubmit={submitHandler} className='p-8 border rounded-md w-[400px]'>

                    <Label>Title</Label>
                    <Input name="title" value={input.title} onChange={changeEventHandler} />

                    <Label>Description</Label>
                    <Input name="description" value={input.description} onChange={changeEventHandler} />

                    <Label>Requirements (comma separated)</Label>
                    <Input name="requirements" value={input.requirements} onChange={changeEventHandler} />

                    <Label>Salary</Label>
                    <Input name="salary" value={input.salary} onChange={changeEventHandler} />

                    <Label>Location</Label>
                    <Input name="location" value={input.location} onChange={changeEventHandler} />

                    <Label>Job Type</Label>
                    <Input name="jobType" value={input.jobType} onChange={changeEventHandler} />

                    <Label>Experience</Label>
                    <Input
                        name="experienceLevel"
                        value={input.experienceLevel}
                        onChange={changeEventHandler}
                    />

                    <Label>Position</Label>
                    <Input
                        type="number"
                        name="position"
                        value={input.position}
                        onChange={changeEventHandler}
                    />

                  
                    <Select onValueChange={selectChangeHandler}>
                        <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select Company" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {companies?.map((c) => (
                                    <SelectItem key={c._id} value={c._id}>
                                        {c.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                  
                    <Button type="submit" className="w-full mt-4">
                        {loading ? (
                            <Loader2 className="animate-spin mx-auto" />
                        ) : (
                            "Post Job"
                        )}
                    </Button>

                </form>
            </div>
        </div>
    )
}

export default PostJob;