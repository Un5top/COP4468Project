import React, { useEffect, useState } from 'react'
import { View, Button, Text, TouchableOpacity, FlatList } from 'react-native';

const CommentListScreen = ({ navigation }) => {
    const [Comments, setComments] = useState([]);


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts/" + global.PostDetailValue.toString() + "/comments")
            .then(res => res.json())
            .then((data) => {

                setComments(data);

            })

    });

    const renderComment = ({ item }) => {
       return (
           <>
           <View style={{backgroundColor: "#bdc3c7",marginBottom:20,padding:5}}>
           <Text key={item.id} style={{ borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>Name: {item.name}</Text>
           <Text key={item.id} style={{ borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>Email: {item.email}</Text>
           <Text key={item.id} style={{ borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>{item.body}</Text>
           </View>
           
           </> 
       );
    }

    return (

        <View style={{flex:1, backgroundColor:'#ecf0f1'}}>
            <View style={{height:80, backgroundColor:"#bdc3c7",marginBottom:10,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity style={{marginLeft:10,marginRight:10,height:40,width:100,backgroundColor:'#ecf0f1',borderRadius:20, justifyContent:'center',alignItems:'center'}} 
                    onPress={() => {navigation.navigate('PostDetailScreen')}}>
                    <Text style={{fontSize:16}}>Go Back</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#2c3e50', textAlign:'left',textAlignVertical: "center",fontSize:28,marginLeft:10}}>Comments</Text>
                </View>
            <View style={{flex:10, margin:0}}>
                <FlatList style={{maxToRenderPerBatch:10 ,flex:8,backgroundColor:'#ecf0f1', padding:10, paddingVertical:0, borderRadius:0,marginTop:10}} data={Comments} renderItem={renderComment} keyExtractor={(item) => item.id}></FlatList>
                
            </View>
        </View>
        
      
    );
  };

export default CommentListScreen;