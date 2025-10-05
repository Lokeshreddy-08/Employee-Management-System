import React from 'react'
import { deleteEmployee } from '../../services/EmployeeService'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const DeleteEmployeeComponent = () => {

    const [empId,setEmployeeId] = useState();
    const navigate=useNavigate();

    function removeEmployee(e){
        e.preventDefault()
        deleteEmployee(empId).then((response) => {
            navigate('/employees');
        }
        )
    }

  return (
    <div className='container'>
        <h2 className='text-center'>Delete Employee</h2>
        <form>
            <label className='form-label'>Enter Employee ID:</label>
            <input 
                  type='number'
                  placeholder='Enter Employee ID'
                  name='empId'
                  value={empId}
                  className='form-control'
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
            <button className='btn btn-success' onClick={removeEmployee}>Submit</button>
        </form>
    </div>
  )
}

export default DeleteEmployeeComponent