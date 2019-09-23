import React from 'react'
import {Card, Heading, Text, Box} from '@design-system/atoms'

/** Тема, или файл переменных цветов, тайминговых функций, шрифтов, отступов и прочего.
 *
 * Спецификация https://system-ui.com/theme
 */
export function Theme() {
    return (
        <Heading tag={"h3"} color={'warning'}>Привет, я заголовок, стилизованный темой</Heading>
    )
}

export default Theme
