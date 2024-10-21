import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { deleteUser } from '../Redux/UserReducer';
import { useNavigate } from "react-router-dom";


export default function Home() {
  const users = useSelector(state => state.users.users || []); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const onDelete = (id) => {
  //   dispatch(deleteUser);
  //   navigate(0)

  // }
  const onDelete = (id) => {
    dispatch(deleteUser(id)); 
  };
   
  return (
    <div className="container">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React application with CRUD operations.
      <Link to="/create" className='btn btn-primary'>Create</Link></p>
      <table class="table  table-hover">

  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((users,index)=>(
       <tr key={index}>
          <th scope="row">{users.id}</th>
          <td>{users.name}</td>
          <td>{users.email}</td>
          <td>
            <Link to={`/edit/${users.id}`} className='btn btn-primary'>Edit</Link>
            <Link className='btn btn-danger' onClick={()=>onDelete(users.id)} >Delete</Link>
          </td>
        </tr>
      ))
    }

  </tbody>
</table>
    </div>
  )
}
