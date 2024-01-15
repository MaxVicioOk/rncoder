import { StyleSheet, Text, Pressable } from 'react-native'
import { colors } from '../global/colors'

export default function SubmitButton({title,onPress}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button:{
    width:"60%",
    backgroundColor:colors.blue1,
    padding:10,
    alignItems:"enter",
    borderRadius:10
},
text:{
    textAlign:"center",
    color:"white",
    fontSize:18
}
})