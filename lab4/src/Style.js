import { StyleSheet } from "react-native"

const styles = StyleSheet.create({   
container_main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 5
},
container_head: {
    flex: 1
},
container_body: {
    flex: 7,
    padding: 16
},
SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
},
title:{
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 60,
    color:'#7DE24E',
    fontWeight: 'bold'
},
subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'#7DE24E',
},
itembox:{
    borderWidth: 1,
    borderColor: '#7DE24E',
    borderRadius: 10,
    marginTop: 16,
    flexDirection: 'row',
    padding: 5,
    height: 50
},
itemTitle:{
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft:10
},
itemPrice:{
    color: 'red',
    position: 'absolute',
    margin: 16,
    fontSize: 16,
    right: 0,
},
itemValue:{
    position: 'absolute',
    margin: 16,
    fontSize: 16,
    right: 0,
},
fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    top: 0,
},
buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
},
buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
},
inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
},
registerTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
},
errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
},

})
export default styles;