import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../app/services/authServices'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authentication/authSlice'


export default function Login({navigation}) {
  const dispatch = useDispatch()
  const [ triggerLogin, { data, isError, isSuccess, error, isLoading } ] = useLoginMutation()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  useEffect(() => {
    if(isSuccess) dispatch(setUser(data))
  },[data, isError, isSuccess])

  function onSubmit(){
    triggerLogin({ email, password })
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Login to start</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure = {false}
            error=""
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error=""
          />
          <SubmitButton onPress={onSubmit} title="Send"/>
          <Text style={styles.sub}>Not have an account?</Text>
          <Pressable onPress={()=> navigation.navigate("Signup")} >
              <Text style={styles.subLink}>Sign up</Text>
          </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  container:{
    width:"90%",
    gap:15,
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:20
  },
  title:{
    fontSize:22,
    fontFamily:"Lobster"
  },
  sub:{
    fontSize:14,
    fontFamily:"Josefin"
  },
  subLink:{
    fontSize:14,
    fontFamily:"Josefin",
    color:"blue"
  }
})