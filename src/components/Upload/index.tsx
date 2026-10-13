import { SymbolIcon, FileTextIcon, Cross2Icon } from '@radix-ui/react-icons'
import { useState, useRef, useCallback } from 'react'

import type { ChangeEvent, CSSProperties } from 'react'

import { cx } from '../../utils'
import Button from '../Button'
import Label from '../shared/Label'

import styles from './styles.module.scss'

export type UploadProps = {
  id: string
  size?: 'normal' | 'large'
  fullWidth?: boolean
  placeholder: string
  description?: string
  buttonText?: string
  defaultFile?: File
  onUpload?: (file: File) => void
  disabled?: boolean
  className?: string
  style?: CSSProperties
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
  className,
  style,
  ...props
}: UploadProps) => {
  const [fileName, setFileName] = useState<string>(defaultFile ? defaultFile.name : '')
  const [fileUrl, setFileUrl] = useState<string | null | undefined>(defaultFile ? URL.createObjectURL(defaultFile) : '')
  const [fileExtension, setFileExtension] = useState<string>(defaultFile ? defaultFile.name.split('.').pop() || '' : '')
  const [loading, setLoading] = useState<boolean>(false)

  // the extension stays visible; only the base name gets an ellipsis when space runs out
  const extensionIndex = fileName.lastIndexOf('.')
  const fileBaseName = extensionIndex > 0 ? fileName.slice(0, extensionIndex) : fileName
  const fileNameExtension = extensionIndex > 0 ? fileName.slice(extensionIndex) : ''

  const fileInput = useRef<HTMLInputElement>(null)
  const selectFile = () => {
    fileInput.current?.click()
  }

  const handleSelectedFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return

    const [file] = Array.from(e.target.files)
    if (!file) return

    setFileExtension(file.name.split('.').pop() || '')
    setFileName(file.name)
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
    <div
      className={cx(styles.wrapper, fullWidth && styles.fullWidth, className)}
      style={style}
      {...props}
    >
      {size === 'normal' && <Label id={id} label={placeholder} className={styles.label} />}
      <div className={cx(styles.upload, styles[size], disabled && styles.disabled)}>
        <input className={styles.uploadInput} type='file' id={id} ref={fileInput} onChange={handleSelectedFile} disabled={disabled} />
        <div className={styles.file}>
          {fileUrl && isImage(fileExtension) ? (
            <img src={fileUrl} alt='file-preview' />
          ) : !fileUrl ? null : <FileTextIcon />}
          {(size === 'large' && loading) && <span><SymbolIcon /></span>}
          {fileName ? (
            <span className={styles.fileName} title={fileName}>
              <span className={styles.fileNameBase}>{fileBaseName}</span>
              <span>{fileNameExtension}</span>
            </span>
          ) : (
            <Label
              id={id}
              label={size === 'large' ? placeholder : undefined}
              description={description}
              className={styles.label}
            />
          )}
        </div>
        {fileUrl && (
          <Button
            variant='danger'
            // eslint-disable-next-line react/no-unstable-nested-components
            iconComponent={() => <Cross2Icon />}
            iconPosition='iconOnly'
            onClick={() => {
              setFileName('')
              setFileUrl(null)
            }}
            className={styles.clearBtn}
          >
            Clear
          </Button>
        )}
        <label className={styles.trigger} htmlFor={id}>
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
        </label>
      </div>
    </div>
  )
}

export const uploadSelector = `.${styles.upload}`

export default Upload
