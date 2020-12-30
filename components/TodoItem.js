import React from 'react';
import { StyleSheet, View,Text, TouchableOpacity, Button } from 'react-native';

export default class TodoItem extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        const todoItem= this.props.todoItem;

        return(
            <View>
                <TouchableOpacity
                style={styles.todoItem}
                onPress={()=>this.props.toggleDone()}>
                    <Text style={(todoItem.done) ? {color: "#aaaaaa"} : {color: "#313131"}}>
                        {todoItem.title}
                    </Text>
                <Button
                title="Remove"
                color={(todoItem.done) ? "tomato" : "#313131"}
                onPress={()=>this.props.removeTodo()}/>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
todoItem:{
    width: "100%",
    height: 40,
    borderBottomColor: "#ffd",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    paddingLeft: 10,
    
},

})