import React from 'react'
import { Nav,Navbar,Container,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
      const wishlist=useSelector((state)=>state.wishlistReducer)

      const cart=useSelector(state=>state.cartReducer)
  return (
  <Navbar expand="lg" style={{zIndex:'2'}} className=" text-light bg-primary position-fixed top-0 w-100" >
      <Container>
        <Navbar.Brand >
            <Link style={{textDecoration:'none',fontWeight:'bolder',color:'white'}} to='/'> <i className='fa-solid fa-truck-fast'></i> E-cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-light d-flex justify-content-center align-items-center gap-1 btn btn-outline-success border me-3 '>
                <i className='fa-solid fa-cart-shopping text-success'></i>
                <Link  style={{textDecoration:'none',fontWeight:'bolder',color:'white'}} to='/cart'>Cart</Link>
                                     <Badge className='ms-1' bg="secondary">{cart.length}</Badge>

            </Nav.Link>


            <Nav.Link  className='text-light btn btn-outline-danger border'>
                <Link className='d-flex align-items-center justify-content-between'  style={{textDecoration:'none',fontWeight:'bolder',color:'white'}} to='/wishlist'>
                    <i className="fa-solid fa-heart text-danger me-1"></i>
                    Wishlist
                     <Badge className='ms-1' bg="secondary">{wishlist.length}</Badge>
                    
                    </Link>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  )
}

export default Header