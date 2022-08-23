import React,{useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native'
import { StatusBar } from 'react-native';
import theme from './theme';
import Input from './components/Input';

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



export default function App() {

  const [newTask,setNewTask] = useState('');

  const _handleTestChange = (text) => {
    setNewTask(text);    
  }

  const _addTask = () => {
    alert(`Add : ${newTask}`)
    setNewTask('');
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO LIST</Title>
        <Input 
          placeholder="+ ADD a Task"
          value={newTask}
          onChangeText={_handleTestChange}
          onSubmitEditing={_addTask}
        />
      </Container>
    </ThemeProvider>
  );
}


