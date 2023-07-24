import React from 'react'
import {Link} from 'react-router-dom'
import { Product } from '../type/type'
type Prop={
item:Product
}

export default function ProductItem({item}:Prop) {
  return (
    <div className="flex  flex-col content-center text-center border-1 border-indigo-500/100 p-10 m-5 opacity-100 shadow-2xl ">
      <h1 className="text-3xl">{item.title}</h1>

      <img src={item.image} alt={item.title} className="shadow-2xl" />

      <span>$ {item.price}</span>
      <button className="bg-indigo-500 rounded-lg">shop now</button>
      <button>
        <Link to={`/menu/${item._id}`}>learn more</Link>
      </button>
    </div>
  );
}
