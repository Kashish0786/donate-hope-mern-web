import axios from "axios";

const loadRazorpay = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const payNow = async (amount) => {

  console.log("PAYMENT AMOUNT:", amount);

  const loaded = await loadRazorpay();

  if (!loaded) {
    alert("Failed to load Razorpay SDK");
    return;
  }

  const { data } = await axios.post(
    "https://care-donate-hope.onrender.com/api/payment/create-order",
    { amount:amount, }
  );

  const options = {
    key: "rzp_test_Sf6nQLaQvMg338",
    amount: data.amount,
    currency: "INR",
    name: "Donation App",
    order_id: data.id,

    handler: async function (response) {
      console.log("Payment Successful:" , response);
      alert("Payment Successful 🎉");

    await axios.post("https://care-donate-hope.onrender.com/api/payment/save-payment", 
    {
    amount: amount,
    paymentId: response.razorpay_payment_id,
    orderId: response.razorpay_order_id,
    
    });

     alert("Payment Verified 🎉");
      
    },
  };

  const RazorpayConstructor = window.Razorpay;

  const rzp = new window.Razorpay(options);
  console.log("RZP OBJECT:", rzp);

  rzp.open();

};