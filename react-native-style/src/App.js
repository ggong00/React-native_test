import styled,{css} from "styled-components/native";
import {Header, Contents, Footer} from './component/Layout';

const Main = styled.View`
  flex:1;
  background-color:yellow;
`

const styledOfHeader = {
  flex:0.3,
  bgcolor: '#f00',
  color:'#fff'
}
const styledOfContents = {
  flex:1,
  bgcolor: '#0f0',
  color:'#fff'
}
const styledOfFooter = {
  flex:0.1,
  bgcolor: '#00f',
  color:'#fff'
}

export default function App() {
  return (
    <Main>
      <Header style={styledOfHeader}/>
      <Contents style={styledOfContents}/>
      <Footer style={styledOfFooter}/>
    </Main>
  );
}
