

export type Product ={
    _id:number,
    image:string,
    title:string,
    price:string,
    description:string
}

export type Cart = {
  _id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  quantity: number;
};
export type User = {
  _id: number;
  email: string;
  password: string;
};