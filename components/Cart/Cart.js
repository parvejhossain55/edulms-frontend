import Link from "next/link";
import React from "react";
import { getToken } from "../../helper/sessionStorage";
import axios from "axios";
import axiosInstance from "../../helper/axiosInstance";
import { useSnackbar } from 'notistack';
import Checkout from "../checkout/Checkout";
import { Button, Result, Skeleton, message } from "antd";


const Cart = () => {

    const [quantity, setQuantity] = React.useState(1);
    const [data, setData] = React.useState([])
    const [code, setCode] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    const { enqueueSnackbar } = useSnackbar();

    const subtotal = data?.courses?.map(item => item?.price)?.reduce((acc, curr) => acc + curr, 0);

    React.useEffect(() => {
      CartList()
    }, [])

    const CartList = async () => {
      try {
        const token = getToken()
        const AuthToken = { headers: { 'Authorization': `Bearer ${token}` } }
        const { data } = await axiosInstance.get(`/get-cart`, AuthToken)
        setData(data)
        setLoading(false);
  
      } catch (err) {
        console.log(err)
      }

    }
    const handleApplyCoupon = async () => {
      try {
        const token = getToken()
        const AuthToken = { headers: { 'Authorization': `Bearer ${token}` } }
        const {data} = await axiosInstance.get(`/coupons/${code}`, AuthToken)
        CartList()
        setCode('')
        message.success("Coupon Applied Success");
      } catch (err) {
        console.log(err)
        message.error(err?.response?.data?.message);
      }
    }


    const handleRemove = async (itemId) => {
        try {
        const token = getToken()
        const AuthToken = { headers: { 'Authorization': `Bearer ${token}` } }
        const { data } = await axiosInstance.delete(`/cart/${itemId}`, AuthToken)
        CartList();

        } catch (err) {
        console.log(err)
        }
    };

  return (
    <>
      <div className="container mx-auto mt-10 font-roboto">
        {
          loading &&
          <div className="flex flex-col md:flex-row mb-40">
          <div className="flex justify-between w-full md:w-3/4 pe-12">
            <div className="flex">
            <Skeleton.Image active />
              <Skeleton  active size={100} title={false} paragraph={true} className='mt-5 w-56 ms-4'/>
            </div>
            
            <Skeleton.Button active  className="mt-5"/>
            <Skeleton.Button active  height={500} width={200}  className="mt-5"/>
          </div>
          <div className="w-full md:w-1/4 ">
            <Skeleton  active size={300} title={true} paragraph={false} className='my-3 w-40 ms-4'/>
            <div className="flex justify-between mx-4">
            <Skeleton.Button active  className="mt-2"/>
            <Skeleton.Button active  height={500} width={200}  className="mt-2"/>
            </div>
            <div className="flex justify-between mx-4">
            <Skeleton.Button active  className="mt-2"/>
            <Skeleton.Button active  height={500} width={200}  className="mt-2"/>
            </div>
            <Skeleton  active size={300} title={true} paragraph={false} className='my-5 w-full px-4'/>
            <div className="flex justify-between mx-4">
            <Skeleton.Button active  className="mt-2"/>
            <Skeleton.Button active  height={500} width={200}  className="mt-2"/>
            </div>
            <Skeleton  active size={300} title={true} paragraph={false} className='mt-16 w-full px-4'/>
            <Skeleton  active size={300} title={true} paragraph={false} className='my-5 w-full px-4'/>
            <Skeleton  active size={300} title={true} paragraph={false} className='my-5 w-full px-4'/>
          </div>
          </div>
        }
        {data?.courses?.length ? (
        <div className="flex flex-col md:flex-row my-10">
          <div className="w-full md:w-3/4 bg-gray-100 px-3 py-4 border h-fit">
            <div className="flex justify-between border-b pb-4">
              <h1 className="font-semibold text-2xl">My Cart</h1>

              <h2 className="font-medium text-2xl">{data?.courses?.length} Item</h2>
            </div>
            <div className=" md:overflow-x-auto overflow-x-scroll">
            <div className="flex mt-4 mb-5 justify-between md:overflow-x-hidden w-[150%] md:w-auto">
              <h3 className="font-semibold text-gray-600 text-xs uppercase ps-2 md:ps-8 w-2/4">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/4 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/4 text-center">
                Remove
              </h3>
            </div>
            
            {data?.courses?.map((item, index)=> (
              
            <div key={index} className="cart-item flex items-center rounded-lg hover:bg-gray-200 mb-3 px-2 md:px-6 py-5 md:shadow justify-between md:overflow-x-hidden w-[150%] md:w-auto">
              <div className="flex w-2/4">
                <div className="w-20">
                  <img
                    className="h-20 shadow rounded-lg"
                    style={{height:"80px" ,width:"80px"}}
                    src={item?.course?.thumbnail?.secure_url}
                    alt="Image"
                  />
                </div>
                <div className="flex flex-col justify-around ml-4 flex-grow">
                  <span className="font-bold text-sm">{item?.course?.name}</span>
                  <span className=" text-xs">Software</span>
                </div>
              </div>
              <span className="text-center w-1/4 font-semibold text-sm">
                ৳{item?.price}
              </span>
              <div className="text-center w-1/4">
                {/* <div className="flex items-center justify-center"> */}
                <button
                    onClick={() => handleRemove(item._id)}

                    className="font-semibold hover:text-red-600 hover:bg-red-200 px-2 rounded text-red-500 text-[14px]"

                  >
                    Remove
                  </button>
                {/* </div> */}
              </div>
            </div>
            ))}
            </div>

            <Link
              href="/course"
              className="flex font-semibold text-[#140342] text-sm mt-10 w-fit"
            >
              <svg
                className="fill-current mr-2 text-[#140342] w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

        {/* Cart <Summary */}
        <div  id="summary" className="w-full md:w-1/4 h-full md:ms-2 mt-4 md:mt-0 ">
          <div className="py-5  bg-gray-200">
            <h1 className="font-semibold text-2xl px-6">Order Summary</h1>
            <hr className="py-2"/>
            <div className="flex justify-between mb-3 pt-4 px-6 border-t border-[#140342] text-gray-600">
              <span className="font-semibold text-sm uppercase">{data?.courses?.length} Item</span>
              <span className="font-semibold text-sm">৳{subtotal}</span>
            </div>
            {data?.couponApplied==true &&
            <div className="flex justify-between mb-3 px-6 text-gray-600">
              <span className="font-semibold text-sm uppercase">Discount Price</span>
              <span className="font-semibold text-sm">৳{data?.total}</span>
            </div>
            } 
            {data?.couponApplied==false ? (
            <div className="px-6">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase text-gray-600"
              >
                Promo Code
              </label>
                <div className="relative">
                    <input
                    type="text"
                    id="promo"
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                    placeholder="Enter coupon code"
                    className="p-2 h-9 text-sm w-full bg-gray-200 rounded border border-[#140342] focus-visible:outline-none"
                />
                    <button onClick={handleApplyCoupon} className="bg-[#140342] hover:bg-[#130a2e] px-5 py-2 rounded-r text-sm text-white uppercase absolute right-0">
                    Apply
                    </button>
              </div>
              
            </div>
            ) : ("")}
            <div className="px-6">
              <div className="flex font-semibold justify-between pt-6 text-sm uppercase">
                <span>Total cost</span>
                <span>৳{data?.total}</span>
              </div>
              {/* <Link href="/checkout">
                <button className="bg-[#140342] mt-6 font-semibold hover:bg-[#0d0030] rounded py-3 mb-2 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </Link> */}
            </div>
          </div>
          <Checkout/>
        </div>
        </div>
        ) : (
          <div className=" my-20">
          <Result
            title="You don&apos;t have any course add to cart"
            extra={
              <Button href='/course' type="" key="console" className="bg-[#140342] hover:bg-[#110927] hover:text-white text-white w-fit rounded-lg">
                View Course
              </Button>
            }
          />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;