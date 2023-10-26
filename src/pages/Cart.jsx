import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Col,Card,Button,Table } from 'react-bootstrap'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Cart() {
  const [total,setTotal]=useState(0)
  const navigate=useNavigate()
  const cartArray=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()

  const getCartTotal=()=>{
    if(cartArray.length>0){
          setTotal(          cartArray.map((ele)=>ele.price).reduce((p1,p2)=>p1+p2))


    }
    else{
      setTotal(0)
    }
  }
  const handleCart=()=>{
    dispatch(emptyCart())
    alert('order has been succesfully placed')
    navigate('/')

  }
  useEffect(() => {
    getCartTotal()
    
  }, [cartArray])
  
  return (
     <div className="container" style={{ marginTop: '100px' }}>
      {cartArray.length > 0 ? (
        <Row>
          <Col lg={7}>
            <Table className=" text-center" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Thumbnail</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((ele,index) => {
                  return (
                    <tr key={ele.index}>
                      <td>{ele.index}</td>
                      <td>{ele.title}</td>
                      <td>
                        <img style={{ height: '100px' }} src={ele.thumbnail} alt="thumbnail" />
                      </td>
                      <td>{ele.price} $</td>
                      <td>
                        <Button variant="light" onClick={() => dispatch(removeFromCart(ele.id))}>
                          <i className="fa-solid fa-trash text-danger"></i>
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div lg={1}></div>
          </Col>
          <Col lg={4}>
            <h1 className="text-primary">Cart Summary</h1>
            <div className="border mt-3 p-3 rounded shadow">
              <h4>Total Products: <span>{cartArray.length}</span></h4>
             
              <h4 className='mt-3'>Total: <span className='text-danger fw-bolder fs-2'>$ {total} </span></h4>
              <div className="d-grid">
                <button  onClick={handleCart} className="btn btn-success">Check Out</button>
              </div>
            </div>

          </Col>
        </Row>
      ) : (
        <>
          <p style={{height:'73vh'}} className='d-flex flex-column justify-content-center align-items-center text-danger' ><img src="https://media.tenor.com/RUMIrc0BPyEAAAAi/shopping-cart-shopping.gif" alt="" /> Your Cart is empty!!!</p>
          <div className="d-grid">
                         <Link style={{textDecoration:'none',color:'white'}} className='btn btn-success text-center ' to='/'>Go Back to Home</Link>

          </div>
          </>
      )}
    </div>
   

  )
}

export default Cart