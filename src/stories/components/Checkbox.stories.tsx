import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

import Checkbox, { CheckboxProps } from '../../components/Checkbox'

// Keeps the checked state, so the checkbox can be clicked and the "checked" control still works
const Template = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked ?? false)
  useEffect(() => setChecked(args.checked ?? false), [args.checked])

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={e => {
        setChecked(e.target.checked)
        args.onChange?.(e)
      }}
    />
  )
}

const meta = {
  title: 'Components/Data Input/Checkbox',
  component: Checkbox,
  render: Template,
  parameters: {
    docs: {
      description: {
        component:
          'A checkbox is a type of button that lets the user choose between two opposite states, actions, or values. A selected checkbox is considered on when it contains a checkmark and off when it is empty. A checkbox is almost always followed by a title unless it appears in a checklist.',
      },
    },
  },
  args: {
    id: 'checkbox-default',
    onChange: fn(),
  },
  argTypes: {
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    state: {
      control: 'radio',
      options: ['null', 'error', 'dirty'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'This is the label',
    description: 'This is the description',
  },
}

export const LabelPosition: Story = {
  args: {
    id: 'checkbox-left',
    label: 'This is the label',
    labelPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Using the "labelPosition" prop, you can change the position of the label.',
      },
    }
  }
}

export const Checked: Story = {
  args: {
    id: 'checkbox-checked',
    label: 'This is the label',
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "checked" and "onChange" to control the checkbox.',
      },
    }
  }
}

export const Disabled: Story = {
  args: {
    id: 'checkbox-disabled',
    label: 'This is the label',
    checked: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled checkboxes cannot be changed.',
      },
    }
  }
}

export const Dirty: Story = {
  args: {
    id: 'checkbox-dirty',
    label: 'This is the label',
    checked: true,
    state: 'dirty',
  },
  parameters: {
    docs: {
      description: {
        story: 'The "dirty" state outlines the field in the accent color, for example to mark a value the user has changed.',
      },
    }
  }
}

export const Error: Story = {
  args: {
    id: 'checkbox-error-example',
    label: 'This is the label',
    state: 'error',
    errorMsg: "Don't forget to check this option",
  },

  parameters: {
    docs: {
      description: {
        story: 'If there is an error, it will turn red and may also show a custom error message'
      }
    },
  },
}
