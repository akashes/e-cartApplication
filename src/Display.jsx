import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment, reset } from './redux/counterSlice'


function Display() {
    const dispath=useDispatch()
    const count=useSelector((state)=>state.counter.count)
  return (
        <div style={{height:'70vh'}} className='d-flex justify-content-center align-items-center' >
            <div className='d-flex justify-content-center align-items-center border rounded p-5 w-50 flex-column gap-5'>
                <h1 style={{fontSize:'100px'}}>{count}</h1>
                <div className='d-flex gap-3' >
                    <button onClick={()=>dispath(decrement())} className='btn btn-warning'>Decrement</button>
                    <button onClick={()=>dispath(reset())} className='btn btn-danger'>Reset</button>
                    <button onClick={()=>dispath(increment())} className='btn btn-success'>Increment</button>
                </div>

            </div>
        </div>

  )
}

export default Display