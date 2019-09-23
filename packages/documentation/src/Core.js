import React from 'react'
import {Text,Flex,Box} from "@design-system/atoms";
import styled from "styled-components";

const Link=styled.a`
  color:${props=>props.theme.colors.primary};
  :hover{
    cursor: pointer;
    color:${props=>props.theme.colors.onclick};
  }
`
/** Методы применения дизайн-системы  */
export function Core() {
    return (
        <Flex flexDirection={'column'}>
            <Box width={1/1} m={1}>
                <Text>В основе этой библиотеки используются решения:</Text>
            </Box>
            <Box  width={1/1} mb={1}>
                <Text><Text inline bold mr={1}> <Link href={'https://www.styled-components.com/'}>styled-components</Link></Text>
                     - для создания базовых компонентов и управления css-правилами по концепции CSS-in-JS </Text>
            </Box>
            <Box  width={1/1} mb={1}>
                <Text><Text inline bold mr={1}> <Link href={'https://jxnblk.com/styled-system/'}>styled-system</Link></Text>
                    - содержит коллекцию функций, расширяющих компоненты свойствами, которые позволяют управлять
                    стилями на основе заранее прописанных параметров темы. </Text>
            </Box>
        </Flex>
    )
}

export default Core
