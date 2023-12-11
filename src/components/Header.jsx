import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

export default function Header({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue4,
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Josefin'
  },
})