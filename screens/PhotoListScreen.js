import React, { useEffect, useState } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import UserDetailScreen from './UserDetailScreen';

const PhotoListScreen = ({ navigation }) => {
    const [Photos, setPhotos] = useState([]);


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/albums/" + global.AlbumDetailValue + "/photos/")
            .then(res => res.json())
            .then((data) => {
                setPhotos(data);

            })

    });

    const renderPhotos = ({ item }) => {
        
        return (
            <View style={{backgroundColor: '#bdc3c7' ,padding:10,paddingLeft:20, marginBottom:20, flexDirection: 'row'}}>
                <Image source={{uri: item.thumbnailUrl,}} style={{flex: 1,height: 150,marginRight:10, resizeMode: 'contain'}}></Image>
                <Text style={{flex:2, textAlignVertical:'center'}}>{item.title}</Text>
            </View>
            );
               
    }

    return (
        <View style={{flex:1 ,backgroundColor:'#ecf0f1'}}>
            <View style={{height:80,backgroundColor:"#bdc3c7",marginBottom:10,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity style={{marginLeft:10,marginRight:20,height:40,width:100,backgroundColor:'#ecf0f1',borderRadius:20, justifyContent:'center',alignItems:'center'}} 
                    onPress={() => {global.AlbumDetailValue=0,navigation.navigate('AlbumListScreen')}}>
                    <Text style={{fontSize:16}}>Go Back</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#2c3e50', textAlign:'left',textAlignVertical: "center",fontSize:32,marginLeft:10}}>Album {global.AlbumDetailValue}</Text>
                </View>
            <View style={{flex:1,marginHorizontal:10,marginBottom:10}}> 
                <FlatList style={{flex:8,backgroundColor:'#ecf0f1', padding:10, borderRadius:0,marginVertical:20}} data={Photos} renderItem={renderPhotos} keyExtractor={(item) => item.id}></FlatList>
            </View>
        </View>
        

    );
  };

export default PhotoListScreen;