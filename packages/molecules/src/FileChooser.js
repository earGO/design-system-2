import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {Box, Flex, Icon, Text} from '@design-system/atoms'
import DropdownMenu from './DropdownMenu'
import styled from 'styled-components'
import HintedInput from './HintedInput'

/** A signle file chooser component with file-type verification, icon for file-choosing,
 * loader-icon-while-requesting-backend, no submit button, and file size verification */

/** Hide input intself, 'cause it's not styleable */
const InputWrapper = styled(Box)`
  opacity: 0;
  width: 0;
  input {
    opacity: 0;
  }
`

function FileChooser({
  fileFormats,
  handleDownload,
  handleReplace,
  isLoading,
  ...props
}) {
  /** Create ref on label to use it in a dropdown menu to activate input */
  const inputLabelRef = useRef()

  /** set Dropdown options  */
  const DropdownOptions = [
    {
      component: (
        <label htmlFor="files" ref={inputLabelRef}>
          <Text fontSize={0} pl={2}>
            Открыть
          </Text>
        </label>
      )
    },
    {
      component: (
        <Text fontSize={0} pl={2}>
          Скачать
        </Text>
      ),
      HandleClick:
        handleDownload && typeof handleDownload === 'function' && handleDownload
    },
    {
      component: (
        <Text fontSize={0} pl={2}>
          Заменить
        </Text>
      ),
      HandleClick:
        handleReplace && typeof handleReplace === 'function' && handleReplace
    }
  ]
  return (
    <form>
      <Flex>
        <HintedInput
          hint={'Введите название файла'}
          placeholder={'Файл 1'}
          size={'small'}
          border={'1px solid lightGrey'}
        />
        <InputWrapper>
          <input
            type="file"
            id="files"
            name="image_uploads"
            accept={fileFormats}
            multiple
          />
        </InputWrapper>
        <Flex alignItems={'center'} justifyContent={'center'} pl={1}>
          {isLoading ? (
            <Icon name={'refresh'} spin />
          ) : (
            <DropdownMenu withArrow content={DropdownOptions} width={88}>
              <Icon name={'assignment'} size={1} />
            </DropdownMenu>
          )}
        </Flex>
      </Flex>
    </form>
  )
}

FileChooser.propTypes = {
  fileFormats: PropTypes.string,
  isLoading: PropTypes.bool
}

FileChooser.defaultProps = {
  fileFormats: '.jpg, .jpeg, .png',
  isLoading: false
}

export default FileChooser
