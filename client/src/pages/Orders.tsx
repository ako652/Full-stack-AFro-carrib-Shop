import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { fetchOrderList } from '../redux/thunk/order'
import { AppDispatch } from '../redux/store'

export default function Orders() {
  const orderList =useSelector((state:RootState)=>state.order.orderList)
  const userDetails=useSelector((state:RootState)=>state.user.user)

  const dispatch=useDispatch<AppDispatch>()
 
    useEffect(() => {
       if(userDetails){
      dispatch(fetchOrderList(userDetails._id));
       }
    }, [userDetails,dispatch]);

  console.log('order', orderList)
  

  return (
    <div>
      {orderList.map((item)=>{
        return <div>{item.productList.map((product)=>{
          return (
            <div>{product.price}</div>
          )
        })}</div>
      }
       
      )}
      
    </div>
  )
}
