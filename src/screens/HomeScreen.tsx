import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import { increment } from '../redux/counterSlice'

export default function HomeScreen() {
  const {value} = useAppSelector((state)=>state.counter);
  const projects = useAppSelector((state)=>state.projects);
  
  const dispatch = useAppDispatch();
  const handleDispach=()=>{
    dispatch(increment());
  }
  return (
    <View>
      <Text>HomeScreen {value}</Text>
      <Button title='Increment' onPress={handleDispach}></Button>
      {
        projects.map((project:any)=>(
          <View key={project.id}>
            <Text>
              {project.title}
            </Text>
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({

})