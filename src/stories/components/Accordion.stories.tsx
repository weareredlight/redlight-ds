import { PackageIcon } from 'lucide-react'
import { fn } from 'storybook/test'

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'

import Accordion, { AccordionGroup } from 'src/components/Accordion'
import Button from 'src/components/Button'
import Pill from 'src/components/Pill'
import Text from 'src/components/Text'
import Flex from 'src/elements/Flex'

// The simple examples read better at a typical content width
const MaxWidth: Decorator = Story => <div style={{ width: '100%', maxWidth: 720 }}><Story /></div>

const meta = {
  title: 'Components/Displays/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'An accordion shows a header that is always visible and reveals its body when the header is clicked (or activated with Enter or Space). Both the header and the body accept any content, so it works for a simple question and answer or for a detailed row with its own layout. Keep buttons and links out of the header, since the header is itself a button; put them in the body instead.',
      },
    },
  },
  args: {
    header: 'What is an accordion?',
    children: 'An accordion reveals supporting content when expanded.',
    onOpenChange: fn(),
  },
  argTypes: {
    header: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [MaxWidth],
  parameters: {
    docs: {
      source: {
        code: `
<Accordion header='What is an accordion?'>
  An accordion reveals supporting content when expanded.
</Accordion>
`,
      },
    },
  },
}

export const DefaultOpen: Story = {
  decorators: [MaxWidth],
  args: {
    defaultOpen: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use "defaultOpen" to start expanded. To control it yourself, pass "open" and "onOpenChange" instead.',
      },
    },
  },
}

export const Disabled: Story = {
  decorators: [MaxWidth],
  args: {
    disabled: true,
  },
}

export const Stacked: Story = {
  decorators: [MaxWidth],
  render: args => (
    <AccordionGroup closeOthers={false}>
      <Accordion {...args} />
      <Accordion {...args} />
    </AccordionGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stack accordions in an "AccordionGroup". With closeOthers={false} each one opens and closes on its own.',
      },
      source: {
        code: `
<AccordionGroup closeOthers={false}>
  <Accordion header='What is an accordion?'>...</Accordion>
  <Accordion header='What is an accordion?'>...</Accordion>
</AccordionGroup>
`,
      },
    },
  },
}

const faqs = [
  {
    question: 'What is an accordion?',
    answer: 'An accordion reveals supporting content when expanded.',
  },
  {
    question: 'When should I use one?',
    answer: 'When the content is useful but not needed all the time, such as answers, details or settings.',
  },
  {
    question: 'Can more than one be open?',
    answer: 'Yes, unless they are inside an "AccordionGroup". Pass closeOthers={false} to the group to allow it there too.',
  },
]

export const OneOpenAtATime: Story = {
  decorators: [MaxWidth],
  render: args => (
    <AccordionGroup>
      {faqs.map((faq, index) => (
        <Accordion
          key={faq.question}
          {...args}
          header={faq.question}
          defaultOpen={index === 0}
        >
          {faq.answer}
        </Accordion>
      ))}
    </AccordionGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inside an "AccordionGroup", opening an accordion closes the one that was open. Set "closeOthers" to false to turn this off. An accordion controlled with "open" is left out of the group.',
      },
      source: {
        code: `
<AccordionGroup>
  <Accordion header='What is an accordion?' defaultOpen>...</Accordion>
  <Accordion header='When should I use one?'>...</Accordion>
  <Accordion header='Can more than one be open?'>...</Accordion>
</AccordionGroup>
`,
      },
    },
  },
}

// =============================================================================
// Custom content: a list of orders
// =============================================================================

type OrderStatus = 'Processing' | 'Delivered' | 'Cancelled'

type Order = {
  id: string
  customer: string
  date: string
  status: OrderStatus
  items: { name: string, quantity: number, price: number }[]
}

const orders: Order[] = [
  {
    id: '#1048',
    customer: 'Ana Costa',
    date: '3 Nov 2026',
    status: 'Processing',
    items: [
      { name: 'Wireless keyboard', quantity: 1, price: 79 },
      { name: 'USB-C hub', quantity: 2, price: 35 },
      { name: 'Laptop stand', quantity: 1, price: 49 },
    ],
  },
  {
    id: '#1047',
    customer: 'João Pereira',
    date: '1 Nov 2026',
    status: 'Delivered',
    items: [
      { name: 'Noise-cancelling headphones', quantity: 1, price: 249 },
    ],
  },
  {
    id: '#1046',
    customer: 'Marta Silva',
    date: '28 Oct 2026',
    status: 'Cancelled',
    items: [
      { name: '27" monitor', quantity: 1, price: 329 },
      { name: 'HDMI cable', quantity: 2, price: 12 },
    ],
  },
]

const statusVariant = {
  Processing: 'default',
  Delivered: 'success',
  Cancelled: 'error',
} as const

const formatPrice = (value: number) => new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR',
}).format(value)

const orderTotal = (order: Order) => order.items
  .reduce((total, item) => total + item.quantity * item.price, 0)

const OrderHeader = ({ order }: { order: Order }) => (
  <Flex align='center' gap='xxlg'>
    <Flex direction='column' gap='xxxsm' style={{ flex: 2 }}>
      <Text variant='h5'>{`Order ${order.id}`}</Text>
      <Text variant='microCopy' color='neutral700'>{order.customer}</Text>
    </Flex>
    <Text variant='textBlock' color='neutral700' style={{ flex: 1 }}>{order.date}</Text>
    <Text variant='textBlock' color='neutral700' style={{ flex: 1 }}>{formatPrice(orderTotal(order))}</Text>
    <Pill variant={statusVariant[order.status]}>{order.status}</Pill>
  </Flex>
)

const OrderBody = ({ order }: { order: Order }) => (
  <Flex direction='column' align='stretch' gap='xsm'>
    {order.items.map(item => (
      <Flex
        key={item.name}
        align='center'
        gap='lg'
        style={{
          padding: 'var(--space-xsm) var(--space-lg)',
          border: '1px solid var(--colors-neutral200)',
          borderRadius: 'var(--radii-xsm)',
          background: 'var(--colors-white)',
        }}
      >
        <PackageIcon size={24} color='var(--colors-primary)' aria-hidden />
        <Flex direction='column' gap='xxxsm' style={{ flex: 1 }}>
          <Text variant='h6'>{item.name}</Text>
          <Text variant='microCopy' color='neutral700'>{`Quantity: ${item.quantity}`}</Text>
        </Flex>
        <Text variant='textBlock'>{formatPrice(item.quantity * item.price)}</Text>
      </Flex>
    ))}
    <Flex gap='xsm'>
      <Button variant='secondary'>View order</Button>
      <Button variant='neutral' disabled={order.status === 'Cancelled'}>Print invoice</Button>
    </Flex>
  </Flex>
)

export const CustomContent: Story = {
  args: {
    header: undefined,
    children: undefined,
  },
  render: args => (
    <AccordionGroup gap='xxxsm' style={{ width: '100%' }}>
      {orders.map((order, index) => (
        <Accordion
          key={order.id}
          {...args}
          defaultOpen={index === 0}
          header={<OrderHeader order={order} />}
          headerClassName='custom-header'
          style={{
            borderRadius: 'var(--radii-lg)',
            overflow: 'hidden',
            border: '1px solid var(--colors-neutral200)',
          }}
        >
          <OrderBody order={order} />
        </Accordion>
      ))}
    </AccordionGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The header and body take any content. Here the header lays out its own columns and the body lists the items and actions of each order, with one order open at a time. Use "className", "headerClassName" and "bodyClassName" to change the colors and spacing.',
      },
      source: {
        code: `
<AccordionGroup gap='xxxsm'>
  <Accordion
    header={
      <Flex align='center' gap='xxlg'>
        <Text variant='h5'>Order #1048</Text>
        <Text variant='textBlock'>€198.00</Text>
        <Pill>Processing</Pill>
      </Flex>
    }
  >
    <Flex direction='column' align='stretch' gap='xsm'>
      ...items
      <Button variant='secondary'>View order</Button>
    </Flex>
  </Accordion>
  ...more orders
</AccordionGroup>
`,
      },
    },
  },
}
