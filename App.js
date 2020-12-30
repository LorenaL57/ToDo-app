
import React from 'react';
import { StyleSheet, View,StatusBar, Platform, FlatList, Alert} from 'react-native';
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import TodoItem from "./components/TodoItem";
export default class App extends React.Component {
constructor(){
  super();
  this.state={
    input: '',
    todos: [
      {id: 0, title: "Click the button to remove me!", done: false}
    ]
  }
  
}

addnewTodo(){
  let todos= this.state.todos;
if(this.state.input!=''){
  todos.unshift({
    id: todos.length +1,
    title: this.state.input,
    done: false,
  })
  this.setState({
    todos: todos,
    input: ''
  })
}
else alert("You can't add blank items :D")

}
toggleDone(item){
  let todos = this.state.todos;
  todos=todos.map((todo)=>{
    if(todo.id == item.id){
      todo.done = !todo.done;
    }
    return todo;
  })
  this.setState({todos});
}

removeTodo(item){
  let todos= this.state.todos;

  todos = todos.filter((todo)=>todo.id !==item.id);

  this.setState({todos});
}

  render () {
    const statusbar= (Platform.OS == "android") ? <View style={styles.statusbar}></View>: <View/>
    return (
      <View style={styles.container}>
        {statusbar}
        <Header title="To do list!"/>

        <InputBar
        textChange={input=> this.setState({input})}
        addnewTodo={()=>this.addnewTodo()}
        input={this.state.input}/>

        <FlatList 
        extraData={this.state}
        data={this.state.todos}
        keyExtractor={(item,index)=> index.toString()}
        renderItem={({item,index})=>{
        return(
          <TodoItem 
          todoItem={item} 
          toggleDone={()=>this.toggleDone(item)}
          removeTodo={()=>this.removeTodo(item)}/>
        )}}/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: "#dfdfdf",
    flex: 1,
  },
  statusbar:{
    backgroundColor: "#313131",
    height: 30,
  },
});
