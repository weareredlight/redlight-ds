/* eslint-disable max-len */
import React from 'react'

import Flex from '../../../elements/Flex'
import { DocCode } from '../document'

import styles from './styles.module.scss'

export const TextStyles = () => (
  <>
    <div className={styles.group}>
      <h3>Headline</h3>
      <p>
        Headlines are important for establishing a visual hierarchy and guiding users through content.
        Use them sparingly and be consistent with font size and style.
        Stick to a few levels that make sense for your content and design,
        and support them with other design elements.
      </p>
      <Flex direction='column' gap='xxsm'>
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'h1\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.heading1</DocCode>
            </Flex>
          </Flex>
        </div>
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'h2\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.heading2</DocCode>
            </Flex>
          </Flex>
        </div>
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'h3\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.heading3</DocCode>
            </Flex>
          </Flex>
        </div>
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'h4\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.heading4</DocCode>
            </Flex>
          </Flex>
        </div>
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'h5\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.heading5</DocCode>
            </Flex>
          </Flex>
        </div>
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'h6\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.heading6</DocCode>
            </Flex>
          </Flex>
        </div>
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'h7\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.heading7</DocCode>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </div>
    <br />
    <div className={styles.group}>
      <h3>Sub Heading</h3>
      <p>
        Sub headings are additional levels of hierarchy that can be used to further break up content and guide users through the page.
        The regular sub heading should be smaller than the main headline but larger than the small sub-heading and can be used for secondary headings or to separate different sections of content.
        The small sub heading should be even smaller than the regular sub heading and can be used for tertiary headings or to add additional context to the content.
      </p>
      <Flex direction='column' gap='xxsm'>
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'subHeading\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.subHeading</DocCode>
            </Flex>
          </Flex>
        </div>
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'subHeadingSmall\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.subHeadingSmall</DocCode>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </div>
    <br />
    <div className={styles.group}>
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
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'paragraph\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.paragraph</DocCode>
            </Flex>
          </Flex>
        </div>
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'textBlock\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.textBlock</DocCode>
            </Flex>
          </Flex>
        </div>
        <div className={styles.textType}>
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
              <DocCode size='small'>{'variant=\'microCopy\''}</DocCode>
            </Flex>
            <Flex gap='xxxsm' justify='end' style={{ width: '100%' }}>
              <p>Styles:</p>
              <DocCode size='small' style={{ width: '100%' }}>@include typography.microCopy</DocCode>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </div>
  </>
)

export default TextStyles
