import {View, Text, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';

export default function Payment() {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    try {
      console.log("rrtrtrtr");
      
      const response = await fetch(`http://192.168.1.6:4000/payment-sheet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log("Asdasdasd",response);
      
      const {paymentIntent, ephemeralKey, customer} = await response.json();
  
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
    const {error} = await presentPaymentSheet();
    console.log("asasdas",error);
   
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
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
