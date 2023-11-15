import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 48,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 24,
    marginTop: 72,
  },
  header:{
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 24,
    marginTop: 72,
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    width: '100%',
    marginTop: 12,
    borderRadius: 10,
    paddingLeft: 12,
  },
  button: {    
    backgroundColor: 'red',
    borderRadius: 10,
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 16,
  },
  buttonText:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  errorNotify:{
    color: 'red',
    fontWeight: 'bold'
  },
}
);