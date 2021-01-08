import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'black'
    },
    container2:{
        width: 50,
        height: 50,
        borderWidth:10,
        flex:2,
        flexDirection: 'row',
        justifyContent: 'flex-start' 
    },
    quadrado:{
      width: 150,
      height: 50,
      backgroundColor: 'steelblue',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: 'black',
      borderRadius: 10,
      marginBottom: 50,
    },
    text:{
      color: 'white',
      fontWeight: 'bold',  
    },
    text2:{
      color: 'white',
      fontStyle: 'italic',
    },
    img:{
      width:150,
      height:150,
      marginBottom:50,
      borderRadius:100,
      borderWidth: 5,
      borderColor:'#4169e1',
    },
    input:{
        alignItems: 'center',
        width:200,
        height:50,
        marginTop: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
    }
  })