// Code snippets shown on the v0.3.0 release page

export const IconsBefore = `import { PlusIcon } from 'lucide-react'

// The icon had to be wrapped in a function
const AddIcon = () => <PlusIcon />

<Button iconComponent={AddIcon}>New project</Button>`

export const IconsAfter = `import { PlusIcon } from 'lucide-react'

// Pass the icon itself. A wrapper function still works
<Button iconComponent={PlusIcon}>New project</Button>`

export const ErrorMarkup = `// What a field in the error state renders now
<input id="email" aria-invalid="true" aria-describedby="email-error" />
<span id="email-error">Enter an email.</span>`

export const ReactHookForm = `import { Controller, useForm } from 'react-hook-form'
import { Select } from '@weareredlight/design-system'

const { control, handleSubmit } = useForm()

<Controller
  name='country'
  control={control}
  rules={{ required: 'Choose a country.' }}
  render={({ field, fieldState }) => (
    <Select
      ref={field.ref} // new: react-hook-form can focus the field
      id='country'
      label='Country'
      placeholder='Choose a country'
      value={field.value}
      options={countries}
      getLabel={c => c.name}
      getValue={c => c.code}
      onChange={e => field.onChange(e.target.value)}
      state={fieldState.error ? 'error' : 'null'}
      errorMsg={fieldState.error?.message}
    />
  )}
/>`

export const TextElements = `<Text variant='h1'>Projects</Text>
// Before: <span class="rl-Text-text rl-Text-h1">Projects</span>
// Now:    <h1 class="rl-Text-text rl-Text-h1">Projects</h1>

// Inside a <button>, <label> or <a>, use microCopy: it stays a <span>
<label>
  <Text variant='microCopy'>Notifications</Text>
</label>`

export const ToggleRef = `// Before
const toggleRef = useRef<HTMLInputElement>(null)
// Now: the switch is a button
const toggleRef = useRef<HTMLButtonElement>(null)

<Toggle ref={toggleRef} id='notifications' value={on} onChange={onChange} />`
