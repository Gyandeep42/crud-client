import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const CreateUser = () => {

    const [heading, setHeading] = useState()
    const [content, setContent] = useState()
    
    const navigate = useNavigate()

    const Submit = (e) =>{
        e.preventDefault();
        axios.post("https://crud-server-1.vercel.app/createUser", {heading, content})
        .then(result => {
            console.log(result)
            navigate('/')
        }) 
        .catch(err => console.log(err))    
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit} >
                    <h2>Add Blog</h2>
                    <div className="mb-2">
                        <label htmlFor="">Heading</label>
                        <input type="text" placeholder="Enter heading" className="form-control" onChange={(e) => setHeading(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Content</label>
                        <input type="text" placeholder="Enter content" className="form-control" onChange={(e) => setContent(e.target.value)} />
                    </div>
                    
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser
