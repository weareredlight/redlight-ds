import { SymbolIcon, FileTextIcon, Cross2Icon } from '@radix-ui/react-icons'
import { useState, useRef, useCallback } from 'react'

import type * as Stitches from '@stitches/react'
import type { ChangeEvent } from 'react'

import Button from '../Button'
import Label from '../shared/Label'

import {
  StyledUpload,
  StyledUploadInput,
  StyledFile,
  StyledTrigger,
} from './styles'

export type UploadProps = {
  id: string
  size?: Stitches.VariantProps<typeof StyledUpload>['size']
  fullWidth?: Stitches.VariantProps<typeof StyledUpload>['fullWidth']
  placeholder: string
  description?: string
  buttonText?: string
  defaultFile?: File
  onUpload?: (file: File) => void
  disabled?: boolean
  clearBtn?: boolean
}

const isImage = (ext: string) => ext === 'png' || ext === 'jpg' || ext === 'jpeg'

const Upload = ({
  id,
  size = 'normal',
  fullWidth = false,
  placeholder,
  description,
  buttonText,
  defaultFile,
  onUpload,
  disabled,
  clearBtn = false,
  ...props
}: UploadProps) => {
  const [fileName, setFileName] = useState<string>(defaultFile ? defaultFile.name : '')
  const [fileUrl, setFileUrl] = useState<string | null | undefined>(defaultFile ? URL.createObjectURL(defaultFile) : '')
  const [fileExtension, setFileExtension] = useState<string>(defaultFile ? defaultFile.name.split('.').pop() || '' : '')
  const [loading, setLoading] = useState<boolean>(false)

  const fileInput = useRef<HTMLInputElement>(null)
  const selectFile = () => {
    fileInput.current?.click()
  }

  const handleSelectedFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return

    const [file] = Array.from(e.target.files)
    if (!file) return

    let shortenFileName

    const fullFileName = file.name.split('.').shift()
    if (!fullFileName) throw new Error('No file name')

    if (fullFileName.length >= 10) {
      shortenFileName = `${fullFileName.substring(0, 10)}..`
    } else {
      shortenFileName = fullFileName
    }
    const fileExtension = file.name.split('.').pop()
    if (!fileExtension) throw new Error('No file extension')

    setFileExtension(fileExtension)
    setFileName(`${shortenFileName}.${file?.name.split('.').pop()}`)
    onUpload?.(file)
    const reader = new FileReader()
    reader.onload = e => {
      setFileUrl(e?.target?.result as string)
      setLoading(false)
    }
    setLoading(true)
    reader.readAsDataURL(file)
  }, [onUpload])

  return (
    <StyledUpload
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      <StyledUploadInput type='file' id='file' ref={fileInput} onChange={handleSelectedFile} disabled={disabled} />
      {fileUrl && clearBtn && (
        <Button
          variant='danger'
          // eslint-disable-next-line react/no-unstable-nested-components
          iconComponent={() => <Cross2Icon />}
          iconPosition='iconOnly'
          onClick={() => {
            setFileName('')
            setFileUrl(null)
          }}
          extraClasses='clear-btn'
        >
          Clear
        </Button>
      )}
      <StyledFile>
        {fileUrl && isImage(fileExtension) ? (
          <img src={fileUrl} alt='file-preview' />
        ) : !fileUrl ? null : <FileTextIcon />}
        {(size === 'large' && loading) && <span><SymbolIcon /></span>}
        {fileName ? (
          <span>{fileName}</span>
        ) : (
          <Label id={id} label={placeholder} description={description} />
        )}
      </StyledFile>
      <StyledTrigger htmlFor='file'>
        {size === 'normal' ? (
          <Button
            variant='neutral'
            onClick={selectFile}
            disabled={disabled}
            iconPosition={loading ? 'left' : undefined}
          >
            {loading ? <SymbolIcon /> : buttonText}
          </Button>
        ) : null}
      </StyledTrigger>
    </StyledUpload>
  )
}

export default Upload
