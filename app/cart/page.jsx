"use client";
import Image from "next/image";
import Title from "../components/ui/Title";
import Pizza from ".././assets/f1.png";
import { useDispatch, useSelector } from "react-redux";
import { resetCart, removeProduct } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeProduct({ id: productId }));
  };

  return (
    <div className="flex justify-between items-center lg:flex-row flex-col">
      <div className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th>PRODUCT</th>
              <th>EXTRAS</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product, i) => (
              <tr key={i} className="transition-all bg-secondary border-gray-700 hover:bg-primary">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  <Image src={Pizza} alt="" width={50} height={50} />
                  <span>{product.name}</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {product.extras.length === 0
                    ? "extra yok"
                    : product.extras.map((item, j) => (
                        <span key={j}>{item.name}</span>
                      ))}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {product.price}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {product.quantity}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-secondary lg:h-screen flex flex-col justify-center text-white p-12 lg:w-auto w-full md:text-start !text-center">
        <Title addClass="text-[40px]" title={"Cart Total"} />
        <div className="mt-6">
          <b>Subtotal: </b>${cart.total} <br />
          <b className="inline-block my-1">Discount: </b>$0.00 <br />
          <b>Total: </b>${cart.total}
        </div>
        <button onClick={() => dispatch(resetCart())} className="btn-primary mt-4">CHECKOUT NOW!</button>
      </div>
    </div>
  );
};

export default Cart;
