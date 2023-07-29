import {useEffect} from 'react'
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
    <div className=" h-screen grid grid-cols-4 ">
      {orderList.map((item) => {
        return (
          <div key={item._id}>
            {item.productList.map((product) => {
              return (
                <div
                  key={product._id}
                  className="w-48 rounded-md border-1 bg-slate-400  border-gray-100"
                >
                  <h1>{product.title}</h1>
                  <img src={product.image} className="w-48 h-24"alt={product.title} />
                  <p> QTY-{product.quantity}</p>
                  <p>£{product.price}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
