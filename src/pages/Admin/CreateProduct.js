import React, { useCallback, useState } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import axios from "axios";
import toast from "react-hot-toast";



const CreateProduct = () => {
  const defaultData = {
    name: '',
    price: '',
    image: '',
    description: ''
  }
  const [data, setData] = useState(defaultData)
  console.log('data :::', data)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleCreate = useCallback(async () => {
    const res = await axios.post("/product", {
      data
    });
    if (res && res.data.success) {
      toast.success(res.data && res.data.message);
      setData(defaultData)
    } else {
      toast.error('Something went wrong')
    }
  }, [data])
  return (
    <Layout title={"Dashboard-Create Product"}>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu />
          </div>
          <div className='col-md-9'>
            <h1>Create Product</h1>
            <div className="mb-3">
              <input
                name='name'
                value={data?.name}
                onChange={handleChange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Product Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                name='price'
                value={data?.price}
                onChange={handleChange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Product Price"
                required
              />
            </div>
            <div className="mb-3">
              <input
                name='image'
                value={data?.image}
                onChange={handleChange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Product Image URL"
                required
              />
            </div>
            <div className="mb-3">
              <input
                name='description'
                value={data?.description}
                onChange={handleChange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Product Description"
                required
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleCreate}>Create</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateProduct