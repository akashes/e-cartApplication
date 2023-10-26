import React from 'react'
import { Col, Row,Button,Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {  removeFromWishlist } from '../redux/slices/wishlistSlice'

import { Link } from 'react-router-dom'
import { addToCart } from '../redux/slices/cartSlice'
function Wishlist() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  const dispatch=useDispatch()
  const handleCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))

  }
  return (
    <div className='container' style={{marginTop:'100px'}}>
      <Row>
        {
          wishlistArray.length>0?
          wishlistArray.map((product,index)=>{
            return(
               <Col className='mb-5  ' sm={12} md={6} lg={4} xl={3} key={index}>
         <Card  className=' product-container card shadow rounded ' style={{ width: '18rem' , height:'30rem' } }>
      <Card.Img  style={{height:'200px'}} variant="top" src={product.thumbnail} />
      <Card.Body className='d-flex justify-content-between flex-column'  style={{height:'60%',overflowY:'hidden'}}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className=' overflow-hidden'>
          <p>         {product.description.slice(0,60)}
</p>
<h5>{product.price}$
</h5>
        </Card.Text>
        <div className='d-flex justify-content-between .icons   '>
              <Button onClick={()=>dispatch(removeFromWishlist(product.id))} variant="light" className='d-inline-flex align-items-center'> <i className='fa-solid fa-trash text-danger fa-2x'></i></Button>
        <Button onClick={()=>handleCart(product)} variant="light" className='d-inline-flex align-items-center'> <i className='fa-solid fa-cart-plus text-info fa-2x'></i></Button>
        </div>
    
      </Card.Body>
    </Card>
    
        
        </Col>
            )

          }): <>
          <p style={{height:'73vh'}} className='d-flex flex-column justify-content-center align-items-center text-danger' ><img src="https://media.tenor.com/RUMIrc0BPyEAAAAi/shopping-cart-shopping.gif" alt="" /> Your Cart is empty!!!</p>
             <Link style={{textDecoration:'none',color:'white'}} className='btn btn-success text-center ' to='/'>Go Back to Home</Link>
          </>
        }
      </Row>
    </div>
  )
}

export default Wishlist