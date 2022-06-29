import React, { useEffect, useState } from 'react'
import { View, Button, Text, TouchableOpacity, FlatList } from 'react-native';

const PostListScreen = ({ navigation }) => {
    const [Posts, setPosts] = useState([]);


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((data) => {

                setPosts(data);

            })

    });

    const renderPost = ({ item }) => {
       return (
        
       <TouchableOpacity key={item.id} style={{borderRadius:40, justifyContent:'center',alignItems:'center',marginBottom: 10}} onPress={() => {global.PostDetailValue = item.id, global.UserDetailValue = item.userId, navigation.navigate('PostDetailScreen')}}><Text style={{color:'#ecf0f1' , fontSize:32, fontWeight:'bold', textAlign:'center'}}>{item.title}</Text></TouchableOpacity>
       );
    }

    return (

        <View style={{flex:1, backgroundColor:'#ecf0f1'}}>
            <View style={{height:80,backgroundColor:"#bdc3c7",marginBottom:20,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity style={{marginLeft:10,marginRight:40,height:40,width:100,backgroundColor:'#ecf0f1',borderRadius:20, justifyContent:'center',alignItems:'center'}} 
                    onPress={() => {navigation.navigate('HomeScreen')}}>
                    <Text style={{fontSize:16}}>Go Back</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#2c3e50', textAlign:'left',textAlignVertical: "center",fontSize:32,marginLeft:10,}}>Posts</Text>
                </View>
            <View style={{flex:1,margin:20}}>
                <FlatList style={{maxToRenderPerBatch:10 ,flex:8,backgroundColor:'#bdc3c7', padding:20, borderRadius:40,marginVertical:20}} data={Posts} renderItem={renderPost} keyExtractor={(item) => item.id}></FlatList>
            </View>
        </View>
        
      
    );
  };

export default PostListScreen;