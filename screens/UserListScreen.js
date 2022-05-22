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
        <View style={{flex:1 ,backgroundColor:'#631126'}}>
            <View style={{flex:1,margin:20}}> 
                <Text style={{color:'black', textAlign:'center',fontSize:48}}>UserListScreen</Text>
                <FlatList style={{flex:8,backgroundColor:'#E36282', padding:20, borderRadius:40,marginVertical:20}} data={Users} renderItem={renderUser} keyExtractor={(item) => item.id}></FlatList>
                <TouchableOpacity style={{height:60,marginTop:20,backgroundColor:'#E36282',borderRadius:40, justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={{fontSize:24}}>Go To Home Page</Text>
                </TouchableOpacity>
            </View>
        </View>
        

    );
  };

export default UserListScreen;