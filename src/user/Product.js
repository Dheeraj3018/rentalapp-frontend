import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import UserMenu from '../components/Layout/UserMenu'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'
import { displayRazorpay } from '../payment/pament'

const Product = () => {
  const [productlist, setProductList] = useState([])
  const [dates, setDates] = useState(1)
  console.log('productlist :::', productlist)
  const getDetails = useCallback(async () => {
    const res = await axios.get('/products')
    if (res.data.success) {
      console.log('res ::', res.data)
      setProductList(res?.data?.products)
    } else {
      toast.error('Somthing went wong')
    }
  }, [])
  const handlePayment = useCallback((price) => () => {
    displayRazorpay(dates * price)
  }, [dates])
  useEffect(() => {
    getDetails();
  }, [])
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className='row'>
          <div className='col-md-3'>
            <UserMenu />

          </div>
          <div className='col-md-'>
            <h1>Products</h1>
            <Typography>Days : <TextField type='number' variant='standard' value={dates} onChange={(e) => setDates(e.target.value)} /> </Typography>
          </div>

          <Grid container spacing={2}>
            {productlist && productlist?.length > 0 && productlist?.map((list) => {
              return (
                <Grid item xs={4}>
                  <Card>
                    <CardContent sx={{ minHeight: '400px' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ height: '200px', width: '50%' }} component={'img'} src={list.image} alt='img' />
                      </Box>
                      <Typography variant='h3' >
                        {list.name}
                      </Typography>
                      <Typography variant='h5' >
                        {dates * list.price}
                      </Typography>
                      <Typography variant="body1">
                        {list.description}
                      </Typography>

                    </CardContent>
                    <CardActions>
                      <Button variant='contained' size="small" onClick={handlePayment(list.price)}>Buy now</Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>

        </div>



      </div>




    </Layout>
  )
}

export default Product