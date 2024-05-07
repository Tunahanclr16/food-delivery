import Image from "next/image";
import Title from "../components/ui/Title";
import Pizza from ".././assets/f1.png"
const Cart = () => {
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
              </tr>
            </thead>
            <tbody>
            <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  <Image src={Pizza} alt="" width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td>
                  <span>mayonez, acı sos, ketçap,</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $20
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary lg:h-screen flex flex-col justify-center text-white p-12 lg:w-auto w-full   md:text-start !text-center">
          <Title addClass="text-[40px]"title={"Cart Total"}  />
              <div className="mt-6">
            <b>Subtotal: </b>$20 <br />
            <b className=" inline-block my-1">Discount: </b>$0.00 <br />
            <b>Total: </b>$20
          </div>

          <button className="btn-primary mt-4">CHECKOUT NOW!</button>
        </div>
      </div>
  );
};

export default Cart;