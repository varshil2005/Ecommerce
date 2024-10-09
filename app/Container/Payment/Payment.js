import {View, Text, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import { useDispatch } from 'react-redux';
import OrderDetails from '../OrderDetails/OrderDetails';
import { OrderData } from '../Redux/Slice/Order.Slice';

export default function Payment(props) {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);
  const [customerId ,setcustomerId] = useState(null);

  const dispatch = useDispatch();
  const fetchPaymentSheetParams = async () => {

    console.log("hhhhkk",JSON.stringify(props.data));
    
    try {
      console.log("rrtrtrtr");
      
      const response = await fetch(`http://192.168.1.37:4000/payment-sheet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify({
          amount : props.data.amt
        })
        
      });
  
      console.log("Asdasdasd",response);
      
      const {paymentIntent, ephemeralKey, customer} = await response.json();
      setcustomerId(customer)
      return {
        paymentIntent,
        ephemeralKey,
        customer,
      };
    } catch (error) {
      console.log(error);
      
    }
  };

  const initializePaymentSheet = async () => {
    console.log("okokokoppppp");
    
    const {paymentIntent, ephemeralKey, customer} =
      await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const {data} = await presentPaymentSheet();

   
    if (data) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
      dispatch(OrderData({customerId,data : props.data}))     
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <StripeProvider
      publishableKey={'pk_test_51Q5pChJXTX8QxFTscDc4DkX1ydZMnbPyer9TDLeB9ACIo10rhKOIu6QMckJNxlBpQAnKw75DkoHlOAK6OjGGOT2x00bxGxfYed'}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <Button
        variant="primary"
        disabled={!loading}
        title="Checkout"
        onPress={openPaymentSheet}
      />
    </StripeProvider>
  );
}
