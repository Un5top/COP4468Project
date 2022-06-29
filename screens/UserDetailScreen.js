import React, { useEffect, useState, Component } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';

const UserDetailScreen = ({ navigation }) => {
    const [User, setUser] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users/" + global.UserDetailValue.toString())
            .then(res => res.json())
            .then((data) => {
                setUser(data);
            })

    });

    return (
        <View style={{flex:1, backgroundColor:'#bdc3c7'}}>
            <View style={{height:80,backgroundColor:"#bdc3c7",marginBottom:0,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity style={{marginLeft:10,marginRight:10,height:40,width:100,backgroundColor:'#ecf0f1',borderRadius:20, justifyContent:'center',alignItems:'center'}} 
                    onPress={() => {global.UserDetailValue=0,navigation.navigate('UserListScreen')}}>
                    <Text style={{fontSize:16}}>Go Back</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#2c3e50', textAlign:'left',textAlignVertical: "center",fontSize:32,marginLeft:10}}>{User.username}</Text>
                </View>
            <View style={{flex:10,paddingHorizontal:30, paddingVertical:10,marginTop:0,backgroundColor: '#ecf0f1'}}>
                <Image source={require('../avatar.png')} style={{marginBottom:10, height: 200, resizeMode: 'contain', alignSelf:'center'}}></Image>
                <View style={{flex:1, flexDirection:'row', flexWrap:'wrap',marginBottom:10}}>
                    <Text style={{color:'#7f8c8d', fontSize:32, fontWeight:'bold', textAlign:'center',paddingBottom:0, marginRight:10}}>Name: </Text>
                    <Text style={{color:'#7f8c8d', fontSize:32, fontWeight:'normal', textAlign:'center',paddingBottom:20}}>{User.name}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row', flexWrap:'wrap',marginBottom:10}}>
                    <Text style={{color:'#7f8c8d', fontSize:32, fontWeight:'bold', textAlign:'center',paddingBottom:0, marginRight:10}}>Email: </Text>
                    <Text style={{color:'#7f8c8d', fontSize:32, fontWeight:'normal', textAlign:'center',paddingBottom:20}}>{User.email}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row', flexWrap:'wrap',marginBottom:10}}>
                    <Text style={{color:'#7f8c8d', fontSize:32, fontWeight:'bold', textAlign:'center',paddingBottom:0, marginRight:10}}>Phone: </Text>
                    <Text style={{color:'#7f8c8d', fontSize:32, fontWeight:'normal', textAlign:'center',paddingBottom:20}}>{User.phone}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row', flexWrap:'wrap',marginBottom:10}}>
                    <Text style={{color:'#7f8c8d', fontSize:32, fontWeight:'bold', textAlign:'center',paddingBottom:0, marginRight:10}}>Website: </Text>
                    <Text style={{color:'#7f8c8d', fontSize:32, fontWeight:'normal', textAlign:'center',paddingBottom:20}}>{User.website}</Text>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={{marginHorizontal:10,height:60,marginTop:20,backgroundColor:'#bdc3c7',borderRadius:40, justifyContent:'center',alignItems:'center'}} 
                    onPress={() => {navigation.navigate('ToDoListScreen')}}>
                    <Text style={{fontSize:24, color: '#ecf0f1'}}>To-Do's</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  };

export default UserDetailScreen;