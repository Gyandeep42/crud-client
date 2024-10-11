import axios from 'axios';
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"


const UpdateUser = () => {
    const {id} = useParams()
    const [heading, setHeading] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://crud-server-1.vercel.app/getUser/${id}`) 
            .then(result => {
                setHeading(result.data.name); 
                setContent(result.data.email);
                
            })
            .catch(err => console.log(err));
    }, [id]);

    const Update = (e) =>{
        e.preventDefault();
        axios.put(`https://crud-server-1.vercel.app/updateUser/${id}`, {heading, content})
        .then(result => {
            console.log(result)
            navigate('/')
        }) 
        .catch(err => console.log(err)) 
    }
  return (  
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update} >
                    <h2>Update user</h2>
                    <div className="mb-2">
                        <label htmlFor="">Heading</label>
                        <input type="text" placeholder="Enter heading" className="form-control" onChange={(e) => setHeading(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Content</label>
                        <input type="text" placeholder="Enter content" className="form-control" onChange={(e) => setContent(e.target.value)} />
                    </div>
                    
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
  )
}

export default UpdateUser
