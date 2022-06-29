import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen  from './screens/HomeScreen';
import UserListScreen  from './screens/UserListScreen';
import PostListScreen from './screens/PostListScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import PostDetailScreen from './screens/PostDetailScreen';
import CommentListScreen from './screens/CommentListScreen';
import AlbumListScreen from './screens/AlbumListScreen';
import PhotoListScreen from './screens/PhotoListScreen';
import ToDoListScreen from './screens/ToDoListScreen';



const Stack = createNativeStackNavigator();
global.UserDetailValue = 0;
global.PostDetailValue = 0;
global.AlbumDetailValue = 0;

const myStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='UserListScreen'
        component={UserListScreen}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='PostListScreen'
        component={PostListScreen}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='UserDetailScreen'
        component={UserDetailScreen}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='PostDetailScreen'
        component={PostDetailScreen}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='CommentListScreen'
        component={CommentListScreen}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='AlbumListScreen'
        component={AlbumListScreen}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='PhotoListScreen'
        component={PhotoListScreen}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='ToDoListScreen'
        component={ToDoListScreen}
        options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default myStack;