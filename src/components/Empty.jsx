import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Empty() {
  return (
    <View>
      <Text style={styles.title}>Sua lista de task está vazia!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        marginTop: 25,
    }
})