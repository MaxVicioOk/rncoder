import { StyleSheet, View,Pressable, Text, TextInput } from 'react-native'
import { colors } from '../global/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react'

export default function SearchBar({ setKeyWord }) {
  const [ input, setInput ] = useState('')
  const [ error, setError ] = useState('')
  function search() {
    const expression = /[^\w]/
    if(expression.test(input)){
      setError('is not a valid search')
    }else{
      setKeyWord(input)
    }
  }
  function removeItem(){
    setInput('')
    setError('')
    setKeyWord('')
  }
  return (
    <>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Search' value={input} onChangeText={(t) => setInput(t)}/>
        <Pressable onPress={search}>
          <FontAwesome5 name='search'color='black' size={25}/>
        </Pressable>
        <Pressable onPress={removeItem}>
          <Entypo name="circle-with-cross" size={25} color="black"/>
        </Pressable>
      </View>
      { error ? <Text style={styles.errorMsg}>{error}</Text> : null}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: colors.blue4,
  },
  input:{
    backgroundColor: colors.blue5,
    width: '70%',
    borderWidth: 1,
    borderRadius:5,
    paddingHorizontal:10,
    paddingVertical:5,
    marginVertical: 10,
  },
  errorMsg: {
    color: 'red',
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  }
})