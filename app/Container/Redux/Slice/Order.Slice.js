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

        console.log("sadsaasd", {...data});

        const OrderDetails  = [{
            customerId : data.customerId,
            address : data.address,
            amt : data.amt,
            cart : cart.cart
    }]

        console.log('First Time when Cart is empty');
        const OrderData = [];

        const userDoc = await firestore().collection('Order').doc(data.uid);
        const userref = await userDoc.get();

        try {
            if (userref.exists) {
                await userDoc.update({
                    Order: firebase.firestore.FieldValue.arrayUnion(
                        {
                            ...OrderDetails
                        }
                    )
                })
            } else {
                await userDoc.set({
                    Order: [OrderDetails]
                })
            }

            const OrderData = [];

            await firestore()
                .collection('Order')
                .doc(data.uid)
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

export const OrderDataSlice = createSlice({
    name: 'Order',
    initialState: initialstate,
    extraReducers: builder => {
        builder.addCase(OrderData.fulfilled, (state, action) => {
            state.Order = action.payload;
        })
    }
});

export default OrderDataSlice.reducer;
