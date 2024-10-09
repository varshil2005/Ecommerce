import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import firestore, { firebase } from '@react-native-firebase/firestore';


const initialstate = {
    isLoading: false,
    Order: [],
    error: null,
};


export const OrderData = createAsyncThunk(
    'Order/OrderData',

    async (data) => {

        console.log("sadsaasd",data.data.cart.cart);


        
        const OrderData = [];

        const userDoc = await firestore().collection('Order').doc(data.data.uid);
        const userref = await userDoc.get();

        console.log("ttyyyy",userref.exists);


        const OrederNo = Math.floor(Math.random()*1000)

        const d = new Date()

        const OrderDate = `${d.getDate()} - ${d.getMonth() + 1} - ${d.getFullYear()}`

        console.log("ssdsd",OrderDate);
        
        
        try {
            if (userref.exists) {
                await userDoc.update({
                    Order: firebase.firestore.FieldValue.arrayUnion(
                        {
                            customerId : data.customerId,
                            address : data.data.address,
                            cart : data.data.cart.cart,
                            OrederNo : OrederNo,
                            status : 'pending',
                            orderDate : OrderDate,
                            totalAmount : data.data.amt
                    
                        }
                    )
                })
            } else {

                console.log("hhjkhjk");
                
                await userDoc.set({
                    Order: [
                       { 
                        customerId : data.customerId,
                        address : data.data.address,
                        cart :data.data.cart.cart,
                        OrederNo : OrederNo,
                        status : 'pending',
                        orderDate : OrderDate,
                        totalAmount : data.data.amt
                    }]
                })

                console.log("llllllllllllll");
                
            }

            const OrderData = [];

            console.log('First Time when Cart is empty');

            await firestore()
                .collection('Order')
                .doc(data.data.uid)
                .get()
                .then(documentSnapshot => {
                    console.log(
                        'sdfsdfsdfsdfsdfsdfsdfsdf',
                        'User exists: ',
                        documentSnapshot.exists,
                    );

                    if (documentSnapshot.exists) {
                        console.log('User data: ', documentSnapshot.data());
                        OrderData.push({
                            id: documentSnapshot.id,
                            ...documentSnapshot.data(),
                        });
                    }
                });
            console.log('CartDataCartDataCartData', OrderData);
            return OrderData
        } catch (error) {

        }






    }
)


export const GetOrder = createAsyncThunk(
    'Order/GetOrder',

    async (id) => {
        console.log("asasasd",id);

        const Orderdata = [];
        try {
          await firestore()
            .collection('Order')
            .doc(id)
            .get()
            .then(documentSnapshot => {
              console.log(
                'sdfsdfsdfsdfsdfsdfsdfsdf',
                'User exists: ',
                documentSnapshot.exists,
              );
    
              if (documentSnapshot.exists) {
                console.log('User data: ', documentSnapshot.data());
                Orderdata.push({
                  id: documentSnapshot.id,
                  ...documentSnapshot.data(),
                });
              }
            });
          console.log('CartDataCartDataCartData', Orderdata);
          return Orderdata
        } catch (error) {
          console.log(error);
        }
    
        
    }
)


export const OrderDataSlice = createSlice({
    name: 'Order',
    initialState: initialstate,
    extraReducers: builder => {
        builder.addCase(OrderData.fulfilled, (state, action) => {
            state.Order = action.payload;
        })

        builder.addCase(GetOrder.fulfilled, (state, action) => {
            state.Order = action.payload;
        })
    }
});

export default OrderDataSlice.reducer;
