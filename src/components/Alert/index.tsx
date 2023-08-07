import { CheckCircledIcon, InfoCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons'
import 'react-toastify/dist/ReactToastify.css'
import { toast as toastOG, Slide } from 'react-toastify'

import type { ToastOptions } from 'react-toastify'

import Flex from '../../elements/Flex'
import Text from '../Text'

export { ToastContainer } from 'react-toastify'

const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  transition: Slide,
  draggable: false,
  pauseOnHover: false,
  icon: false,
  closeButton: false,
  hideProgressBar: false,
  style: {
    position: 'relative',
    borderRadius: 'var(--radii-sm)',
    padding: 'var(--space-xxsm) var(--space-xxxlg) var(--space-xxsm) var(--space-lg)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-xxsm)',
    maxHeight: 'unset',
    backdropFilter: 'blur(5px)',
  },
  bodyStyle: {
    position: 'relative',
    padding: 0,
  },
  progressStyle: {
    height: '2px'
  },
}

const successOptions: ToastOptions = {
  ...defaultOptions,
  style: {
    ...defaultOptions.style,
    background: 'var(--colors-success100)',
  },
  bodyStyle: {
    ...defaultOptions.bodyStyle,
  },
  progressStyle: {
    ...defaultOptions.progressStyle,
    background: 'var(--colors-success)'
  },
}
const errorOptions: ToastOptions = {
  ...defaultOptions,
  style: {
    ...defaultOptions.style,
    background: 'var(--colors-danger100)',
  },
  bodyStyle: {
    ...defaultOptions.bodyStyle,
  },
  progressStyle: {
    ...defaultOptions.progressStyle,
    background: 'var(--colors-danger)'
  },
}

const infoOptions: ToastOptions = {
  ...defaultOptions,
  style: {
    ...defaultOptions.style,
    background: 'var(--colors-primary200)',
  },
  bodyStyle: {
    ...defaultOptions.bodyStyle,
  },
  progressStyle: {
    ...defaultOptions.progressStyle,
    background: 'var(--colors-primary)'
  },
}

export const alert = {
  success: (title: string, description?: string, options?: ToastOptions) => toastOG(
    <Flex direction='column' justify='start' align='start' gap='xxsm'>
      <Text variant='h6' color='success500'>{title}</Text>
      <Text variant='microCopy' color='success'>{description}</Text>
      <CheckCircledIcon
        style={{
          color: 'var(--colors-success500)',
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 16,
          height: 16,
        }}
      />
    </Flex>,
    { ...successOptions, ...options, type: 'success' }
  ),
  error: (title: string, description?: string, options?: ToastOptions) => toastOG(
    <Flex direction='column' justify='start' align='start' gap='xxsm'>
      <Text variant='h6' color='danger500'>{title}</Text>
      <Text variant='microCopy' color='danger'>{description}</Text>
      <CrossCircledIcon
        style={{
          color: 'var(--colors-danger500)',
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 16,
          height: 16,
        }}
      />
    </Flex>,
    { ...errorOptions, ...options, type: 'error' }
  ),
  info: (title: string, description?: string, options?: ToastOptions) => toastOG(
    <Flex direction='column' justify='start' align='start' gap='xxsm'>
      <Text variant='h6' color='primary600'>{title}</Text>
      <Text variant='microCopy' color='primary'>{description}</Text>
      <InfoCircledIcon
        style={{
          color: 'var(--colors-primary600)',
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 16,
          height: 16,
        }}
      />
    </Flex>,
    { ...infoOptions, ...options, type: 'info' }
  ),
}
export default alert
