import React,{useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native'
import { StatusBar } from 'react-native';
import theme from './theme';
import Input from './components/Input';
import Task from './components/Task';
import {Dimensions} from 'react-native';

const Container = styled.View`
  flex:1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.main};
  align-self: flex-start;
  margin: 0 20px;
`;

const List = styled.ScrollView`
  flex:1;
  width: ${({width}) => width - 40}px;
`

export default function App() {
  const width = Dimensions.get('window').width;

  const [newTask,setNewTask] = useState('');
  const [tasks, setTasks] = useState({});

  const _handleTestChange = (text) => {
    setNewTask(text);  
  }

  const _addTask = () => {
    const ID = Date.now().toString();
    // const key = new symbol();
    const newTaskObject = {
      [ID]:{id:ID,text:newTask,completed:false}
    };

    setTasks({...tasks, ...newTaskObject}); //객체 합성 by 스프레드문법
    setNewTask('');
  }

  //삭제
  const _deleteTask = (id) => {
    console.log(id)
    const currentTasks = {...tasks}; //객체복사
    delete currentTasks[id];
    setTasks(currentTasks);
    console.log(tasks);
  };

  //완료
  const _toggleTask = id => {
    const currentTasks = {...tasks};
    currentTasks[id]['completed'] = !currentTasks[id]['completed']
    setTasks(currentTasks);
  }
  
  //수정
  const _updateTask = item => {
    const currentTasks = {...tasks};
    currentTasks[item.id] = item;
    setTasks(currentTasks);
  }

  //입력필드에 포커스가 떠났을떄
  const _onBlur = () => setNewTask('');
  

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO LIST</Title>
        <Input 
          value={newTask}
          placeholder="+ ADD a Task"
          onChangeText={_handleTestChange}
          onSubmitEditing={_addTask}
          onBlur={_onBlur}
        />
        <List width={width}>
          {
            Object.values(tasks)
                  .reverse()
                  .map(ele => <Task 
                                key={ele.id} 
                                item={ele}
                                deleteTask={_deleteTask}
                                toggleTask={_toggleTask}
                                updateTask={_updateTask}
                                >                          
                                </Task>)
          }
        </List>  
      </Container>
    </ThemeProvider>
  );
}


