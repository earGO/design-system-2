import React,{useState} from 'react'
import theme from '@design-system/theme'
import {Box,Flex,Card,Divider,Text,Button,Icon} from "@design-system/atoms";

const colors = theme.colors


function Palette() {
    const [collapsed,setCollapsed] = useState(true)
    console.log(colors)
    const togglePalette = () => setCollapsed(!collapsed)

    return (
        <Flex flexWrap="wrap">
            {Object.keys(colors.system).map(color => {
                if(color!=='info'&&color!=='highlightHover'){
                    return (
                        <Card key={color} width={110} borderColor={color} borderRadius={1} mr={3} mb={3}>
                            <Box height={80} bg={color} />
                            <Divider color={color} mt={0} />
                            <Text truncated title={color} align="center" my={2} px={1}>
                                <Text>{color}</Text>
                            </Text>
                        </Card>
                    )}})}
        </Flex>
    )
}

export default Palette
