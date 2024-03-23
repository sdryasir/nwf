import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '../redux/hooks/hooks'

const CartScreen = () => {
  const {value} = useAppSelector((state)=>state.counter)
  return (
    <View>
      <Text>CartScreen - {value}</Text>
    </View>
  )
}

export default CartScreen