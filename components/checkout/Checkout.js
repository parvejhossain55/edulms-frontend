import React from 'react';
import DropIn from 'braintree-web-drop-in-react';
import { getToken } from '../../helper/sessionStorage';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import axiosInstance from "../../helper/axiosInstance";
import { message } from 'antd';
const Checkout = () => {

    // const token = localStorage.getItem('token')
    const [carts, setCarts] = React.useState([]);
    const [clientToken, setClientToken] = React.useState("");
    const [instance, setInstance] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('token');
          if (token) {
            getClientToken();
            CartList();
          }
        }
      }, []);

    const CartList = async () => {
        try {
          const token = getToken()
          const AuthToken = { headers: { 'Authorization': `Bearer ${token}` } }
          const { data } = await axiosInstance.get(`/get-cart`, AuthToken)
          setCarts(data)
          
        } catch (err) {
          console.log(err)
        }
      }

    const getClientToken = async () => {
        try {
          const token = getToken()
          const AuthToken = { headers: { 'Authorization': `Bearer ${token}` } }
          const { data } = await axiosInstance.get(`/client-token`, AuthToken)
          // console.log("clToken",data)
          setClientToken(data.token);
        } catch (err) {
          console.log(err);
        }
    };

    // Handle Buy
    const handleBuy = async () => {
        try {
          setLoading(true);
          const { nonce } = await instance.requestPaymentMethod();
          console.log("noce",nonce);
          const token = getToken()
          const AuthToken = { headers: { 'Authorization': `Bearer ${token}` } }
          const { data } = await axiosInstance.post(`/checkout/braintree`, {nonce} , AuthToken)
          console.log("Buy",data)
          setLoading(false);
          router.push('/success')
          message.success("Payment Success");
          CartList();
        } catch (err) {
          console.log(err);
          message.error(err?.response?.data?.message);
          setLoading(false);
        }
      };

    return (
        <div>
            {!clientToken || !carts?.courses?.length ? ( "" ) : (
            <div className="my-3 py-3 px-2 bg-gray-200 rounded">
                <>
                    <DropIn
                        options={{
                            authorization: clientToken,
                            paypal: { flow: 'vault'}
                        }}
                        onInstance={(instance)=> setInstance(instance)}
                    />
                    <button
                        onClick={handleBuy}
                        className="bg-[#140342] hover:bg-[#140933] w-full text-white rounded-lg text-md py-3 px-4 mt-2"
                        disabled={!instance || loading}
                    >
                        {loading ? "Processing..." : "Purchase"}
                    </button>
                </>
            </div>
            )}
        </div>
    );
};

export default Checkout;