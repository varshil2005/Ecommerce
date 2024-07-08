import { View, Text, TouchableOpacity } from 'react-native'
import React, { startTransition } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, increment } from '../Redux/Action/counter.action';

export default function Counter() {
    const  dispatch = useDispatch();
    const counter = useSelector(state => state.count);


    const handleInc = () => {
        dispatch(increment())
    }

    const handleDec = () => {
        dispatch(Decrement());
    }
  return (
    <View>
      <Text>Counter</Text>
      <TouchableOpacity onPress={handleInc}>
        <Text>+</Text>
      </TouchableOpacity>

    <Text>{counter.count}</Text>
      <TouchableOpacity onPress={handleDec}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  )
}