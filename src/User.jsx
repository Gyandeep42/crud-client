import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://crud-server-1.vercel.app/')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
        axios.delete('https://crud-server-1.vercel.app/deleteUser/' + id)
            .then(res => {
                console.log(res);
                // Optionally, you can also remove the deleted user from state instead of reloading
                setUsers(users.filter(user => user._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/Create" className="btn btn-success" >add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>heading</th>
                            <th>Content</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                 <tr key={index}>
                                    <td>{user.heading}</td>
                                    <td>{user.content}</td>
                                    
                                    <td>
                                        <Link to={`/Update/${user._id}`} className="btn btn-success" >Update</Link>
                                        <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default User;
