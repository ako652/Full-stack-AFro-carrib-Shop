

export type Product ={
    _id:string,
    image:string,
    title:string,
    price:number,
    description:string
}

export type Cart = {
  _id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  quantity: number;
};
export type User = {
  _id: string;
  email: string;
  password: string;
};

export type Order={
  _id:string,
  userId:string,
  productList:Cart[],
  createdArt:string

}