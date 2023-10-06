import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
      <div className='text-center'>
        <div className="list-group">
          <h4>Admin Panel</h4>

          <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create Product</NavLink>


        </div>
      </div>


    </>
  );
};

export default AdminMenu