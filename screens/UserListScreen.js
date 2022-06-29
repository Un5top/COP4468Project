import React, { useEffect, useState } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import UserDetailScreen from './UserDetailScreen';

const UserListScreen = ({ navigation }) => {
    const [Users, setUsers] = useState([]);


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((data) => {

                setUsers(data);

            })

    });

    const renderUser = ({ item }) => {
       return (
        
       <TouchableOpacity key={item.id} style={{borderRadius:40, justifyContent:'center',alignItems:'center',marginBottom: 10}} onPress={() => {global.UserDetailValue = item.id,navigation.navigate('UserDetailScreen')}}><Text style={{fontSize:32, fontWeight:'bold', textAlign:'center'}}>{item.name}</Text></TouchableOpacity>
       );
    }

    return (
        <View style={{flex:1 ,backgroundColor:'#ecf0f1'}}>
            <View style={{height:80,backgroundColor:"#bdc3c7",marginBottom:10,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity style={{marginLeft:10,marginRight:40,height:40,width:100,backgroundColor:'#ecf0f1',borderRadius:20, justifyContent:'center',alignItems:'center'}} 
                    onPress={() => {global.UserDetailValue=0,navigation.navigate('HomeScreen')}}>
                    <Text style={{fontSize:16}}>Go Back</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#2c3e50', textAlign:'left',textAlignVertical: "center",fontSize:32,marginLeft:10}}>Users</Text>
                </View>
            <View style={{flex:1,marginHorizontal:20,marginBottom:10}}> 
                <FlatList style={{flex:8,backgroundColor:'#bdc3c7', padding:20, borderRadius:40,marginVertical:20}} data={Users} renderItem={renderUser} keyExtractor={(item) => item.id}></FlatList>
                
            </View>
        </View>
        

    );
  };

export default UserListScreen;