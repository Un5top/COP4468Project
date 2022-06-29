import React, { useEffect, useState } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import PhotoListScreen from './PhotoListScreen';

const AlbumListScreen = ({ navigation }) => {
    const [Albums, setAlbums] = useState([]);


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then((data) => {

                setAlbums(data);

            })

    });

    const renderAlbum = ({ item }) => {
       return (
        
       <TouchableOpacity key={item.id} style={{borderRadius:40, justifyContent:'center',alignItems:'center',marginBottom: 10}} onPress={() => {global.AlbumDetailValue=item.id, navigation.navigate('PhotoListScreen')}}><Text style={{color:'white' ,fontSize:32, fontWeight:'bold', textAlign:'center'}}>{item.title}</Text></TouchableOpacity>
       );
    }

    return (
        <View style={{flex:1 ,backgroundColor:'#ecf0f1'}}>
            <View style={{height:80,backgroundColor:"#bdc3c7",marginBottom:10,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity style={{marginLeft:10,marginRight:30,height:40,width:100,backgroundColor:'#ecf0f1',borderRadius:20, justifyContent:'center',alignItems:'center'}} 
                    onPress={() => {global.UserDetailValue=0,navigation.navigate('HomeScreen')}}>
                    <Text style={{fontSize:16}}>Go Back</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#2c3e50', textAlign:'left',textAlignVertical: "center",fontSize:32,marginLeft:10}}>Albums</Text>
                </View>
            <View style={{flex:1,marginHorizontal:20,marginBottom:10}}> 
                <FlatList style={{flex:8,backgroundColor:'#bdc3c7', padding:20, borderRadius:40,marginVertical:20}} data={Albums} renderItem={renderAlbum} keyExtractor={(item) => item.id}></FlatList>
                
            </View>
        </View>
        

    );
  };

export default AlbumListScreen;