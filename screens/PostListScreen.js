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
        
       <TouchableOpacity key={item.id} style={{borderRadius:40, justifyContent:'center',alignItems:'center',marginBottom: 10}} onPress={() => {global.PostDetailValue = item.id, global.UserDetailValue = item.userId,navigation.navigate('PostDetailScreen')}}><Text style={{color:'#F0A8BA' , fontSize:32, fontWeight:'bold', textAlign:'center'}}>{item.title}</Text></TouchableOpacity>
       );
    }

    return (

        <View style={{flex:1, backgroundColor:'#631126'}}>
            <View style={{flex:1,margin:20}}>
                <Text style={{color:'black', textAlign:'center',fontSize:48}}>PostListScreen</Text>
                <FlatList style={{maxToRenderPerBatch:10 ,flex:8,backgroundColor:'#E36282', padding:20, borderRadius:40,marginVertical:20}} data={Posts} renderItem={renderPost} keyExtractor={(item) => item.id}></FlatList>
                <TouchableOpacity style={{height:60,marginTop:20,backgroundColor:'#E36282',borderRadius:40, justifyContent:'center',alignItems:'center'}} onPress={() => {global.UserDetailValue=0, global.PostDetailValue=0, navigation.navigate('HomeScreen')}}>
                <Text style={{color: '#F0A8BA', fontSize:24}}>Go To Home Page</Text>
                </TouchableOpacity>
            </View>
        </View>
        
      
    );
  };

export default PostListScreen;