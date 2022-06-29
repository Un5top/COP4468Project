import React, { useEffect, useState } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, TextInputComponent, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const ToDoListScreen = ({ navigation }) => {
    const [Todos, setTodos] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users/" + global.UserDetailValue.toString() + "/todos/")
            .then(res => res.json())
            .then((data) => {
                setTodos(data);

            })

    });

    const renderToDos = ({ item }) => {
        if(item.completed){
            return (
                <View style={{flexDirection: 'row', marginBottom: 20, alignItems: 'center'}}>
                    <Image source={require('../checkbox_ticked.png')} style={{flex:1, height:20,resizeMode:'contain',marginRight:10}}></Image>
                    <Text style={{flex:20,fontSize:18, alignSelf: 'center'}}>{item.title}</Text>
                </View>
                    
               );
        }
        else{
            return (
                <View style={{flexDirection: 'row', marginBottom: 20, alignItems: 'center'}}>
                    <Image source={require('../checkbox.png')} style={{flex:1, height:20,resizeMode:'contain',marginRight:10}}></Image>
                    <Text style={{flex:20,fontSize:18, alignSelf: 'center'}}>{item.title}</Text>
                </View>
                    
               );
        }
        
    }

    return (
        <View style={{flex:1 ,backgroundColor:'#ecf0f1'}}>
            <View style={{height:80,backgroundColor:"#bdc3c7",marginBottom:10,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity style={{marginLeft:10,marginRight:40,height:40,width:100,backgroundColor:'#ecf0f1',borderRadius:20, justifyContent:'center',alignItems:'center'}} 
                    onPress={() => {navigation.navigate('UserDetailScreen')}}>
                    <Text style={{fontSize:16}}>Go Back</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#2c3e50', textAlign:'left',textAlignVertical: "center",fontSize:32,marginLeft:10}}>To Do's</Text>
                </View>
                <View style={{flex:1,marginBottom:10}}>
                <FlatList style={{flex:8,backgroundColor:'#ecf0f1', padding:20, marginVertical:20}} data={Todos} renderItem={renderToDos} keyExtractor={(item) => item.id}></FlatList>
            </View>
        </View>
        

    );
  };

export default ToDoListScreen;