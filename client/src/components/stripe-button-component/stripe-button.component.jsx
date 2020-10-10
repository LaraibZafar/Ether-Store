import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';



const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51HGQjuCdZi6dDFa4wh5cI69YMJWqcyzsjW8ScrZw60FZpn527CjznxEneVuBhbbLWcdh9BThnvxZfwUXvgd0Jv5B00JkqlTBGt";
    const onToken = (token) => {
      axios({
        url:'payment',
        method:'post',
        data:{
          amount: stripePrice,
          token
        }
      }) .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
    };
    return (
    <StripeCheckout
      label="Pay Now"
      name="React-Store"
      billingAddress
      shippingAddress
      image="https://f0.pngfuel.com/png/357/655/black-logo-illustration-png-clip-art.png"
      description={`Total Price : $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
