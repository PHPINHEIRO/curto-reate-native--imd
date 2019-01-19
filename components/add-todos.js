import React from 'react';
import {View,TextInput,Button, StyleSheet} from 'react-native';



class AddTodo extends React.Component{
    constructor(){
        super();

        this.state = {
            text:' '
        }
    }
    onTextInput(text){
        this.setState({
            text:text,
        })
    }

    addTodo(){
        this.props.add(this.state.text)
        this.setState({
            text:'',
        })
    }
    render(){
        return(
            <View style={style.container}>
                <TextInput style={style.input}
                    value={this.state.text} 
                    onChangeText={text => (this.onTextInput(text))}
                />
                
                <Button style={style.button}
                    onPress={()=> this.addTodo()}
                    title='Add'
                />
            </View>
        )
    }
}


const style = StyleSheet.create({
    container:{
        width:'100%',
        padding:15,
        backgroundColor: 'lightgray',
        flexDirection:'row',
        alignItems: 'center',
    },
    input:{
        flex:1,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        marginRight: 10,
    },
    button:{
        flexShrink:0,
        marginLeft:10,
    }
})

export default AddTodo;