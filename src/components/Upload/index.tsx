import { SymbolIcon, FileTextIcon } from '@radix-ui/react-icons'
import React, { useState, useRef, useCallback } from 'react'

import type * as Stitches from '@stitches/react'
import type { ChangeEvent } from 'react'

import {
  StyledUpload, StyledUploadInput, StyledFile, StyledTrigger
} from './styles'

import Button from 'components/Button'
import Label from 'components/shared/Label'

export type Props = {
  id: string
  size?: Stitches.VariantProps<typeof StyledUpload>['size']
  placeholder: string,
  description?: string,
  buttonText?: string,
  onUpload?: (file: File) => void,
  disabled?: boolean
}

const isImage = (ext: string) => ext === 'png' || ext === 'jpg' || ext === 'jpeg'

const Upload = ({
  id,
  size,
  placeholder,
  description,
  buttonText,
  onUpload,
  disabled,
  ...props
}: Props) => {
  const [fileName, setFileName] = useState<string>('')
  const [fileUrl, setFileUrl] = useState<string | null | undefined>('')
  const [fileExtension, setFileExtension] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const fileInput = useRef<HTMLInputElement>(null)
  const selectFile = () => {
    fileInput.current?.click()
  }

  const handleSelectedFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const [file] = Array.from(e.target.files)
    if (!file) throw new Error('No file selected')

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
    <StyledUpload disabled={disabled} size={size} {...props}>
      <StyledUploadInput type='file' id='file' ref={fileInput} onChange={handleSelectedFile} disabled={disabled} />
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
