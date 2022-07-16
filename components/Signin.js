import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  ScrollView,
} from "react-native";



const Signin = (props) => {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const [error, setError] = React.useState(null);

  function onSubmit(){
    if(firstname !== '' && lastname !== '' && email !== '' && mobile !== '' && password !== '' && confirmPassword !== ''){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(reg.test(email) === false){
            setError('Email is not valid!')
        }else if(password !== confirmPassword){
            setError('Confirm password is not match!!')
        }else{
          props.navigation.navigate('Home')
        }
    }else{
        setError('Input fields cannot be empty!')
    }
  }

  return (
    <ScrollView>
      <View style={styles.signin}>
        <View>
        <Text style={styles.title}>Sign in</Text>
        
        <View style={styles.name}>
            <View>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                style={styles.nameinput}
                value={firstname}
                onChangeText={setFirstname}        
                />
            </View>
            <View>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                style={styles.nameinput}
                value={lastname}
                onChangeText={setLastname}      
                />
            </View>
        </View>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}     
          />

        <Text style={styles.label}>Mobile</Text>
        <TextInput
          style={styles.input}
          value={mobile}
          onChangeText={setMobile}  
          keyboardType='number-pad'
        />  

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}   
          secureTextEntry={true}    
          value={password}
          onChangeText={setPassword}  
          />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}  
        /> 

        {error ? <Text style={styles.errorMsg}>{error}</Text> :null}

          <Button 
            style={styles.button}
            onPress={onSubmit}
            title="Submit"
          />

          <View  style={styles.changePage}> 
            <Text style={styles.message}>Already have a account? </Text><Text style={styles.link} onPress={props.changePage}>LogIn</Text>
          </View>
          </View>
      </View>
      </ScrollView>
      
  );
};

const styles = StyleSheet.create({
  signin:{
    alignItems: 'center'
  },
  title: {
    paddingBottom: 20,
    fontSize: 40,
  },
  name:{
    flexDirection: 'row',
    width: 300,
  },
  nameinput:{
    height: 40,
    width: 130,
    marginHorizontal: 20,
    marginBottom:12,
    borderBottomWidth: 1,
    padding: 10,
  },
  label:{
    marginLeft: 20,
    fontSize: 15,
  },
  input: {
    height: 40,
    width: 300,
    marginHorizontal: 20,
    marginBottom:12,
    borderBottomWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
     color: 'white'
  },
  errorMsg:{
    color: 'red',
    textAlign: 'center',
    marginVertical: 7,
  },
  changePage:{
    flexDirection:'row',
    marginTop: 15,
  },
  message:{
    fontSize: 15,
  },
  link:{
    fontSize: 15,
    color:'blue',
    textDecorationLine: 'underline'
  }
});

export default Signin;
