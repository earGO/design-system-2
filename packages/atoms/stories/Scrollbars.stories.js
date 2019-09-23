import React, {useRef, useEffect, useState} from 'react'

import {Scrollbars} from '../src/Scrollbars'
import {Card, Box, Text, Flex, Button} from '../src/index'

export default {
  title: 'Design System|Scrollbars',
  parameters: {
    component: Scrollbars
  }
}

export const basic = () => (
  <Card>
    <Scrollbars style={{height: 200}}>
      <Box m={3}>
        <Text mt={2}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
        <Text mt={3} color="primary">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
        <Text mt={3} color="success">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
        <Text mt={3} color="warning">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
        <Text mt={3} color="error">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
      </Box>
    </Scrollbars>
  </Card>
)
basic.story = {
  parameters: {
    info: {
      text: `
           Добавляет вертикальный и горизинтальный скроллбар для блока.
           Обеспечивает единое отоборажение скорллбара во всех баузерах и операционных системах. 
           Является обёрткой над https://malte-wessel.com/react-custom-scrollbars/.  
           Главное, зачем нужна обёртка - это передача в компонент внешнего ref, чтобы можно было
           вызывать его внутренние методы и читать его внутренние статусы.
        `
    }
  }
}

export const withRef = () => {
  const [showButton, setShowButton] = useState(false)
  const [actionMessage, setAcctionMessage] = useState(null)
  /* Create reference to scrollbars to invoke local methods */
  const scrollBarsRef = useRef(null)
  /* Обработка клика на кнопку перемотки */
  const onUpButtonClick = () => {
    /* Invoke local method of scrollbars to scroll to top */
    scrollBarsRef.current !== null && scrollBarsRef.current.scrollToTop()
    setShowButton(!showButton)
  }

  const emulateAnAction = () => {
    console.log(scrollBarsRef.current.getValues().top > 0)
    scrollBarsRef.current.getValues().top > 0 && setShowButton(!showButton)
  }

  return (
    <Flex flexDirection={'column'}>
      <Box flex={1} mx="auto" width="100%" style={{overflow: 'hidden'}}>
        <Scrollbars
          universal
          autoHide
          style={{height: 200}}
          ref={scrollBarsRef}
        >
          <Box m={3}>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Text>
            <Text mt={3} color="primary">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Text>
            <Text mt={3} color="success">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Text>
            <Text mt={3} color="warning">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Text>
            <Text mt={3} color="error">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Text>
          </Box>
        </Scrollbars>
        {showButton && (
          <Box width={80}>
            <Button onClick={onUpButtonClick}>ScrollTop</Button>
          </Box>
        )}
        <Box width={80}>
          <Button m={2} onClick={emulateAnAction}>
            emulate rerender
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

withRef.story = {
  parameters: {
    info: {
      text: `
          Компонент поддерживает некоторое количество внутренних методов, например "Перемотка наверх". Для их вызова необходимо использовать react ref's.
          
          Полный список методов можно найти по ссылке из описания.
          
          Отдельно по кнопке "emulate rerender". Управление scrollbars происходит через ref.
          Содержимое в ref появляется ПОСЛЕ рендера DOM, поэтому завязать логику типа контекстной кнопки перемотки наверх
          в лоб не получится. Логика начнёт работать только если DOM будет заново рендериться. 
          
          Предполагается, что в случае, когда понадобится интерактивная кнопка перемотки наверх, DOM будет перерисовываться.
          Для эмуляции этого события и нужна кнопка. 
        `
    }
  }
}
