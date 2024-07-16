import { View, Text, TouchableOpacity } from 'react-native'
import React, { startTransition, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/Slice/counter.slice';
import { fetchcategory } from '../Redux/Slice/category.slice';


export default function Counter() {
    const  dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchcategory())
    } ,[])
    
    const category = useSelector(state => state.category);
    console.log(category);


    const handleInc = () => {
        dispatch(increment())
    }

    const handleDec = () => {
        dispatch(decrement());
    }
  return (
    <View>
      <Text>Counter</Text>
      <TouchableOpacity onPress={handleInc}>
        <Text>+</Text>
      </TouchableOpacity>

    {/* <Text>{counter.count}</Text> */}
      <TouchableOpacity onPress={handleDec}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  )
}