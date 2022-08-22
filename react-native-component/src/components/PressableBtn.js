import React from "react";
import {View, Text, Pressable} from 'react-native';
/*
    props = {
        title: 'Pressable',
    }
*/
const PressableBtn = (props) => {
    const _onPressIn = () => alert('Press IN')
    const _onPressOut = () => alert('Press Out')
    const _onPress = () => alert('Press !!!')
    const _onLongPress = () => alert('Press Long !!!')

    return (
        <Pressable 
            style={{padding:10,backgroundColor:'#1abc9c'}}
            // onPressIn={_onPressIn}
            onPressOut={_onPressOut}
            // onPress={_onPress}
            // onLongPress={_onLongPress}
            // delayLongPress={3000}
            pressRetentionOffset={{top:200,right:50,bottom:50,left:50}}
            // hitSlop={50}
        >
            <Text style={{padding:10,fontSize:30}}>{props.title}</Text>
        </Pressable>
    )
    
};

export default PressableBtn 