import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

const MyHeader = props=>{
    return(
        <Header
            centerComponent = {{text:props.title,style:{color:'#90afa9',fontSize:20,fontWeight:'bold'}}}
            backgroundColor='#eaf8fe'
        />
    )
}

export default MyHeader;