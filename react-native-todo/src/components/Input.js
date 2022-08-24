import React from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types';
import {Dimensions} from 'react-native';

const StyledInput = styled.TextInput.attrs(
    ({placeholder,theme}) => {
        return {
            placeholder : placeholder,
            placeholderTextColor : theme.main
        }
    }
)`
    width: ${props => props.width-40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px; 
    border-radius: 10px;
    background-color: ${({theme}) => theme.itemBackground};
    font-size: 25px;
    color: ${({theme}) => theme.text};
`

const Input = (props) => {
    const width = Dimensions.get('window').width;
    return (
        <StyledInput 
        width={width} 
        value={props.value}
        placeholder={props.placeholder}
        maxLength={20}
        autoCapitalize={'none'}
        returnKeyType={'done'}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
        onBlur={props.onBlur}
        // multiline={true}
        // numberOfLines={3}
        />
    
    );
}

Input.defaultProps = {
    value:'기본값'
}

Input.propTypes = {
    value:PropTypes.string,
    placeholder:PropTypes.string.isRequired,
    onChangeText:PropTypes.func.isRequired,
    onSubmitEditing:PropTypes.func.isRequired,
    onBlur:PropTypes.func.isRequired
}

export default Input;