import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    global.UserDetailValue = 0;
    global.PostDetailValue = 0;
    global.AlbumDetailValue = 0;

    return (
        <View style={{flex:1, backgroundColor:'#ecf0f1'}}>
            <View style={{height:80, backgroundColor:'#bdc3c7', padding:10, alignItems:'center', justifyContent:'center',marginBottom:10}}>
                <Text style={{fontSize:36, textAlignVertical:'center'}}>The Not So Insta Gram</Text>
            </View>
            <View style={{flexDirection:'row', flex:1, margin:10}}>
                
                <TouchableOpacity style={{flex:1, backgroundColor:'#bdc3c7', borderRadius:20, justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('UserListScreen')}>
                <Text style={{fontSize:48}}>Users</Text>
                </TouchableOpacity>

            </View>
            <View style={{flexDirection:'row', flex:1, margin:10, borderRadius:40}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'#bdc3c7' , borderRadius:20, justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('PostListScreen')}>
                <Text style={{fontSize:48}}>Posts</Text>
                </TouchableOpacity>


            </View>
            <View style={{flexDirection:'row', flex:1, margin:10, borderRadius:40}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'#bdc3c7' , borderRadius:20, justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('AlbumListScreen')}>
                <Text style={{fontSize:48}}>Albums</Text>
                </TouchableOpacity>


            </View>
            <View style={{flexDirection:'row', flex:1}}>

            </View>
            
        </View>
      
    );
  };

export default HomeScreen;