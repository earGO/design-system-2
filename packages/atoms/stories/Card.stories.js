import React from 'react';

import {Card} from '../src/Card';
import Text from '../src/Text'
import Flex from "../src/Flex";
import Heading from '../src/Heading'
import Button from '../src/Button'


export default {
    title: 'Design System|Card',
    parameters: {
        component: Card,
    },
};

export const basic = () => (
    <Card boxShadowSize="sm" p={4} width={1/3}>
        <Text caps align="center" >Card content</Text>
    </Card>
);
basic.story = {
    parameters: {
        info: {
            text: `
          Карточка с любым содержимым. 
        `
        },
    },
};


export const withShadow = () => (
    <Flex flexDirection={'column'}>
        <Card boxShadowSize="sm" p={4} mb={4}>
            <Text bold>sm-shadow</Text>
        </Card>
        <Card boxShadowSize="md" p={4} mb={4}>
            <Text bold>md-shadow</Text>
        </Card>
        <Card boxShadowSize="lg" p={4} mb={4}>
            <Text bold>lg-shadow</Text>
        </Card>
        <Card boxShadowSize="xl" p={4}>
            <Text bold>xl-shadow</Text>
        </Card>
    </Flex>
);

withShadow.story = {
    parameters: {
        info: {
            text: `
          **boxShadowSize** позволяет задать тень для карточки. Допустимые значения: **sm, md, lg, xl**
        `
        },
    },
};

export const complex = () => (
    <Card width={360} p={4} boxShadowSize="sm">
        <Heading tag="h4">Внимание! Важное уведомление</Heading>
        <Text fontSize={1} mt={3}>
            Сохраните все данные и завершите работу <strong>до 19:00</strong>. Система будет обновлена.
        </Text>
        <Text align="right" mt={3}>
            <Button>Ok</Button>
        </Text>
    </Card>
);
complex.story = {
    parameters: {
        info: {
            text: `
          Пример более сложной вёрстки в пределах карточки
        `
        },
    },
};
