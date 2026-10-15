import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{a as n,d as r,s as i,u as ee}from"./blocks-tbgVcAT5.js";import{n as te,t as a}from"./Flex-CBWmZSZG.js";import{n as o,t as ne}from"./sizes-CHr0IoFs.js";import{n as re,t as ie}from"./shadows-EYhrqLqk.js";import{C as s,D as ae,E as oe,S as se,T as c,b as ce,d as le,l as ue,u as de,v as fe,w as pe,y as me}from"./utils-C3Nxf3_6.js";var l;function u(){return(u=e((()=>{l=`import { CheckCircledIcon, InfoCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons'
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
    padding: 'var(--space-xxsm) var(--space-lg)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-xxsm)',
    maxHeight: 'unset',
    backdropFilter: 'blur(2px)',
  },
  bodyStyle: {
    position: 'relative',
    paddingRight: 'var(--space-xxxlg)',
  },
  progressStyle: {
    height: '5px'
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
    <>
      <Flex direction='column' justify='start' align='start' gap='xxsm'>
        <Text variant='h6' color='success500'>{title}</Text>
        <Text variant='microCopy' color='success'>{description}</Text>
      </Flex>
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
    </>,
    { ...successOptions, ...options, type: 'success' }
  ),
  error: (title: string, description?: string, options?: ToastOptions) => toastOG(
    <>
      <Flex direction='column' justify='start' align='start' gap='xxsm'>
        <Text variant='h6' color='danger500'>{title}</Text>
        <Text variant='microCopy' color='danger'>{description}</Text>
      </Flex>
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
    </>,
    { ...errorOptions, ...options, type: 'error' }
  ),
  info: (title: string, description?: string, options?: ToastOptions) => toastOG(
    <>
      <Flex direction='column' justify='start' align='start' gap='xxsm'>
        <Text variant='h6' color='primary600'>{title}</Text>
        <Text variant='microCopy' color='primary'>{description}</Text>
      </Flex>
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
    </>,
    { ...infoOptions, ...options, type: 'info' }
  ),
}
export default alert
`;try{alert.displayName=`ToastContainer`,alert.__docgenInfo={description:``,displayName:`ToastContainer`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Alert/index.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var d;function f(){return(f=e((()=>{d=`import type { CSSProperties } from 'react'

import { cx } from '../../utils'
import Label from '../shared/Label'

import styles from './styles.module.scss'

export type AvatarProps = {
  size?: 'normal' | 'small',
  name: string,
  displayLabel?: boolean,
  description?: string,
  online?: boolean,
  url?: string
  width?: string
  className?: string
  style?: CSSProperties
}

const Avatar = ({
  size = 'normal',
  name,
  displayLabel = false,
  description,
  online = false,
  url,
  width,
  className,
  style,
  ...props
}: AvatarProps) => {
  const initials = name.split(' ').map(text => text.charAt(0)).join('')

  return (
    <div className={cx(styles.avatar, className)} style={style} {...props}>
      <div className={cx(styles.placeholder, styles[size])} style={{ width, height: width }}>
        {url ? <img src={url} alt={name} /> : initials}
        {online && <div className={styles.status} />}
      </div>
      {displayLabel
        && (
          <Label
            label={name}
            description={description}
            className={styles.label}
          />
        )}
    </div>
  )
}

export const avatarSelector = \`.\${styles.avatar}\`

export default Avatar
`;try{Avatar.displayName=`Avatar`,Avatar.__docgenInfo={description:``,displayName:`Avatar`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Avatar/index.tsx`,methods:[],props:{size:{defaultValue:{value:`normal`},declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`"normal" | "small" | undefined`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!0,tags:{},type:{name:`string`}},displayLabel:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`displayLabel`,required:!1,tags:{},type:{name:`boolean | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},online:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`online`,required:!1,tags:{},type:{name:`boolean | undefined`}},url:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`url`,required:!1,tags:{},type:{name:`string | undefined`}},width:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`width`,required:!1,tags:{},type:{name:`string | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var p;function m(){return(m=e((()=>{p=`// =============================================================================
// AVATAR
// -----------------------------------------------------------------------------
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

@use '../../styles/typography';

.avatar {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: var(--space-xxsm);

  // Label next to the picture
  .label {
    @include typography.paragraph;

    span {
      color: var(--colors-neutral400);
      @include typography.microCopy;
    }
  }
}

// =============================================================================
// ONLINE STATUS
// =============================================================================

.status {
  background-color: var(--colors-success);
  border-radius: var(--radii-full);
  position: absolute;
  border: 1px solid var(--colors-white);
}

// =============================================================================
// PICTURE / INITIALS
// =============================================================================

.placeholder {
  text-transform: uppercase;
  background-color: var(--colors-primary200);
  color: var(--colors-primary600);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radii-full);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radii-full);
  }

  // ===========================================================================
  // SIZE
  // ===========================================================================

  :where(&).normal {
    @include typography.subHeading;
    width: 52px;
    height: 52px;

    .status {
      width: 14px;
      height: 14px;
      bottom: 2px;
      right: 2px;
    }
  }

  :where(&).small {
    @include typography.subHeadingSmall;
    width: 32px;
    height: 32px;

    .status {
      width: 8px;
      height: 8px;
      bottom: 1px;
      right: 1px;
    }
  }
}
`})))()}var h;function g(){return(g=e((()=>{h=`import { SymbolIcon } from '@radix-ui/react-icons'
import React from 'react'

import type { ReactNode } from 'react'

import { colors } from '../../theme/colors'
import { cx } from '../../utils'

import styles from './styles.module.scss'

export type ButtonVariant = 'neutral' | 'primary' | 'secondary' | 'tertiary' | 'textOnly' | 'danger' | 'success'
export type ButtonSize = 'normal' | 'large'
export type ButtonIconPosition = 'left' | 'right' | 'iconOnly' | 'null'

export type ButtonProps = {
  children?: ReactNode
  iconComponent?: React.FC
  onClick?: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  iconPosition?: ButtonIconPosition
  isLoading?: boolean
  type?: 'submit' | 'button',
  disabled?: boolean,
  className?: string
  style?: React.CSSProperties
}

const iconPositionClasses: Record<ButtonIconPosition, string> = {
  left: styles.iconLeft,
  right: styles.iconRight,
  iconOnly: styles.iconOnly,
  null: styles.noIcon,
}

const Button = React.forwardRef(({
  children,
  iconComponent,
  variant = 'primary',
  size = 'normal',
  fullWidth = false,
  iconPosition = 'right',
  isLoading = false,
  type = 'button',
  disabled = false,
  className,
  style,
  ...props
}: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const getIconAndText = () => {
    if (!iconComponent || !iconPosition) return children
    switch (iconPosition) {
      case 'left': return (
        <>
          {iconComponent({})}
          {children}
        </>
      )
      case 'right': return (
        <>
          {children}
          {iconComponent({})}
        </>
      )
      case 'iconOnly': return iconComponent({})
      default: return children
    }
  }

  const resolvedIconPosition: ButtonIconPosition = (iconComponent && !children)
    ? 'iconOnly'
    : (iconComponent && iconPosition) || 'null'

  const classes = cx(
    styles.button,
    styles[size],
    fullWidth && styles.fullWidth,
    styles[variant],
    variant === 'tertiary' && colors.accent && styles.tertiaryAccent,
    iconPositionClasses[resolvedIconPosition],
    isLoading && styles.loading,
    className,
  )

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      disabled={disabled}
      className={classes}
      style={style}
      ref={ref}
      {...props}
    >
      {getIconAndText()}
      {isLoading && <SymbolIcon className='loading-icon' />}
    </button>
  )
})

export const buttonSelector = \`.\${styles.button}\`

export default Button
`;try{Button.displayName=`Button`,Button.__docgenInfo={description:``,displayName:`Button`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Button/index.tsx`,methods:[],props:{iconComponent:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`iconComponent`,required:!1,tags:{},type:{name:`FC<{}> | undefined`}},onClick:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},variant:{defaultValue:{value:`primary`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`ButtonVariant | undefined`}},size:{defaultValue:{value:`normal`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`ButtonSize | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},iconPosition:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`iconPosition`,required:!1,tags:{},type:{name:`ButtonIconPosition | undefined`}},isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean | undefined`}},type:{defaultValue:{value:`button`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!1,tags:{},type:{name:`"button" | "submit" | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var _;function v(){return(v=e((()=>{_=`// =============================================================================
// BUTTON
// -----------------------------------------------------------------------------
// Tokens are the CSS variables emitted by the theme (\`--colors-*\`, \`--space-*\`, ...),
// so \`setupTheme\` and theme classes keep working.
//
// Modifiers are written as \`:where(&).modifier\` (compiles to \`:where(.button).modifier\`):
// they only apply to the button but keep single-class specificity, so parent
// components (Pill, Tag, Pagination, ...) can still override them.
// =============================================================================

@use '../../styles/typography';

// Filled button: solid background that darkens on hover/active.
@mixin filled($bg, $hover, $active, $disabled, $focus: null) {
  background-color: $bg;
  color: var(--colors-white);

  &:hover { background-color: $hover; }
  &:active { background-color: $active; }
  &:disabled { background-color: $disabled; }

  @if $focus {
    &:focus { --button-shadow-color: #{$focus}; }
  }
}

@keyframes rotateIcon {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(359deg); }
}

.button {
  --button-shadow-color: var(--colors-primary300);

  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: var(--radii-xsm);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-xxsm);
  cursor: pointer;

  &:focus { box-shadow: 0 0 0 2px var(--button-shadow-color); }
  &:disabled { pointer-events: none; }

  // No icon: default padding. Comes before SIZE so the size paddings win
  // (large buttons get the wider padding).
  :where(&).noIcon { padding: var(--space-xxsm) var(--space-lg); }

  // ===========================================================================
  // SIZE
  // ===========================================================================

  :where(&).normal {
    @include typography.heading7;
    padding: var(--space-xxsm) var(--space-lg);

    svg {
      width: 16px;
      height: 16px;
    }
  }

  :where(&).large {
    @include typography.heading5;
    padding: var(--space-xxsm) var(--space-xxlg);
    min-height: 42px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  // ===========================================================================
  // FULL WIDTH
  // ===========================================================================

  :where(&).fullWidth {
    width: 100%;
  }

  // ===========================================================================
  // VARIANT
  // ===========================================================================

  // --- neutral ---------------------------------------------------------------
  :where(&).neutral {
    border: 1px solid var(--colors-neutral400);
    background-color: transparent;
    color: var(--colors-neutral700);

    &:hover {
      background-color: var(--colors-neutral100);
      border-color: var(--colors-neutral700);
      color: var(--colors-neutral700);
    }

    &:active {
      border-color: var(--colors-neutral800);
      color: var(--colors-neutral900);
    }

    &:disabled {
      color: var(--colors-neutral300);
      border-color: var(--colors-neutral400);
    }
  }

  // --- primary ---------------------------------------------------------------
  :where(&).primary {
    @include filled(
      $bg: var(--colors-primary),
      $hover: var(--colors-primary600),
      $active: var(--colors-primary700),
      $disabled: var(--colors-primary200),
    );
  }

  // --- secondary -------------------------------------------------------------
  :where(&).secondary {
    border: 1px solid var(--colors-primary);
    background-color: transparent;
    color: var(--colors-primary);

    &:hover {
      background-color: var(--colors-primary100);
      border-color: var(--colors-primary600);
      color: var(--colors-primary600);
    }

    &:active {
      border-color: var(--colors-primary700);
      color: var(--colors-primary700);
    }

    &:disabled {
      color: var(--colors-primary200);
      border-color: var(--colors-primary200);
    }
  }

  // --- tertiary --------------------------------------------------------------
  // Uses the accent palette when the default theme defines one, neutral otherwise.
  :where(&).tertiary {
    --tertiary: var(--colors-neutral);
    --tertiary600: var(--colors-neutral600);
    --tertiary700: var(--colors-neutral700);
    --tertiary200: var(--colors-neutral200);

    @include filled(
      $bg: var(--tertiary),
      $hover: var(--tertiary600),
      $active: var(--tertiary700),
      $disabled: var(--tertiary200),
      $focus: var(--tertiary200),
    );
  }

  :where(&).tertiaryAccent {
    --tertiary: var(--colors-accent);
    --tertiary600: var(--colors-accent600);
    --tertiary700: var(--colors-accent700);
    --tertiary200: var(--colors-accent200);
  }

  // --- textOnly --------------------------------------------------------------
  :where(&).textOnly {
    border: 1px solid transparent;
    background-color: transparent;
    color: var(--colors-neutral700);

    &:hover { background-color: var(--colors-neutral200); }
    &:active { background-color: var(--colors-neutral300); }
    &:disabled { color: var(--colors-neutral400); }
  }

  // --- danger ----------------------------------------------------------------
  :where(&).danger {
    @include filled(
      $bg: var(--colors-danger),
      $hover: var(--colors-danger500),
      $active: var(--colors-danger600),
      $disabled: var(--colors-danger200),
      $focus: var(--colors-danger200),
    );
  }

  // --- success ---------------------------------------------------------------
  :where(&).success {
    @include filled(
      $bg: var(--colors-success),
      $hover: var(--colors-success500),
      $active: var(--colors-success600),
      $disabled: var(--colors-success200),
      $focus: var(--colors-success200),
    );
  }

  // ===========================================================================
  // ICON POSITION
  // ===========================================================================

  :where(&).iconLeft { padding-left: var(--space-xxsm); }
  :where(&).iconRight { padding-right: var(--space-xxsm); }

  :where(&).iconOnly {
    padding: var(--space-xxsm);
    width: 32px;
    height: 32px;
  }

  // ===========================================================================
  // LOADING
  // ===========================================================================

  :where(&).loading {
    color: transparent !important;
    position: relative;
    pointer-events: none;
    user-select: none;
    text-align: center;

    :global(.loading-icon) {
      position: absolute;
      transform: translate(-50%, -50%);
      animation: rotateIcon 2s infinite linear;
    }

    svg:not(:global(.loading-icon)) {
      color: transparent;
    }
  }

  // ===========================================================================
  // COMBINATIONS
  // \`&:where(...)\` keeps these at single-class specificity too.
  // ===========================================================================

  // --- large + icon ----------------------------------------------------------
  :where(&).large {
    &:where(.iconLeft) { padding-left: var(--space-lg); }
    &:where(.iconRight) { padding-right: var(--space-lg); }

    &:where(.iconOnly) {
      padding: var(--space-xxsm) var(--space-xsm);
      width: 42px;
      height: 42px;
    }
  }

  // --- loading + variant / icon ----------------------------------------------
  :where(&).loading {
    &:where(.neutral, .textOnly) svg { color: var(--colors-neutral700); }
    &:where(.primary, .tertiary, .danger, .success) svg { color: var(--colors-white); }
    &:where(.secondary) svg { color: var(--colors-primary); }

    &:where(.iconLeft) :global(.loading-icon) { margin-left: var(--space-xxsm); }
    &:where(.iconRight) :global(.loading-icon) { margin-right: var(--space-xxsm); }
  }
}
`})))()}var y;function b(){return(b=e((()=>{y=`import { CheckIcon } from '@radix-ui/react-icons'
import React from 'react'

import type { CSSProperties } from 'react'

import { capitalize, cx } from '../../utils'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

export type CheckboxProps = {
  label?: string
  description?: string
  id: string
  value?: string
  checked?: boolean
  disabled?: boolean
  state?: 'error' | 'dirty' | 'null'
  errorMsg?: string
  labelPosition?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  style?: CSSProperties
}

const Checkbox = ({
  id,
  value,
  label,
  description,
  checked,
  disabled = false,
  state = 'null',
  errorMsg,
  labelPosition = 'right',
  onChange,
  className,
  style,
  ...props
}: CheckboxProps) => (
  <>
    <div className={cx(styles.checkbox, disabled && styles.disabled, className)} style={style}>
      {labelPosition === 'left' ? (
        <>
          <Label
            id={id}
            label={label}
            description={description}
            className={styles.label}
          />
          <input
            className={cx(
              styles.trigger,
              state !== 'null' && styles[\`state\${capitalize(state)}\`],
              disabled && styles.disabled,
            )}
            type='checkbox'
            id={id}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
          <label className={styles.indicator} htmlFor={id}>
            <CheckIcon />
          </label>
        </>
      ) : (
        <>
          <input
            className={cx(
              styles.trigger,
              state !== 'null' && styles[\`state\${capitalize(state)}\`],
              disabled && styles.disabled,
            )}
            type='checkbox'
            id={id}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
          <label className={styles.indicator} htmlFor={id}>
            <CheckIcon />
          </label>
          <Label
            id={id}
            label={label}
            description={description}
            className={styles.label}
          />
        </>
      )}
    </div>
    {state === 'error' && errorMsg && (
      <Text color='danger' variant='microCopy'>
        {errorMsg}
      </Text>
    )}
  </>
)

export const checkboxSelector = \`.\${styles.checkbox}\`

export default Checkbox
`;try{Checkbox.displayName=`Checkbox`,Checkbox.__docgenInfo={description:``,displayName:`Checkbox`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Checkbox/index.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},checked:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`checked`,required:!1,tags:{},type:{name:`boolean | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},state:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"null" | "error" | "dirty" | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},labelPosition:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`labelPosition`,required:!1,tags:{},type:{name:`string | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((e: ChangeEvent<HTMLInputElement>) => void) | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var x;function S(){return(S=e((()=>{x=`// =============================================================================
// CHECKBOX
// -----------------------------------------------------------------------------
// The native input is hidden; the \`+ label\` sibling (.indicator) is the visible box.
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

.checkbox {
  width: fit-content;
  display: flex;
  gap: var(--space-xxsm);

  * {
    cursor: pointer;
  }

  .label {
    padding: 0;
    margin-top: 1.5px;
  }

  // ===========================================================================
  // DISABLED
  // ===========================================================================

  :where(&).disabled {
    pointer-events: none;

    * {
      cursor: default;
    }
  }
}

// =============================================================================
// HIDDEN INPUT (drives the indicator styles)
// =============================================================================

.trigger {
  display: none;

  &:hover {
    + label {
      background-color: var(--colors-neutral100);
      border-color: var(--colors-neutral600);
    }

    + label svg {
      color: var(--colors-neutral100);
    }
  }

  &:focus + label {
    background-color: var(--colors-neutral200);
    border-color: var(--colors-neutral700);
  }

  &:checked + label {
    background-color: var(--colors-primary);
    border-color: var(--colors-primary);

    &:hover { background-color: var(--colors-primary600); }
    &:focus { background-color: var(--colors-primary700); }
  }

  // ===========================================================================
  // STATE
  // ===========================================================================

  :where(&).stateError + label { border-color: var(--colors-danger); }
  :where(&).stateDirty + label { border-color: var(--colors-accent); }

  // ===========================================================================
  // DISABLED
  // ===========================================================================

  :where(&).disabled {
    + label {
      background-color: var(--colors-neutral300);
      border-color: var(--colors-neutral300);
    }

    + label svg {
      color: transparent;
    }

    &:checked {
      + label {
        background-color: var(--colors-neutral300);
        border-color: var(--colors-neutral300);
      }

      + label svg {
        color: var(--colors-white);
      }
    }
  }
}

// =============================================================================
// VISIBLE BOX
// =============================================================================

.indicator {
  width: 16px;
  height: 16px;
  border-radius: var(--radii-xxsm);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid var(--colors-neutral500);
  background-color: transparent;
  color: var(--colors-white);
}
`})))()}var C;function w(){return(w=e((()=>{C=`import { CalendarIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'
import * as Calendar from 'react-date-picker'

import type { CSSProperties } from 'react'

import { colors } from '../../theme/colors'
import { cx } from '../../utils'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

import 'react-date-picker/dist/DatePicker.css'

export type DatePickerProps = {
  name?: string
  label?: string
  error?: string | null
  value?: string
  onChange: (value: string) => void
  isWeekSelector?: boolean
  localeString?: string
  disabled?: boolean
  fullWidth?: boolean
  className?: string
  style?: CSSProperties
}

export const DatePicker = ({
  name,
  label,
  error,
  value,
  onChange,
  isWeekSelector = false,
  localeString = 'en-US',
  disabled = false,
  fullWidth = false,
  className,
  style,
}: DatePickerProps) => (
  <div
    className={cx(
      styles.datePicker,
      colors.accent && styles.accent,
      error && styles.hasError,
      fullWidth && styles.fullWidth,
      disabled && styles.disabled,
      className,
    )}
    style={style}
  >
    {label && <Label id={name} label={label} />}
    <Calendar.DatePicker
      name={name}
      onChange={date => {
        onChange(date ? dayjs(date as Date).format('YYYY-MM-DD') : '')
      }}
      value={value}
      disabled={disabled}
      calendarIcon={<CalendarIcon />}
      clearIcon={null}
      locale={localeString}
      calendarProps={{
        formatMonthYear: (_, date) => date.toLocaleDateString(localeString, {
          month: 'long',
          year: 'numeric',
        }),
        formatShortWeekday: (_, date) => date.toLocaleDateString(localeString, {
          weekday: 'short'
        }),
        formatMonth: (_, date) => date.toLocaleDateString(localeString, {
          month: 'long'
        }),
        calendarType: isWeekSelector ? 'hebrew' : 'iso8601',
        tileClassName: ({ date, view }) => {
          const isSameWeek = dayjs(date).isSame(value || new Date(), 'week')
          return view === 'month' && isWeekSelector && isSameWeek
            ? 'selected-week'
            : ''
        },
      }}
    />

    {error && (
      <Text color='danger' variant='microCopy'>
        {String(error)}
      </Text>
    )}
  </div>
)

export const datePickerSelector = \`.\${styles.datePicker}\`

export default DatePicker
`;try{DatePicker.displayName=`DatePicker`,DatePicker.__docgenInfo={description:``,displayName:`DatePicker`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/DatePicker/index.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},error:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`error`,required:!1,tags:{},type:{name:`string | null | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(value: string) => void`}},isWeekSelector:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`isWeekSelector`,required:!1,tags:{},type:{name:`boolean | undefined`}},localeString:{defaultValue:{value:`en-US`},declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`localeString`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var T;function E(){return(E=e((()=>{T=`// =============================================================================
// DATE PICKER
// -----------------------------------------------------------------------------
// Styles the third-party react-date-picker / react-calendar markup, so their
// classes are wrapped in :global(...).
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

.datePicker {
  // "Today" and weekday highlight: neutral, or accent when the default theme defines one
  --highlight: var(--colors-neutral);
  --highlight600: var(--colors-neutral600);
  --highlight700: var(--colors-neutral700);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-xxxsm);

  // ===========================================================================
  // INPUT
  // ===========================================================================

  :global(.react-date-picker) {
    > div {
      width: 100%;
      height: var(--sizes-xxxlg);
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-xxsm) 0 var(--space-xxsm) var(--space-xxsm);
      border-radius: var(--radii-xsm);
      border: 1px solid var(--colors-neutral400);
      font-size: var(--fontSizes-xsm);

      &:hover {
        background-color: var(--colors-neutral100);
        border-color: var(--colors-neutral600);
      }

      :global(.react-date-picker__inputGroup__input:invalid) {
        background-color: var(--colors-transparent);
      }

      :global(.react-date-picker__inputGroup__input:valid) {
        color: var(--colors-neutral800);
      }
    }

    &:global(.react-date-picker--open) > div {
      border-color: var(--colors-primary);
    }

    button {
      color: var(--colors-neutral);
    }
  }

  // ===========================================================================
  // CALENDAR
  // ===========================================================================

  :global(.react-calendar) {
    padding: var(--space-xxsm);
    border: none;
    border-radius: var(--radii-sm);
    background-color: var(--colors-white);
    box-shadow: var(--shadows-cardShadow);

    button {
      --shadow-color: var(--colors-primary300);

      appearance: none;
      border: none;
      outline: none;
      background-color: transparent;
      border-radius: var(--radii-xsm);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--space-xxsm);
      cursor: pointer;

      &:focus {
        box-shadow: 0 0 0 2px var(--shadow-color);
      }
    }

    // --- header ----------------------------------------------------------------
    :global(.react-calendar__navigation) {
      display: flex;

      button {
        width: 32px;
        height: 32px;
        padding: 0;
        font-size: var(--fontSizes-lg);
        background-color: transparent;
        border: 1px solid transparent;
        color: var(--colors-neutral700);

        &:hover { background-color: var(--colors-neutral200); }
        &:active { background-color: var(--colors-neutral300); }
        &:disabled { color: var(--colors-neutral400); }

        &:global(.react-calendar__navigation__label) {
          color: var(--colors-primary);
          font-size: var(--fontSizes-sm);
        }
      }
    }

    // --- body ------------------------------------------------------------------
    :global(.react-calendar__viewContainer) {
      :global(.react-calendar__month-view__weekdays) {
        padding: var(--space-xxsm) 0;
      }

      :global(.react-calendar__month-view__weekdays__weekday) {
        text-align: center;
        font-size: var(--fontSizes-sm);

        abbr {
          text-decoration: none;
          color: var(--highlight);
        }
      }

      // --- day tiles -----------------------------------------------------------
      button:global(.react-calendar__tile) {
        width: 32px;
        height: 32px;
        padding: 0;
        font-size: var(--fontSizes-xsm);
        background-color: transparent;
        border: 1px solid transparent;
        color: var(--colors-neutral700);

        &:hover { background-color: var(--colors-neutral200); }
        &:active { background-color: var(--colors-neutral300); }
        &:disabled { color: var(--colors-neutral400); }

        &:global(.selected-week) {
          background-color: var(--colors-primary);
          color: var(--colors-white);

          &:hover { background-color: var(--colors-primary600); }
          &:active { background-color: var(--colors-primary700); }
        }
      }

      // selected day
      button:global(.react-calendar__tile--active) {
        background-color: var(--colors-primary);
        color: var(--colors-white);

        &:hover { background-color: var(--colors-primary600); }
        &:active { background-color: var(--colors-primary700); }
      }

      // today
      button:global(.react-calendar__tile--now) {
        background-color: var(--highlight);
        color: var(--colors-white);

        &:hover { background-color: var(--highlight600); }
        &:active { background-color: var(--highlight700); }
      }
    }
  }

  // ===========================================================================
  // ACCENT HIGHLIGHT (when the default theme defines an accent color)
  // ===========================================================================

  :where(&).accent {
    --highlight: var(--colors-accent);
    --highlight600: var(--colors-accent600);
    --highlight700: var(--colors-accent700);

    :global(.react-calendar__viewContainer) button:global(.react-calendar__tile--now) {
      background-color: var(--colors-accent) !important;
    }
  }

  // ===========================================================================
  // ERROR
  // ===========================================================================

  :where(&).hasError :global(.react-date-picker) > div {
    border-color: var(--colors-danger);
  }

  // ===========================================================================
  // FULL WIDTH
  // ===========================================================================

  :where(&).fullWidth :global(.react-date-picker) {
    width: 100%;
  }

  // ===========================================================================
  // DISABLED
  // ===========================================================================

  :where(&).disabled :global(.react-date-picker) > div {
    background-color: var(--colors-neutral200);
    border-color: var(--colors-neutral200);
    color: var(--colors-neutral400);
    pointer-events: none;

    input {
      color: var(--colors-neutral) !important;
    }
  }
}
`})))()}var D;function O(){return(O=e((()=>{D=`import * as AlertDialog from '@radix-ui/react-alert-dialog'
import React from 'react'

import type { CSSProperties } from 'react'

import Flex from '../../elements/Flex'
import { cx } from '../../utils'
import Button from '../Button'

import styles from './styles.module.scss'

export type DialogProps = {
  open: boolean
  variant?: 'confirm' | 'success' | 'danger'
  confirmButtonText?: string
  cancelButtonText?: string
  closeFn: () => void
  title: string
  description?: string
  children?: React.ReactNode
  onConfirm: () => void
  className?: string
  style?: CSSProperties
}

const Dialog = ({
  open = false,
  variant = 'confirm',
  confirmButtonText,
  cancelButtonText,
  closeFn,
  title,
  description,
  children,
  onConfirm,
  className,
  style,
}: DialogProps) => {
  const handleConfirm = () => {
    onConfirm()
    closeFn()
  }

  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content
          className={cx(styles.content, className)}
          style={style}
          onEscapeKeyDown={closeFn}
          onOpenAutoFocus={event => event.preventDefault()}
        >
          <AlertDialog.Title className={styles.title}>
            {title}
          </AlertDialog.Title>
          {description && (
            <AlertDialog.Description className={styles.description}>
              {description}
            </AlertDialog.Description>
          )}
          {children}
          <Flex justify='end' gap='xxsm'>
            <AlertDialog.Cancel asChild>
              <Button variant='neutral' onClick={closeFn}>
                {cancelButtonText || 'Cancel'}
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variant={variant === 'success' ? 'success' : variant === 'danger' ? 'danger' : 'primary'}
                onClick={handleConfirm}
              >
                {confirmButtonText || 'Confirm'}
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default Dialog
`;try{Dialog.displayName=`Dialog`,Dialog.__docgenInfo={description:``,displayName:`Dialog`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Dialog/index.tsx`,methods:[],props:{open:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean`}},variant:{defaultValue:{value:`confirm`},declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"danger" | "success" | "confirm" | undefined`}},confirmButtonText:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`confirmButtonText`,required:!1,tags:{},type:{name:`string | undefined`}},cancelButtonText:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`cancelButtonText`,required:!1,tags:{},type:{name:`string | undefined`}},closeFn:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`closeFn`,required:!0,tags:{},type:{name:`() => void`}},title:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},onConfirm:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`onConfirm`,required:!0,tags:{},type:{name:`() => void`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var k;function A(){return(A=e((()=>{k=`// =============================================================================
// DIALOG
// =============================================================================

@use '../../styles/typography';

@keyframes overlayShow {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes contentShow {
  0% { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}

// =============================================================================
// OVERLAY
// =============================================================================

.overlay {
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

// =============================================================================
// CONTENT
// =============================================================================

.content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxxlg);
  z-index: 101;
  background-color: var(--colors-white);
  border-radius: var(--radii-sm);
  box-shadow: var(--shadows-mainShadow);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  min-width: 300px;
  max-width: 500px;
  max-height: 85vh;
  padding: var(--space-xxlg);
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus { outline: none; }
}

.title {
  margin: 0;
  @include typography.heading3;
  color: var(--colors-neutral800);
}

.description {
  @include typography.paragraph;
  color: var(--colors-neutral600);
}
`})))()}var j;function M(){return(M=e((()=>{j=`import type { CSSProperties } from 'react'

import { cx } from '../../utils'
import Button from '../Button'

import styles from './styles.module.scss'

type OptionType = { label: string; value: string }

export type GroupButtonsProps = {
  buttons: OptionType[]
  selectedButton: string
  onButtonSelect: (button: string) => void
  className?: string
  style?: CSSProperties
}

const GroupButtons = ({
  buttons,
  selectedButton,
  onButtonSelect,
  className,
  style,
}: GroupButtonsProps) => (
  <div className={cx(styles.groupButtons, className)} style={style}>
    {buttons.map((button, index) => (
      <Button
        key={button.value + Number(index)}
        onClick={() => onButtonSelect(button.value)}
        variant={button.value === selectedButton ? 'primary' : 'secondary'}
        className={styles.button}
      >
        {button.label}
      </Button>
    ))}
  </div>
)

export const groupButtonsSelector = \`.\${styles.groupButtons}\`

export default GroupButtons
`;try{GroupButtons.displayName=`GroupButtons`,GroupButtons.__docgenInfo={description:``,displayName:`GroupButtons`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/GroupButtons/index.tsx`,methods:[],props:{buttons:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/GroupButtons/index.tsx`,name:`TypeLiteral`}],description:``,name:`buttons`,required:!0,tags:{},type:{name:`OptionType[]`}},selectedButton:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/GroupButtons/index.tsx`,name:`TypeLiteral`}],description:``,name:`selectedButton`,required:!0,tags:{},type:{name:`string`}},onButtonSelect:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/GroupButtons/index.tsx`,name:`TypeLiteral`}],description:``,name:`onButtonSelect`,required:!0,tags:{},type:{name:`(button: string) => void`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/GroupButtons/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/GroupButtons/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var N;function P(){return(P=e((()=>{N=`// =============================================================================
// GROUP BUTTONS
// =============================================================================

.groupButtons {
  display: flex;
  overflow: hidden;
  border-radius: var(--radii-xsm);
  border: 1px solid var(--colors-primary);

  // Each button in the group
  .button {
    position: relative;
    min-width: 72px;
    flex: 1 1 0px;
    border-radius: 0;
    border: 0;

    &:focus {
      box-shadow: none;
    }

    // divider between buttons
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 1px;
      background-color: var(--colors-primary);
    }

    &:first-child:before {
      display: none;
    }
  }
}
`})))()}var F;function I(){return(I=e((()=>{F=`import React from 'react'

import type { ChangeEvent } from 'react'

import Flex from '../../elements/Flex'
import { capitalize, cx } from '../../utils'
import Button from '../Button'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

type IconPosition = 'left' | 'right' | 'null'

const iconPositionClasses: Record<IconPosition, string> = {
  left: styles.iconLeft,
  right: styles.iconRight,
  null: styles.noIcon,
}

export type InputProps = {
  id?: string
  type?: string
  name?: string
  label?: string
  value?: string
  placeholder?: string
  description?: string
  iconComponent?: React.FC
  errorMsg?: string
  variant?: 'simple' | 'null'
  state?: 'error' | 'dirty' | 'disabled' | 'null'
  iconPosition?: IconPosition
  required?: boolean
  onClickIcon?: () => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  containerProps?: React.HTMLAttributes<HTMLDivElement>
  fullWidth?: boolean
  disabled?: boolean,
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef(({
  id,
  type = 'text',
  name,
  label,
  value,
  placeholder,
  description,
  iconComponent,
  errorMsg,
  state = 'null',
  iconPosition = 'right',
  onClickIcon,
  onChange,
  className,
  variant = 'null',
  required = false,
  containerProps,
  fullWidth = false,
  disabled = false,
  ...props
}: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const renderIcon = () => {
    if (!iconComponent) return null
    if (onClickIcon) {
      return (
        <Button
          onClick={onClickIcon}
          iconComponent={iconComponent}
          iconPosition='iconOnly'
          variant='textOnly'
          className={styles.iconButton}
        />
      )
    }
    return (
      <Flex style={{ padding: 'var(--space-xxsm)' }}>
        {iconComponent({})}
      </Flex>
    )
  }
  const iconPos = iconComponent ? iconPosition : 'null'

  return (
    <div
      className={cx(
        styles.wrapper,
        variant === 'simple' && styles.simple,
        fullWidth ? styles.fullWidth : styles.notFullWidth,
      )}
      {...containerProps}
    >
      <div className={cx(styles.input, iconPositionClasses[iconPos])}>
        {label || description ? (
          <Label
            id={id || name}
            label={label}
            description={description}
            className={styles.label}
          />
        ) : null}
        <input
          className={cx(
            styles.field,
            variant === 'simple' && styles.simple,
            state && state !== 'null' && styles[\`state\${capitalize(state)}\`],
            className,
          )}
          id={id || name}
          ref={ref}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled || state === 'disabled'}
          onChange={e => {
            let finalValue: string | null = e.target.value
            if (type === 'number') finalValue = Number(finalValue) as unknown as string
            const target = {
              value: finalValue === '' ? null : finalValue, name: name || id
            } as (EventTarget & HTMLInputElement)
            const event = { target } as ChangeEvent<HTMLInputElement>
            onChange(event)
          }}
          {...props}
        />
        <div className={cx(styles.iconWrapper, iconPositionClasses[iconPos])}>
          {iconComponent && iconPos === 'left' && renderIcon()}
          {iconComponent && iconPos === 'right' && renderIcon()}
        </div>
      </div>
      {state === 'error' && errorMsg && (
        <Text color='danger' variant='microCopy'>
          {errorMsg}
        </Text>
      )}
    </div>
  )
})

export const inputSelector = \`.\${styles.input}\`

export default Input
`;try{Input.displayName=`Input`,Input.__docgenInfo={description:``,displayName:`Input`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Input/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},type:{defaultValue:{value:`text`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`type`,required:!1,tags:{},type:{name:`string | undefined`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | (string & readonly string[]) | undefined`}},placeholder:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`placeholder`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},iconComponent:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`iconComponent`,required:!1,tags:{},type:{name:`FC<{}> | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},variant:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"null" | "simple" | undefined`}},state:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"null" | "disabled" | "error" | "dirty" | undefined`}},iconPosition:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`iconPosition`,required:!1,tags:{},type:{name:`IconPosition | undefined`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean | undefined`}},onClickIcon:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`onClickIcon`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((event: ChangeEvent<HTMLInputElement>) => void) & ChangeEventHandler<HTMLInputElement>`}},containerProps:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`containerProps`,required:!1,tags:{},type:{name:`HTMLAttributes<HTMLDivElement> | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}var L;function R(){return(R=e((()=>{L=`// =============================================================================
// INPUT
// -----------------------------------------------------------------------------
// .wrapper > .input (label + field + icon) + error message
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

@use '../../styles/typography';

.wrapper {
  min-width: 256px;
  max-width: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;

  span {
    margin-top: var(--space-xxxsm);
  }

  // ===========================================================================
  // VARIANT
  // ===========================================================================

  :where(&).simple {
    width: 100%;
  }

  // ===========================================================================
  // FULL WIDTH
  // ===========================================================================

  :where(&).fullWidth {
    width: 100%;
  }

  :where(&).notFullWidth {
    width: fit-content;

    input {
      min-width: 256px;
    }
  }
}

// =============================================================================
// ICON
// =============================================================================

.iconWrapper {
  position: absolute;
  bottom: 0;

  .iconButton {
    pointer-events: all;

    &:hover { background: transparent; }
    &:focus { box-shadow: none; }
  }

  // ===========================================================================
  // ICON POSITION
  // ===========================================================================

  :where(&).iconLeft {
    justify-content: flex-start;
    left: 0;
  }

  :where(&).iconRight {
    justify-content: flex-end;
    right: 0;
  }

  :where(&).noIcon {
    display: none;
  }
}

// =============================================================================
// FIELD
// =============================================================================

.field {
  position: relative;
  height: 32px;
  width: 100%;
  padding: var(--space-xxsm);
  border-radius: var(--radii-xsm);
  appearance: none;
  outline: none;
  background-color: transparent;
  @include typography.microCopy;
  border: 1px solid var(--colors-neutral400);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  &::placeholder {
    color: var(--colors-neutral);
  }

  &:hover {
    background-color: var(--colors-neutral100);
    border-color: var(--colors-neutral600);
  }

  &:focus {
    border-color: var(--colors-primary);
  }

  &:disabled {
    background-color: var(--colors-neutral200);
    border-color: var(--colors-neutral200);
    color: var(--colors-neutral);
    pointer-events: none;
  }

  // ===========================================================================
  // VARIANT
  // ===========================================================================

  :where(&).simple {
    min-width: 80px;
    border: none;
    border-bottom: 1px solid var(--colors-neutral200);
    border-radius: 0;
    border-color: transparent;

    &::placeholder {
      color: var(--colors-neutral400);
      opacity: 1;
    }

    &:hover { background: var(--colors-primary200); }
    &:focus { border-color: var(--colors-primary); }
  }

  // ===========================================================================
  // STATE
  // ===========================================================================

  :where(&).stateError {
    border-color: var(--colors-danger);

    &:focus { border-color: var(--colors-danger); }
  }

  :where(&).stateDirty {
    border-color: var(--colors-accent);
  }

  :where(&).stateDisabled {
    background-color: var(--colors-neutral200);
    border-color: var(--colors-neutral200);
    color: var(--colors-neutral);
    pointer-events: none;
  }
}

// =============================================================================
// LABEL + FIELD + ICON
// =============================================================================

.input {
  width: 100%;
  display: inline-block;
  position: relative;

  .label {
    padding-bottom: var(--space-xxxsm);
    pointer-events: none;
  }

  // ===========================================================================
  // ICON POSITION (room for the icon inside the field)
  // ===========================================================================

  :where(&).iconLeft .field { padding-left: var(--space-xxxlg); }
  :where(&).iconRight .field { padding-right: var(--space-xxxlg); }
}
`})))()}var z;function B(){return(B=e((()=>{z=`import { ReactNode } from 'react'

import type { CSSProperties } from 'react'

import { cx } from '../../utils'

import styles from './styles.module.scss'

export type LinkProps = {
  href: string,
  children: ReactNode,
  openInNewTab?: boolean
  size?: 'regular' | 'small',
  danger?: boolean,
  darkBackground?: boolean,
  className?: string
  style?: CSSProperties
}

const Link = ({
  href,
  children,
  openInNewTab = true,
  size = 'regular',
  danger = false,
  darkBackground = false,
  className,
  style,
  ...props
}: LinkProps) => (
  <a
    href={href}
    target={openInNewTab ? '_blank' : ''}
    rel='noreferrer'
    className={cx(
      styles.link,
      styles[size],
      danger && styles.danger,
      darkBackground && styles.darkBackground,
      className,
    )}
    style={style}
    {...props}
  >
    {children}
  </a>
)

export const linkSelector = \`.\${styles.link}\`

export default Link
`;try{Link.displayName=`Link`,Link.__docgenInfo={description:``,displayName:`Link`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Link/index.tsx`,methods:[],props:{href:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`href`,required:!0,tags:{},type:{name:`string`}},openInNewTab:{defaultValue:{value:`true`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`openInNewTab`,required:!1,tags:{},type:{name:`boolean | undefined`}},size:{defaultValue:{value:`regular`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`"small" | "regular" | undefined`}},danger:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`danger`,required:!1,tags:{},type:{name:`boolean | undefined`}},darkBackground:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`darkBackground`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var V;function H(){return(H=e((()=>{V=`// =============================================================================
// LINK
// -----------------------------------------------------------------------------
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

@use '../../styles/typography';

.link {
  color: var(--colors-primary);
  text-decoration: underline;
  cursor: pointer;
  padding: var(--space-xxxsm);

  &:hover {
    color: var(--colors-primary600);
    text-decoration: none;
  }

  &:active {
    color: var(--colors-primary700);
    text-decoration: underline;
  }

  &:focus {
    color: var(--colors-primary600);
    text-decoration: none;
    border-radius: var(--radii-xsm);
    outline: 1px solid var(--colors-primary200);
  }

  // ===========================================================================
  // SIZE
  // ===========================================================================

  :where(&).regular { @include typography.paragraph; }
  :where(&).small { @include typography.textBlock; }

  // ===========================================================================
  // DANGER
  // ===========================================================================

  :where(&).danger {
    color: var(--colors-danger);

    &:hover { color: var(--colors-danger500); }
    &:active { color: var(--colors-danger600); }

    &:focus {
      color: var(--colors-danger600);
      outline: 1px solid var(--colors-danger100);
    }
  }

  // ===========================================================================
  // DARK BACKGROUND
  // ===========================================================================

  :where(&).darkBackground {
    color: var(--colors-white);

    &:hover { color: var(--colors-primary200); }
    &:active { color: var(--colors-primary200); }

    &:focus {
      color: var(--colors-primary200);
      outline: 1px solid var(--colors-primary600);
    }
  }
}
`})))()}var U;function W(){return(W=e((()=>{U=`import * as RadixDialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import React, { ReactElement } from 'react'

import { cx } from '../../utils'

import styles from './styles.module.scss'

export type ModalProps = {
  open: boolean
  closeFn: () => void
  renderTrigger?: () => ReactElement
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const Modal = ({
  open = false,
  closeFn,
  renderTrigger,
  title,
  description,
  children,
  className,
  style,
}: ModalProps) => (
  <RadixDialog.Root open={open}>
    <RadixDialog.Trigger asChild>
      {renderTrigger && renderTrigger()}
    </RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={styles.overlay} />
      <RadixDialog.Content
        style={style}
        onEscapeKeyDown={closeFn}
        onInteractOutside={closeFn}
        className={cx(styles.content, className)}
        onOpenAutoFocus={event => event.preventDefault()}
      >
        {title && (
          <RadixDialog.Title className={styles.title}>
            {title}
          </RadixDialog.Title>
        )}
        {description && (
          <RadixDialog.Description className={styles.description}>
            {description}
          </RadixDialog.Description>
        )}
        {children}
        <RadixDialog.Close className={styles.close} aria-label='Close' onClick={closeFn}>
          <Cross2Icon />
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
)

export default Modal
`;try{Modal.displayName=`Modal`,Modal.__docgenInfo={description:``,displayName:`Modal`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Modal/index.tsx`,methods:[],props:{open:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean`}},closeFn:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`closeFn`,required:!0,tags:{},type:{name:`() => void`}},renderTrigger:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`renderTrigger`,required:!1,tags:{},type:{name:`(() => ReactElement<any, string | JSXElementConstructor<any>>) | undefined`}},title:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var G;function K(){return(K=e((()=>{G=`// =============================================================================
// MODAL
// =============================================================================

@use '../../styles/typography';

@keyframes overlayShow {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes contentShow {
  0% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

// =============================================================================
// OVERLAY
// =============================================================================

.overlay {
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

// =============================================================================
// CONTENT
// =============================================================================

.content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxxlg);
  z-index: 101;
  background-color: var(--colors-white);
  border-radius: var(--radii-sm);
  box-shadow: var(--shadows-cardShadow);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  padding: var(--space-xxlg);
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
}

// close button
.close {
  all: unset;
  cursor: pointer;
  position: absolute;
  top: var(--space-xxlg);
  right: var(--space-xlg);
  display: flex;
  border-radius: var(--radii-xsm);
  color: var(--colors-neutral900);

  svg {
    width: 24px;
    height: 24px;
  }

  &:focus-visible {
    outline: 2px solid var(--colors-primary);
  }
}

.title {
  margin: 0;
  @include typography.heading3;
  color: var(--colors-neutral800);
}

.description {
  @include typography.paragraph;
  color: var(--colors-neutral600);
}`})))()}var q;function he(){return(he=e((()=>{q=`import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import Select, { components } from 'react-select'

import type { CSSProperties } from 'react'
import type {
  DropdownIndicatorProps,
  MultiValue,
  OptionProps,
} from 'react-select'

import Flex from '../../elements/Flex'
import { colors } from '../../theme/colors'
import { capitalize, cx } from '../../utils'
import Pill from '../Pill'
import Label from '../shared/Label'
import Text from '../Text'

import { selectStyles } from './selectStyles'
import styles from './styles.module.scss'

type OptionType = { label: string; value: string }
export type MultiSelectProps = {
  name: string
  label?: string
  value: string[]
  onChange: (event: string[]) => void
  options: OptionType[]
  placeholder?: string
  hasPills?: boolean
  getLabel: (value: string) => string
  state?: 'error' | 'dirty' | 'disabled' | 'null'
  errorMsg?: string
  fullWidth?: boolean
  className?: string
  style?: CSSProperties
}

const DropdownIndicator = (props: DropdownIndicatorProps<OptionType, true>) => {
  const { menuIsOpen } = props.selectProps

  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </components.DropdownIndicator>
  )
}

const CustomOption = (
  props: OptionProps<OptionType, true>,
) => (
  <components.Option {...props}>
    {props.data.label}
    {props.isSelected && <CheckIcon />}
  </components.Option>
)

const MultiSelect = ({
  name,
  label,
  value,
  onChange,
  options,
  placeholder,
  hasPills = false,
  getLabel,
  state = 'null',
  errorMsg,
  fullWidth = false,
  className,
  style,
}: MultiSelectProps) => {
  const handleRemoveOption = (
    removedValue: string,
    value: string[],
    onChange: (event: string[]) => void,
  ) => {
    const newArray = value.filter((item: string) => item !== removedValue)
    onChange(newArray)
  }

  return (
    <Flex
      direction='column'
      align='start'
      gap='xxxsm'
      className={className}
      style={{ width: fullWidth ? '100%' : 'fit-content', ...style }}
    >
      {label && <Label id={name} label={label} />}
      <div className={cx(styles.wrapper, colors.accent && styles.accent, styles[\`state\${capitalize(state)}\`])}>
        <Select
          id={name}
          value={
            value?.length
              ? value.map((item: string) => ({
                value: item,
                label: getLabel(item),
              }))
              : []
          }
          onChange={(newValue: MultiValue<OptionType>) => {
            onChange(newValue.map((item: OptionType) => item.value))
          }}
          isMulti
          options={options}
          placeholder={placeholder}
          closeMenuOnSelect={false}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          styles={selectStyles}
          isDisabled={state === 'disabled'}
          components={{
            DropdownIndicator,
            Option: props => CustomOption(props),
          }}
        />
        {!hasPills && value?.length > 0 && (
          <Flex className={styles.optionsCount}>
            <Text variant='subHeadingSmall' color='white'>
              {value?.length}
            </Text>
          </Flex>
        )}
      </div>
      {(state === 'error' && errorMsg) && (
        <Text color='danger' variant='microCopy'>
          {errorMsg}
        </Text>
      )}
      {value?.length > 0 && hasPills && (
        <Flex
          align='start'
          justify='start'
          gap='xxxsm'
          style={{ flexWrap: 'wrap', maxWidth: '256px' }}
        >
          {value?.map((item: string) => (
            <Pill
              key={item}
              onClose={() => handleRemoveOption(item, value, onChange)}
            >
              {getLabel(item)}
            </Pill>
          ))}
        </Flex>
      )}
    </Flex>
  )
}

export default MultiSelect
`;try{MultiSelect.displayName=`MultiSelect`,MultiSelect.__docgenInfo={description:``,displayName:`MultiSelect`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/MultiSelect/index.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!0,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string[]`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(event: string[]) => void`}},options:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`options`,required:!0,tags:{},type:{name:`OptionType[]`}},placeholder:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`placeholder`,required:!1,tags:{},type:{name:`string | undefined`}},hasPills:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`hasPills`,required:!1,tags:{},type:{name:`boolean | undefined`}},getLabel:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`getLabel`,required:!0,tags:{},type:{name:`(value: string) => string`}},state:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"null" | "disabled" | "error" | "dirty" | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var ge;function _e(){return(_e=e((()=>{ge=`// =============================================================================
// MULTI SELECT
// -----------------------------------------------------------------------------
// The react-select control itself is styled in JS (selectStyles.ts); this file
// styles the wrapper around it.
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

.wrapper {
  position: relative;
  width: 100%;

  // Selected options counter
  .optionsCount {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: calc(var(--space-sm) * 2);
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    background-color: var(--colors-primary);
    border-radius: var(--radii-full);
  }

  // Counter uses the accent color when the default theme defines one
  &.accent .optionsCount {
    background-color: var(--colors-accent);
  }

  // ===========================================================================
  // STATE
  // ===========================================================================

  :where(&).stateError :global(#multi-select) > div {
    border-color: var(--colors-danger);

    svg { color: var(--colors-danger); }
  }

  :where(&).stateDirty :global(#multi-select) > div {
    border-color: var(--colors-secondary);

    svg { color: var(--colors-secondary); }
  }

  :where(&).stateDisabled :global(#multi-select) > div {
    background-color: var(--colors-neutral200);
    border-color: var(--colors-neutral200);
    color: var(--colors-neutral);
    pointer-events: none;

    svg { color: var(--colors-neutral); }
  }

  :where(&).stateNull :global(#multi-select) > div {
    border-color: var(--colors-neutral400);

    svg { color: var(--colors-neutral400); }
  }
}
`})))()}var ve;function ye(){return(ye=e((()=>{ve=`/* eslint-disable no-plusplus */
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'

import type { CSSProperties } from 'react'

import { cx } from '../../utils'
import Button from '../Button'

import styles from './styles.module.scss'

export type PaginationProps = {
  currentPage?: number
  totalPages: number
  onPageChange: (page: number) => void
  variant?: 'default' | 'minimal'
  className?: string
  style?: CSSProperties
}

const LeftArrow = () => <ChevronLeftIcon />
const RightArrow = () => <ChevronRightIcon />

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages,
  onPageChange,
  variant = 'default',
  className,
  style,
}) => {
  const [page, setPage] = useState(currentPage)

  // Keep in sync when the parent changes the page (e.g. resets to 1 after filtering)
  useEffect(() => {
    setPage(currentPage)
  }, [currentPage])

  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 4

    // Calculate the range of visible page numbers
    let start = Math.max(page - Math.floor(maxVisiblePages / 2), 1)
    let end = start + maxVisiblePages - 1

    // Adjust the range if it exceeds the total number of pages
    if (end > totalPages) {
      end = totalPages
      start = Math.max(end - maxVisiblePages + 1, 1)
    }

    // Generate the page numbers
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i)
    }

    // Add three dots if there are more pages
    if (end < totalPages) {
      pageNumbers.push('...')
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const handlePageChange = (pageNumber: number | string) => {
    if (typeof pageNumber === 'number' && pageNumber !== page && onPageChange) {
      setPage(pageNumber)
      onPageChange(pageNumber)
    }
  }

  const renderPageNumbers = () => {
    const pageNumbers = getPageNumbers()

    return (
      <>
        {pageNumbers.map(pageNumber => (
          <Button
            key={pageNumber}
            className={cx(styles.button, pageNumber === page ? styles.currentPage : styles.page)}
            variant='textOnly'
            // href='#'
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}
      </>
    )
  }

  return (
    <div className={cx(styles.pagination, className)} style={style}>
      <Button
        variant='textOnly'
        // href='#'
        onClick={() => handlePageChange(page - 1)}
        iconComponent={LeftArrow}
        iconPosition='iconOnly'
        className={styles.button}
        disabled={page <= 1}
      />
      {variant === 'default' && (
        renderPageNumbers()
      )}
      <Button
        variant='textOnly'
        // href='#'
        onClick={() => handlePageChange(page + 1)}
        iconComponent={RightArrow}
        iconPosition='iconOnly'
        className={styles.button}
        disabled={page >= totalPages}
      />
    </div>
  )
}

export const paginationSelector = \`.\${styles.pagination}\`

export default Pagination
`;try{Pagination.displayName=`Pagination`,Pagination.__docgenInfo={description:``,displayName:`Pagination`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Pagination/index.tsx`,methods:[],props:{currentPage:{defaultValue:{value:`1`},declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`currentPage`,required:!1,tags:{},type:{name:`number | undefined`}},totalPages:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`totalPages`,required:!0,tags:{},type:{name:`number`}},onPageChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`onPageChange`,required:!0,tags:{},type:{name:`(page: number) => void`}},variant:{defaultValue:{value:`default`},declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"default" | "minimal" | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var be;function xe(){return(xe=e((()=>{be=`// =============================================================================
// PAGINATION
// =============================================================================

.pagination {
  display: flex;
  align-items: center;
  font-size: var(--fontSizes-sm);

  // Every button (arrows and page numbers)
  .button {
    width: 32px;
    height: 32px;
    padding: 0;

    svg {
      width: 16px;
      height: 16px;
    }
  }
}

// =============================================================================
// PAGE NUMBER
// -----------------------------------------------------------------------------
// Single class on purpose: the button's own :hover/:active states still apply.
// =============================================================================

.page {
  background-color: initial;
}

.currentPage {
  background-color: var(--colors-primary200);
  color: var(--colors-primary);
}
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import { Cross2Icon } from '@radix-ui/react-icons'

import type { CSSProperties, ReactNode } from 'react'

import { cx } from '../../utils'
import Button from '../Button'

import styles from './styles.module.scss'

export type PillProps = {
  children: ReactNode
  variant?: 'default' | 'error' | 'success'
  onClose?: () => void
  className?: string
  style?: CSSProperties
}

const CloseIcon = () => <Cross2Icon />

const Pill = ({
  children,
  variant = 'default',
  onClose,
  className,
  style,
  ...props
}: PillProps) => (
  <span className={cx(styles.pill, styles[variant], className)} style={style} {...props}>
    {children}
    {onClose && (
      <Button
        onClick={onClose}
        iconComponent={CloseIcon}
        iconPosition='iconOnly'
        variant='textOnly'
        className={styles.closeButton}
      />
    )}
  </span>
)

export const pillSelector = \`.\${styles.pill}\`

export default Pill
`;try{Pill.displayName=`Pill`,Pill.__docgenInfo={description:``,displayName:`Pill`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Pill/index.tsx`,methods:[],props:{variant:{defaultValue:{value:`default`},declarations:[{fileName:`redlight-ds/src/components/Pill/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"success" | "error" | "default" | undefined`}},onClose:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pill/index.tsx`,name:`TypeLiteral`}],description:``,name:`onClose`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pill/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pill/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var we;function Te(){return(Te=e((()=>{we=`// =============================================================================
// PILL
// -----------------------------------------------------------------------------
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

@use '../../styles/typography';

.pill {
  @include typography.microCopy;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: var(--space-xxxsm) var(--space-xxsm);
  gap: var(--space-xxsm);
  border-radius: var(--radii-full);

  // Close button
  .closeButton {
    padding: 0;
    width: 14px;
    height: 14px;

    &:hover { background: transparent; }
    &:focus { box-shadow: none; }
  }

  // ===========================================================================
  // VARIANT
  // ===========================================================================

  :where(&).default {
    background: var(--colors-primary200);
    color: var(--colors-primary);

    .closeButton { color: var(--colors-primary); }
  }

  :where(&).error {
    background: var(--colors-danger100);
    color: var(--colors-danger500);

    .closeButton { color: var(--colors-danger500); }
  }

  :where(&).success {
    background: var(--colors-success100);
    color: var(--colors-success500);

    .closeButton { color: var(--colors-success500); }
  }
}
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`import { Cross2Icon } from '@radix-ui/react-icons'
import * as Popover from '@radix-ui/react-popover'
import React from 'react'

import type { CSSProperties } from 'react'

import { cx } from '../../utils'

import styles from './styles.module.scss'

export type PopOverProps = {
  trigger?: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  className?: string
  style?: CSSProperties
}

const PopOver = ({
  trigger,
  children,
  side = 'right',
  align = 'center',
  sideOffset = 5,
  className,
  style,
}: PopOverProps) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      {trigger}
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className={cx(styles.content, className)}
        style={style}
        side={side}
        sideOffset={sideOffset}
        align={align}
        onOpenAutoFocus={event => event.preventDefault()}
      >
        {children}
        <Popover.Close className={styles.close} aria-label='Close'>
          <Cross2Icon />
        </Popover.Close>
        <Popover.Arrow className={styles.arrow} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export const popOverSelector = \`.\${styles.content}\`

export default PopOver
`;try{PopOver.displayName=`PopOver`,PopOver.__docgenInfo={description:``,displayName:`PopOver`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/PopOver/index.tsx`,methods:[],props:{trigger:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`trigger`,required:!1,tags:{},type:{name:`ReactNode`}},side:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`side`,required:!1,tags:{},type:{name:`"left" | "right" | "top" | "bottom" | undefined`}},align:{defaultValue:{value:`center`},declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`"center" | "start" | "end" | undefined`}},sideOffset:{defaultValue:{value:`5`},declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`sideOffset`,required:!1,tags:{},type:{name:`number | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`// =============================================================================
// POPOVER
// =============================================================================

@keyframes slideUpAndFade {
  0% { opacity: 0; transform: translateY(2px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideRightAndFade {
  0% { opacity: 0; transform: translateX(-2px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes slideDownAndFade {
  0% { opacity: 0; transform: translateY(-2px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideLeftAndFade {
  0% { opacity: 0; transform: translateX(2px); }
  100% { opacity: 1; transform: translateX(0); }
}

// =============================================================================
// CONTENT
// =============================================================================

.content {
  border-radius: var(--radii-xsm);
  padding: var(--space-xxsm);
  margin-right: var(--space-xxxsm);
  margin-left: var(--space-xxxsm);
  min-width: 260px;
  background-color: var(--colors-white);
  box-shadow: var(--shadows-cardShadow);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state="open"] {
    &[data-side="top"] { animation-name: slideDownAndFade; }
    &[data-side="right"] { animation-name: slideLeftAndFade; }
    &[data-side="bottom"] { animation-name: slideUpAndFade; }
    &[data-side="left"] { animation-name: slideRightAndFade; }
  }
}

// =============================================================================
// CLOSE BUTTON
// =============================================================================

.close {
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--colors-neutral);
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;

  &:hover { background-color: var(--colors-neutral200); }
}

// =============================================================================
// ARROW
// =============================================================================

.arrow {
  fill: var(--colors-white);
}
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`import React from 'react'

import type { CSSProperties } from 'react'

import { cx } from '../../utils'
import Label from '../shared/Label'

import styles from './styles.module.scss'

export type RadioProps = {
  label?: string,
  description?: string,
  name?: string,
  id: string,
  value?: string
  checked?: boolean,
  disabled?: boolean
  labelPosition?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  className?: string
  style?: CSSProperties
}

const Radio = ({
  id,
  name,
  value,
  label,
  description,
  checked,
  disabled = false,
  labelPosition = 'right',
  onChange,
  className,
  style,
  ...props
}: RadioProps) => (
  <div
    className={cx(styles.radio, disabled && styles.disabled, className)}
    style={style}
    {...props}
  >
    {labelPosition === 'left' ? (
      <>
        <Label
          label={label}
          description={description}
          id={id}
          className={styles.label}
        />
        <input
          className={cx(styles.trigger, disabled && styles.disabled)}
          type='radio'
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control -- text is in <Label> */}
        <label className={styles.indicator} htmlFor={id} />
      </>
    ) : (
      <>
        <input
          className={cx(styles.trigger, disabled && styles.disabled)}
          type='radio'
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control -- text is in <Label> */}
        <label className={styles.indicator} htmlFor={id} />
        <Label
          label={label}
          description={description}
          id={id}
          className={styles.label}
        />
      </>
    )}
  </div>
)

export const radioSelector = \`.\${styles.radio}\`

export default Radio
`;try{Radio.displayName=`Radio`,Radio.__docgenInfo={description:``,displayName:`Radio`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Radio/index.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},checked:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`checked`,required:!1,tags:{},type:{name:`boolean | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},labelPosition:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`labelPosition`,required:!1,tags:{},type:{name:`string | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((e: ChangeEvent<HTMLInputElement>) => void) | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`// =============================================================================
// RADIO
// -----------------------------------------------------------------------------
// The native input is hidden; the \`+ label\` sibling (.indicator) is the visible circle.
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

.radio {
  width: fit-content;
  display: flex;
  gap: var(--space-xxsm);
  cursor: pointer;

  * {
    cursor: pointer;
  }

  .label {
    padding: 0;
    margin-top: 1.5px;
  }

  // ===========================================================================
  // DISABLED
  // ===========================================================================

  :where(&).disabled {
    pointer-events: none;

    * {
      cursor: default;
    }
  }
}

// =============================================================================
// HIDDEN INPUT (drives the indicator styles)
// =============================================================================

.trigger {
  display: none;

  &:hover + label {
    background-color: var(--colors-neutral100);
    border-color: var(--colors-neutral600);
  }

  &:focus + label {
    background-color: var(--colors-neutral200);
    border-color: var(--colors-neutral700);
  }

  &:checked + label {
    background-color: var(--colors-primary);
    border-color: var(--colors-primary);

    // inner dot
    &::after {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: var(--radii-full);
      background: var(--colors-white);
    }

    &:hover { background-color: var(--colors-primary600); }
    &:focus { background-color: var(--colors-primary700); }
  }

  // ===========================================================================
  // DISABLED
  // ===========================================================================

  :where(&).disabled {
    + label {
      background-color: var(--colors-neutral300);
      border-color: var(--colors-neutral300);
    }

    &:checked + label {
      background-color: var(--colors-neutral300);
      border-color: var(--colors-neutral300);
    }
  }
}

// =============================================================================
// VISIBLE CIRCLE
// =============================================================================

.indicator {
  width: 16px;
  height: 16px;
  border-radius: var(--radii-full);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid var(--colors-neutral500);
  background-color: transparent;
}
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectInput from '@radix-ui/react-select'
import { useMemo, useState } from 'react'

import type { ChangeEvent, CSSProperties } from 'react'

import { capitalize, cx } from '../../utils'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

export type SelectProps<T> = {
  id: string
  name?: string
  label?: string
  value: string | null
  type?: 'number' | 'string'
  placeholder: string
  description?: string
  emptyOption?: string
  errorMsg?: string
  state?: 'error' | 'dirty' | 'disabled' | 'null'
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  options: T[]
  getLabel: (option: T) => string
  getValue: (option: T) => string
  className?: string
  style?: CSSProperties
  variant?: 'simple' | 'null'
  fullWidth?: boolean
}

const Select = <T extends object>({
  id,
  name,
  label,
  value,
  type = 'string',
  placeholder,
  description,
  errorMsg,
  state = 'null',
  onChange,
  options,
  getLabel,
  getValue,
  emptyOption,
  variant,
  className,
  style,
  fullWidth = false,
  ...props
}: SelectProps<T>) => {
  const [viewContent, setViewContent] = useState(false)
  const selectedOption = options.find(o => getValue(o) === value)
  const ChevronToShow = viewContent ? ChevronUpIcon : ChevronDownIcon

  const valueToDisplay = useMemo(() => {
    if (selectedOption) {
      return getLabel(selectedOption)
    } if (emptyOption) {
      return emptyOption
    }
    return placeholder
  }, [selectedOption, emptyOption, getLabel, placeholder])

  return (
    <div
      className={cx(styles.select, fullWidth ? styles.fullWidth : styles.notFullWidth, className)}
      style={style}
    >
      {label || description ? (
        <Label id={id} label={label} description={description} className={styles.label} />
      ) : null}

      <SelectInput.Root
        {...props}
        name={name}
        disabled={state === 'disabled'}
        value={value || valueToDisplay}
        onOpenChange={() => setViewContent(!viewContent)}
        onValueChange={value => {
          let finalValue: string | null = value
          if (emptyOption && value === '-1') {
            finalValue = null
          } else if (type === 'number') {
            finalValue = Number(value) as unknown as string
          }
          const target = {
            value: finalValue, name: name || id
          } as unknown as (EventTarget & HTMLSelectElement)
          const event = { target } as unknown as ChangeEvent<HTMLSelectElement>
          if (onChange) onChange(event)
        }}
      >
        <SelectInput.Trigger
          id={id}
          className={cx(
            styles.trigger,
            variant === 'simple' && styles.simple,
            styles[\`state\${capitalize(state)}\`],
          )}
        >
          <SelectInput.Value>
            {valueToDisplay}
          </SelectInput.Value>
          <SelectInput.Icon className={styles.chevron}>
            <ChevronToShow />
          </SelectInput.Icon>
        </SelectInput.Trigger>

        <SelectInput.Portal>
          <SelectInput.Content className={styles.content}>
            <SelectInput.ScrollUpButton className={styles.scrollButton}>
              <ChevronUpIcon />
            </SelectInput.ScrollUpButton>
            <SelectInput.Viewport className={styles.viewport}>
              {emptyOption && (
                <SelectInput.Item className={styles.item} value='-1'>
                  <SelectInput.ItemText>
                    {emptyOption}
                  </SelectInput.ItemText>
                  <SelectInput.ItemIndicator className={styles.check}>
                    <CheckIcon />
                  </SelectInput.ItemIndicator>
                </SelectInput.Item>
              )}
              {options.map(option => (
                <SelectInput.Item
                  className={styles.item}
                  key={getValue(option)}
                  value={getValue(option)}
                >
                  <SelectInput.ItemText>
                    {getLabel(option)}
                  </SelectInput.ItemText>
                  <SelectInput.ItemIndicator className={styles.check}>
                    <CheckIcon />
                  </SelectInput.ItemIndicator>
                </SelectInput.Item>
              ))}
            </SelectInput.Viewport>
            <SelectInput.ScrollDownButton className={styles.scrollButton}>
              <ChevronDownIcon />
            </SelectInput.ScrollDownButton>
          </SelectInput.Content>
        </SelectInput.Portal>
      </SelectInput.Root>
      {state === 'error' && errorMsg && (
        <>
          <br />
          <Text color='danger' variant='microCopy'>
            {errorMsg}
          </Text>
        </>
      )}
    </div>
  )
}

export const selectSelector = \`.\${styles.select}\`

export default Select
`;try{Select.displayName=`Select`,Select.__docgenInfo={description:``,displayName:`Select`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Select/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string | null`}},type:{defaultValue:{value:`string`},declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!1,tags:{},type:{name:`"string" | "number" | undefined`}},placeholder:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`placeholder`,required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},emptyOption:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`emptyOption`,required:!1,tags:{},type:{name:`string | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},state:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"null" | "disabled" | "error" | "dirty" | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLSelectElement>) => void`}},options:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`options`,required:!0,tags:{},type:{name:`T[]`}},getLabel:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`getLabel`,required:!0,tags:{},type:{name:`(option: T) => string`}},getValue:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`getValue`,required:!0,tags:{},type:{name:`(option: T) => string`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}},variant:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"null" | "simple" | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`// =============================================================================
// SELECT
// -----------------------------------------------------------------------------
// Built on Radix Select: .select > label + .trigger, and a portaled .content list.
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

@use '../../styles/typography';

// =============================================================================
// TRIGGER (the closed select)
// =============================================================================

.trigger {
  appearance: none;
  outline: none;
  all: unset;
  @include typography.microCopy;
  border: 1px solid var(--colors-neutral400);
  color: var(--colors-neutral800);
  height: 32px;
  min-width: 256px;
  max-width: 100%;
  padding: var(--space-xxsm);
  border-radius: var(--radii-xsm);
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  :global(.placeholder) {
    color: var(--colors-neutral);
  }

  &:hover {
    background-color: var(--colors-neutral100);
    border-color: var(--colors-neutral600);

    svg {
      color: var(--colors-neutral600);
    }
  }

  &:focus {
    border-color: var(--colors-primary);

    svg {
      color: var(--colors-neutral600);
    }
  }

  // ===========================================================================
  // VARIANT
  // ===========================================================================

  :where(&).simple {
    min-width: 128px;
    width: 100%;
  }

  // ===========================================================================
  // STATE
  // ===========================================================================

  :where(&).stateError {
    border-color: var(--colors-danger);

    svg {
      color: var(--colors-danger);
    }
  }

  :where(&).stateDirty {
    border-color: var(--colors-secondary);

    svg {
      color: var(--colors-secondary);
    }
  }

  :where(&).stateDisabled {
    background-color: var(--colors-neutral200);
    border-color: var(--colors-neutral200);
    color: var(--colors-neutral);
    pointer-events: none;

    svg {
      color: var(--colors-neutral);
    }
  }

  :where(&).stateNull {
    border-color: var(--colors-neutral400);

    svg {
      color: var(--colors-neutral400);
    }
  }
}

// =============================================================================
// ROOT (label + trigger)
// =============================================================================

.select {
  .label {
    padding-bottom: var(--space-xxxsm);
    pointer-events: none;
  }

  // ===========================================================================
  // FULL WIDTH
  // ===========================================================================

  :where(&).fullWidth {
    width: 100%;

    .trigger {
      width: 100%;
    }
  }

  :where(&).notFullWidth {
    width: fit-content;
  }
}

// =============================================================================
// DROPDOWN
// =============================================================================

.content {
  z-index: 200;
  overflow: hidden;
  background-color: var(--colors-white);
  border-radius: var(--radii-xsm);
  filter: drop-shadow(0px 4px 20px rgba(149, 157, 165, 0.15));
  width: 100%;
}

.viewport {
  background: var(--colors-white);
  box-shadow: var(--shadows-cardShadow);
  width: 100%;
}

.chevron {
  padding-top: var(--space-xxxsm);
  color: var(--colors-primary);

  svg {
    width: var(--sizes-xlg);
    height: var(--sizes-xlg);
  }
}

.scrollButton {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: var(--colors-white);
  color: var(--colors-primary);
  cursor: default;

  svg {
    width: var(--sizes-xlg);
    height: var(--sizes-xlg);
  }
}

// =============================================================================
// OPTION
// =============================================================================

.item {
  all: unset;
  @include typography.microCopy;
  line-height: 1;
  color: var(--colors-neutral800);
  display: flex;
  align-items: center;
  padding: var(--space-xxxsm) var(--space-xxsm);
  position: relative;
  user-select: none;
  height: var(--sizes-xxlg);

  &[data-disabled] {
    color: var(--colors-neutral400);
    pointer-events: none;
  }

  &:focus {
    background-color: var(--colors-primary100);
    color: var(--colors-primary);
  }
}

.check {
  padding-left: var(--space-xxsm);

  svg {
    width: var(--sizes-xsm);
    height: var(--sizes-xsm);
  }
}`})))()}var Re;function ze(){return(ze=e((()=>{Re=`/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  CaretSortIcon,
  CaretDownIcon,
  CaretUpIcon,
  MagnifyingGlassIcon
} from '@radix-ui/react-icons'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper
} from '@tanstack/react-table'
import {
  useCallback, useEffect, useRef, useState, ReactElement
} from 'react'

import type {
  ColumnDef,
  SortingState,
  ColumnSort,
} from '@tanstack/react-table'
import type { CSSProperties } from 'react'

import Flex from '../../elements/Flex'
import { cx } from '../../utils'
import Input from '../Input'
import Text from '../Text'

import styles from './styles.module.scss'
import { defaultColumnOptions, globalFilter, globalSort } from './utils'

export type TableProps<T> = {
  data: T[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[]
  sortees?: ColumnSort[]
  renderOptions?: (data: T) => ReactElement
  scrollable?: boolean
  className?: string
  style?: CSSProperties
}

const Table = <T extends object>({
  data,
  columns,
  sortees = [],
  renderOptions,
  scrollable = false,
  className,
  style,
}: TableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>(sortees)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [overflow, setOverflow] = useState({ left: false, right: false })

  const updateOverflow = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const left = scrollLeft > 0
    const right = Math.ceil(scrollLeft + clientWidth) < scrollWidth
    setOverflow(prev => (prev.left === left && prev.right === right ? prev : { left, right }))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!scrollable || !el) return undefined
    updateOverflow()
    const observer = new ResizeObserver(updateOverflow)
    observer.observe(el)
    if (el.firstElementChild) observer.observe(el.firstElementChild)
    return () => observer.disconnect()
  }, [scrollable, updateOverflow])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // Filtering
    enableFilters: true,
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: { globalFilter: globalFilter<T> },
    // Sorting
    enableSorting: true,
    state: { sorting },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    sortDescFirst: false,
    sortingFns: { globalSort: globalSort<T> },
  })

  const tableElement = (
    <table className={cx(styles.table, className)} style={style}>
      <thead className={styles.head}>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              const { column } = header
              const columnFilterValue = column.getFilterValue()
              const isSortable = column.getCanSort()

              const columnWidth = (column.columnDef.meta as { width?: string })?.width ?? 'auto'

              return (
                <th
                  key={header.id}
                  style={{ width: columnWidth }}
                  className={cx(!isSortable && styles.disabled)}
                >
                  <div
                    className={cx(styles.columnHeader, isSortable && styles.sortable)}
                    // eslint-disable-next-line no-mixed-operators
                    onClick={isSortable && column.getToggleSortingHandler() || undefined}
                  >
                    <Text variant='subHeading' color='neutral800'>
                      {flexRender(column.columnDef.header, header.getContext())}
                    </Text>
                    {(isSortable && {
                      asc: <CaretDownIcon />,
                      desc: <CaretUpIcon />,
                    }[column.getIsSorted() as string])
                      ?? <CaretSortIcon />}
                  </div>
                  {header.column.getCanFilter() ? (
                    <Input
                      type='text'
                      id={\`\${column.id}list\`}
                      variant='simple'
                      value={(columnFilterValue ?? '') as string}
                      placeholder='Filter by'
                      iconPosition='left'
                      iconComponent={() => <MagnifyingGlassIcon />}
                      onChange={({ target: { value } }) => (
                        column.setFilterValue(value || undefined)
                      )}
                      fullWidth
                    />
                  ) : null}
                </th>
              )
            })}
          </tr>
        ))}
      </thead>
      <tbody className={styles.body}>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                const data = cell.row.original
                let toRender
                if (renderOptions && cell.column.id === 'actions') {
                  toRender = <Flex>{renderOptions(data)}</Flex>
                } else {
                  toRender = flexRender(cell.column.columnDef.cell, cell.getContext())
                }
                return <td key={cell.id}>{toRender}</td>
              })}
            </tr>
          ))
        ) : (
          <tr>
            <td className={styles.emptyRow} colSpan={1000}>
              <Text variant='textBlock' color='neutral'>
                Nothing was found...
              </Text>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )

  if (!scrollable) return tableElement

  return (
    <div
      className={cx(
        styles.scrollContainer,
        overflow.left && styles.shadowLeft,
        overflow.right && styles.shadowRight,
      )}
    >
      <div ref={scrollRef} className={styles.scrollArea} onScroll={updateOverflow}>
        {tableElement}
      </div>
    </div>
  )
}

export const tableSelector = \`.\${styles.table}\`

export default Table
export {
  defaultColumnOptions,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper
}
export type {
  ColumnDef,
  SortingState,
  ColumnSort,
}
`;try{Table.displayName=`Table`,Table.__docgenInfo={description:``,displayName:`Table`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Table/index.tsx`,methods:[],props:{data:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`data`,required:!0,tags:{},type:{name:`T[]`}},columns:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{},type:{name:`ColumnDef<T, any>[]`}},sortees:{defaultValue:{value:`[]`},declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`sortees`,required:!1,tags:{},type:{name:`ColumnSort[] | undefined`}},renderOptions:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`renderOptions`,required:!1,tags:{},type:{name:`((data: T) => ReactElement<any, string | JSXElementConstructor<any>>) | undefined`}},scrollable:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`scrollable`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}try{flexRender.displayName=`flexRender`,flexRender.__docgenInfo={description:"If rendering headers, cells, or footers with custom markup, use flexRender instead of `cell.getValue()` or `cell.renderValue()`.",displayName:`flexRender`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Table/index.tsx`,methods:[],props:{},tags:{}}}catch{}try{useReactTable.displayName=`useReactTable`,useReactTable.__docgenInfo={description:``,displayName:`useReactTable`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Table/index.tsx`,methods:[],props:{filterFns:{defaultValue:null,declarations:[{fileName:`redlight-ds/node_modules/@tanstack/table-core/build/lib/features/ColumnFiltering.d.ts`,name:`TypeLiteral`}],description:``,name:`filterFns`,required:!1,tags:{},type:{name:`Record<string, FilterFn<any>> | undefined`}},sortingFns:{defaultValue:null,declarations:[{fileName:`redlight-ds/node_modules/@tanstack/table-core/build/lib/features/RowSorting.d.ts`,name:`TypeLiteral`}],description:``,name:`sortingFns`,required:!1,tags:{},type:{name:`Record<string, SortingFn<any>> | undefined`}},aggregationFns:{defaultValue:null,declarations:[{fileName:`redlight-ds/node_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts`,name:`TypeLiteral`}],description:``,name:`aggregationFns`,required:!1,tags:{},type:{name:`Record<string, AggregationFn<any>> | undefined`}}},tags:{}}}catch{}})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`// =============================================================================
// TABLE
// =============================================================================

@use '../../styles/typography';

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: var(--space-sm);
  border-radius: var(--radii-sm);
  overflow: hidden;
}

// =============================================================================
// HEADER
// =============================================================================

.head tr th {
  background: var(--colors-neutral100);
  padding: var(--space-xxsm);
  text-align: left;
  vertical-align: top;
  @include typography.subHeading;
  color: var(--colors-neutral800);
  cursor: default;

  &:first-child {
    border-top-left-radius: var(--radii-sm);
  }

  &:last-child {
    border-top-right-radius: var(--radii-sm);
  }

  &:hover {
    background: var(--colors-primary100);
  }

  &:active,
  &:focus {
    background: var(--colors-primary100);
    outline: 1px solid var(--colors-primary300);
    outline-offset: -1px;
  }

  // not sortable
  &.disabled {
    pointer-events: none;
  }

  // title + sort icon
  >div.columnHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-xxsm);
    gap: var(--space-xxsm);

    &.sortable {
      cursor: pointer;
    }
  }
}

// =============================================================================
// BODY
// =============================================================================

.body tr {
  border-bottom: 1px solid var(--colors-neutral200);

  td {
    padding: var(--space-xsm);
    text-align: left;
    vertical-align: top;
    @include typography.textBlock;
    color: var(--colors-neutral700);
  }

  &:hover {
    background-color: var(--colors-primary100);
  }
}

// "Nothing was found" row
.emptyRow {
  width: 100%;
  text-align: center;
  background: var(--colors-white);
  padding: var(--space-xxxlg) 0;
}

// =============================================================================
// SCROLLABLE
// =============================================================================

.scrollContainer {
  position: relative;
  width: 100%;
  margin-top: var(--space-sm);
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--space-xxsm);
    box-shadow: var(--shadows-cardShadow);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 1;
  }

  &::before {
    left: calc(-1 * var(--space-xxsm));
  }

  &::after {
    right: calc(-1 * var(--space-xxsm));
  }

  &.shadowLeft::before,
  &.shadowRight::after {
    opacity: 1;
  }
}

.scrollArea {
  width: 100%;
  overflow-x: auto;

  >.table {
    margin-top: 0;
  }
}`})))()}var He;function Ue(){return(Ue=e((()=>{He=`/* eslint-disable react/no-array-index-key */
import * as RadixTabs from '@radix-ui/react-tabs'
import React from 'react'

import type { CSSProperties } from 'react'

import { capitalize, cx } from '../../utils'

import styles from './styles.module.scss'

export type TabsProps = {
  tabs: { label: string }[],
  children: React.ReactNode | React.ReactNode[],
  align?: 'left' | 'right' | 'null'
  className?: string
  style?: CSSProperties
}

const Tabs = ({
  tabs,
  children,
  align,
  className,
  style,
}: TabsProps) => (
  <RadixTabs.Root
    defaultValue='tab0'
    className={cx(styles.tabs, align && styles[\`align\${capitalize(align)}\`], className)}
    style={style}
  >
    <RadixTabs.List className={styles.list}>
      {tabs.map((tab, index) => (
        <RadixTabs.Trigger key={\`tab\${index}\`} value={\`tab\${index}\`} className={styles.trigger}>
          {tab.label}
        </RadixTabs.Trigger>
      ))}
    </RadixTabs.List>
    {(Array.isArray(children) ? children : [children]).map((child, index) => (
      <RadixTabs.Content key={\`tab\${index}\`} value={\`tab\${index}\`} className={styles.content}>
        {child}
      </RadixTabs.Content>
    ))}
  </RadixTabs.Root>
)

export const tabsSelector = \`.\${styles.tabs}\`

export default Tabs
`;try{Tabs.displayName=`Tabs`,Tabs.__docgenInfo={description:``,displayName:`Tabs`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Tabs/index.tsx`,methods:[],props:{tabs:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tabs/index.tsx`,name:`TypeLiteral`}],description:``,name:`tabs`,required:!0,tags:{},type:{name:`{ label: string; }[]`}},align:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tabs/index.tsx`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`"left" | "right" | "null" | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tabs/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tabs/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var We;function Ge(){return(Ge=e((()=>{We=`// =============================================================================
// TABS
// -----------------------------------------------------------------------------
// Built on Radix Tabs: .tabs > .list (.trigger...) + .content
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

@use '../../styles/typography';

.list {
  display: flex;
  z-index: 1;
}

.trigger {
  all: unset;
  @include typography.heading7;
  background-color: var(--colors-white);
  padding: 0 var(--space-xxlg);
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--colors-neutral700);
  user-select: none;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  text-wrap: nowrap;

  &:first-child { border-top-left-radius: var(--radii-sm); }
  &:last-child { border-top-right-radius: var(--radii-sm); }
  &:hover { background-color: var(--colors-primary100); }

  &[data-state="active"] {
    color: var(--colors-primary);
    background-color: var(--colors-primary100);
    border-color: var(--colors-primary);
  }

  &:focus { background-color: var(--colors-primary300); }
}

.content {
  flex-grow: 1;
  padding: var(--space-xxsm);
  background-color: var(--colors-white);
  border-bottom-left-radius: var(--radii-sm);
  border-bottom-right-radius: var(--radii-sm);
  outline: none;
}

.tabs {
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  // ===========================================================================
  // ALIGN
  // ===========================================================================

  :where(&).alignLeft {
    .list {
      width: fit-content;
      align-self: flex-start;
    }

    .content {
      box-shadow: var(--shadows-cardShadow);
      border-top-right-radius: var(--radii-sm);
    }
  }

  :where(&).alignRight {
    .list {
      width: fit-content;
      align-self: flex-end;
    }

    .content {
      box-shadow: var(--shadows-cardShadow);
      border-top-left-radius: var(--radii-sm);
    }
  }

  :where(&).alignNull {
    .list {
      width: 100%;
      align-self: unset;
      border-top-right-radius: none;
      border-top-left-radius: none;
    }

    .content {
      box-shadow: none;
    }
  }
}
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`import { Cross2Icon } from '@radix-ui/react-icons'

import type { ReactNode, CSSProperties } from 'react'

import { cx } from '../../utils'
import Button from '../Button'

import styles from './styles.module.scss'

export type TagProps = {
  children: ReactNode
  variant?: 'default' | 'error'
  disabled?: boolean
  onClose?: () => void
  className?: string
  style?: CSSProperties
}

const CloseIcon = () => <Cross2Icon />

const Tag = ({
  children,
  variant = 'default',
  onClose,
  disabled = false,
  className,
  style,
  ...props
}: TagProps) => {
  const closable = onClose && variant !== 'error'

  return (
    <span
      className={cx(
        styles.tag,
        styles[variant],
        disabled && styles.disabled,
        closable && styles.closable,
        className,
      )}
      style={style}
      {...props}
    >
      {children}
      {closable && (
        <Button
          onClick={onClose}
          iconComponent={CloseIcon}
          iconPosition='iconOnly'
          variant='textOnly'
          className={styles.closeButton}
        />
      )}
    </span>
  )
}

export const tagSelector = \`.\${styles.tag}\`

export default Tag
`;try{Tag.displayName=`Tag`,Tag.__docgenInfo={description:``,displayName:`Tag`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Tag/index.tsx`,methods:[],props:{variant:{defaultValue:{value:`default`},declarations:[{fileName:`redlight-ds/src/components/Tag/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"error" | "default" | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Tag/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},onClose:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tag/index.tsx`,name:`TypeLiteral`}],description:``,name:`onClose`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tag/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tag/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`// =============================================================================
// TAG
// -----------------------------------------------------------------------------
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

@use '../../styles/typography';

.tag {
  @include typography.microCopy;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: var(--space-xxxsm) var(--space-xxsm);
  gap: var(--space-xxsm);
  border-radius: var(--radii-xsm);

  // ===========================================================================
  // CLOSABLE
  // ===========================================================================

  &.closable {
    &:hover {
      background: var(--colors-neutral400);
    }

    .closeButton {
      padding: 0;
      width: 14px;
      height: 14px;
      cursor: pointer;

      &:hover { background: transparent; }
      &:focus { box-shadow: none; }
    }
  }

  // ===========================================================================
  // VARIANT
  // ===========================================================================

  :where(&).default {
    background: var(--colors-neutral300);
    color: var(--colors-neutral800);
  }

  :where(&).error {
    background: var(--colors-danger100);
    color: var(--colors-danger500);
  }

  // ===========================================================================
  // DISABLED
  // ===========================================================================

  :where(&).disabled {
    pointer-events: none;
    background: var(--colors-neutral200);
    color: var(--colors-neutral400);

    .closeButton { color: var(--colors-neutral400); }
  }
}
`})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=`import type { ColorType } from '../../theme'
import type { CSSProperties, ReactNode } from 'react'

import { cx } from '../../utils'

import styles from './styles.module.scss'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'
  | 'subHeading' | 'subHeadingSmall' | 'paragraph' | 'textBlock' | 'microCopy'

export type TextProps = {
  variant?: TextVariant
  color?: ColorType
  className?: string
  style?: CSSProperties
  children?: string | ReactNode
}

export const Text = ({
  variant = 'paragraph',
  color = 'primary',
  className,
  style,
  children,
  ...props
}: TextProps) => (
  <span
    className={cx(styles.text, styles[variant], className)}
    style={{ '--text-color': \`var(--colors-\${color})\`, ...style } as CSSProperties}
    {...props}
  >
    {children}
  </span>
)

export const textSelector = \`.\${styles.text}\`

export default Text
`;try{Text.displayName=`Text`,Text.__docgenInfo={description:``,displayName:`Text`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Text/index.tsx`,methods:[],props:{variant:{defaultValue:{value:`paragraph`},declarations:[{fileName:`redlight-ds/src/components/Text/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`TextVariant | undefined`}},color:{defaultValue:{value:`primary`},declarations:[{fileName:`redlight-ds/src/components/Text/index.tsx`,name:`TypeLiteral`}],description:``,name:`color`,required:!1,tags:{},type:{name:`"neutral" | "primary" | "danger" | "success" | "black" | "white" | "primary100" | "primary200" | "primary300" | "primary400" | "primary500" | "primary600" | "primary700" | "primary800" | ... 32 more ... | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Text/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Text/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var Qe;function $e(){return($e=e((()=>{Qe=`// =============================================================================
// TEXT
// -----------------------------------------------------------------------------
// The \`color\` prop sets \`--text-color\` inline, so parent components can still
// override the color with a normal rule.
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

@use '../../styles/typography';

.text {
  cursor: default;
  color: var(--text-color);

  // ===========================================================================
  // VARIANT
  // ===========================================================================

  :where(&).h1 { @include typography.heading1; }
  :where(&).h2 { @include typography.heading2; }
  :where(&).h3 { @include typography.heading3; }
  :where(&).h4 { @include typography.heading4; }
  :where(&).h5 { @include typography.heading5; }
  :where(&).h6 { @include typography.heading6; }
  :where(&).h7 { @include typography.heading7; }
  :where(&).subHeading { @include typography.subHeading; }
  :where(&).subHeadingSmall { @include typography.subHeadingSmall; }
  :where(&).paragraph { @include typography.paragraph; }
  :where(&).textBlock { @include typography.textBlock; }
  :where(&).microCopy { @include typography.microCopy; }
}
`})))()}var et;function tt(){return(tt=e((()=>{et=`import React from 'react'

import type { ChangeEvent } from 'react'

import { capitalize, cx } from '../../utils'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

export type TextAreaProps = {
  id?: string
  name?: string
  value?: string
  label?: string
  placeholder?: string
  description?: string
  state?: 'error' | 'dirty' | 'disabled' | 'null'
  fullWidth?: boolean
  errorMsg?: string
  rows?: number
  required?: boolean
  maxLength?: number
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = React.forwardRef(({
  id,
  name,
  value,
  label,
  placeholder,
  description,
  state = 'null',
  fullWidth = false,
  errorMsg,
  rows = 5,
  required = false,
  maxLength,
  disabled,
  className,
  onChange,
  ...props
}: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => (
  <div className={cx(styles.wrapper, fullWidth && styles.fullWidth)}>
    <div className={styles.textArea}>
      {label || description ? (
        <Label
          id={id}
          label={label}
          description={description}
          className={styles.label}
        />
      ) : null}
      <textarea
        className={cx(styles.field, state && state !== 'null' && styles[\`state\${capitalize(state)}\`], className)}
        id={id}
        ref={ref}
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        required={required}
        maxLength={maxLength}
        disabled={disabled || state === 'disabled'}
        onChange={onChange}
        {...props}
      />
    </div>
    {state === 'error' && errorMsg && (
      <Text color='danger' variant='microCopy'>
        {errorMsg}
      </Text>
    )}
  </div>
))
export const textAreaSelector = \`.\${styles.textArea}\`

export default TextArea
`;try{TextArea.displayName=`TextArea`,TextArea.__docgenInfo={description:``,displayName:`TextArea`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/TextArea/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | (string & readonly string[]) | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},placeholder:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`placeholder`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},state:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"null" | "disabled" | "error" | "dirty" | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},rows:{defaultValue:{value:`5`},declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`rows`,required:!1,tags:{},type:{name:`number | undefined`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean | undefined`}},maxLength:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`maxLength`,required:!1,tags:{},type:{name:`number | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((event: ChangeEvent<HTMLTextAreaElement>) => void) & ChangeEventHandler<HTMLTextAreaElement>`}}},tags:{}}}catch{}})))()}var nt;function rt(){return(rt=e((()=>{nt=`// =============================================================================
// TEXT AREA
// -----------------------------------------------------------------------------
// .wrapper > .textArea (label + field) + error message
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

@use '../../styles/typography';

// =============================================================================
// FIELD
// =============================================================================

.field {
  width: 100%;
  position: relative;
  padding: var(--space-xxsm);
  border-radius: var(--radii-xsm);
  appearance: none;
  border: none;
  background-color: transparent;
  @include typography.microCopy;
  outline: 1px solid var(--colors-neutral400);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  resize: vertical;

  &::placeholder {
    color: var(--colors-neutral);
  }

  // ===========================================================================
  // STATE
  // ===========================================================================

  :where(&).stateError {
    outline-color: var(--colors-danger);
  }

  :where(&).stateDirty {
    outline-color: var(--colors-accent);
  }

  :where(&).stateDisabled {
    background-color: var(--colors-neutral200);
    outline-color: var(--colors-neutral200);
    color: var(--colors-neutral);
    pointer-events: none;
  }

  :where(&).stateNull {
    &:hover {
      background-color: var(--colors-neutral100);
      outline-color: var(--colors-neutral600);
    }

    &:focus {
      outline-color: var(--colors-primary);
    }
  }
}

// =============================================================================
// LABEL + FIELD
// =============================================================================

.textArea {
  min-width: 256px;
  max-width: 100%;
  width: fit-content;
  display: inline-block;
  position: relative;

  .label {
    padding-bottom: var(--space-xxxsm);
    pointer-events: none;
  }
}

// =============================================================================
// WRAPPER
// =============================================================================

.wrapper {
  width: fit-content;
  display: flex;
  flex-direction: column;

  // ===========================================================================
  // FULL WIDTH
  // ===========================================================================

  :where(&).fullWidth {
    width: 100%;

    .textArea {
      width: 100%;

      .field {
        width: 100%;
      }
    }
  }
}
`})))()}var it;function at(){return(at=e((()=>{it=`import { ClockIcon } from '@radix-ui/react-icons'
import { PatternFormat } from 'react-number-format'
import { TimePicker as ReactTimePicker } from 'react-time-picker'

import type { ChangeEvent, CSSProperties } from 'react'

import { cx } from '../../utils'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'

export enum PickerTypes {
  DURATION = 'duration',
  TIME = 'time',
}

export type TimePickerProps = {
  name?: string
  label?: string
  description?: string
  value?: string
  onChange: (time: ChangeEvent<HTMLInputElement> | string) => void
  error?: string | null
  type?: PickerTypes | 'time' | 'duration'
  disabled?: boolean
  fullWidth?: boolean
  className?: string
  style?: CSSProperties
}

const TimePicker = ({
  name,
  label,
  description,
  value,
  onChange,
  error,
  type = PickerTypes.TIME,
  disabled = false,
  fullWidth = false,
  className,
  style,
}: TimePickerProps) => (
  <div
    className={cx(
      styles.timePicker,
      error && styles.hasError,
      fullWidth && styles.fullWidth,
      disabled && styles.disabled,
      className,
    )}
    style={style}
  >
    {label && <Label id={name} label={label} description={description} />}
    {type === PickerTypes.TIME ? (
      <ReactTimePicker
        name={name}
        value={value}
        onChange={time => onChange(time ? \`\${time}:00\` : '')}
        disabled={disabled}
        clearIcon={false}
        className={styles.main}
        clockIcon={<ClockIcon />}
      />
    ) : (
      <PatternFormat
        className={cx(styles.durationPicker, fullWidth && styles.fullWidth)}
        displayType='input'
        disabled={disabled}
        value={value?.slice(0, 5).replace(':', '')}
        valueIsNumericString
        onValueChange={values => onChange(\`\${values.formattedValue}:00\`)}
        allowEmptyFormatting
        format='##:##'
        mask='-'
        isAllowed={values => {
          const time = values.formattedValue.split(':')
          const isHoursAllowed = Number(time[0]) ? Number(time[0]) < 24 : true
          const isMinAllowed = Number(time[1]) ? Number(time[1]) < 60 : true
          return isHoursAllowed && isMinAllowed
        }}
      />
    )}
    {error && (
      <Text color='danger' variant='microCopy'>
        {String(error)}
      </Text>
    )}
  </div>
)

export const timePickerSelector = \`.\${styles.timePicker}\`

export default TimePicker
`;try{TimePicker.displayName=`TimePicker`,TimePicker.__docgenInfo={description:``,displayName:`TimePicker`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/TimePicker/index.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(time: string | ChangeEvent<HTMLInputElement>) => void`}},error:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`error`,required:!1,tags:{},type:{name:`string | null | undefined`}},type:{defaultValue:{value:`PickerTypes.TIME`},declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!1,tags:{},type:{name:`"time" | PickerTypes | "duration" | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var ot;function st(){return(st=e((()=>{ot=`// =============================================================================
// TIME PICKER
// -----------------------------------------------------------------------------
// "time" type styles the third-party react-time-picker markup (classes wrapped
// in :global); "duration" type is a formatted text input (.durationPicker).
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

.timePicker {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-xxxsm);

  // ===========================================================================
  // TIME INPUT
  // ===========================================================================

  .main {
    > div {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: var(--sizes-xxxlg);
      padding: var(--space-xxsm) 0 var(--space-xxsm) var(--space-xxsm);
      border-radius: var(--radii-xsm);
      border: 1px solid var(--colors-neutral400);
      font-size: var(--fontSizes-xsm);

      &:hover {
        background-color: var(--colors-neutral100);
        border-color: var(--colors-neutral600);
      }

      :global(.react-time-picker__inputGroup__input:invalid) {
        background-color: var(--colors-transparent);
      }

      :global(.react-time-picker__inputGroup__input:valid) {
        color: var(--colors-neutral800);
      }
    }

    button {
      color: var(--colors-neutral);
      pointer-events: none;
    }

    &:global(.react-time-picker--open) > div {
      border-color: var(--colors-primary);
    }
  }

  // the analog clock dropdown is never shown
  :global(.react-time-picker__clock) {
    display: none;
  }

  // ===========================================================================
  // ERROR
  // ===========================================================================

  :where(&).hasError .main > div {
    border-color: var(--colors-danger);
  }

  // ===========================================================================
  // DISABLED
  // ===========================================================================

  :where(&).disabled .main > div {
    background-color: var(--colors-neutral200);
    border-color: var(--colors-neutral200);
    color: var(--colors-neutral);
    pointer-events: none;

    :global(.react-time-picker__inputGroup__input:valid) {
      color: var(--colors-neutral);
    }
  }

  // ===========================================================================
  // FULL WIDTH
  // ===========================================================================

  :where(&).fullWidth {
    width: 100%;

    > div { width: 100%; }
  }
}

// =============================================================================
// DURATION INPUT
// =============================================================================

.durationPicker {
  height: var(--sizes-xxxlg);
  padding: var(--space-xxsm) var(--space-xsm) var(--space-xxsm) var(--space-xxsm);
  border-radius: var(--radii-xsm);
  border: 1px solid var(--colors-neutral400);
  font-size: var(--fontSizes-xsm);
  -moz-appearance: textfield;

  &:hover {
    background-color: var(--colors-neutral100);
    border-color: var(--colors-neutral600);
  }

  // ===========================================================================
  // FULL WIDTH
  // ===========================================================================

  :where(&).fullWidth {
    width: 100%;

    > div { width: 100%; }
  }
}
`})))()}var ct;function lt(){return(lt=e((()=>{ct=`import * as Switch from '@radix-ui/react-switch'
import React from 'react'

import type { ChangeEvent, Ref, CSSProperties } from 'react'

import { capitalize, cx } from '../../utils'
import Label from '../shared/Label'
import Text from '../Text'

import styles from './styles.module.scss'

export type ToggleProps = {
  id: string
  name?: string
  label?: string
  value?: boolean
  description?: string
  errorMsg?: string
  state?: 'error' | 'dirty' | 'disabled' | 'null'
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  labelPosition?: 'left' | 'right'
  className?: string
  style?: CSSProperties
}

const Toggle = React.forwardRef(({
  id,
  name,
  label,
  value,
  description,
  errorMsg,
  state,
  onChange,
  labelPosition = 'right',
  className,
  style,
  ...props
}: ToggleProps, ref: React.Ref<HTMLInputElement>) => (
  <>
    <div
      className={cx(styles.toggle, state === 'disabled' && styles.disabled, className)}
      style={style}
    >
      {labelPosition === 'left' && (label || description) ? (
        <Label
          id={id}
          label={label}
          description={description}
          className={styles.label}
        />
      ) : null}
      <Switch.Root
        className={cx(styles.trigger, state && state !== 'null' && styles[\`state\${capitalize(state)}\`])}
        id={id}
        ref={ref as Ref<HTMLButtonElement>}
        name={name}
        value={undefined}
        checked={value}
        disabled={Boolean(state === 'disabled')}
        onCheckedChange={checked => {
          const target = {
            value: checked, name: name || id
          } as unknown as (EventTarget & HTMLInputElement)
          const event = { target } as unknown as ChangeEvent<HTMLInputElement>
          if (onChange) onChange(event)
        }}
        {...props}
      >
        <Switch.Thumb className={styles.thumb} />
      </Switch.Root>
      {labelPosition === 'right' && (label || description) ? (
        <Label
          id={id}
          label={label}
          description={description}
          className={styles.label}
        />
      ) : null}
    </div>
    {state === 'error' && errorMsg && (
      <Text color='danger' variant='microCopy'>
        {errorMsg}
      </Text>
    )}
  </>
))

export const toggleSelector = \`.\${styles.toggle}\`

export default Toggle
`;try{Toggle.displayName=`Toggle`,Toggle.__docgenInfo={description:``,displayName:`Toggle`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Toggle/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`boolean | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},state:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"null" | "disabled" | "error" | "dirty" | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement>) => void`}},labelPosition:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`labelPosition`,required:!1,tags:{},type:{name:`"left" | "right" | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var ut;function dt(){return(dt=e((()=>{ut=`// =============================================================================
// TOGGLE
// -----------------------------------------------------------------------------
// Built on Radix Switch: .toggle > .trigger (.thumb) + label
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

.toggle {
  width: fit-content;
  display: flex;
  gap: var(--space-xxsm);

  * {
    cursor: pointer;
  }

  .label {
    padding: 0;
    margin-top: 1.5px;
  }

  // ===========================================================================
  // DISABLED
  // ===========================================================================

  :where(&).disabled {
    pointer-events: none;

    * {
      cursor: default;
    }
  }
}

// =============================================================================
// THUMB
// =============================================================================

.thumb {
  display: block;
  width: 12px;
  height: 12px;
  background-color: var(--colors-white);
  border-radius: var(--radii-full);
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(14px);
  }
}

// =============================================================================
// TRACK
// =============================================================================

.trigger {
  all: unset;
  width: 28px;
  height: 16px;
  background-color: var(--colors-neutral400);
  border-radius: var(--radii-full);
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: 1px solid transparent;
  cursor: pointer;

  &:hover { background-color: var(--colors-neutral600); }
  &:focus { background-color: var(--colors-neutral700); }

  &[data-state="checked"] {
    background-color: var(--colors-primary);

    &:hover { background-color: var(--colors-primary600); }
    &:focus { background-color: var(--colors-primary700); }
  }

  // ===========================================================================
  // STATE
  // ===========================================================================

  :where(&).stateError {
    outline-color: var(--colors-danger);
  }

  :where(&).stateDirty {
    outline-color: var(--colors-accent);
  }

  :where(&).stateDisabled {
    background-color: var(--colors-neutral300);

    .thumb { background-color: var(--colors-neutral400); }

    &[data-state="checked"] { background-color: var(--colors-neutral300); }
  }
}
`})))()}var ft;function pt(){return(pt=e((()=>{ft=`import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

import type { CSSProperties } from 'react'

import { cx } from '../../utils'
import Text from '../Text'

import styles from './styles.module.scss'

export type TooltipProps = {
  children: React.ReactNode
  content: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  delay?: number
  className?: string
  style?: CSSProperties
}

const Tooltip = ({
  children,
  content,
  side = 'right',
  delay = 50,
  className,
  style,
}: TooltipProps) => (
  <RadixTooltip.Provider delayDuration={delay}>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>
        <span className={styles.trigger}>
          {children}
        </span>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className={cx(styles.content, className)}
          style={style}
          side={side}
          align='center'
          sideOffset={5}
        >
          <Text variant='microCopy' color='white' className={styles.text}>
            {content}
          </Text>
          <RadixTooltip.Arrow className={styles.arrow} width={11} height={5} />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
)

export default Tooltip
`;try{Tooltip.displayName=`Tooltip`,Tooltip.__docgenInfo={description:``,displayName:`Tooltip`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Tooltip/index.tsx`,methods:[],props:{content:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tooltip/index.tsx`,name:`TypeLiteral`}],description:``,name:`content`,required:!0,tags:{},type:{name:`string`}},side:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Tooltip/index.tsx`,name:`TypeLiteral`}],description:``,name:`side`,required:!1,tags:{},type:{name:`"left" | "right" | "top" | "bottom" | undefined`}},delay:{defaultValue:{value:`50`},declarations:[{fileName:`redlight-ds/src/components/Tooltip/index.tsx`,name:`TypeLiteral`}],description:``,name:`delay`,required:!1,tags:{},type:{name:`number | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tooltip/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tooltip/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var mt;function ht(){return(ht=e((()=>{mt=`// =============================================================================
// TOOLTIP
// =============================================================================

@use '../../styles/typography';

@keyframes slideUpAndFade {
  0% { opacity: 0; transform: translateY(2px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideRightAndFade {
  0% { opacity: 0; transform: translateX(-2px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes slideDownAndFade {
  0% { opacity: 0; transform: translateY(-2px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideLeftAndFade {
  0% { opacity: 0; transform: translateX(2px); }
  100% { opacity: 1; transform: translateX(0); }
}

// =============================================================================
// TRIGGER (inherits the layout of whatever it wraps)
// =============================================================================

.trigger {
  all: unset;
  width: inherit;
  height: inherit;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  flex-direction: inherit;
}

// =============================================================================
// CONTENT
// =============================================================================

.content {
  max-width: 296px;
  border-radius: var(--radii-xsm);
  padding: var(--space-xxsm) var(--space-sm);
  background-color: var(--colors-neutral700);
  @include typography.heading7;
  color: var(--colors-white);
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state="delayed-open"] {
    &[data-side="top"] { animation-name: slideDownAndFade; }
    &[data-side="right"] { animation-name: slideLeftAndFade; }
    &[data-side="bottom"] { animation-name: slideUpAndFade; }
    &[data-side="left"] { animation-name: slideRightAndFade; }
  }

  .text {
    white-space: pre-line;
  }
}

// =============================================================================
// ARROW
// =============================================================================

.arrow {
  fill: var(--colors-neutral700);
}
`})))()}var gt;function _t(){return(_t=e((()=>{gt=`import { SymbolIcon, FileTextIcon, Cross2Icon } from '@radix-ui/react-icons'
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

export const uploadSelector = \`.\${styles.upload}\`

export default Upload
`;try{Upload.displayName=`Upload`,Upload.__docgenInfo={description:``,displayName:`Upload`,filePath:`/Users/diogoribeiro/redlight/redlight-ds/src/components/Upload/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}},size:{defaultValue:{value:`normal`},declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`"normal" | "large" | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},placeholder:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`placeholder`,required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},buttonText:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`buttonText`,required:!1,tags:{},type:{name:`string | undefined`}},defaultFile:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`defaultFile`,required:!1,tags:{},type:{name:`File | undefined`}},onUpload:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`onUpload`,required:!1,tags:{},type:{name:`((file: File) => void) | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var vt;function yt(){return(yt=e((()=>{vt=`// =============================================================================
// UPLOAD
// -----------------------------------------------------------------------------
// .wrapper > .label (normal size) + .upload
// .upload > hidden file input + clear button + .file (preview / name) + .trigger
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

@use '../../styles/typography';

@keyframes rotateIcon {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(359deg); }
}

// =============================================================================
// WRAPPER (label on top + field)
// =============================================================================

.wrapper {
  width: 256px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-xxxsm);

  > .label {
    padding-bottom: var(--space-xxxsm);
  }

  // ===========================================================================
  // FULL WIDTH
  // ===========================================================================

  :where(&).fullWidth {
    width: 100%;
  }
}

// =============================================================================
// FILE INPUT (invisible, covers the field)
// =============================================================================

.uploadInput {
  width: 100%;
  height: 32px;
  min-width: 256px;
  max-width: 100%;
  opacity: 0;

  &:disabled {
    pointer-events: none;
  }
}

// =============================================================================
// FILE PREVIEW / NAME
// =============================================================================

.file {
  position: absolute;
  display: flex;
  align-items: center;

  img {
    height: 26px;
    width: 26px;
    flex-shrink: 0;
    border-radius: var(--radii-xsm);
    object-fit: cover;
  }

  .label {
    align-items: center;
    padding-left: var(--space-xxxsm);

    p {
      color: var(--colors-neutral800);
    }

    // keep the label's own description typography (the \`span\` rule below targets file names)
    span {
      @include typography.microCopy;
    }
  }

  span {
    @include typography.heading7;
    color: var(--colors-neutral);
    padding-left: var(--space-xxxsm);
  }

  .fileName {
    display: flex;
    min-width: 0;
    max-width: 100%;
    white-space: nowrap;

    span {
      padding-left: 0;
    }
  }

  .fileNameBase {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    background-color: var(--colors-neutral200);
    border-radius: var(--radii-xsm);
    padding: var(--space-xxxsm);
    color: var(--colors-primary);
    height: 26px;
    width: 26px;
    flex-shrink: 0;
  }
}

// =============================================================================
// "SELECT FILE" BUTTON
// =============================================================================

.trigger {
  position: absolute;
  right: -1px;

  button {
    background-color: var(--colors-white);
    height: 34px;

    svg {
      animation: rotateIcon 2s infinite linear;
    }
  }
}

// =============================================================================
// ROOT
// =============================================================================

.upload {
  position: relative;
  width: 100%;
  border-radius: var(--radii-xsm);
  padding: var(--space-xxxsm);
  display: flex;
  align-items: center;

  .clearBtn {
    position: absolute;
    border-radius: var(--radii-full);
    width: 18px;
    height: 18px;
    min-width: 18px;
    min-height: 18px;
    padding: 0;
    z-index: 1;

    svg {
      width: 12px;
      height: 12px;
    }
  }

  // ===========================================================================
  // SIZE
  // ===========================================================================

  // --- normal: single-line field with a button --------------------------------
  :where(&).normal {
    height: 34px;
    border: 0.075rem solid var(--colors-neutral400);

    gap: var(--space-xxsm);

    // the invisible input covers the whole field; the content flows on top of it
    .uploadInput {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }

    // file name on the left, clear button pushed to the right (next to the trigger)
    .file {
      position: static;
      flex: 1;
      min-width: 0;
    }

    .clearBtn {
      position: relative;
    }

    .trigger {
      position: relative;
      right: auto;
      margin-left: auto;
      margin-right: calc(-1 * var(--space-xxxsm) - 1px);
    }
  }

  // --- large: dashed drop area -----------------------------------------------
  :where(&).large {
    height: 96px;
    border: 0.075rem dashed var(--colors-neutral400);
    flex-direction: column-reverse;
    justify-content: center;
    gap: var(--space-xxsm);

    .clearBtn {
      top: 2px;
      right: 2px;
      transform: translateX(50%) translateY(-50%);
    }

    span svg {
      background: transparent;
      animation: rotateIcon 2s infinite linear;
    }

    .uploadInput {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      cursor: pointer;
    }

    .file {
      position: unset;
      max-width: 100%;
      flex-direction: column;
      gap: var(--space-xxsm);

      .label {
        padding-left: 0;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: var(--space-xxxsm);
        top: 0;
        left: 0;
        border-radius: var(--radii-sm);
        pointer-events: none;
      }
    }

    .trigger {
      position: unset;

      svg {
        color: var(--colors-neutral);
        width: 16px;
        height: 16px;
      }
    }

    &:hover .file img {
      opacity: 0.5;
    }
  }

  // ===========================================================================
  // DISABLED
  // ===========================================================================

  :where(&).disabled {
    background-color: var(--colors-neutral200);

    .file {
      p {
        color: var(--colors-neutral);
      }

      img {
        opacity: 0.5;
      }

      svg {
        background-color: var(--colors-white);
        opacity: 0.5;
      }
    }
  }
}
`})))()}var bt,xt,St,Ct,wt,J,Tt,Y;function Et(){return(Et=e((()=>{bt=`rl-Spacing-group`,xt=`rl-Spacing-token`,St=`rl-Spacing-sample`,Ct=`rl-Spacing-spaceSample`,wt=`rl-Spacing-sizeSample`,J=`rl-Spacing-radiusSample`,Tt=`rl-Spacing-shadowSample`,Y={group:bt,token:xt,sample:St,spaceSample:Ct,sizeSample:wt,radiusSample:J,shadowSample:Tt}})))()}var X,Dt,Ot,kt,At,jt,Z;function Mt(){return(Mt=e((()=>{u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),M(),P(),I(),R(),B(),H(),W(),K(),he(),_e(),ye(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),yt(),te(),ie(),ne(),ae(),Et(),X=t(),Dt={space:o.space,sizes:o.sizes,radii:o.radii,shadows:re},Ot=Object.assign({"../../../components/Alert/index.tsx":l,"../../../components/Avatar/index.tsx":d,"../../../components/Avatar/styles.module.scss":p,"../../../components/Button/index.tsx":h,"../../../components/Button/styles.module.scss":_,"../../../components/Checkbox/index.tsx":y,"../../../components/Checkbox/styles.module.scss":x,"../../../components/DatePicker/index.tsx":C,"../../../components/DatePicker/styles.module.scss":T,"../../../components/Dialog/index.tsx":D,"../../../components/Dialog/styles.module.scss":k,"../../../components/GroupButtons/index.tsx":j,"../../../components/GroupButtons/styles.module.scss":N,"../../../components/Input/index.tsx":F,"../../../components/Input/styles.module.scss":L,"../../../components/Link/index.tsx":z,"../../../components/Link/styles.module.scss":V,"../../../components/Modal/index.tsx":U,"../../../components/Modal/styles.module.scss":G,"../../../components/MultiSelect/index.tsx":q,"../../../components/MultiSelect/styles.module.scss":ge,"../../../components/Pagination/index.tsx":ve,"../../../components/Pagination/styles.module.scss":be,"../../../components/Pill/index.tsx":Se,"../../../components/Pill/styles.module.scss":we,"../../../components/PopOver/index.tsx":Ee,"../../../components/PopOver/styles.module.scss":Oe,"../../../components/Radio/index.tsx":Ae,"../../../components/Radio/styles.module.scss":Me,"../../../components/Select/index.tsx":Pe,"../../../components/Select/styles.module.scss":Ie,"../../../components/Table/index.tsx":Re,"../../../components/Table/styles.module.scss":Be,"../../../components/Tabs/index.tsx":He,"../../../components/Tabs/styles.module.scss":We,"../../../components/Tag/index.tsx":Ke,"../../../components/Tag/styles.module.scss":Je,"../../../components/Text/index.tsx":Xe,"../../../components/Text/styles.module.scss":Qe,"../../../components/TextArea/index.tsx":et,"../../../components/TextArea/styles.module.scss":nt,"../../../components/TimePicker/index.tsx":it,"../../../components/TimePicker/styles.module.scss":ot,"../../../components/Toggle/index.tsx":ct,"../../../components/Toggle/styles.module.scss":ut,"../../../components/Tooltip/index.tsx":ft,"../../../components/Tooltip/styles.module.scss":mt,"../../../components/Upload/index.tsx":gt,"../../../components/Upload/styles.module.scss":vt}),kt=(e,t)=>{let n=RegExp(`var\\(--${e}-${t}[),\\s]`),r=Object.entries(Ot).filter(([,e])=>n.test(e)).map(([e])=>e.split(`/`).at(-2));return Array.from(new Set(r)).sort()},At=e=>e.endsWith(`rem`)?`${parseFloat(e)*16}px · ${e}`:e.replace(/\$colors\$/g,``),jt=({scale:e,value:t})=>{let n=`var(--${e}-${t})`;switch(e){case`space`:return(0,X.jsx)(`div`,{className:Y.spaceSample,style:{width:n}});case`sizes`:return(0,X.jsx)(`div`,{className:Y.sizeSample,style:{width:n,height:n}});case`radii`:return(0,X.jsx)(`div`,{className:Y.radiusSample,style:{borderRadius:n}});default:return(0,X.jsx)(`div`,{className:Y.shadowSample,style:{boxShadow:n}})}},Z=({scale:e,title:t,description:n,guidelines:r={}})=>(0,X.jsxs)(`div`,{className:Y.group,children:[(0,X.jsx)(`h3`,{children:t}),(0,X.jsx)(`p`,{children:n}),(0,X.jsx)(a,{direction:`column`,gap:`xxsm`,children:Object.entries(Dt[e]).map(([t,n])=>{let i=kt(e,t);return(0,X.jsxs)(`div`,{className:Y.token,children:[(0,X.jsx)(`div`,{className:Y.sample,children:(0,X.jsx)(jt,{scale:e,value:t})}),(0,X.jsxs)(a,{direction:`column`,align:`start`,gap:`xxxsm`,children:[(0,X.jsx)(`span`,{className:`h7`,children:t}),(0,X.jsx)(`span`,{className:`micro-copy`,children:At(n)}),(0,X.jsx)(se,{size:`extraSmall`,children:`--${e}-${t}`})]}),(0,X.jsxs)(a,{direction:`column`,align:`start`,gap:`xxxsm`,children:[r[t]&&(0,X.jsx)(`p`,{children:r[t]}),(0,X.jsx)(`span`,{className:`micro-copy`,children:i.length?`Used in: ${i.join(`, `)}`:`Not used by the components yet`})]})]},t)})})]})})))()}function Nt(e){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(n,{title:`Style Guides/Spacing & Sizes`}),`
`,(0,Q.jsxs)(me,{children:[(0,Q.jsxs)(pe,{style:{background:`#1A9E8F`},children:[(0,Q.jsx)(`h2`,{children:`Spacing & Sizes`}),(0,Q.jsx)(oe,{})]}),(0,Q.jsxs)(ce,{children:[(0,Q.jsx)(`p`,{children:`Consistent spacing, sizes and corners give a layout its rhythm: related elements sit close together, separate sections breathe, and every component feels part of the same family. Instead of picking pixel values each time, the components use a small set of tokens, and so can you.`}),(0,Q.jsx)(`p`,{children:`Each token below shows its value, its CSS variable, what it's for and which components use it.`}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(c,{}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(Z,{scale:`space`,title:`Spacing`,description:`Padding, margins and gaps between elements. The steps go from 4px to 32px; there is no md step, the scale goes from sm (14px) to lg (16px).`,guidelines:{xxxsm:`The tightest spacing: inner padding of tags and pills, space between a label and its value.`,xxsm:`The most used step: padding of small controls and the gap between an icon and its text.`,xsm:`Horizontal padding of buttons and table cells.`,sm:`Medium inner padding, e.g. tooltips and table headers.`,lg:`Horizontal padding of large buttons and alerts.`,xlg:`Offsets from a container's edge, e.g. a modal's close button.`,xxlg:`Padding of modals, dialogs and tabs.`,xxxlg:`Space between sections and inside large containers.`}}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(Z,{scale:`sizes`,title:`Sizes`,description:`Fixed widths and heights, such as icons and field heights. Same steps as spacing, but use these for dimensions so each can be changed on its own.`,guidelines:{xsm:`Small icons and indicators.`,xlg:`Icons inside fields, e.g. the select chevron.`,xxlg:`Height of compact items, e.g. select options.`,xxxlg:`Height of fields, e.g. the date and time pickers.`}}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(Z,{scale:`radii`,title:`Border Radius`,description:`Corner rounding. Smaller elements use smaller radii; full makes pills and circles.`,guidelines:{xxsm:`Very small elements, e.g. checkboxes.`,xsm:`Controls: buttons, inputs, selects, tags and tooltips.`,sm:`Surfaces: modals, dialogs, tables, tabs and date picker calendars.`,md:`Large surfaces and panels.`,full:`Pills, avatars, toggles and radio buttons.`}}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(Z,{scale:`shadows`,title:`Shadows`,description:`Elevation for elements that float above the page.`,guidelines:{cardShadow:`Low elevation: cards, dropdowns, popovers and modals.`,mainShadow:`High elevation: dialogs and large surfaces.`}}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(c,{}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`span`,{className:`sub-heading`,children:`How to Use`}),(0,Q.jsxs)(`p`,{children:[`Every token is a CSS variable named after its scale and step (`,(0,Q.jsx)(`code`,{children:`--space-xxsm`}),`, `,(0,Q.jsx)(`code`,{children:`--sizes-xlg`}),`, `,(0,Q.jsx)(`code`,{children:`--radii-sm`}),`, `,(0,Q.jsx)(`code`,{children:`--shadows-cardShadow`}),`). Use them in your own CSS:`]}),(0,Q.jsx)(s,{code:ue,language:`css`}),(0,Q.jsxs)(`p`,{children:[`In components, `,(0,Q.jsx)(`code`,{children:`Flex`}),`'s `,(0,Q.jsx)(`code`,{children:`gap`}),` takes the spacing steps. Everywhere else, `,(0,Q.jsx)(`code`,{children:`theme`}),` has every token as a CSS variable:`]}),(0,Q.jsx)(s,{code:de,language:`tsx`}),(0,Q.jsxs)(`p`,{children:[`To change them, override the tokens with `,(0,Q.jsx)(`code`,{children:`setupTheme`}),` (or redefine the variables in your CSS). The components update with them:`]}),(0,Q.jsx)(s,{code:le,language:`tsx`})]})]})]})}function Pt(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Nt,{...e})}):Nt(e)}var Q;function $(){return($=e((()=>{Q=t(),ee(),i(),ae(),fe(),Mt()})))()}$();export{Pt as default};