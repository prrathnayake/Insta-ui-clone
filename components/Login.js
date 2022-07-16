import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
} from "react-native";

const Login = (props) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  function onSubmit(){
    if(username !== '' && password !== ''){
        if(username !== 'user'){
            setError('Username is not valid!')
        }else if(password !== '123'){
            setError('Password is not valid!')
        }else{
          props.navigation.navigate('Home')
        }
    }else{ 
        setError('Input fields cannot be empty!')
        
    }
  }

  return (
      <View>

        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder='Username'        
          />

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder='Password'
        />

        {error ? <Text style={styles.errorMsg}>{error}</Text> :null}

          <Button 
            style={styles.button}
            onPress={onSubmit}
            title="Login"
          />

          <View  style={styles.changePage}> 
            <Text style={styles.message}>Need an account? </Text><Text style={styles.link} onPress={props.changePage}>Sign In</Text>
          </View>

      </View>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 40,
  },
  input: {
    height: 40,
    width: 280,
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

export default Login;
