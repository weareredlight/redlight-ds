/* eslint-disable max-len */
import React from 'react'

import { StyledTextsGroup, StyledTextType } from './styles'

import Text from 'components/Text'
import Flex from 'elements/Flex'
import { StyledCode } from 'styles/Document.styles'

const TextStyles = () => (
  <>
    <StyledTextsGroup>
      <Text variant='h3' color='neutral800'>Headline</Text>
      <Text variant='textBlock' color='neutral700'>
        Headlines are important for establishing a visual hierarchy and guiding users through content.
        Use them sparingly and be consistent with font size and style.
        Stick to a few levels that make sense for your content and design,
        and support them with other design elements.
      </Text>
      <Flex direction='column' gap='xxsm'>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='h1' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 32px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 120%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'heading1\''}</StyledCode>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='h2' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 24px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 120%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'heading2\''}</StyledCode>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='h3' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 20px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 120%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'heading3\''}</StyledCode>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='h4' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 18px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 120%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'heading4\''}</StyledCode>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='h5' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 16px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 120%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'heading5\''}</StyledCode>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='h6' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 14px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 120%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'heading6\''}</StyledCode>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='h7' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 12px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 120%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'heading7\''}</StyledCode>
        </StyledTextType>
      </Flex>
    </StyledTextsGroup>
    <StyledTextsGroup>
      <Text variant='h3' color='neutral800'>Sub Heading</Text>
      <Text variant='textBlock' color='neutral700'>
        Sub headings are additional levels of hierarchy that can be used to further break up content and guide users through the page.
        The regular sub heading should be smaller than the main headline but larger than the small sub-heading and can be used for secondary headings or to separate different sections of content.
        The small sub heading should be even smaller than the regular sub heading and can be used for tertiary headings or to add additional context to the content.
      </Text>
      <Flex direction='column' gap='xxsm'>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='subHeading' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 12px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 120%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'subHeading\''}</StyledCode>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='subHeadingSmall' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 10px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 100%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'subHeadingSmall\''}</StyledCode>
        </StyledTextType>
      </Flex>
    </StyledTextsGroup>
    <StyledTextsGroup>
      <Text variant='h3' color='neutral800'>Paragraph</Text>
      <ul>
        <li>
          <Text variant='textBlock' color='neutral700'>
            Regular paragraphs are the default style for body text and should be used for most of our content;
          </Text>
        </li>
        <li>
          <Text variant='textBlock' color='neutral700'>
            Textblock paragraphs are used for larger blocks of text, such as in blog posts or articles. They have a larger line-height than regular paragraphs, making them easier to read for longer periods of time.
          </Text>
        </li>
        <li>
          <Text variant='textBlock' color='neutral700'>
            Microcopy paragraphs are smaller bits of text that provide guidance to users, such as button labels or form instructions. They should be used sparingly and kept short and concise, as they are meant to be quickly read and understood by the user.
          </Text>
        </li>
      </ul>
      <Flex direction='column' gap='xxsm'>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='paragraph' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 16px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 150%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'paragraph\''}</StyledCode>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='textBlock' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 14px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 140%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'textBlock\''}</StyledCode>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <Text variant='microCopy' color='neutral900'>We are RedLight</Text>
            <Text variant='textBlock' color='neutral'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Text variant='microCopy' color='neutral600'>
              Font Size:
              <Text variant='microCopy' color='primary'> 12px</Text>
            </Text>
            <Text variant='microCopy' color='neutral600'>
              Line Height:
              <Text variant='microCopy' color='primary'> 140%</Text>
            </Text>
          </Flex>
          <StyledCode>{'include: \'microCopy\''}</StyledCode>
        </StyledTextType>
      </Flex>
    </StyledTextsGroup>
  </>
)

export default TextStyles
