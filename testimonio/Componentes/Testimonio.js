import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';


 export default function Testimonio(props) {
    return(
        <View style={styles.container}>
          <Image style={styles.imagen}  source={props.imagen}/>
          <View style={styles.textoContainer}>
          <Text style={styles.nombre}>
          {props.nombre} en  {props.pais}
           </Text>
           <Text style={styles.cargo}> {props.cargo}</Text>
           <Text style={styles.texto}> {props.texto}</Text>
        </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        minHeight:250,
        backgroundColor:"#fff",
        marginVertical:10,

    },

    imagen:{
        width:"100%",
        height:250,
        flex:2,
    },
    textoContainer:{
        flex:2,
        justifyContent:"center",
        padding:10,
    },
    nombre:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:17,
    },
    cargo:{
        fontStyle:"italic",
        fontSize:14,
        textAlign:"center",
        color:"#555",
    },
    texto:{
        marginTop:5,
        fontSize:14,
        color:"#333",
    },
  

});