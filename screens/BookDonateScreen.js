import React, {Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, Alert, Modal, Flatlist,KeyboardAvoidingView,ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class BookDonateScreen extends Component{
    constructor(){
        super();
        this.state={
            requestedBooksList:[]
        }
        this.requestRef=null;
    }

getRequestedBooksList=()=>{
    this.requestRef=db.collection("requested_books")
    .onSnapshot((snapshot)=>{
        var requestedBooksList = snapshot.docs.map(document=>document.data())
        this.setState({requestedBooksList:requestedBooksList})
        
    })
}

keyExtractor=(item,index)=>index.toString()
renderItem=({item,i})=>{
    return(
        <ListItem
            key={i}
            title={item.book_name}
            subtitle={item.reason_to_request}
            titleStyle={{color:'black',fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'#ffff'}}>
                        View
                    </Text>
                </TouchableOpacity>
            }
            bottomDivider/>
    )
}

componentDidMount(){
    this.getRequestedBooksList
}

componentWillUnmount(){
    this.requestRef()
}

    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Donate Books"/>
                <View style={{flex:1}}>
                    {
                        this.state.requestedBooksList.length===0?(
                            <View style={styles.subContainer}>
                                <Text style={{fontSize:20}}>
                                    List Of All Requested Books
                                </Text>
                            </View>
                        ):(
                            <Flatlist
                                keyExtractor={this.keyExtractor}
                                data={this.state.requestedBooksList}/>
                        )
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
    subContainer:{ 
        flex:1, 
        fontSize: 20, 
        justifyContent:'center', 
        alignItems:'center' 
    },
})