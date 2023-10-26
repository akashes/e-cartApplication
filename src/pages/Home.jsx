import React from 'react'
import { Card,Row,Col,Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import './Home.css'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'

function Home() {
  const data= useFetch('https://dummyjson.com/products')
  const dispatch=useDispatch()
  console.log(data);
  return (
    <Row style={{marginTop:'100px'}} className='ms-2'>
      <Row>
       {
        data?.length>0 ?
        data.map((ele,index)=>{
          return ( 
          <Col className='mb-5   ' sm={12} md={6} lg={4} xl={3} key={index}>
         <Card  className=' product-container card shadow rounded  ' style={{ width: '18rem' , height:'30rem' } }>
      <Card.Img  style={{height:'200px'}} variant="top" src={ele.thumbnail} />
      <Card.Body className='d-flex justify-content-between flex-column'  style={{height:'60%',overflowY:'hidden'}}>
        <Card.Title>{ele.title}</Card.Title>
        <Card.Text className=' overflow-hidden text-muted'>
          <p>         {ele.description.slice(0,60)}
</p>
<h5 className='text-dark'>{ele.price}$
</h5>
        </Card.Text>
        <div className='d-flex justify-content-between .icons   '>
              <Button onClick={()=>dispatch(addToWishlist(ele))} variant="light" className='d-inline-flex align-items-center'> <i className='fa-solid fa-heart text-danger fa-2x'></i></Button>
        <Button onClick={()=>dispatch(addToCart(ele))} variant="light" className='d-inline-flex align-items-center'> <i className='fa-solid fa-cart-plus text-info fa-2x'></i></Button>
        </div>
    
      </Card.Body>
    </Card>
    
        
        </Col>
        )
          
        }) : <p>Nothing to display</p>
       }
      </Row>
    </Row>
  )
}

export default Home