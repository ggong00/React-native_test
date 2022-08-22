import React from "react";
import {TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types'

const MyButton = (props) => {
    console.log(props)
    return (
        <TouchableOpacity
            style={{
                backgroundColor:'#3498db',
                paddingHorizontal:props.demention.weith,
                paddingVertical:props.demention.height,
                margin:10,
                padding:10,
                borderRadius:8
            }}
            onPress={props.onPress} 
        >

            <Text style={{fontSize:props.fsize}}>
                {props.title ?? props.children}
            </Text>
        </TouchableOpacity>
    )
}

MyButton.defaultProps = {
    demention:{width:10,height:10},
    title:'임시'
}
MyButton.PropTypes = {
    title: PropTypes.string
}

export default MyButton;