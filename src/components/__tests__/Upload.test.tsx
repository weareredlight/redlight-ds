import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { UploadProps } from 'src/components/Upload'

import Upload from 'src/components/Upload'

const renderUpload = (props: Partial<UploadProps> = {}) => render(
  <Upload
    id='avatar'
    placeholder='Profile picture'
    description='PNG or JPG'
    buttonText='Browse'
    {...props}
  />,
)

describe('Upload', () => {
  it('labels the file input with the placeholder', () => {
    renderUpload()

    expect(screen.getByLabelText('Profile picture')).toHaveAttribute('type', 'file')
  })

  it('calls onUpload with the selected file', async () => {
    const user = userEvent.setup()
    const onUpload = jest.fn()
    const file = new File(['x'], 'a.png', { type: 'image/png' })
    renderUpload({ onUpload })

    await user.upload(screen.getByLabelText('Profile picture'), file)

    expect(onUpload).toHaveBeenCalledTimes(1)
    expect(onUpload.mock.lastCall[0]).toBe(file)
    expect(await screen.findByRole('button', { name: 'Browse' })).toBeEnabled()
  })

  it('shows the selected file name instead of the description', async () => {
    const user = userEvent.setup()
    renderUpload()

    await user.upload(
      screen.getByLabelText('Profile picture'),
      new File(['x'], 'a.png', { type: 'image/png' }),
    )

    expect(screen.getByTitle('a.png')).toBeInTheDocument()
    expect(screen.queryByText('PNG or JPG')).not.toBeInTheDocument()
    expect(await screen.findByRole('button', { name: 'Browse' })).toBeEnabled()
  })

  it('shows a preview of an image once it is read', async () => {
    const user = userEvent.setup()
    renderUpload()

    await user.upload(
      screen.getByLabelText('Profile picture'),
      new File(['x'], 'a.png', { type: 'image/png' }),
    )

    expect(await screen.findByRole('img', { name: 'file-preview' })).toHaveAttribute(
      'src',
      expect.stringMatching(/^data:image\/png;base64,/),
    )
  })

  it('does not show an image preview for other files', async () => {
    const user = userEvent.setup()
    renderUpload()

    await user.upload(
      screen.getByLabelText('Profile picture'),
      new File(['x'], 'cv.pdf', { type: 'application/pdf' }),
    )

    await screen.findByRole('button', { name: 'Browse' })
    expect(screen.queryByRole('img', { name: 'file-preview' })).not.toBeInTheDocument()
  })

  it('does not accept files when disabled', async () => {
    const user = userEvent.setup()
    const onUpload = jest.fn()
    renderUpload({ onUpload, disabled: true })

    await user.upload(
      screen.getByLabelText('Profile picture'),
      new File(['x'], 'a.png', { type: 'image/png' }),
    )

    expect(screen.getByLabelText('Profile picture')).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Browse' })).toBeDisabled()
    expect(onUpload).not.toHaveBeenCalled()
  })

  it('removes the file with a named button, tells the parent and lets the same file be picked again', async () => {
    const user = userEvent.setup()
    const onUpload = jest.fn()
    const onClear = jest.fn()
    const file = new File(['x'], 'a.png', { type: 'image/png' })
    renderUpload({ onUpload, onClear })
    await user.upload(screen.getByLabelText('Profile picture'), file)

    await user.click(await screen.findByRole('button', { name: 'Remove file' }))
    await user.upload(screen.getByLabelText('Profile picture'), file)

    expect(onClear).toHaveBeenCalledTimes(1)
    expect(onUpload).toHaveBeenCalledTimes(2)
  })
})
