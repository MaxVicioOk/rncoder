import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useSignupMutation } from '../app/services/authServices'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authentication/authSlice'
import { signupSchema } from '../validations/signupSchema'


export default function Signup({navigation}) {
  const dispatch = useDispatch()
  const [ triggerSignup, { data, isError, isSuccess, error, isLoading } ] = useSignupMutation()
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ confirmPassword, setConfirmPassword ] = useState("")
  const [ errorMail, setErrorMail ] = useState("")
  const [ errorPassword, setErrorPassword ] = useState("")
  const [ errorConfirmPassword, setErrorConfirmPassword ] = useState("")

  useEffect(() => {
    if(isSuccess) dispatch(setUser(data))
  },[data, isError, isSuccess])

  function onSubmit () {
    try {
      setErrorMail("")
      setErrorPassword("")
      setErrorConfirmPassword("")
      signupSchema.validateSync({email,password,confirmPassword})
      triggerSignup({email,password})
    } catch (error) {
      switch (error.path){
        case 'email':
          setErrorMail(error.message)
          break
        case 'password':
          setErrorPassword(error.message)
          break
        case 'confirmPassword':
          setErrorConfirmPassword(error.message)
          break
      }
    }
  }
  return (
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Sign up</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure={false}
            error={errorMail}
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error={errorPassword}
          />
          <InputForm
            label="Confirm password"
            value={confirmPassword}
            onChangeText={(t) => setConfirmPassword(t)}
            isSecure={true}
            error={errorConfirmPassword}
          />
          <SubmitButton title="Send" onPress={onSubmit}  
          />
          <Text style={styles.sub}>Alredy have an account?</Text>
          <Pressable onPress={()=> navigation.navigate("Login")}>
              <Text style={styles.subLink}>Login</Text>
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