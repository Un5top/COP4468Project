import React, { useEffect, useState, Component } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

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
        <View style={{flex:1, backgroundColor:'#631126'}}>
            <View style={{flex:10,margin:20}}>
                <View style={{flex:2, flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{ color:'black', fontWeight:'bold', textAlign:'center',fontSize:48}}>Username: </Text>
                    <Text style={{ color:'black', textAlign:'center',fontSize:48,marginBottom:20}}>{User.username}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row', flexWrap:'wrap',marginBottom:20}}>
                    <Text style={{color:'#F0A8BA', fontSize:32, fontWeight:'bold', textAlign:'center',paddingBottom:0, marginRight:10}}>Name: </Text>
                    <Text style={{color:'#F0A8BA', fontSize:32, fontWeight:'normal', textAlign:'center',paddingBottom:20}}>{User.name}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row', flexWrap:'wrap',marginBottom:20}}>
                    <Text style={{color:'#F0A8BA', fontSize:32, fontWeight:'bold', textAlign:'center',paddingBottom:0, marginRight:10}}>Email: </Text>
                    <Text style={{color:'#F0A8BA', fontSize:32, fontWeight:'normal', textAlign:'center',paddingBottom:20}}>{User.email}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row', flexWrap:'wrap',marginBottom:20}}>
                    <Text style={{color:'#F0A8BA', fontSize:32, fontWeight:'bold', textAlign:'center',paddingBottom:0, marginRight:10}}>Phone: </Text>
                    <Text style={{color:'#F0A8BA', fontSize:32, fontWeight:'normal', textAlign:'center',paddingBottom:20}}>{User.phone}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row', flexWrap:'wrap',marginBottom:20}}>
                    <Text style={{color:'#F0A8BA', fontSize:32, fontWeight:'bold', textAlign:'center',paddingBottom:0, marginRight:10}}>Website: </Text>
                    <Text style={{color:'#F0A8BA', fontSize:32, fontWeight:'normal', textAlign:'center',paddingBottom:20}}>{User.website}</Text>
                </View>
                <View style={{flex:2}}>

                </View>
            </View>
            <View style={{flex:1, margin:20, marginBottom:40}}>
                <TouchableOpacity style={{height:60,marginTop:20,backgroundColor:'#E36282',borderRadius:40, justifyContent:'center',alignItems:'center'}} 
                onPress={() => {global.UserDetailValue=0,navigation.navigate('UserListScreen')}}>
                <Text style={{fontSize:24}}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  };

export default UserDetailScreen;