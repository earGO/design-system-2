import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'
import styled from 'styled-components'
import Hint from '../src/Hint'
import {Box, ContentBox} from '@design-system/components'
import SearchInput from '../src/SearchInput'

const HintTrigger = styled(Box)`
  display: inline-block;
  background: rgba(255, 0, 0, 0.05);
`

storiesOf(`Hint`, module)
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
    'Default',
    () => (
      <ThemeProvider theme={theme}>
        <ContentBox
          contentwidth={900}
          justifyContent={'center'}
          height={400}
          alignItems={'center'}
        >
          {' '}
          <Hint>
            <HintTrigger width={'200px'} height={'100px'}>
              Hint
            </HintTrigger>
          </Hint>
        </ContentBox>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          По умолчанию без параметров подсказка выводится посередине обернутого компонента, без отступа, с содержимым по умолчанию. По умолчанию подсказка появляется по клику. 
        `
      }
    }
  )
  .add(
    'Adjust position',
    () => (
      <ThemeProvider theme={theme}>
        <ContentBox
          contentwidth={900}
          justifyContent={'center'}
          height={400}
          alignItems={'center'}
        >
          <Hint placement={'top'} align={{offsetX: 10, offsetY: 30}}>
            <HintTrigger width={'200px'}>Hint</HintTrigger>
          </Hint>
        </ContentBox>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          Передавая параметр align={offsetX, offsetY} можно тонко регулировать положение поповера. 
        `
      }
    }
  )
  .add(
    'Custom hint text',
    () => (
      <ThemeProvider theme={theme}>
        <ContentBox
          contentwidth={900}
          justifyContent={'center'}
          height={400}
          alignItems={'center'}
        >
          <Hint placement={'top'} caption={'Подсказка на русском'}>
            <HintTrigger width={'200px'}>Hint</HintTrigger>
          </Hint>
        </ContentBox>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
         Можно передавать текст подсказки. 
        `
      }
    }
  )
  .add(
    'Show on hover',
    () => (
      <ThemeProvider theme={theme}>
        <ContentBox
          contentwidth={900}
          justifyContent={'center'}
          height={400}
          alignItems={'center'}
        >
          <Hint
            placement={'top'}
            caption={'Подсказка на русском'}
            events={['hover']}
          >
            <HintTrigger width={'200px'}>Hint</HintTrigger>
          </Hint>
        </ContentBox>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
         Можно передавать текст подсказки. 
        `
      }
    }
  )
  .add(
    'Show on focus',
    () => (
      <ThemeProvider theme={theme}>
        <ContentBox
          contentwidth={900}
          justifyContent={'center'}
          height={400}
          alignItems={'center'}
        >
          <Hint
            placement={'top'}
            caption={'Подсказка при фокусе на поиске'}
            events={['focus']}
          >
            <SearchInput />
          </Hint>
        </ContentBox>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
         Можно передавать текст подсказки. 
        `
      }
    }
  )
