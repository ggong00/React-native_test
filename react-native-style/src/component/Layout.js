import React from "react";
import {Text} from 'react-native';
import styled,{css} from "styled-components/native";

const common = css`
    background-color: ${({style}) => style.bgcolor};
    flex:${({style}) => style.flex};
    color${({style}) => style.color};
`;
const StyledHeader = styled.View`
    ${common};
    padding-top:50px;
`;
const StyledContents = styled.View`
    ${common};
    padding-top:100px;
`;
const StyledFooter = styled.View`
    ${common};
    padding-top:150px;
`;

const Header = (props) => {
    return (
        <StyledHeader style={props.style}>
            <Text>Header</Text>
        </StyledHeader>
    )
};

const Contents = (props) => {
    return (
        <StyledContents style={props.style}>
            <Text>Contents</Text>
        </StyledContents>
    )
};

const Footer = (props) => {
    return (
        <StyledFooter style={props.style}>
            <Text>Footer</Text>
        </StyledFooter>
    )
};

export {Header, Contents, Footer};