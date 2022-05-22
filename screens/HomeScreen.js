import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{flex:1, backgroundColor:'#631126'}}>
            <View style={{flexDirection:'row', flex:1, margin:20}}>
                
                <TouchableOpacity style={{flex:1, backgroundColor:'#D1345B', borderRadius:40, justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('UserListScreen')}>
                <Text style={{fontSize:48}}>User List</Text>
                </TouchableOpacity>

            </View>
            <View style={{flexDirection:'row', flex:1, margin:20, borderRadius:40}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'#D1345B' , borderRadius:40, justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('PostListScreen')}>
                <Text style={{fontSize:48}}>Post List</Text>
                </TouchableOpacity>


            </View>
            <View style={{flexDirection:'row', flex:1}}>

            </View>
            
        </View>
      
    );
  };

export default HomeScreen;