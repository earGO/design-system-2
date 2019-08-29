import React from 'react'
import {storiesOf} from '@storybook/react'

import theme from '@design-system/theme'

import {Flex, Text, Collapse} from '../src'

storiesOf(`Collapse`, module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      styles: {
        header: {
          h1: {
            color: 'red'
          }
        }
      }
    }
  })
  .add(
    'Collapse panel default',
    () => (
      <Collapse theme={theme}>
        <Collapse.Panel key="key1" title="Title number 1" theme={theme}>
          <Text p={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Collapse.Panel>
        <Collapse.Panel key="key2" title="Title number 2" theme={theme}>
          <Text p={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Collapse.Panel>
      </Collapse>
    ),
    {
      info: {
        text: `
          По умолчанию без параметров выводится простым списком. 
        `
      }
    }
  )
  .add(
    'One Child',
    () => (
      <Flex width={1500}>
        <Collapse theme={theme}>
          <Collapse.Panel key="key1" title="Title number 1" theme={theme}>
            <Text p={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse.Panel>
        </Collapse>
      </Flex>
    ),
    {
      info: {
        text: `
          Можно с одним child. 
        `
      }
    }
  )
  .add(
    'Title positioning',
    () => (
      <Flex width={1500}>
        <Collapse theme={theme}>
          <Collapse.Panel
            key="key1"
            title="single title"
            theme={theme}
            titleAlignment={'flex-end'}
          >
            <Text p={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse.Panel>
        </Collapse>
      </Flex>
    ),
    {
      info: {
        text: `
          Можно управлять положением заголовка, разворачивающего панель. 
          
          Это делается в каждой панели компонента через параметр titleAlignment, принимающего на вход синтаксис justify-content от flex   
        `
      }
    }
  )
  .add(
    'No children',
    () => (
      <Flex width={1500}>
        <Collapse theme={theme}></Collapse>
      </Flex>
    ),
    {
      info: {
        text: `
          Если нет ни одного children - компонент будет пустым.    
        `
      }
    }
  )
