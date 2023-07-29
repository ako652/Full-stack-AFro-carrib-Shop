import { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Cart } from "../type/type";
import { cartAction } from "../redux/slice/cart";

export default function Carts() {
  const [open, setOpen] = useState(true);
  const cartList = useSelector((state: RootState) => state.cart.cart);
  const totalAmount = useSelector((state: RootState) => state.cart.totalsum);
  const userDetails = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  function increaseQty(item: Cart) {
    dispatch(cartAction.addtoCart(item));
  }
  function decreaseQty(item: Cart) {
    dispatch(cartAction.decreaseQty(item));
  }
  function deleteItem(item: Cart) {
    dispatch(cartAction.deleteCartItem(item));
  }

  const onClickCheckout = () => {
    const token = localStorage.getItem("userToken");
    const url = `http://localhost:8000/order/${userDetails?._id}`;

    axios
      .post(
        url,
        { productList: cartList },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("new data", res);
        console.log("new", res.data);
        if (res.status === 200) {
          alert("thanks for trusting us");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("login to complete your order");
          return;
        }
      });
  };
  if (cartList.length === 0) {
    return (
      <div className="h-screen ">
        <div className="mt-48">
          no data, click here to
          <Link to="/menu">
            <button className="rounded-full w-24 bg-black text-white">
              shop now
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <Link to="/">
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </Link>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartList.map((product: Cart) => {
                              return (
                                <li key={product._id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.image}
                                      alt={product.title}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <p>{product.title}</p>
                                        </h3>
                                        <p className="ml-4">{product.price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.description}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <button
                                        onClick={() => increaseQty(product)}
                                      >
                                        +
                                      </button>
                                      <p className="text-gray-500">
                                        Qty {product.quantity}
                                      </p>
                                      <button
                                        onClick={() => decreaseQty(product)}
                                      >
                                        -
                                      </button>

                                      <div className="flex">
                                        <button
                                          onClick={() => deleteItem(product)}
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{totalAmount}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <button
                          onClick={onClickCheckout}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <Link to="/menu">Continue Shopping</Link>

                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
