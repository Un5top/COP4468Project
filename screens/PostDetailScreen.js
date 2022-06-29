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
                setUser(data);
            })

    });


    return (
        <View style={{flex:1, backgroundColor:'#ecf0f1'}}>
            <View style={{flex:1,margin:0}}>
                <View style={{height:80, backgroundColor:"#bdc3c7",marginBottom:20,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity style={{marginLeft:10,marginRight:40,height:40,width:100,backgroundColor:'#ecf0f1',borderRadius:20, justifyContent:'center',alignItems:'center'}} 
                    onPress={() => {global.PostDetailValue=0,navigation.navigate('PostListScreen')}}>
                    <Text style={{fontSize:16}}>Go Back</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#2c3e50', textAlign:'left',textAlignVertical: "center",fontSize:42,marginLeft:10,}}>{User.username}</Text>
                </View>
                <View style={{margin:10,flex:5}}>
                <Text style={{color:'#bdc3c7', fontSize:32, fontWeight:'bold', textAlign:'left',paddingBottom:20, marginLeft:20}}>Title: {Post.title}</Text>
                <Text style={{color:'#bdc3c7', fontSize:32, fontWeight:'bold', textAlign:'left',paddingBottom:20, marginLeft:20}}>{Post.body}</Text>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={{marginHorizontal:10,height:60,marginTop:20,backgroundColor:'#bdc3c7',borderRadius:40, justifyContent:'center',alignItems:'center'}} 
                    onPress={() => {navigation.navigate('CommentListScreen')}}>
                    <Text style={{fontSize:24, color: '#ecf0f1'}}>Comments</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  };

export default PostDetailScreen;