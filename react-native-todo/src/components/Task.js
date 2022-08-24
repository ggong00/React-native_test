import React, { useState } from "react";
import styled from 'styled-components/native';
import IconButton from "./IconButton";
import {images} from '../images'
import PropTypes from 'prop-types';
import Input from "./Input";

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({theme,completed}) => {
            return completed.completed ? theme.done : theme.itemBackground
        }};
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0;
`;

const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({theme,completed}) => {
            return completed ? theme.done : theme.text;
        }
    };
    text-decoration: ${({completed}) => {
        return completed.completed ? 'line-through' : 'none';
    }};
`

const Task = ({item,deleteTask,toggleTask,updateTask}) => {
    const [isEditing,setIsEditing] = useState(false);
    const [text,setText] = useState(item.text);

    const _handleUpdateButtonPress = () => {
        setIsEditing(true);
    }

    const _onSubmitEditing = () => {
        if(isEditing) {
            const editedTask = {...item, text:text};
            updateTask(editedTask);
            setIsEditing(false);
        }
    }

    const _onBlur = () => {
        if(isEditing) {
            setIsEditing(false);
            setText(item.text);
        }
    }

    return isEditing ? 
    (
        <Input
            value={text}
            placeholder={'항목을 작성바랍니다.'}
            onChangeText={text => setText(text)}
            onSubmitEditing={_onSubmitEditing}
            onBlur={_onBlur}
        />    

    ) : 
    
    (
        <Container completed={item.completed}>
            <IconButton 
                type={item.completed ? images.completed : images.uncompleted}
                id={item.id}
                onPressOut={toggleTask}
                completed={item.completed}
            />
            <Contents completed={item.completed}>{item.text}</Contents>
            {item.completed || <IconButton completed={item.completed} type={images.update} onPressOut={_handleUpdateButtonPress}/>}
            <IconButton completed={item.completed} type={images.delete} id={item.id} onPressOut={deleteTask}/>        
        </Container>
    )
};

Task.propTypes = {
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
}

export default Task;