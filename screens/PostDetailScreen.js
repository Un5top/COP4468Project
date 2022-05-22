import React, { useEffect, useState, Component } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const PostDetailScreen = ({ navigation }) => {
    const [Post, setPost] = useState([]);
    const [User, setUser] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts/" + global.PostDetailValue.toString())
            .then(res => res.json())
            .then((data) => {
                setPost(data);
            })

    });

    

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users/" + global.UserDetailValue.toString())
            .then(res => res.json())
            .then((data) => {
                console.log('bruh');
                setUser(data);
            })

    });


    return (
        <View style={{flex:1, backgroundColor:'#631126'}}>
            <View style={{flex:1,margin:20}}>
                <Text style={{color:'#F0A8BA', textAlign:'left',fontSize:48,marginBottom:20}}>{User.username}</Text>
                <Text style={{color:'#F0A8BA', fontSize:32, fontWeight:'bold', textAlign:'left',paddingBottom:20, marginLeft:20}}>Title: {Post.title}</Text>
                <Text style={{color:'#E77390', fontSize:32, fontWeight:'bold', textAlign:'left',paddingBottom:20, marginLeft:20}}>{Post.body}</Text>
                <TouchableOpacity style={{height:60,marginTop:20,backgroundColor:'#E36282',borderRadius:40, justifyContent:'center',alignItems:'center'}} 
                onPress={() => {global.PostDetailValue=0, global.UserDetailValue=0,navigation.navigate('PostListScreen')}}>
                <Text style={{fontSize:24}}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  };

export default PostDetailScreen;