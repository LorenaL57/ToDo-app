import React from 'react';
import { StyleSheet, View,Text} from 'react-native';

const Header =(props)=>{
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
      backgroundColor: "#217384",
      height: 100,  
      alignItems: "center",
      justifyContent: "center",
    },
    title:{
        color: "#fff",
        fontSize: 28,
        fontWeight: "900",
        textTransform: "uppercase",
    }
})
export default Header;