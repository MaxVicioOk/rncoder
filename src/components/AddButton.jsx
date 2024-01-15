import { StyleSheet, Text, Pressable } from 'react-native'
import { colors } from '../global/colors'


export default function AddButton ({title,onPress}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.blue1,
        width:"70%",
        paddingVertical:8,
        margin:10
    },
    text:{
        color:"white",
        textAlign:"center",
        fontSize:18
    }
})
