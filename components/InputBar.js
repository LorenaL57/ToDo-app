
import React from 'react';
import { StyleSheet, View,TextInput,Text, TouchableOpacity } from 'react-native';

const InputBar = (props)=>
    {
        return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            placeholder="Add items here!"
            value={props.input}
            onChangeText={(input)=> props.textChange(input)}/>
            <TouchableOpacity 
            style={styles.addButton}
            onPress={props.addnewTodo}>
                <Text style={styles.text}>Add</Text>
            </TouchableOpacity>
        </View>
    )}

const styles=StyleSheet.create({
    inputContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        shadowColor: "#171717",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: .1,
    },
    input:{
        backgroundColor: "#f3f3f3",
        flex:1,
        fontSize: 18,
        height: 45,
        paddingLeft:10,
    },
    addButton:{
        width: 100,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent:"center",
    },
    text:{
        color: "white",
        fontSize: 20,
        fontWeight: "700",
    }
})
export default InputBar;