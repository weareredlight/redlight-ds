/* eslint-disable max-len */
import React from 'react'

import Flex from '../../../elements/Flex'
import { StyledCode } from '../document.styles'

import { StyledTextsGroup, StyledTextType } from './styles'

export const TextStyles = () => (
  <>
    <StyledTextsGroup>
      <h3>Headline</h3>
      <p>
        Headlines are important for establishing a visual hierarchy and guiding users through content.
        Use them sparingly and be consistent with font size and style.
        Stick to a few levels that make sense for your content and design,
        and support them with other design elements.
      </p>
      <Flex direction='column' gap='xxsm'>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <h1 className='font-preview'>We are RedLight</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 32px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy value'> 120%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'h1\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'heading1\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <h2 className='font-preview'>We are RedLight</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 24px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy value'> 120%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'h2\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'heading2\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <h3 className='font-preview'>We are RedLight</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 20px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy value'> 120%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'h3\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'heading3\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <h4 className='font-preview'>We are RedLight</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 18px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy value'> 120%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'h4\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'heading4\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <h5 className='font-preview'>We are RedLight</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 16px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy value'> 120%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'h5\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'heading5\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <h6 className='font-preview'>We are RedLight</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 14px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy value'> 120%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'h6\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'heading6\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <span className='h7 font-preview'>We are RedLight</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 12px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy value'> 120%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'h7\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'heading7\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
      </Flex>
    </StyledTextsGroup>
    <br />
    <StyledTextsGroup>
      <h3>Sub Heading</h3>
      <p>
        Sub headings are additional levels of hierarchy that can be used to further break up content and guide users through the page.
        The regular sub heading should be smaller than the main headline but larger than the small sub-heading and can be used for secondary headings or to separate different sections of content.
        The small sub heading should be even smaller than the regular sub heading and can be used for tertiary headings or to add additional context to the content.
      </p>
      <Flex direction='column' gap='xxsm'>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <span className='sub-heading font-preview'>We are RedLight</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 12px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy value'> 120%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'subHeading\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'subHeading\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <span className='sub-heading-small font-preview'>We are RedLight</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 10px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy value'> 100%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'subHeadingSmall\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'subHeadingSmall\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
      </Flex>
    </StyledTextsGroup>
    <br />
    <StyledTextsGroup>
      <h3>Paragraph</h3>
      <ul>
        <li>
          <p>
            Regular paragraphs are the default style for body text and should be used for most of our content;
          </p>
        </li>
        <li>
          <p>
            Textblock paragraphs are used for larger blocks of text, such as in blog posts or articles. They have a larger line-height than regular paragraphs, making them easier to read for longer periods of time.
          </p>
        </li>
        <li>
          <p>
            Microcopy paragraphs are smaller bits of text that provide guidance to users, such as button labels or form instructions. They should be used sparingly and kept short and concise, as they are meant to be quickly read and understood by the user.
          </p>
        </li>
      </ul>
      <Flex direction='column' gap='xxsm'>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <p className='paragraph font-preview'>We are RedLight</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 16px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy value'> 150%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'paragraph\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'paragraph\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <p className='font-preview'>We are RedLight</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 14px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy value'> 140%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'textBlock\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'textBlock\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
        <StyledTextType>
          <Flex direction='column' align='start'>
            <span className='micro-copy font-preview'>We are RedLight</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <span className='micro-copy'>
              Font Size:
              <span className='micro-copy value'> 12px</span>
            </span>
            <span className='micro-copy'>
              Line Height:
              <span className='micro-copy'> 140%</span>
            </span>
          </Flex>
          <Flex direction='column' gap='xxxsm' align='start'>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Text Component:</p>
              <StyledCode size='small'>{'variant=\'microCopy\''}</StyledCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <StyledCode size='small' style={{ width: '100%' }}>{'include: \'microCopy\''}</StyledCode>
            </Flex>
          </Flex>
        </StyledTextType>
      </Flex>
    </StyledTextsGroup>
  </>
)

export default TextStyles
