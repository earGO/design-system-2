import React,{useState} from 'react';

import {Checkbox} from '../src/Checkbox';
import Box from '../src/Box'


/** I'll write simple component to demonsrate checkbox working with state */

const StateCheckbox = ({...props}) =>{
    const [checked,setChecked] = useState(true)

    const handleChange = () => {
        setChecked(!checked)
    }
    return (
        <Box>
            <Checkbox mr={2} label="Согласен" checked={checked} onChange={handleChange}/>
            <Checkbox label="Не согласен" checked={!checked} onChange={handleChange} />
        </Box>
    )
}



export default {
    title: 'Design System|Checkbox',
    parameters: {
        component: Checkbox,
    },
};

export const basic = () => (
    <Checkbox/>
);

export const simpleWithState = () => {
    const [checked,setChecked] = useState(true)

    const handleChange = () => {
        setChecked(!checked)
    }
    return (
        <Box>
            <Checkbox mr={2} label="Согласен" checked={checked} onChange={handleChange}/>
            <Checkbox label="Не согласен" checked={!checked} onChange={handleChange} />
        </Box>
    )
};

simpleWithState.story = {
    parameters: {
        info: {
            text: `
          Пример использования со стэйтом и React Hooks
        `
        },
    },
};

export const variousSizes = () => (
    <Box width={1/3}>
        <Checkbox label="small" size="small" />
        <Checkbox ml={2} label="medium" size="medium" />
        <Checkbox ml={2} label="large" size="large" />
    </Box>
);

variousSizes.story = {
    parameters: {
        info: {
            text: `
          принимает параметр **size**, задающий размер чекбокса, соответственно 14рх, 16рх, 20рх
        `
        },
    },
};

export const disabled = () => (
    <Box width={1/3}>
        <Checkbox label="Disabled" disabled />
        <Checkbox ml={2} label="Disabled checked" disabled checked />
    </Box>
);

disabled.story = {
    parameters: {
        info: {
            text: `
          Параметр **disabled** позволяет "выключить" чекбокс. 
        `
        },
    },
};
