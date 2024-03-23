import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '../redux/hooks/hooks'

const OrderHistoryScreen = () => {
  const {value} = useAppSelector((state)=>state.counter)
  return (
    <View>
      <Text>OrderHistoryScreen - {value}</Text>
    </View>
  )
}

export default OrderHistoryScreen