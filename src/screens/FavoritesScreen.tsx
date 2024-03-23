import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '../redux/hooks/hooks'

const FavoritesScreen = () => {
  const {value} = useAppSelector((state)=>state.counter)
  return (
    <View>
      <Text>FavoritesScreen - {value}</Text>
    </View>
  )
}

export default FavoritesScreen