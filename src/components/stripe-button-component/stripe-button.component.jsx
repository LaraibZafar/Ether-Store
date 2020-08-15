import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  //in the real world you would want to send this to your backend server, we'll do that later.
  console.log(token);
  alert("Payment Successful");
};

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51HGQjuCdZi6dDFa4wh5cI69YMJWqcyzsjW8ScrZw60FZpn527CjznxEneVuBhbbLWcdh9BThnvxZfwUXvgd0Jv5B00JkqlTBGt";
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
