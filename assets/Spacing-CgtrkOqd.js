import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{a as n,d as r,s as i,u as ee}from"./blocks-Cq2mqRDc.js";import{a as te,c as ne,d as re,l as ie,n as a,o as ae,t as oe,u as se}from"./document-5VP4YS3j.js";import{n as ce,t as o}from"./Flex-CCIzD6fY.js";import{n as le,t as ue}from"./shadows-EYhrqLqk.js";import{n as s,t as de}from"./sizes-CHr0IoFs.js";var c,l,u;function d(){return(d=e((()=>{c=`.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxsm);
  padding: var(--space-xxlg);
  border-radius: var(--radii-sm);
  box-shadow: var(--shadows-cardShadow);
}

.card-icon {
  width: var(--sizes-xlg);
  height: var(--sizes-xlg);
}`,l=`import { Flex, theme } from '@weareredlight/design-system'

<Flex direction='column' gap='xxsm'>...</Flex>

<div style={{ padding: theme.space.xxlg, borderRadius: theme.radii.sm }} />
// theme.space.xxlg === 'var(--space-xxlg)'`,u=`setupTheme({
  userSizes: {
    space: { xxlg: '1.75rem' },
    radii: { xsm: '6px', sm: '12px' },
  },
  userShadows: { cardShadow: '0px 1px 4px rgba(0, 0, 0, 0.12)' },
})`})))()}var f;function p(){return(p=e((()=>{f=`import { CircleCheckIcon, CircleXIcon, InfoIcon } from 'lucide-react'
import 'react-toastify/dist/ReactToastify.css'
import { toast as toastOG, Slide } from 'react-toastify'

import type { ToastOptions } from 'react-toastify'

import Text from 'src/components/Text'
import Flex from 'src/elements/Flex'

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

const alert = {
  success: (title: string, description?: string, options?: ToastOptions) => toastOG(
    <>
      <Flex direction='column' justify='start' align='start' gap='xxsm'>
        <Text variant='h6' color='success500'>{title}</Text>
        <Text variant='microCopy' color='success'>{description}</Text>
      </Flex>
      <CircleCheckIcon
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
      <CircleXIcon
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
      <InfoIcon
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
`;try{alert.displayName=`ToastContainer`,alert.__docgenInfo={description:``,displayName:`ToastContainer`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Alert/index.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var m;function h(){return(h=e((()=>{m=`import type { CSSProperties } from 'react'

import Label from 'src/components/shared/Label'
import { cx } from 'src/utils'

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
        {url ? <img src={url} alt={displayLabel ? '' : name} /> : (
          <span
            role={displayLabel ? undefined : 'img'}
            aria-label={displayLabel ? undefined : name}
            aria-hidden={displayLabel || undefined}
          >
            {initials}
          </span>
        )}
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
`;try{Avatar.displayName=`Avatar`,Avatar.__docgenInfo={description:``,displayName:`Avatar`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Avatar/index.tsx`,methods:[],props:{size:{defaultValue:{value:`normal`},declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`"small" | "normal" | undefined`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!0,tags:{},type:{name:`string`}},displayLabel:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`displayLabel`,required:!1,tags:{},type:{name:`boolean | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},online:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`online`,required:!1,tags:{},type:{name:`boolean | undefined`}},url:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`url`,required:!1,tags:{},type:{name:`string | undefined`}},width:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`width`,required:!1,tags:{},type:{name:`string | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Avatar/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var g;function _(){return(_=e((()=>{g=`// =============================================================================
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
  outline: 1px solid var(--colors-white);
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
}`})))()}var v;function y(){return(y=e((()=>{v=`import { RefreshCwIcon } from 'lucide-react'
import React from 'react'

import type { ReactNode } from 'react'

import { colors } from 'src/theme/colors'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

type ButtonVariant = 'neutral' | 'primary' | 'secondary' | 'tertiary' | 'textOnly' | 'danger' | 'success'
type ButtonSize = 'normal' | 'large'
type ButtonIconPosition = 'left' | 'right' | 'iconOnly' | 'null'

type ButtonOwnProps = {
  children?: ReactNode
  iconComponent?: React.FC
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
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

export type ButtonProps = ButtonOwnProps
  & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>

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
      {isLoading && <RefreshCwIcon className='loading-icon' />}
    </button>
  )
})

export const buttonSelector = \`.\${styles.button}\`

export default Button
`;try{Button.displayName=`Button`,Button.__docgenInfo={description:``,displayName:`Button`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Button/index.tsx`,methods:[],props:{iconComponent:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`iconComponent`,required:!1,tags:{},type:{name:`FC<{}> | undefined`}},onClick:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!1,tags:{},type:{name:`((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined`}},variant:{defaultValue:{value:`primary`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`ButtonVariant | undefined`}},size:{defaultValue:{value:`normal`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`ButtonSize | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},iconPosition:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`iconPosition`,required:!1,tags:{},type:{name:`ButtonIconPosition | undefined`}},isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean | undefined`}},type:{defaultValue:{value:`button`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!1,tags:{},type:{name:`"button" | "submit" | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Button/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var b;function x(){return(x=e((()=>{b=`// =============================================================================
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

// Filled button: solid background that darkens on hover/active, with its
// \`on\` color for the text and icons.
@mixin filled($bg, $on, $hover, $active, $disabled, $focus: null) {
  --button-on-color: #{$on};

  background-color: $bg;
  color: var(--button-on-color);

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
      $on: var(--colors-onPrimary),
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
    --tertiary-on: var(--colors-onNeutral);
    --tertiary600: var(--colors-neutral600);
    --tertiary700: var(--colors-neutral700);
    --tertiary200: var(--colors-neutral200);

    @include filled(
      $bg: var(--tertiary),
      $on: var(--tertiary-on),
      $hover: var(--tertiary600),
      $active: var(--tertiary700),
      $disabled: var(--tertiary200),
      $focus: var(--tertiary200),
    );
  }

  :where(&).tertiaryAccent {
    --tertiary: var(--colors-accent);
    --tertiary-on: var(--colors-onAccent);
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
      $on: var(--colors-onDanger),
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
      $on: var(--colors-onSuccess),
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
    &:where(.primary, .tertiary, .danger, .success) svg { color: var(--button-on-color); }
    &:where(.secondary) svg { color: var(--colors-primary); }

    &:where(.iconLeft) :global(.loading-icon) { margin-left: var(--space-xxsm); }
    &:where(.iconRight) :global(.loading-icon) { margin-right: var(--space-xxsm); }
  }
}
`})))()}var S;function C(){return(C=e((()=>{S=`import { CheckIcon } from 'lucide-react'
import React from 'react'

import type { CSSProperties } from 'react'

import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { ICON_SIZE } from 'src/constants'
import { capitalize, cx } from 'src/utils'

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
            <CheckIcon size={ICON_SIZE} />
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
            <CheckIcon size={ICON_SIZE} />
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
`;try{Checkbox.displayName=`Checkbox`,Checkbox.__docgenInfo={description:``,displayName:`Checkbox`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Checkbox/index.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},checked:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`checked`,required:!1,tags:{},type:{name:`boolean | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},state:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"null" | "error" | "dirty" | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},labelPosition:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`labelPosition`,required:!1,tags:{},type:{name:`string | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((e: ChangeEvent<HTMLInputElement>) => void) | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Checkbox/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var w;function T(){return(T=e((()=>{w=`// =============================================================================
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
        color: var(--colors-onPrimary);
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
  color: var(--colors-onPrimary);
}
`})))()}var E;function D(){return(D=e((()=>{E=`import dayjs from 'dayjs'
import { CalendarDaysIcon } from 'lucide-react'
import * as Calendar from 'react-date-picker'

import type { CSSProperties } from 'react'

import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { ICON_SIZE } from 'src/constants'
import { colors } from 'src/theme/colors'
import { cx } from 'src/utils'

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

const DatePicker = ({
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
      // A 'YYYY-MM-DD' string given to the library is read as UTC midnight, which is the previous
      // day anywhere west of UTC. dayjs reads it as local midnight
      value={value ? dayjs(value).toDate() : null}
      disabled={disabled}
      // The date is split into day, month and year fields. Each one carries the field's label
      dayAriaLabel={label ? \`\${label}, day\` : 'Day'}
      monthAriaLabel={label ? \`\${label}, month\` : 'Month'}
      yearAriaLabel={label ? \`\${label}, year\` : 'Year'}
      nativeInputAriaLabel={label}
      calendarAriaLabel='Open calendar'
      calendarIcon={<CalendarDaysIcon size={ICON_SIZE} />}
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
`;try{DatePicker.displayName=`DatePicker`,DatePicker.__docgenInfo={description:``,displayName:`DatePicker`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/DatePicker/index.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},error:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`error`,required:!1,tags:{},type:{name:`string | null | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(value: string) => void`}},isWeekSelector:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`isWeekSelector`,required:!1,tags:{},type:{name:`boolean | undefined`}},localeString:{defaultValue:{value:`en-US`},declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`localeString`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/DatePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var O;function k(){return(k=e((()=>{O=`// =============================================================================
// DATE PICKER
// -----------------------------------------------------------------------------
// Styles the third-party react-date-picker / react-calendar markup, so their
// classes are wrapped in :global(...).
// Modifiers are written as \`:where(&).modifier\` to keep single-class specificity.
// =============================================================================

.datePicker {
  // "Today" and weekday highlight: neutral, or accent when the default theme defines one
  --highlight: var(--colors-neutral);
  --highlight-on: var(--colors-onNeutral);
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
          color: var(--colors-onPrimary);

          &:hover { background-color: var(--colors-primary600); }
          &:active { background-color: var(--colors-primary700); }
        }
      }

      // selected day
      button:global(.react-calendar__tile--active) {
        background-color: var(--colors-primary);
        color: var(--colors-onPrimary);

        &:hover { background-color: var(--colors-primary600); }
        &:active { background-color: var(--colors-primary700); }
      }

      // today
      button:global(.react-calendar__tile--now) {
        background-color: var(--highlight);
        color: var(--highlight-on);

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
    --highlight-on: var(--colors-onAccent);
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
`})))()}var A;function j(){return(j=e((()=>{A=`import * as AlertDialog from '@radix-ui/react-alert-dialog'
import React from 'react'

import type { CSSProperties } from 'react'

import Button from 'src/components/Button'
import Flex from 'src/elements/Flex'
import { cx } from 'src/utils'

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
`;try{Dialog.displayName=`Dialog`,Dialog.__docgenInfo={description:``,displayName:`Dialog`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Dialog/index.tsx`,methods:[],props:{open:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean`}},variant:{defaultValue:{value:`confirm`},declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"danger" | "success" | "confirm" | undefined`}},confirmButtonText:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`confirmButtonText`,required:!1,tags:{},type:{name:`string | undefined`}},cancelButtonText:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`cancelButtonText`,required:!1,tags:{},type:{name:`string | undefined`}},closeFn:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`closeFn`,required:!0,tags:{},type:{name:`() => void`}},title:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},onConfirm:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`onConfirm`,required:!0,tags:{},type:{name:`() => void`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Dialog/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var M;function N(){return(N=e((()=>{M=`// =============================================================================
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
`})))()}var P;function F(){return(F=e((()=>{P=`import type { CSSProperties } from 'react'

import Button from 'src/components/Button'
import { cx } from 'src/utils'

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
        aria-pressed={button.value === selectedButton}
        className={styles.button}
      >
        {button.label}
      </Button>
    ))}
  </div>
)

export const groupButtonsSelector = \`.\${styles.groupButtons}\`

export default GroupButtons
`;try{GroupButtons.displayName=`GroupButtons`,GroupButtons.__docgenInfo={description:``,displayName:`GroupButtons`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/GroupButtons/index.tsx`,methods:[],props:{buttons:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/GroupButtons/index.tsx`,name:`TypeLiteral`}],description:``,name:`buttons`,required:!0,tags:{},type:{name:`OptionType[]`}},selectedButton:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/GroupButtons/index.tsx`,name:`TypeLiteral`}],description:``,name:`selectedButton`,required:!0,tags:{},type:{name:`string`}},onButtonSelect:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/GroupButtons/index.tsx`,name:`TypeLiteral`}],description:``,name:`onButtonSelect`,required:!0,tags:{},type:{name:`(button: string) => void`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/GroupButtons/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/GroupButtons/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var I;function L(){return(L=e((()=>{I=`// =============================================================================
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
`})))()}var R;function z(){return(z=e((()=>{R=`import React from 'react'

import type { ChangeEvent } from 'react'

import Button from 'src/components/Button'
import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import Flex from 'src/elements/Flex'
import { capitalize, cx } from 'src/utils'

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
  // Accessible name of the icon button, e.g. 'Show password'. Needed together with onClickIcon
  iconLabel?: string
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
  iconLabel,
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
          aria-label={iconLabel}
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
            const { value: rawValue } = e.target
            // An empty field is null for every type. Converting first would turn it into 0
            let finalValue: string | null = rawValue === '' ? null : rawValue
            if (type === 'number' && finalValue !== null) {
              finalValue = Number(finalValue) as unknown as string
            }
            const target = {
              value: finalValue, name: name || id
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
`;try{Input.displayName=`Input`,Input.__docgenInfo={description:``,displayName:`Input`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Input/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},type:{defaultValue:{value:`text`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`type`,required:!1,tags:{},type:{name:`string | undefined`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | (string & readonly string[]) | undefined`}},placeholder:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`placeholder`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},iconComponent:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`iconComponent`,required:!1,tags:{},type:{name:`FC<{}> | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},variant:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"null" | "simple" | undefined`}},state:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"disabled" | "null" | "error" | "dirty" | undefined`}},iconPosition:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`iconPosition`,required:!1,tags:{},type:{name:`IconPosition | undefined`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean | undefined`}},onClickIcon:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`onClickIcon`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},iconLabel:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`iconLabel`,required:!1,tags:{},type:{name:`string | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((event: ChangeEvent<HTMLInputElement>) => void) & ChangeEventHandler<HTMLInputElement>`}},containerProps:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`containerProps`,required:!1,tags:{},type:{name:`HTMLAttributes<HTMLDivElement> | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Input/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}var B;function V(){return(V=e((()=>{B=`// =============================================================================
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

  svg {
    width: 16px;
    height: 16px;
  }

  .iconButton {
    pointer-events: all;

    &:hover {
      background: transparent;
    }

    &:focus {
      box-shadow: none;
    }
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

    &:hover {
      background: var(--colors-primary200);
    }

    &:focus {
      border-color: var(--colors-primary);
    }
  }

  // ===========================================================================
  // STATE
  // ===========================================================================

  :where(&).stateError {
    border-color: var(--colors-danger);

    &:focus {
      border-color: var(--colors-danger);
    }
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
  }

  // ===========================================================================
  // ICON POSITION (room for the icon inside the field)
  // ===========================================================================

  :where(&).iconLeft .field {
    padding-left: var(--space-xxxlg);
  }

  :where(&).iconRight .field {
    padding-right: var(--space-xxxlg);
  }
}`})))()}var H;function U(){return(U=e((()=>{H=`import { ReactNode } from 'react'

import type { CSSProperties } from 'react'

import { cx } from 'src/utils'

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
    target={openInNewTab ? '_blank' : undefined}
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
`;try{Link.displayName=`Link`,Link.__docgenInfo={description:``,displayName:`Link`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Link/index.tsx`,methods:[],props:{href:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`href`,required:!0,tags:{},type:{name:`string`}},openInNewTab:{defaultValue:{value:`true`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`openInNewTab`,required:!1,tags:{},type:{name:`boolean | undefined`}},size:{defaultValue:{value:`regular`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`"small" | "regular" | undefined`}},danger:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`danger`,required:!1,tags:{},type:{name:`boolean | undefined`}},darkBackground:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`darkBackground`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Link/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var W;function G(){return(G=e((()=>{W=`// =============================================================================
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
`})))()}var K;function q(){return(q=e((()=>{K=`import * as RadixDialog from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import React, { ReactElement } from 'react'

import { cx } from 'src/utils'

import styles from './styles.module.scss'

export type ModalProps = {
  open: boolean
  openFn?: () => void
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
  openFn,
  closeFn,
  renderTrigger,
  title,
  description,
  children,
  className,
  style,
}: ModalProps) => (
  // Radix reports every open and close here: the trigger, the close button, Escape and a click
  // outside. Without it, clicking the trigger did nothing, because \`open\` is controlled
  <RadixDialog.Root open={open} onOpenChange={isOpen => (isOpen ? openFn?.() : closeFn())}>
    <RadixDialog.Trigger asChild>
      {renderTrigger && renderTrigger()}
    </RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={styles.overlay} />
      <RadixDialog.Content
        style={style}
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
        <RadixDialog.Close className={styles.close} aria-label='Close'>
          <XIcon />
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
)

export default Modal
`;try{Modal.displayName=`Modal`,Modal.__docgenInfo={description:``,displayName:`Modal`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Modal/index.tsx`,methods:[],props:{open:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean`}},openFn:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`openFn`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},closeFn:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`closeFn`,required:!0,tags:{},type:{name:`() => void`}},renderTrigger:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`renderTrigger`,required:!1,tags:{},type:{name:`(() => ReactElement<any, string | JSXElementConstructor<any>>) | undefined`}},title:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Modal/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var fe;function pe(){return(pe=e((()=>{fe=`// =============================================================================
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
}`})))()}var me;function he(){return(he=e((()=>{me=`import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import Select, { components } from 'react-select'

import type { CSSProperties } from 'react'
import type {
  DropdownIndicatorProps,
  MultiValue,
  OptionProps,
} from 'react-select'

import Pill from 'src/components/Pill'
import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { ICON_SIZE } from 'src/constants'
import Flex from 'src/elements/Flex'
import { colors } from 'src/theme/colors'
import { capitalize, cx } from 'src/utils'

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
      {menuIsOpen ? <ChevronUpIcon size={ICON_SIZE} /> : <ChevronDownIcon size={ICON_SIZE} />}
    </components.DropdownIndicator>
  )
}

const CustomOption = (
  props: OptionProps<OptionType, true>,
) => (
  <components.Option {...props}>
    {props.data.label}
    {props.isSelected && <CheckIcon size={ICON_SIZE} />}
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
          inputId={name}
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
            <Text variant='subHeadingSmall' color={colors.accent ? 'onAccent' : 'onPrimary'}>
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
`;try{MultiSelect.displayName=`MultiSelect`,MultiSelect.__docgenInfo={description:``,displayName:`MultiSelect`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/MultiSelect/index.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!0,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string[]`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(event: string[]) => void`}},options:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`options`,required:!0,tags:{},type:{name:`OptionType[]`}},placeholder:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`placeholder`,required:!1,tags:{},type:{name:`string | undefined`}},hasPills:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`hasPills`,required:!1,tags:{},type:{name:`boolean | undefined`}},getLabel:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`getLabel`,required:!0,tags:{},type:{name:`(value: string) => string`}},state:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"disabled" | "null" | "error" | "dirty" | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/MultiSelect/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var ge;function _e(){return(_e=e((()=>{ge=`// =============================================================================
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
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import type { CSSProperties } from 'react'

import Button from 'src/components/Button'
import { cx } from 'src/utils'

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
          typeof pageNumber === 'number' ? (
            <Button
              key={pageNumber}
              className={cx(styles.button, pageNumber === page ? styles.currentPage : styles.page)}
              variant='textOnly'
              aria-label={\`Page \${pageNumber}\`}
              aria-current={pageNumber === page ? 'page' : undefined}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          ) : (
            <span key={pageNumber} className={cx(styles.button, styles.ellipsis)} aria-hidden>
              {pageNumber}
            </span>
          )
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
        aria-label='Previous page'
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
        aria-label='Next page'
      />
    </div>
  )
}

export const paginationSelector = \`.\${styles.pagination}\`

export default Pagination
`;try{Pagination.displayName=`Pagination`,Pagination.__docgenInfo={description:``,displayName:`Pagination`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Pagination/index.tsx`,methods:[],props:{currentPage:{defaultValue:{value:`1`},declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`currentPage`,required:!1,tags:{},type:{name:`number | undefined`}},totalPages:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`totalPages`,required:!0,tags:{},type:{name:`number`}},onPageChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`onPageChange`,required:!0,tags:{},type:{name:`(page: number) => void`}},variant:{defaultValue:{value:`default`},declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"default" | "minimal" | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var be;function xe(){return(xe=e((()=>{be=`// =============================================================================
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

.ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--colors-neutral700);
}`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import { XIcon } from 'lucide-react'

import type { CSSProperties, ReactNode } from 'react'

import Button from 'src/components/Button'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

export type PillProps = {
  children: ReactNode
  variant?: 'default' | 'error' | 'success'
  onClose?: () => void
  className?: string
  style?: CSSProperties
}

const CloseIcon = () => <XIcon />

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
        aria-label='Remove'
      />
    )}
  </span>
)

export const pillSelector = \`.\${styles.pill}\`

export default Pill
`;try{Pill.displayName=`Pill`,Pill.__docgenInfo={description:``,displayName:`Pill`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Pill/index.tsx`,methods:[],props:{variant:{defaultValue:{value:`default`},declarations:[{fileName:`redlight-ds/src/components/Pill/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"success" | "error" | "default" | undefined`}},onClose:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pill/index.tsx`,name:`TypeLiteral`}],description:``,name:`onClose`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pill/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Pill/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var we;function Te(){return(Te=e((()=>{we=`// =============================================================================
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
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`import * as Popover from '@radix-ui/react-popover'
import { XIcon } from 'lucide-react'
import React from 'react'

import type { CSSProperties } from 'react'

import { ICON_SIZE } from 'src/constants'
import { cx } from 'src/utils'

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
          <XIcon size={ICON_SIZE} />
        </Popover.Close>
        <Popover.Arrow className={styles.arrow} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export const popOverSelector = \`.\${styles.content}\`

export default PopOver
`;try{PopOver.displayName=`PopOver`,PopOver.__docgenInfo={description:``,displayName:`PopOver`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/PopOver/index.tsx`,methods:[],props:{trigger:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`trigger`,required:!1,tags:{},type:{name:`ReactNode`}},side:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`side`,required:!1,tags:{},type:{name:`"left" | "right" | "top" | "bottom" | undefined`}},align:{defaultValue:{value:`center`},declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`"center" | "start" | "end" | undefined`}},sideOffset:{defaultValue:{value:`5`},declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`sideOffset`,required:!1,tags:{},type:{name:`number | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/PopOver/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`// =============================================================================
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

import Label from 'src/components/shared/Label'
import { cx } from 'src/utils'

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
`;try{Radio.displayName=`Radio`,Radio.__docgenInfo={description:``,displayName:`Radio`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Radio/index.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},checked:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`checked`,required:!1,tags:{},type:{name:`boolean | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},labelPosition:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`labelPosition`,required:!1,tags:{},type:{name:`string | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((e: ChangeEvent<HTMLInputElement>) => void) | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Radio/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`// =============================================================================
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
      background: var(--colors-onPrimary);
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
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`import * as SelectInput from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

import type { ChangeEvent, CSSProperties } from 'react'

import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { capitalize, cx } from 'src/utils'

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
`;try{Select.displayName=`Select`,Select.__docgenInfo={description:``,displayName:`Select`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Select/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string | null`}},type:{defaultValue:{value:`string`},declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!1,tags:{},type:{name:`"string" | "number" | undefined`}},placeholder:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`placeholder`,required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},emptyOption:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`emptyOption`,required:!1,tags:{},type:{name:`string | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},state:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"disabled" | "null" | "error" | "dirty" | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLSelectElement>) => void`}},options:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`options`,required:!0,tags:{},type:{name:`T[]`}},getLabel:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`getLabel`,required:!0,tags:{},type:{name:`(option: T) => string`}},getValue:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`getValue`,required:!0,tags:{},type:{name:`(option: T) => string`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}},variant:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"null" | "simple" | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Select/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`// =============================================================================
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
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper
} from '@tanstack/react-table'
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
  SearchIcon
} from 'lucide-react'
import {
  useCallback, useEffect, useRef, useState, ReactElement
} from 'react'

import type {
  ColumnDef,
  SortingState,
  ColumnSort,
} from '@tanstack/react-table'
import type { CSSProperties, KeyboardEvent } from 'react'

import Input from 'src/components/Input'
import Text from 'src/components/Text'
import { ICON_SIZE } from 'src/constants'
import Flex from 'src/elements/Flex'
import { cx } from 'src/utils'

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
              const sorted = column.getIsSorted()
              const headerText = typeof column.columnDef.header === 'string'
                ? column.columnDef.header
                : column.id

              return (
                <th
                  key={header.id}
                  style={{ width: columnWidth }}
                  className={cx(!isSortable && styles.disabled)}
                  // Tells screen readers how the table is sorted by this column
                  aria-sort={isSortable
                    ? ({ asc: 'ascending', desc: 'descending' } as const)[sorted as string] ?? 'none'
                    : undefined}
                >
                  <div
                    className={cx(styles.columnHeader, isSortable && styles.sortable)}
                    // eslint-disable-next-line no-mixed-operators
                    onClick={isSortable && column.getToggleSortingHandler() || undefined}
                    // Sortable headers are buttons: reachable with Tab, sorted with Enter or Space
                    {...(isSortable && {
                      role: 'button',
                      tabIndex: 0,
                      onKeyDown: (event: KeyboardEvent) => {
                        if (event.key !== 'Enter' && event.key !== ' ') return
                        event.preventDefault()
                        column.toggleSorting()
                      },
                    })}
                  >
                    <Text variant='subHeading' color='neutral800'>
                      {flexRender(column.columnDef.header, header.getContext())}
                    </Text>
                    {(isSortable && {
                      asc: <ChevronDownIcon size={ICON_SIZE} />,
                      desc: <ChevronUpIcon size={ICON_SIZE} />,
                    }[column.getIsSorted() as string])
                      ?? <ChevronsUpDownIcon size={ICON_SIZE} />}
                  </div>
                  {header.column.getCanFilter() ? (
                    <Input
                      type='text'
                      id={\`\${column.id}list\`}
                      variant='simple'
                      value={(columnFilterValue ?? '') as string}
                      placeholder='Filter by'
                      aria-label={\`Filter by \${headerText}\`}
                      iconPosition='left'
                      iconComponent={() => <SearchIcon />}
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
`;try{Table.displayName=`Table`,Table.__docgenInfo={description:``,displayName:`Table`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Table/index.tsx`,methods:[],props:{data:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`data`,required:!0,tags:{},type:{name:`T[]`}},columns:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{},type:{name:`ColumnDef<T, any>[]`}},sortees:{defaultValue:{value:`[]`},declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`sortees`,required:!1,tags:{},type:{name:`ColumnSort[] | undefined`}},renderOptions:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`renderOptions`,required:!1,tags:{},type:{name:`((data: T) => ReactElement<any, string | JSXElementConstructor<any>>) | undefined`}},scrollable:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`scrollable`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Table/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}try{flexRender.displayName=`flexRender`,flexRender.__docgenInfo={description:"If rendering headers, cells, or footers with custom markup, use flexRender instead of `cell.getValue()` or `cell.renderValue()`.",displayName:`flexRender`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Table/index.tsx`,methods:[],props:{},tags:{}}}catch{}try{useReactTable.displayName=`useReactTable`,useReactTable.__docgenInfo={description:``,displayName:`useReactTable`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Table/index.tsx`,methods:[],props:{filterFns:{defaultValue:null,declarations:[{fileName:`redlight-ds/node_modules/@tanstack/table-core/build/lib/features/ColumnFiltering.d.ts`,name:`TypeLiteral`}],description:``,name:`filterFns`,required:!1,tags:{},type:{name:`Record<string, FilterFn<any>> | undefined`}},sortingFns:{defaultValue:null,declarations:[{fileName:`redlight-ds/node_modules/@tanstack/table-core/build/lib/features/RowSorting.d.ts`,name:`TypeLiteral`}],description:``,name:`sortingFns`,required:!1,tags:{},type:{name:`Record<string, SortingFn<any>> | undefined`}},aggregationFns:{defaultValue:null,declarations:[{fileName:`redlight-ds/node_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts`,name:`TypeLiteral`}],description:``,name:`aggregationFns`,required:!1,tags:{},type:{name:`Record<string, AggregationFn<any>> | undefined`}}},tags:{}}}catch{}})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`// =============================================================================
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

import { capitalize, cx } from 'src/utils'

import styles from './styles.module.scss'

export type TabsProps = {
  tabs: { label: string | React.ReactNode }[],
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
`;try{Tabs.displayName=`Tabs`,Tabs.__docgenInfo={description:``,displayName:`Tabs`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Tabs/index.tsx`,methods:[],props:{tabs:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tabs/index.tsx`,name:`TypeLiteral`}],description:``,name:`tabs`,required:!0,tags:{},type:{name:`{ label: ReactNode; }[]`}},align:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tabs/index.tsx`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`"left" | "right" | "null" | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tabs/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tabs/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var We;function Ge(){return(Ge=e((()=>{We=`// =============================================================================
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
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`import { XIcon } from 'lucide-react'

import type { ReactNode, CSSProperties } from 'react'

import Button from 'src/components/Button'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

export type TagProps = {
  children: ReactNode
  variant?: 'default' | 'error'
  disabled?: boolean
  onClose?: () => void
  className?: string
  style?: CSSProperties
}

const CloseIcon = () => <XIcon />

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
          aria-label='Remove'
        />
      )}
    </span>
  )
}

export const tagSelector = \`.\${styles.tag}\`

export default Tag
`;try{Tag.displayName=`Tag`,Tag.__docgenInfo={description:``,displayName:`Tag`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Tag/index.tsx`,methods:[],props:{variant:{defaultValue:{value:`default`},declarations:[{fileName:`redlight-ds/src/components/Tag/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"error" | "default" | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Tag/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},onClose:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tag/index.tsx`,name:`TypeLiteral`}],description:``,name:`onClose`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tag/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tag/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`// =============================================================================
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
`})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=`import type { CSSProperties, ReactNode } from 'react'
import type { ColorType } from 'src/theme'

import { cx } from 'src/utils'

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

const Text = ({
  variant = 'paragraph',
  color = 'black',
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
`;try{Text.displayName=`Text`,Text.__docgenInfo={description:``,displayName:`Text`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Text/index.tsx`,methods:[],props:{variant:{defaultValue:{value:`paragraph`},declarations:[{fileName:`redlight-ds/src/components/Text/index.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`TextVariant | undefined`}},color:{defaultValue:{value:`black`},declarations:[{fileName:`redlight-ds/src/components/Text/index.tsx`,name:`TypeLiteral`}],description:``,name:`color`,required:!1,tags:{},type:{name:`"neutral" | "primary" | "danger" | "success" | "black" | "white" | "onPrimary" | "onAccent" | "onNeutral" | "onSuccess" | "onDanger" | "primary100" | "primary200" | "primary300" | ... 37 more ... | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Text/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Text/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var Qe;function $e(){return($e=e((()=>{Qe=`// =============================================================================
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

import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { capitalize, cx } from 'src/utils'

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
          id={id || name}
          label={label}
          description={description}
          className={styles.label}
        />
      ) : null}
      <textarea
        className={cx(styles.field, state && state !== 'null' && styles[\`state\${capitalize(state)}\`], className)}
        id={id || name}
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
`;try{TextArea.displayName=`TextArea`,TextArea.__docgenInfo={description:``,displayName:`TextArea`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/TextArea/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | (string & readonly string[]) | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},placeholder:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`placeholder`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},state:{defaultValue:{value:`null`},declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"disabled" | "null" | "error" | "dirty" | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},rows:{defaultValue:{value:`5`},declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`rows`,required:!1,tags:{},type:{name:`number | undefined`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean | undefined`}},maxLength:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`maxLength`,required:!1,tags:{},type:{name:`number | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TextArea/index.tsx`,name:`TypeLiteral`},{fileName:`redlight-ds/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((event: ChangeEvent<HTMLTextAreaElement>) => void) & ChangeEventHandler<HTMLTextAreaElement>`}}},tags:{}}}catch{}})))()}var nt;function rt(){return(rt=e((()=>{nt=`// =============================================================================
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
  outline: none;
  background-color: transparent;
  @include typography.microCopy;
  border: 1px solid var(--colors-neutral400);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  resize: vertical;

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
  // STATE
  // ===========================================================================

  :where(&).stateError {
    border-color: var(--colors-danger);

    &:focus {
      border-color: var(--colors-danger);
    }
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
// LABEL + FIELD
// =============================================================================

.textArea {
  min-width: 256px;
  max-width: 100%;
  width: fit-content;
  display: inline-block;
  position: relative;

  // Clicking the label focuses the field (it used to have pointer-events: none, which blocked that)
  .label {
    padding-bottom: var(--space-xxxsm);
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
}`})))()}var it;function at(){return(at=e((()=>{it=`import { ClockIcon } from 'lucide-react'
import { PatternFormat } from 'react-number-format'
import { TimePicker as ReactTimePicker } from 'react-time-picker'

import type { ChangeEvent, CSSProperties } from 'react'

import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { ICON_SIZE } from 'src/constants'
import { cx } from 'src/utils'

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
        // The library only hides the clear button with null. \`false\` rendered an empty button
        clearIcon={null}
        // The time is split into hour and minute fields. Each one carries the field's label
        hourAriaLabel={label ? \`\${label}, hours\` : 'Hours'}
        minuteAriaLabel={label ? \`\${label}, minutes\` : 'Minutes'}
        amPmAriaLabel={label ? \`\${label}, AM or PM\` : 'AM or PM'}
        nativeInputAriaLabel={label}
        clockAriaLabel='Open clock'
        className={styles.main}
        clockIcon={<ClockIcon size={ICON_SIZE} />}
      />
    ) : (
      <PatternFormat
        id={name}
        className={cx(styles.durationPicker, fullWidth && styles.fullWidth)}
        displayType='input'
        disabled={disabled}
        value={value?.slice(0, 5).replace(':', '')}
        valueIsNumericString
        onValueChange={(values, { source }) => {
          // Only report what the user typed, and only a complete time or an empty field.
          // Otherwise this sent '--:--:00' on mount and half-typed values like '2-:--:00'
          if (source !== 'event') return
          if (values.value === '') onChange('')
          else if (values.value.length === 4) onChange(\`\${values.formattedValue}:00\`)
        }}
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
`;try{TimePicker.displayName=`TimePicker`,TimePicker.__docgenInfo={description:``,displayName:`TimePicker`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/TimePicker/index.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(time: string | ChangeEvent<HTMLInputElement>) => void`}},error:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`error`,required:!1,tags:{},type:{name:`string | null | undefined`}},type:{defaultValue:{value:`PickerTypes.TIME`},declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!1,tags:{},type:{name:`"time" | PickerTypes | "duration" | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/TimePicker/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var J;function ot(){return(ot=e((()=>{J=`// =============================================================================
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
`})))()}var st;function ct(){return(ct=e((()=>{st=`import * as Switch from '@radix-ui/react-switch'
import React from 'react'

import type { ChangeEvent, Ref, CSSProperties } from 'react'

import Label from 'src/components/shared/Label'
import Text from 'src/components/Text'
import { capitalize, cx } from 'src/utils'

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
`;try{Toggle.displayName=`Toggle`,Toggle.__docgenInfo={description:``,displayName:`Toggle`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Toggle/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},label:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`boolean | undefined`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},errorMsg:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string | undefined`}},state:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`"disabled" | "null" | "error" | "dirty" | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement>) => void`}},labelPosition:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`labelPosition`,required:!1,tags:{},type:{name:`"left" | "right" | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Toggle/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var lt;function ut(){return(ut=e((()=>{lt=`// =============================================================================
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
  background-color: var(--colors-onPrimary);
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
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

import type { CSSProperties } from 'react'

import Text from 'src/components/Text'
import { cx } from 'src/utils'

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
`;try{Tooltip.displayName=`Tooltip`,Tooltip.__docgenInfo={description:``,displayName:`Tooltip`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Tooltip/index.tsx`,methods:[],props:{content:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tooltip/index.tsx`,name:`TypeLiteral`}],description:``,name:`content`,required:!0,tags:{},type:{name:`string`}},side:{defaultValue:{value:`right`},declarations:[{fileName:`redlight-ds/src/components/Tooltip/index.tsx`,name:`TypeLiteral`}],description:``,name:`side`,required:!1,tags:{},type:{name:`"left" | "right" | "top" | "bottom" | undefined`}},delay:{defaultValue:{value:`50`},declarations:[{fileName:`redlight-ds/src/components/Tooltip/index.tsx`,name:`TypeLiteral`}],description:``,name:`delay`,required:!1,tags:{},type:{name:`number | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tooltip/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Tooltip/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var pt;function mt(){return(mt=e((()=>{pt=`// =============================================================================
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
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`import { FileTextIcon, RefreshCwIcon, XIcon } from 'lucide-react'
import { useState, useRef, useCallback } from 'react'

import type { ChangeEvent, CSSProperties } from 'react'

import Button from 'src/components/Button'
import Label from 'src/components/shared/Label'
import { cx } from 'src/utils'

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
  onClear?: () => void
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
  onClear,
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
          {(size === 'large' && loading) && <span><RefreshCwIcon /></span>}
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
            iconComponent={() => <XIcon />}
            iconPosition='iconOnly'
            onClick={() => {
              setFileName('')
              setFileUrl(null)
              setFileExtension('')
              if (fileInput.current) fileInput.current.value = ''
              onClear?.()
            }}
            className={styles.clearBtn}
            aria-label='Remove file'
          />
        )}
        <label className={styles.trigger} htmlFor={id}>
          {size === 'normal' ? (
            <Button
              variant='neutral'
              onClick={selectFile}
              disabled={disabled}
              iconPosition={loading ? 'left' : undefined}
            >
              {loading ? <RefreshCwIcon /> : buttonText}
            </Button>
          ) : null}
        </label>
      </div>
    </div>
  )
}

export const uploadSelector = \`.\${styles.upload}\`

export default Upload
`;try{Upload.displayName=`Upload`,Upload.__docgenInfo={description:``,displayName:`Upload`,filePath:`/home/runner/work/redlight-ds/redlight-ds/src/components/Upload/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}},size:{defaultValue:{value:`normal`},declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`"normal" | "large" | undefined`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}},placeholder:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`placeholder`,required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},buttonText:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`buttonText`,required:!1,tags:{},type:{name:`string | undefined`}},defaultFile:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`defaultFile`,required:!1,tags:{},type:{name:`File | undefined`}},onUpload:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`onUpload`,required:!1,tags:{},type:{name:`((file: File) => void) | undefined`}},onClear:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`onClear`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`redlight-ds/src/components/Upload/index.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var _t;function vt(){return(vt=e((()=>{_t=`// =============================================================================
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
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`import { render, screen } from '@testing-library/react'

import alert, { ToastContainer } from 'src/components/Alert'

describe('alert', () => {
  it('success shows a toast with the title and the description', async () => {
    render(<ToastContainer />)

    alert.success('Saved', 'Your changes were saved')

    expect(await screen.findByText('Saved')).toBeInTheDocument()
    expect(screen.getByText('Your changes were saved')).toBeInTheDocument()
  })

  it('error shows a toast with the title and the description', async () => {
    render(<ToastContainer />)

    alert.error('Failed', 'Try again later')

    expect(await screen.findByText('Failed')).toBeInTheDocument()
    expect(screen.getByText('Try again later')).toBeInTheDocument()
  })

  it('info shows a toast with just a title', async () => {
    render(<ToastContainer />)

    alert.info('Heads up')

    expect(await screen.findByText('Heads up')).toBeInTheDocument()
  })

  it('announces the toast to screen readers', async () => {
    render(<ToastContainer />)

    alert.success('Saved')

    expect(await screen.findByRole('alert')).toHaveTextContent('Saved')
  })

  it('returns the toast id, so the caller can dismiss or update it later', async () => {
    render(<ToastContainer />)

    const id = alert.info('Heads up', undefined, { toastId: 'custom-id' })

    expect(id).toBe('custom-id')
    expect(await screen.findByText('Heads up')).toBeInTheDocument()
  })
})
`})))()}var xt;function St(){return(St=e((()=>{xt=`import { render, screen } from '@testing-library/react'

import Avatar from 'src/components/Avatar'

describe('Avatar', () => {
  it('shows the initials, named with the full name for screen readers, when there is no image', () => {
    render(<Avatar name='Ada Lovelace' />)

    expect(screen.getByRole('img', { name: 'Ada Lovelace' })).toHaveTextContent('AL')
  })

  it('hides the initials from screen readers when the name is shown next to them', () => {
    render(<Avatar name='Ada Lovelace' displayLabel />)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.getByText('AL')).toHaveAttribute('aria-hidden', 'true')
  })

  it('shows the image with the name as its alt text when a url is given', () => {
    render(<Avatar name='Ada Lovelace' url='https://example.com/ada.png' />)

    expect(screen.getByRole('img', { name: 'Ada Lovelace' }))
      .toHaveAttribute('src', 'https://example.com/ada.png')
    expect(screen.queryByText('AL')).not.toBeInTheDocument()
  })

  it('does not show the name and description by default', () => {
    render(<Avatar name='Ada Lovelace' description='Engineer' />)

    expect(screen.queryByText('Ada Lovelace')).not.toBeInTheDocument()
    expect(screen.queryByText('Engineer')).not.toBeInTheDocument()
  })

  it('shows the name and description when displayLabel is set', () => {
    render(<Avatar name='Ada Lovelace' description='Engineer' displayLabel />)

    expect(screen.getByText('Ada Lovelace')).toBeInTheDocument()
    expect(screen.getByText('Engineer')).toBeInTheDocument()
  })

  it('is normal size by default', () => {
    render(<Avatar name='Ada Lovelace' />)

    expect(screen.getByText('AL').parentElement).toHaveClass('normal')
  })

  it('applies the size class it receives', () => {
    render(<Avatar name='Ada Lovelace' size='small' />)

    expect(screen.getByText('AL').parentElement).toHaveClass('small')
  })
})
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from 'src/components/Button'

describe('Button', () => {
  it('renders its text', () => {
    render(<Button>Save </Button>)

    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    render(<Button onClick={onClick}> Save </Button>)

    await user.click(screen.getByRole('button', { name: 'Save' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    render(<Button onClick={onClick} disabled> Save </Button>)

    await user.click(screen.getByRole('button', { name: 'Save' }))

    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled()
    expect(onClick).not.toHaveBeenCalled()
  })

  it('is a normal button by default, so it does not submit forms', () => {
    render(<Button>Save </Button>)

    expect(screen.getByRole('button', { name: 'Save' })).toHaveAttribute('type', 'button')
  })

  it('applies the variant and size classes', () => {
    render(<Button variant='danger' size='large'> Delete </Button>)

    const button = screen.getByRole('button', { name: 'Delete' })
    expect(button).toHaveClass('button', 'danger', 'large')
  })
})
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Checkbox from 'src/components/Checkbox'

describe('Checkbox', () => {
  it('is linked to its label, so clicking the label toggles it', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Checkbox id='terms' label='I accept the terms' onChange={onChange} />)

    await user.click(screen.getByText('I accept the terms'))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('checkbox', { name: 'I accept the terms' })).toBeChecked()
  })

  it('shows the error message only in the error state', () => {
    const { rerender } = render(<Checkbox id='terms' label='Terms' errorMsg='Required' />)
    expect(screen.queryByText('Required')).not.toBeInTheDocument()

    rerender(<Checkbox id='terms' label='Terms' errorMsg='Required' state='error' />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })
})
`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`import { act, render, screen } from '@testing-library/react'

import type { DatePickerProps } from 'react-date-picker'

import DatePicker from 'src/components/DatePicker'

// react-date-picker ships only ES modules, which this Jest config doesn't transform. The mock
// records the props our wrapper passes, so we can test how the wrapper maps them
const mockCalendar = jest.fn((_props: DatePickerProps) => null)
jest.mock('react-date-picker', () => ({
  DatePicker: (props: DatePickerProps) => mockCalendar(props),
}))

type CalendarTileClassName = (args: { date: Date; view: string }) => string

const calendarProps = () => mockCalendar.mock.lastCall![0]

describe('DatePicker', () => {
  beforeEach(() => {
    mockCalendar.mockClear()
  })

  it('shows its label and gives the value to the calendar', () => {
    render(<DatePicker name='startDate' label='Start date' value='2024-03-15' onChange={jest.fn()} />)

    expect(screen.getByText('Start date')).toBeInTheDocument()
    expect(calendarProps().name).toBe('startDate')
  })

  it('gives the calendar the same day in any timezone', () => {
    render(<DatePicker name='startDate' value='2024-03-15' onChange={jest.fn()} />)

    // Read as UTC, a 'YYYY-MM-DD' string is the previous day west of UTC (TZ=America/New_York)
    const value = calendarProps().value as Date
    expect([value.getFullYear(), value.getMonth(), value.getDate()]).toEqual([2024, 2, 15])
  })

  it('gives each date field an accessible name that includes the label', () => {
    render(<DatePicker name='startDate' label='Start date' onChange={jest.fn()} />)

    expect(calendarProps()).toMatchObject({
      dayAriaLabel: 'Start date, day',
      monthAriaLabel: 'Start date, month',
      yearAriaLabel: 'Start date, year',
      calendarAriaLabel: 'Open calendar',
    })
  })

  it('reports a picked date as a YYYY-MM-DD string', () => {
    const onChange = jest.fn()
    render(<DatePicker name='startDate' onChange={onChange} />)

    // The calendar picks local midnight, so this is the same day in any timezone
    act(() => calendarProps().onChange!(new Date(2024, 2, 15)))

    expect(onChange).toHaveBeenCalledWith('2024-03-15')
  })

  it('reports an empty string when the date is cleared', () => {
    const onChange = jest.fn()
    render(<DatePicker name='startDate' value='2024-03-15' onChange={onChange} />)

    act(() => calendarProps().onChange!(null))

    expect(onChange).toHaveBeenCalledWith('')
  })

  it('shows the error message', () => {
    render(<DatePicker name='startDate' error='Pick a date' onChange={jest.fn()} />)

    expect(screen.getByText('Pick a date')).toBeInTheDocument()
  })

  it('disables the calendar when disabled', () => {
    render(<DatePicker name='startDate' disabled onChange={jest.fn()} />)

    expect(calendarProps().disabled).toBe(true)
  })

  it('as a week selector, highlights the days in the same week as the value', () => {
    render(<DatePicker name='week' value='2024-03-15' isWeekSelector onChange={jest.fn()} />)

    const tileClassName = calendarProps().calendarProps!.tileClassName as CalendarTileClassName
    const sameWeek = tileClassName({ date: new Date(2024, 2, 12), view: 'month' })
    const nextWeek = tileClassName({ date: new Date(2024, 2, 18), view: 'month' })

    expect(sameWeek).toBe('selected-week')
    expect(nextWeek).toBe('')
  })
})
`})))()}var kt;function At(){return(At=e((()=>{kt=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Dialog from 'src/components/Dialog'

describe('Dialog', () => {
  it('renders nothing while closed', () => {
    render(
      <Dialog
        open={false}
        closeFn={jest.fn()}
        onConfirm={jest.fn()}
        title='Delete project?'
        description='This cannot be undone'
      />,
    )

    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
  })

  it('shows its title, description and default buttons while open', () => {
    render(
      <Dialog
        open
        closeFn={jest.fn()}
        onConfirm={jest.fn()}
        title='Delete project?'
        description='This cannot be undone'
      />,
    )

    const dialog = screen.getByRole('alertdialog', { name: 'Delete project?' })
    expect(dialog).toHaveAccessibleDescription('This cannot be undone')
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
  })

  it('uses custom button texts', () => {
    render(
      <Dialog
        open
        closeFn={jest.fn()}
        onConfirm={jest.fn()}
        title='Delete project?'
        description='This cannot be undone'
        confirmButtonText='Delete'
        cancelButtonText='Keep it'
      />,
    )

    expect(screen.getByRole('button', { name: 'Keep it' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
  })

  it('calls onConfirm and then closeFn when confirmed', async () => {
    const user = userEvent.setup()
    const calls: string[] = []
    const onConfirm = jest.fn(() => calls.push('confirm'))
    const closeFn = jest.fn(() => calls.push('close'))
    render(
      <Dialog
        open
        closeFn={closeFn}
        onConfirm={onConfirm}
        title='Delete project?'
        description='This cannot be undone'
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Confirm' }))

    expect(onConfirm).toHaveBeenCalledTimes(1)
    expect(closeFn).toHaveBeenCalledTimes(1)
    expect(calls).toEqual(['confirm', 'close'])
  })

  it('calls only closeFn when cancelled', async () => {
    const user = userEvent.setup()
    const onConfirm = jest.fn()
    const closeFn = jest.fn()
    render(
      <Dialog
        open
        closeFn={closeFn}
        onConfirm={onConfirm}
        title='Delete project?'
        description='This cannot be undone'
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(closeFn).toHaveBeenCalledTimes(1)
    expect(onConfirm).not.toHaveBeenCalled()
  })

  it('calls only closeFn when Escape is pressed', async () => {
    const user = userEvent.setup()
    const onConfirm = jest.fn()
    const closeFn = jest.fn()
    render(
      <Dialog
        open
        closeFn={closeFn}
        onConfirm={onConfirm}
        title='Delete project?'
        description='This cannot be undone'
      />,
    )

    await user.keyboard('{Escape}')

    expect(closeFn).toHaveBeenCalledTimes(1)
    expect(onConfirm).not.toHaveBeenCalled()
  })
})
`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import GroupButtons from 'src/components/GroupButtons'

const buttons = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
]

describe('GroupButtons', () => {
  it('renders one button per option', () => {
    render(<GroupButtons buttons={buttons} selectedButton='day' onButtonSelect={jest.fn()} />)

    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Day' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Week' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Month' })).toBeInTheDocument()
  })

  it('calls onButtonSelect with the value of the clicked option', async () => {
    const user = userEvent.setup()
    const onButtonSelect = jest.fn()
    render(<GroupButtons buttons={buttons} selectedButton='day' onButtonSelect={onButtonSelect} />)

    await user.click(screen.getByRole('button', { name: 'Week' }))

    expect(onButtonSelect).toHaveBeenCalledTimes(1)
    expect(onButtonSelect).toHaveBeenCalledWith('week')
  })

  it('shows the selected option as primary and the others as secondary', () => {
    render(<GroupButtons buttons={buttons} selectedButton='week' onButtonSelect={jest.fn()} />)

    expect(screen.getByRole('button', { name: 'Week' })).toHaveClass('primary')
    expect(screen.getByRole('button', { name: 'Day' })).toHaveClass('secondary')
    expect(screen.getByRole('button', { name: 'Month' })).toHaveClass('secondary')
  })

  it('tells screen readers which option is selected', () => {
    render(<GroupButtons buttons={buttons} selectedButton='week' onButtonSelect={jest.fn()} />)

    expect(screen.getByRole('button', { name: 'Week' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Day' })).toHaveAttribute('aria-pressed', 'false')
  })
})
`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from 'src/components/Input'

const SearchIcon = () => <svg />

describe('Input', () => {
  it('is linked to its label', () => {
    render(<Input name='email' label='Email' onChange={jest.fn()} />)

    expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAttribute('id', 'email')
  })

  it('calls onChange with the typed value and the field name', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Input name='email' label='Email' onChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: 'Email' }), 'ab')

    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith({ target: { value: 'ab', name: 'email' } })
  })

  it('sends null instead of an empty string when the field is cleared', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Input name='email' label='Email' onChange={onChange} />)
    const field = screen.getByRole('textbox', { name: 'Email' })
    await user.type(field, 'a')

    await user.clear(field)

    expect(onChange).toHaveBeenLastCalledWith({ target: { value: null, name: 'email' } })
  })

  it('sends a number when the type is number', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Input type='number' name='age' label='Age' onChange={onChange} />)

    await user.type(screen.getByRole('spinbutton', { name: 'Age' }), '42')

    expect(onChange).toHaveBeenLastCalledWith({ target: { value: 42, name: 'age' } })
  })

  it('shows the error message only in the error state', () => {
    const { rerender } = render(
      <Input name='email' label='Email' errorMsg='Invalid email' onChange={jest.fn()} />,
    )
    expect(screen.queryByText('Invalid email')).not.toBeInTheDocument()

    rerender(
      <Input name='email' label='Email' errorMsg='Invalid email' state='error' onChange={jest.fn()} />,
    )

    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('is disabled in the disabled state', () => {
    render(<Input name='email' label='Email' state='disabled' onChange={jest.fn()} />)

    expect(screen.getByRole('textbox', { name: 'Email' })).toBeDisabled()
  })

  it('calls onClickIcon when the icon is clicked', async () => {
    const user = userEvent.setup()
    const onClickIcon = jest.fn()
    render(
      <Input
        name='search'
        label='Search'
        iconComponent={SearchIcon}
        onClickIcon={onClickIcon}
        onChange={jest.fn()}
      />,
    )

    await user.click(screen.getByRole('button'))

    expect(onClickIcon).toHaveBeenCalledTimes(1)
  })

  it('sends null, not 0, when a number field is cleared', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Input id='age' type='number' label='Age' value='42' onChange={onChange} />)

    await user.clear(screen.getByLabelText('Age'))

    expect(onChange).toHaveBeenLastCalledWith({ target: { value: null, name: 'age' } })
  })

  it('names the icon button with iconLabel', () => {
    const Icon = () => <svg />
    render(
      <Input
        id='password'
        label='Password'
        iconComponent={Icon}
        onClickIcon={jest.fn()}
        iconLabel='Show password'
        onChange={jest.fn()}
      />,
    )

    expect(screen.getByRole('button', { name: 'Show password' })).toBeInTheDocument()
  })
})
`})))()}var Ft;function It(){return(It=e((()=>{Ft=`import { render, screen } from '@testing-library/react'

import Label from 'src/components/shared/Label'

describe('Label', () => {
  it('renders the label and the description', () => {
    render(<Label label='Email' description='We never share it' />)

    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('We never share it')).toBeInTheDocument()
  })

  it('names the input whose id it receives', () => {
    render(
      <>
        <Label id='email' label='Email' />
        <input id='email' />
      </>,
    )

    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument()
  })

  it('adds "(optional)" after the label when optional', () => {
    render(<Label label='Phone' optional />)

    expect(screen.getByText('Phone (optional)')).toBeInTheDocument()
  })

  it('does not mark the label as optional by default', () => {
    render(<Label label='Phone' />)

    expect(screen.queryByText(/optional/)).not.toBeInTheDocument()
  })

  it('is aligned left by default', () => {
    render(<Label label='Name' />)

    expect(screen.getByText('Name').closest('label')).toHaveClass('alignLeft')
  })

  it('applies the alignment class it receives', () => {
    render(<Label label='Name' align='center' />)

    expect(screen.getByText('Name').closest('label')).toHaveClass('alignCenter')
  })
})
`})))()}var Lt;function Rt(){return(Rt=e((()=>{Lt=`import { render, screen } from '@testing-library/react'

import Link from 'src/components/Link'

describe('Link', () => {
  it('renders a link with its text and href', () => {
    render(<Link href='https://example.com'>Docs</Link>)

    expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', 'https://example.com')
  })

  it('opens in a new tab by default, without leaking the referrer', () => {
    render(<Link href='https://example.com'>Docs</Link>)

    const link = screen.getByRole('link', { name: 'Docs' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('opens in the same tab when openInNewTab is false', () => {
    render(<Link href='https://example.com' openInNewTab={false}>Docs</Link>)

    expect(screen.getByRole('link', { name: 'Docs' })).not.toHaveAttribute('target')
  })

  it('applies the size, danger and darkBackground classes', () => {
    render(<Link href='/' size='small' danger darkBackground>Delete</Link>)

    expect(screen.getByRole('link', { name: 'Delete' }))
      .toHaveClass('link', 'small', 'danger', 'darkBackground')
  })
})
`})))()}var zt;function Bt(){return(Bt=e((()=>{zt=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Modal from 'src/components/Modal'

describe('Modal', () => {
  it('renders nothing but its trigger while closed', () => {
    render(
      <Modal
        open={false}
        closeFn={jest.fn()}
        title='Edit profile'
        description='Change your details'
        renderTrigger={() => <button type='button'>Open</button>}
      />,
    )

    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows its title, description and content while open', () => {
    render(
      <Modal open closeFn={jest.fn()} title='Edit profile' description='Change your details'>
        <p>Form goes here</p>
      </Modal>,
    )

    const dialog = screen.getByRole('dialog', { name: 'Edit profile' })
    expect(dialog).toHaveAccessibleDescription('Change your details')
    expect(screen.getByText('Form goes here')).toBeInTheDocument()
  })

  it('calls closeFn when the close button is clicked', async () => {
    const user = userEvent.setup()
    const closeFn = jest.fn()
    render(<Modal open closeFn={closeFn} title='Edit profile' description='Change your details' />)

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(closeFn).toHaveBeenCalledTimes(1)
  })

  it('calls closeFn when Escape is pressed', async () => {
    const user = userEvent.setup()
    const closeFn = jest.fn()
    render(<Modal open closeFn={closeFn} title='Edit profile' description='Change your details' />)

    await user.keyboard('{Escape}')

    expect(closeFn).toHaveBeenCalledTimes(1)
  })

  it('calls closeFn when the user clicks outside it', async () => {
    // While a modal is open, Radix sets \`pointer-events: none\` on the rest of the page, which
    // user-event refuses to click through unless the check is turned off
    const user = userEvent.setup({ pointerEventsCheck: 0 })
    const closeFn = jest.fn()
    render(
      <>
        <button type='button'>Elsewhere</button>
        <Modal open closeFn={closeFn} title='Edit profile' description='Change your details' />
      </>,
    )

    await user.click(screen.getByText('Elsewhere'))

    expect(closeFn).toHaveBeenCalledTimes(1)
  })

  it('stops rendering the dialog when the parent sets open to false', () => {
    const { rerender } = render(
      <Modal open closeFn={jest.fn()} title='Edit profile' description='Change your details' />,
    )

    rerender(
      <Modal open={false} closeFn={jest.fn()} title='Edit profile' description='Change your details' />,
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('calls openFn when the trigger is clicked, so the trigger can open the modal', async () => {
    const user = userEvent.setup()
    const openFn = jest.fn()
    render(
      <Modal
        open={false}
        openFn={openFn}
        closeFn={jest.fn()}
        title='Edit profile'
        renderTrigger={() => <button type='button'>Open</button>}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Open' }))

    expect(openFn).toHaveBeenCalledTimes(1)
  })
})
`})))()}var Vt;function Ht(){return(Ht=e((()=>{Vt=`import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { MultiSelectProps } from 'src/components/MultiSelect'

import MultiSelect from 'src/components/MultiSelect'

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
]

const getLabel = (value: string) => fruits.find(fruit => fruit.value === value)?.label ?? value

const renderMultiSelect = (props: Partial<MultiSelectProps> = {}) => render(
  <MultiSelect
    name='fruits'
    label='Fruits'
    value={[]}
    onChange={jest.fn()}
    options={fruits}
    getLabel={getLabel}
    {...props}
  />,
)

describe('MultiSelect', () => {
  it('shows its label and lists the options when opened', async () => {
    const user = userEvent.setup()
    renderMultiSelect()

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByText('Fruits')).toBeInTheDocument()
    expect(await screen.findByRole('option', { name: 'Apple' })).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(fruits.length)
  })

  it('calls onChange with every selected value when an option is picked', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    renderMultiSelect({ value: ['apple'], onChange })

    await user.click(screen.getByRole('combobox'))
    await user.click(await screen.findByRole('option', { name: 'Banana' }))

    expect(onChange).toHaveBeenCalledWith(['apple', 'banana'])
  })

  it('shows how many values are selected', () => {
    renderMultiSelect({ value: ['apple', 'cherry'] })

    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('with hasPills, shows a pill per value and removes a value when its pill is closed', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    renderMultiSelect({ value: ['apple', 'cherry'], onChange, hasPills: true })

    await user.click(within(screen.getByText('Apple')).getByRole('button', { name: 'Remove' }))

    expect(screen.getByText('Cherry')).toBeInTheDocument()
    expect(onChange).toHaveBeenCalledWith(['cherry'])
  })

  it('shows the error message in the error state', () => {
    renderMultiSelect({ state: 'error', errorMsg: 'Pick at least one fruit' })

    expect(screen.getByText('Pick at least one fruit')).toBeInTheDocument()
  })

  it('cannot be used in the disabled state', () => {
    renderMultiSelect({ state: 'disabled' })

    // react-select hides its input (visibility: hidden) while disabled
    expect(screen.getByRole('combobox', { hidden: true })).toBeDisabled()
  })

  it('is linked to its label', () => {
    renderMultiSelect()

    expect(screen.getByRole('combobox', { name: 'Fruits' })).toBeInTheDocument()
  })
})
`})))()}var Ut;function Wt(){return(Wt=e((()=>{Ut=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Pagination from 'src/components/Pagination'

const getArrowButtons = () => ({
  previous: screen.getByRole('button', { name: 'Previous page' }),
  next: screen.getByRole('button', { name: 'Next page' }),
})

describe('Pagination', () => {
  it('calls onPageChange with the clicked page number', async () => {
    const user = userEvent.setup()
    const onPageChange = jest.fn()
    render(<Pagination totalPages={5} onPageChange={onPageChange} />)

    await user.click(screen.getByRole('button', { name: 'Page 3' }))

    expect(onPageChange).toHaveBeenCalledWith(3)
  })

  it('does not call onPageChange when the current page is clicked', async () => {
    const user = userEvent.setup()
    const onPageChange = jest.fn()
    render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />)

    await user.click(screen.getByRole('button', { name: 'Page 2' }))

    expect(onPageChange).not.toHaveBeenCalled()
  })

  it('goes to the previous and next page with the arrow buttons', async () => {
    const user = userEvent.setup()
    const onPageChange = jest.fn()
    render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} />)

    await user.click(getArrowButtons().next)
    await user.click(getArrowButtons().previous)

    expect(onPageChange).toHaveBeenNthCalledWith(1, 4)
    expect(onPageChange).toHaveBeenNthCalledWith(2, 3)
  })

  it('disables the previous button on the first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={jest.fn()} />)

    const { previous, next } = getArrowButtons()
    expect(previous).toBeDisabled()
    expect(next).toBeEnabled()
  })

  it('disables the next button on the last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={jest.fn()} />)

    const { previous, next } = getArrowButtons()
    expect(previous).toBeEnabled()
    expect(next).toBeDisabled()
  })

  it('shows the last page after an ellipsis when there are many pages', () => {
    render(<Pagination totalPages={10} onPageChange={jest.fn()} />)

    const pages = screen.getAllByRole('button', { name: /^Page/ }).map(button => button.textContent)
    expect(pages).toEqual(['1', '2', '3', '4', '10'])
    expect(screen.getByText('...')).toBeInTheDocument()
  })

  it('does not make the ellipsis a button, because there is nothing to click', () => {
    render(<Pagination totalPages={10} onPageChange={jest.fn()} />)

    expect(screen.queryByRole('button', { name: '...' })).not.toBeInTheDocument()
  })

  it('marks the current page for screen readers', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={jest.fn()} />)

    expect(screen.getByRole('button', { name: 'Page 2' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: 'Page 3' })).not.toHaveAttribute('aria-current')
  })

  it('follows currentPage when the parent changes it', () => {
    const { rerender } = render(
      <Pagination currentPage={5} totalPages={5} onPageChange={jest.fn()} />,
    )

    rerender(<Pagination currentPage={1} totalPages={5} onPageChange={jest.fn()} />)

    expect(getArrowButtons().previous).toBeDisabled()
  })
})
`})))()}var Gt;function Kt(){return(Kt=e((()=>{Gt=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Pill from 'src/components/Pill'

describe('Pill', () => {
  it('renders its content', () => {
    render(<Pill>Active</Pill>)

    expect(screen.getByText('Active')).toBeInTheDocument()
  })

  it('has no close button without onClose', () => {
    render(<Pill>Active</Pill>)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = jest.fn()
    render(<Pill onClose={onClose}>Active</Pill>)

    await user.click(screen.getByRole('button', { name: 'Remove' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('uses the default variant by default', () => {
    render(<Pill>Active</Pill>)

    expect(screen.getByText('Active')).toHaveClass('pill', 'default')
  })

  it('applies the variant class it receives', () => {
    render(<Pill variant='success'>Active</Pill>)

    expect(screen.getByText('Active')).toHaveClass('pill', 'success')
  })
})
`})))()}var qt;function Jt(){return(Jt=e((()=>{qt=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import PopOver from 'src/components/PopOver'

const renderPopOver = () => render(
  <PopOver trigger={<button type='button'>Details</button>}>
    <p>More information</p>
  </PopOver>,
)

describe('PopOver', () => {
  it('hides its content until the trigger is clicked', () => {
    renderPopOver()

    expect(screen.getByRole('button', { name: 'Details' })).toBeInTheDocument()
    expect(screen.queryByText('More information')).not.toBeInTheDocument()
  })

  it('shows its content when the trigger is clicked', async () => {
    const user = userEvent.setup()
    renderPopOver()

    await user.click(screen.getByRole('button', { name: 'Details' }))

    expect(await screen.findByText('More information')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Details' })).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes when the close button is clicked', async () => {
    const user = userEvent.setup()
    renderPopOver()
    await user.click(screen.getByRole('button', { name: 'Details' }))

    await user.click(await screen.findByRole('button', { name: 'Close' }))

    expect(screen.queryByText('More information')).not.toBeInTheDocument()
  })

  it('closes when Escape is pressed', async () => {
    const user = userEvent.setup()
    renderPopOver()
    await user.click(screen.getByRole('button', { name: 'Details' }))
    await screen.findByText('More information')

    await user.keyboard('{Escape}')

    expect(screen.queryByText('More information')).not.toBeInTheDocument()
  })

  it('closes when the trigger is clicked again', async () => {
    const user = userEvent.setup()
    renderPopOver()
    await user.click(screen.getByRole('button', { name: 'Details' }))
    await screen.findByText('More information')

    await user.click(screen.getByRole('button', { name: 'Details' }))

    expect(screen.queryByText('More information')).not.toBeInTheDocument()
  })
})
`})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Radio from 'src/components/Radio'

describe('Radio', () => {
  it('is linked to its label, so clicking the label selects it', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Radio id='monthly' name='plan' value='monthly' label='Monthly' onChange={onChange} />)

    await user.click(screen.getByText('Monthly'))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('radio', { name: 'Monthly' })).toBeChecked()
  })

  it('passes the selected value to onChange', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Radio id='monthly' name='plan' value='monthly' label='Monthly' onChange={onChange} />)

    await user.click(screen.getByRole('radio', { name: 'Monthly' }))

    expect(onChange.mock.lastCall[0].target).toHaveAttribute('value', 'monthly')
  })

  it('unselects the other radios with the same name', async () => {
    const user = userEvent.setup()
    render(
      <>
        <Radio id='monthly' name='plan' value='monthly' label='Monthly' />
        <Radio id='yearly' name='plan' value='yearly' label='Yearly' />
      </>,
    )
    await user.click(screen.getByRole('radio', { name: 'Monthly' }))

    await user.click(screen.getByRole('radio', { name: 'Yearly' }))

    expect(screen.getByRole('radio', { name: 'Yearly' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Monthly' })).not.toBeChecked()
  })

  it('shows the checked state it is given', () => {
    render(<Radio id='monthly' label='Monthly' checked onChange={jest.fn()} />)

    expect(screen.getByRole('radio', { name: 'Monthly' })).toBeChecked()
  })

  it('cannot be selected when disabled', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Radio id='monthly' label='Monthly' disabled onChange={onChange} />)

    await user.click(screen.getByRole('radio', { name: 'Monthly' }))

    expect(screen.getByRole('radio', { name: 'Monthly' })).toBeDisabled()
    expect(screen.getByRole('radio', { name: 'Monthly' })).not.toBeChecked()
    expect(onChange).not.toHaveBeenCalled()
  })
})
`})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Select from 'src/components/Select'

const countries = [
  { code: 'pt', name: 'Portugal' },
  { code: 'es', name: 'Spain' },
]

describe('Select', () => {
  it('sends the chosen option value in onChange', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(
      <Select
        id='country'
        label='Country'
        placeholder='Choose a country'
        value={null}
        options={countries}
        getLabel={c => c.name}
        getValue={c => c.code}
        onChange={onChange}
      />,
    )

    await user.click(screen.getByRole('combobox', { name: 'Country' }))
    await user.click(await screen.findByRole('option', { name: 'Spain' }))

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: 'es', name: 'country' } }),
    )
  })
})
`})))()}var $t;function en(){return(en=e((()=>{$t=`import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { ColumnDef } from 'src/components/Table'

import Table, { defaultColumnOptions } from 'src/components/Table'

type Person = { id: string; name: string; age: number }

const people: Person[] = [
  { id: '1', name: 'Bruno', age: 41 },
  { id: '2', name: 'Ana', age: 29 },
  { id: '3', name: 'Carla', age: 35 },
]

const columns: ColumnDef<Person>[] = [
  { ...defaultColumnOptions<Person>(), accessorKey: 'name', header: 'Name' },
  { ...defaultColumnOptions<Person>(), accessorKey: 'age', header: 'Age' },
]

// Text of the first cell of each body row, top to bottom
const namesInOrder = () => screen.getAllByRole('row')
  .slice(1)
  .map(row => within(row).getAllByRole('cell')[0].textContent)

describe('Table', () => {
  it('renders a header per column and a cell per value', () => {
    render(<Table data={people} columns={columns} />)

    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Age' })).toBeInTheDocument()
    expect(screen.getAllByRole('row')).toHaveLength(people.length + 1)
    expect(screen.getByRole('cell', { name: 'Ana' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: '29' })).toBeInTheDocument()
  })

  it('sorts ascending when a sortable header is clicked', async () => {
    const user = userEvent.setup()
    render(<Table data={people} columns={columns} />)

    await user.click(screen.getByText('Name'))

    expect(namesInOrder()).toEqual(['Ana', 'Bruno', 'Carla'])
  })

  it('sorts descending when the same header is clicked again', async () => {
    const user = userEvent.setup()
    render(<Table data={people} columns={columns} />)

    await user.click(screen.getByText('Name'))
    await user.click(screen.getByText('Name'))

    expect(namesInOrder()).toEqual(['Carla', 'Bruno', 'Ana'])
  })

  it('applies the initial sorting from sortees', () => {
    render(<Table data={people} columns={columns} sortees={[{ id: 'age', desc: true }]} />)

    expect(namesInOrder()).toEqual(['Bruno', 'Carla', 'Ana'])
  })

  it('only shows the rows that match a column filter', async () => {
    const user = userEvent.setup()
    render(<Table data={people} columns={columns} />)

    const nameHeader = screen.getByRole('columnheader', { name: 'Name' })
    await user.type(within(nameHeader).getByRole('textbox'), 'CAR')

    expect(namesInOrder()).toEqual(['Carla'])
  })

  it('shows an empty state when there is no data', () => {
    render(<Table data={[]} columns={columns} />)

    expect(screen.getByText('Nothing was found...')).toBeInTheDocument()
  })

  it('renders renderOptions in the actions column with the row data', () => {
    const withActions: ColumnDef<Person>[] = [...columns, { id: 'actions', header: 'Actions' }]
    render(
      <Table
        data={people}
        columns={withActions}
        renderOptions={person => <button type='button'>{\`Edit \${person.name}\`}</button>}
      />,
    )

    expect(screen.getByRole('button', { name: 'Edit Ana' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^Edit/ })).toHaveLength(people.length)
  })

  it('sorts with the keyboard: sortable headers are buttons reachable with Tab', async () => {
    const user = userEvent.setup()
    render(<Table data={people} columns={columns} />)

    await user.tab()
    expect(screen.getByRole('button', { name: 'Name' })).toHaveFocus()
    await user.keyboard('{Enter}')

    expect(namesInOrder()).toEqual(['Ana', 'Bruno', 'Carla'])
  })

  it('tells screen readers how each column is sorted', async () => {
    const user = userEvent.setup()
    render(<Table data={people} columns={columns} />)
    const nameHeader = screen.getByRole('columnheader', { name: 'Name' })
    expect(nameHeader).toHaveAttribute('aria-sort', 'none')

    await user.click(screen.getByRole('button', { name: 'Name' }))

    expect(nameHeader).toHaveAttribute('aria-sort', 'ascending')
  })

  it('names each column filter after its column', () => {
    render(<Table data={people} columns={columns} />)

    expect(screen.getByRole('textbox', { name: 'Filter by Name' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Filter by Age' })).toBeInTheDocument()
  })
})
`})))()}var tn;function nn(){return(nn=e((()=>{tn=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Tabs from 'src/components/Tabs'

const renderTabs = () => render(
  <Tabs tabs={[{ label: 'Profile' }, { label: 'Billing' }, { label: 'Security' }]}>
    <p>Profile settings</p>
    <p>Billing settings</p>
    <p>Security settings</p>
  </Tabs>,
)

describe('Tabs', () => {
  it('renders one tab per label', () => {
    renderTabs()

    const tabs = screen.getAllByRole('tab')
    expect(tabs.map(tab => tab.textContent)).toEqual(['Profile', 'Billing', 'Security'])
  })

  it('selects the first tab and shows its panel by default', () => {
    renderTabs()

    expect(screen.getByRole('tab', { name: 'Profile' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'Profile' })).toHaveTextContent('Profile settings')
    expect(screen.queryByText('Billing settings')).not.toBeInTheDocument()
  })

  it('shows the matching panel when a tab is clicked', async () => {
    const user = userEvent.setup()
    renderTabs()

    await user.click(screen.getByRole('tab', { name: 'Billing' }))

    expect(screen.getByRole('tab', { name: 'Billing' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'Billing' })).toHaveTextContent('Billing settings')
    expect(screen.queryByText('Profile settings')).not.toBeInTheDocument()
  })

  it('moves between tabs with the arrow keys', async () => {
    const user = userEvent.setup()
    renderTabs()
    await user.click(screen.getByRole('tab', { name: 'Profile' }))

    await user.keyboard('{ArrowRight}')

    const billing = screen.getByRole('tab', { name: 'Billing' })
    expect(billing).toHaveFocus()
    expect(billing).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'Billing' })).toHaveTextContent('Billing settings')
  })

  it('wraps around from the first tab to the last with ArrowLeft', async () => {
    const user = userEvent.setup()
    renderTabs()
    await user.click(screen.getByRole('tab', { name: 'Profile' }))

    await user.keyboard('{ArrowLeft}')

    expect(screen.getByRole('tab', { name: 'Security' })).toHaveFocus()
    expect(screen.getByRole('tabpanel', { name: 'Security' })).toHaveTextContent('Security settings')
  })

  it('accepts a single child as the only panel', () => {
    render(<Tabs tabs={[{ label: 'Only' }]}><p>Only content</p></Tabs>)

    expect(screen.getByRole('tabpanel', { name: 'Only' })).toHaveTextContent('Only content')
  })
})
`})))()}var rn;function an(){return(an=e((()=>{rn=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Tag from 'src/components/Tag'

describe('Tag', () => {
  it('renders its content', () => {
    render(<Tag>React</Tag>)

    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('has no close button without onClose', () => {
    render(<Tag>React</Tag>)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = jest.fn()
    render(<Tag onClose={onClose}>React</Tag>)

    await user.click(screen.getByRole('button', { name: 'Remove' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('cannot be closed when it is an error tag', () => {
    render(<Tag variant='error' onClose={jest.fn()}>React</Tag>)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('applies the variant and disabled classes', () => {
    render(<Tag variant='error' disabled>React</Tag>)

    expect(screen.getByText('React')).toHaveClass('tag', 'error', 'disabled')
  })
})
`})))()}var on;function sn(){return(sn=e((()=>{on=`import { render, screen } from '@testing-library/react'

import Text from 'src/components/Text'

describe('Text', () => {
  it('uses the theme text color by default', () => {
    render(<Text>Projects</Text>)

    expect(screen.getByText('Projects')).toHaveStyle('--text-color: var(--colors-black)')
  })

  it('uses the color prop when given', () => {
    render(<Text color='primary'>Projects</Text>)

    expect(screen.getByText('Projects')).toHaveStyle('--text-color: var(--colors-primary)')
  })
})
`})))()}var cn;function ln(){return(ln=e((()=>{cn=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextArea from 'src/components/TextArea'

describe('TextArea', () => {
  it('is linked to its label', () => {
    render(<TextArea id='comments' label='Comments' onChange={jest.fn()} />)

    expect(screen.getByRole('textbox', { name: 'Comments' })).toBeInTheDocument()
  })

  it('calls onChange with the change event for each typed character', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<TextArea id='comments' label='Comments' onChange={onChange} />)

    await user.type(screen.getByRole('textbox', { name: 'Comments' }), 'hi')

    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange.mock.lastCall[0].target).toHaveValue('hi')
  })

  it('does not accept more characters than maxLength', async () => {
    const user = userEvent.setup()
    render(<TextArea id='comments' label='Comments' maxLength={3} onChange={jest.fn()} />)
    const field = screen.getByRole('textbox', { name: 'Comments' })

    await user.type(field, 'hello')

    expect(field).toHaveValue('hel')
  })

  it('shows 5 rows by default', () => {
    render(<TextArea id='comments' label='Comments' onChange={jest.fn()} />)

    expect(screen.getByRole('textbox', { name: 'Comments' })).toHaveAttribute('rows', '5')
  })

  it('shows the error message only in the error state', () => {
    const { rerender } = render(
      <TextArea id='comments' label='Comments' errorMsg='Too short' onChange={jest.fn()} />,
    )
    expect(screen.queryByText('Too short')).not.toBeInTheDocument()

    rerender(
      <TextArea id='comments' label='Comments' errorMsg='Too short' state='error' onChange={jest.fn()} />,
    )

    expect(screen.getByText('Too short')).toBeInTheDocument()
  })

  it('is disabled in the disabled state', () => {
    render(<TextArea id='comments' label='Comments' state='disabled' onChange={jest.fn()} />)

    expect(screen.getByRole('textbox', { name: 'Comments' })).toBeDisabled()
  })

  it('is linked to its label when it only has a name', () => {
    render(<TextArea name='bio' label='Bio' onChange={jest.fn()} />)

    expect(screen.getByLabelText('Bio')).toHaveRole('textbox')
  })
})
`})))()}var un;function dn(){return(dn=e((()=>{un=`import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { TimePickerProps } from 'react-time-picker'

import TimePicker from 'src/components/TimePicker'

// react-time-picker ships only ES modules, which this Jest config doesn't transform. The mock
// records the props our wrapper passes, so we can test how the wrapper maps them
const mockClock = jest.fn((_props: TimePickerProps) => null)
jest.mock('react-time-picker', () => ({
  TimePicker: (props: TimePickerProps) => mockClock(props),
}))

const clockProps = () => mockClock.mock.lastCall![0]

describe('TimePicker', () => {
  beforeEach(() => {
    mockClock.mockClear()
  })

  it('shows its label and description and gives the value to the time input', () => {
    render(
      <TimePicker
        name='start'
        label='Start time'
        description='Local time'
        value='09:30'
        onChange={jest.fn()}
      />,
    )

    expect(screen.getByText('Start time')).toBeInTheDocument()
    expect(screen.getByText('Local time')).toBeInTheDocument()
    expect(clockProps()).toMatchObject({ name: 'start', value: '09:30' })
  })

  it('reports a picked time with seconds, and an empty string when cleared', () => {
    const onChange = jest.fn()
    render(<TimePicker name='start' onChange={onChange} />)

    act(() => clockProps().onChange!('09:30'))
    act(() => clockProps().onChange!(null))

    expect(onChange).toHaveBeenNthCalledWith(1, '09:30:00')
    expect(onChange).toHaveBeenNthCalledWith(2, '')
  })

  it('hides the clear button, which the library only does with null', () => {
    render(<TimePicker name='start' onChange={jest.fn()} />)

    expect(clockProps().clearIcon).toBeNull()
  })

  it('gives the hour and minute fields accessible names that include the label', () => {
    render(<TimePicker name='start' label='Start time' onChange={jest.fn()} />)

    expect(clockProps()).toMatchObject({
      hourAriaLabel: 'Start time, hours',
      minuteAriaLabel: 'Start time, minutes',
      clockAriaLabel: 'Open clock',
    })
  })

  it('shows the error message and disables the time input', () => {
    render(<TimePicker name='start' error='Pick a time' disabled onChange={jest.fn()} />)

    expect(screen.getByText('Pick a time')).toBeInTheDocument()
    expect(clockProps().disabled).toBe(true)
  })

  describe('duration type', () => {
    it('shows the value as HH:MM', () => {
      render(<TimePicker type='duration' value='01:45:00' onChange={jest.fn()} />)

      expect(screen.getByRole('textbox')).toHaveValue('01:45')
    })

    it('reports the typed duration with seconds', async () => {
      const user = userEvent.setup()
      const onChange = jest.fn()
      render(<TimePicker type='duration' onChange={onChange} />)

      await user.type(screen.getByRole('textbox'), '0245')

      expect(onChange).toHaveBeenLastCalledWith('02:45:00')
    })

    it('does not accept more than 23 hours', async () => {
      const user = userEvent.setup()
      const onChange = jest.fn()
      render(<TimePicker type='duration' onChange={onChange} />)

      await user.type(screen.getByRole('textbox'), '25')

      expect(screen.getByRole('textbox')).toHaveValue('2-:--')
      expect(onChange).not.toHaveBeenCalledWith(expect.stringMatching(/^25/))
    })

    it('does not call onChange on mount or while the time is half typed', async () => {
      const user = userEvent.setup()
      const onChange = jest.fn()
      render(<TimePicker type='duration' onChange={onChange} />)
      expect(onChange).not.toHaveBeenCalled()

      await user.type(screen.getByRole('textbox'), '024')

      expect(onChange).not.toHaveBeenCalled()
      expect(screen.getByRole('textbox')).toHaveValue('02:4-')
    })

    it('reports an empty string when the duration is cleared', async () => {
      const user = userEvent.setup()
      const onChange = jest.fn()
      render(<TimePicker type='duration' value='01:45:00' onChange={onChange} />)

      await user.clear(screen.getByRole('textbox'))

      expect(onChange).toHaveBeenLastCalledWith('')
    })

    it('is linked to its label', () => {
      render(<TimePicker type='duration' name='duration' label='Duration' onChange={jest.fn()} />)

      expect(screen.getByLabelText('Duration')).toHaveRole('textbox')
    })

    it('is disabled when disabled', () => {
      render(<TimePicker type='duration' disabled onChange={jest.fn()} />)

      expect(screen.getByRole('textbox')).toBeDisabled()
    })
  })
})
`})))()}var fn;function pn(){return(pn=e((()=>{fn=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Toggle from 'src/components/Toggle'

describe('Toggle', () => {
  it('sends the new value and the field name in onChange', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Toggle id='notifications' name='notifications' label='Notifications' value={false} onChange={onChange} />)

    await user.click(screen.getByRole('switch', { name: 'Notifications' }))

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: true, name: 'notifications' } }),
    )
  })

  it('cannot be switched when disabled', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<Toggle id='notifications' label='Notifications' state='disabled' onChange={onChange} />)

    await user.click(screen.getByRole('switch', { name: 'Notifications' }))

    expect(screen.getByRole('switch', { name: 'Notifications' })).toBeDisabled()
    expect(onChange).not.toHaveBeenCalled()
  })
})
`})))()}var mn;function hn(){return(hn=e((()=>{mn=`import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Tooltip from 'src/components/Tooltip'

describe('Tooltip', () => {
  it('shows its content on hover', async () => {
    const user = userEvent.setup()
    render(<Tooltip content='Copy link'><button type='button'>Share</button></Tooltip>)

    await user.hover(screen.getByRole('button', { name: 'Share' }))

    expect(await screen.findByRole('tooltip')).toHaveTextContent('Copy link')
  })
})
`})))()}var gn;function _n(){return(_n=e((()=>{gn=`import { render, screen } from '@testing-library/react'
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
      expect.stringMatching(/^data:image\\/png;base64,/),
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
`})))()}var vn,yn,bn,xn,Sn,Cn,wn,Y;function Tn(){return(Tn=e((()=>{vn=`rl-Spacing-group`,yn=`rl-Spacing-token`,bn=`rl-Spacing-sample`,xn=`rl-Spacing-spaceSample`,Sn=`rl-Spacing-sizeSample`,Cn=`rl-Spacing-radiusSample`,wn=`rl-Spacing-shadowSample`,Y={group:vn,token:yn,sample:bn,spaceSample:xn,sizeSample:Sn,radiusSample:Cn,shadowSample:wn}})))()}var X,En,Dn,On,kn,An,Z;function jn(){return(jn=e((()=>{p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),N(),F(),L(),z(),V(),U(),G(),q(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),Ze(),$e(),tt(),rt(),at(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),At(),Mt(),Pt(),It(),Rt(),Bt(),Ht(),Wt(),Kt(),Jt(),Xt(),Qt(),en(),nn(),an(),sn(),ln(),dn(),pn(),hn(),_n(),ce(),oe(),ue(),de(),Tn(),X=t(),En={space:s.space,sizes:s.sizes,radii:s.radii,shadows:le},Dn=Object.assign({"../../../components/Alert/index.tsx":f,"../../../components/Avatar/index.tsx":m,"../../../components/Avatar/styles.module.scss":g,"../../../components/Button/index.tsx":v,"../../../components/Button/styles.module.scss":b,"../../../components/Checkbox/index.tsx":S,"../../../components/Checkbox/styles.module.scss":w,"../../../components/DatePicker/index.tsx":E,"../../../components/DatePicker/styles.module.scss":O,"../../../components/Dialog/index.tsx":A,"../../../components/Dialog/styles.module.scss":M,"../../../components/GroupButtons/index.tsx":P,"../../../components/GroupButtons/styles.module.scss":I,"../../../components/Input/index.tsx":R,"../../../components/Input/styles.module.scss":B,"../../../components/Link/index.tsx":H,"../../../components/Link/styles.module.scss":W,"../../../components/Modal/index.tsx":K,"../../../components/Modal/styles.module.scss":fe,"../../../components/MultiSelect/index.tsx":me,"../../../components/MultiSelect/styles.module.scss":ge,"../../../components/Pagination/index.tsx":ve,"../../../components/Pagination/styles.module.scss":be,"../../../components/Pill/index.tsx":Se,"../../../components/Pill/styles.module.scss":we,"../../../components/PopOver/index.tsx":Ee,"../../../components/PopOver/styles.module.scss":Oe,"../../../components/Radio/index.tsx":Ae,"../../../components/Radio/styles.module.scss":Me,"../../../components/Select/index.tsx":Pe,"../../../components/Select/styles.module.scss":Ie,"../../../components/Table/index.tsx":Re,"../../../components/Table/styles.module.scss":Be,"../../../components/Tabs/index.tsx":He,"../../../components/Tabs/styles.module.scss":We,"../../../components/Tag/index.tsx":Ke,"../../../components/Tag/styles.module.scss":Je,"../../../components/Text/index.tsx":Xe,"../../../components/Text/styles.module.scss":Qe,"../../../components/TextArea/index.tsx":et,"../../../components/TextArea/styles.module.scss":nt,"../../../components/TimePicker/index.tsx":it,"../../../components/TimePicker/styles.module.scss":J,"../../../components/Toggle/index.tsx":st,"../../../components/Toggle/styles.module.scss":lt,"../../../components/Tooltip/index.tsx":dt,"../../../components/Tooltip/styles.module.scss":pt,"../../../components/Upload/index.tsx":ht,"../../../components/Upload/styles.module.scss":_t,"../../../components/__tests__/Alert.test.tsx":yt,"../../../components/__tests__/Avatar.test.tsx":xt,"../../../components/__tests__/Button.test.tsx":Ct,"../../../components/__tests__/Checkbox.test.tsx":Tt,"../../../components/__tests__/DatePicker.test.tsx":Dt,"../../../components/__tests__/Dialog.test.tsx":kt,"../../../components/__tests__/GroupButtons.test.tsx":jt,"../../../components/__tests__/Input.test.tsx":Nt,"../../../components/__tests__/Label.test.tsx":Ft,"../../../components/__tests__/Link.test.tsx":Lt,"../../../components/__tests__/Modal.test.tsx":zt,"../../../components/__tests__/MultiSelect.test.tsx":Vt,"../../../components/__tests__/Pagination.test.tsx":Ut,"../../../components/__tests__/Pill.test.tsx":Gt,"../../../components/__tests__/PopOver.test.tsx":qt,"../../../components/__tests__/Radio.test.tsx":Yt,"../../../components/__tests__/Select.test.tsx":Zt,"../../../components/__tests__/Table.test.tsx":$t,"../../../components/__tests__/Tabs.test.tsx":tn,"../../../components/__tests__/Tag.test.tsx":rn,"../../../components/__tests__/Text.test.tsx":on,"../../../components/__tests__/TextArea.test.tsx":cn,"../../../components/__tests__/TimePicker.test.tsx":un,"../../../components/__tests__/Toggle.test.tsx":fn,"../../../components/__tests__/Tooltip.test.tsx":mn,"../../../components/__tests__/Upload.test.tsx":gn}),On=(e,t)=>{let n=RegExp(`var\\(--${e}-${t}[),\\s]`),r=Object.entries(Dn).filter(([,e])=>n.test(e)).map(([e])=>e.split(`/`).at(-2));return Array.from(new Set(r)).sort()},kn=e=>e.endsWith(`rem`)?`${parseFloat(e)*16}px · ${e}`:e.replace(/\$colors\$/g,``),An=({scale:e,value:t})=>{let n=`var(--${e}-${t})`;switch(e){case`space`:return(0,X.jsx)(`div`,{className:Y.spaceSample,style:{width:n}});case`sizes`:return(0,X.jsx)(`div`,{className:Y.sizeSample,style:{width:n,height:n}});case`radii`:return(0,X.jsx)(`div`,{className:Y.radiusSample,style:{borderRadius:n}});default:return(0,X.jsx)(`div`,{className:Y.shadowSample,style:{boxShadow:n}})}},Z=({scale:e,title:t,description:n,guidelines:r={}})=>(0,X.jsxs)(`div`,{className:Y.group,children:[(0,X.jsx)(`h3`,{children:t}),(0,X.jsx)(`p`,{children:n}),(0,X.jsx)(o,{direction:`column`,gap:`xxsm`,children:Object.entries(En[e]).map(([t,n])=>{let i=On(e,t);return(0,X.jsxs)(`div`,{className:Y.token,children:[(0,X.jsx)(`div`,{className:Y.sample,children:(0,X.jsx)(An,{scale:e,value:t})}),(0,X.jsxs)(o,{direction:`column`,align:`start`,gap:`xxxsm`,children:[(0,X.jsx)(`span`,{className:`h7`,children:t}),(0,X.jsx)(`span`,{className:`micro-copy`,children:kn(n)}),(0,X.jsx)(ne,{size:`extraSmall`,children:`--${e}-${t}`})]}),(0,X.jsxs)(o,{direction:`column`,align:`start`,gap:`xxxsm`,children:[r[t]&&(0,X.jsx)(`p`,{children:r[t]}),(0,X.jsx)(`span`,{className:`micro-copy`,children:i.length?`Used in: ${i.join(`, `)}`:`Not used by the components yet`})]})]},t)})})]})})))()}function Mn(e){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(n,{title:`Style Guides/Spacing & Sizes`}),`
`,(0,Q.jsxs)(te,{children:[(0,Q.jsxs)(ie,{style:{background:`#1A9E8F`},children:[(0,Q.jsx)(`h2`,{children:`Spacing & Sizes`}),(0,Q.jsx)(re,{})]}),(0,Q.jsxs)(ae,{children:[(0,Q.jsx)(`p`,{children:`Consistent spacing, sizes and corners give a layout its rhythm: related elements sit close together, separate sections breathe, and every component feels part of the same family. Instead of picking pixel values each time, the components use a small set of tokens, and so can you.`}),(0,Q.jsx)(`p`,{children:`Each token below shows its value, its CSS variable, what it's for and which components use it.`}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(se,{}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(Z,{scale:`space`,title:`Spacing`,description:`Padding, margins and gaps between elements. The steps go from 4px to 32px; there is no md step, the scale goes from sm (14px) to lg (16px).`,guidelines:{xxxsm:`The tightest spacing: inner padding of tags and pills, space between a label and its value.`,xxsm:`The most used step: padding of small controls and the gap between an icon and its text.`,xsm:`Horizontal padding of buttons and table cells.`,sm:`Medium inner padding, e.g. tooltips and table headers.`,lg:`Horizontal padding of large buttons and alerts.`,xlg:`Offsets from a container's edge, e.g. a modal's close button.`,xxlg:`Padding of modals, dialogs and tabs.`,xxxlg:`Space between sections and inside large containers.`}}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(Z,{scale:`sizes`,title:`Sizes`,description:`Fixed widths and heights, such as icons and field heights. Same steps as spacing, but use these for dimensions so each can be changed on its own.`,guidelines:{xsm:`Small icons and indicators.`,xlg:`Icons inside fields, e.g. the select chevron.`,xxlg:`Height of compact items, e.g. select options.`,xxxlg:`Height of fields, e.g. the date and time pickers.`}}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(Z,{scale:`radii`,title:`Border Radius`,description:`Corner rounding. Smaller elements use smaller radii; full makes pills and circles.`,guidelines:{xxsm:`Very small elements, e.g. checkboxes.`,xsm:`Controls: buttons, inputs, selects, tags and tooltips.`,sm:`Surfaces: modals, dialogs, tables, tabs and date picker calendars.`,md:`Large surfaces and panels.`,full:`Pills, avatars, toggles and radio buttons.`}}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(Z,{scale:`shadows`,title:`Shadows`,description:`Elevation for elements that float above the page.`,guidelines:{cardShadow:`Low elevation: cards, dropdowns, popovers and modals.`,mainShadow:`High elevation: dialogs and large surfaces.`}}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(se,{}),(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`span`,{className:`sub-heading`,children:`How to Use`}),(0,Q.jsxs)(`p`,{children:[`Every token is a CSS variable named after its scale and step (`,(0,Q.jsx)(`code`,{children:`--space-xxsm`}),`, `,(0,Q.jsx)(`code`,{children:`--sizes-xlg`}),`, `,(0,Q.jsx)(`code`,{children:`--radii-sm`}),`, `,(0,Q.jsx)(`code`,{children:`--shadows-cardShadow`}),`). Use them in your own CSS:`]}),(0,Q.jsx)(a,{code:c,language:`css`}),(0,Q.jsxs)(`p`,{children:[`In components, `,(0,Q.jsx)(`code`,{children:`Flex`}),`'s `,(0,Q.jsx)(`code`,{children:`gap`}),` takes the spacing steps. Everywhere else, `,(0,Q.jsx)(`code`,{children:`theme`}),` has every token as a CSS variable:`]}),(0,Q.jsx)(a,{code:l,language:`tsx`}),(0,Q.jsxs)(`p`,{children:[`To change them, override the tokens with `,(0,Q.jsx)(`code`,{children:`setupTheme`}),` (or redefine the variables in your CSS). The components update with them:`]}),(0,Q.jsx)(a,{code:u,language:`tsx`})]})]})]})}function Nn(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Mn,{...e})}):Mn(e)}var Q;function $(){return($=e((()=>{Q=t(),ee(),i(),oe(),d(),jn()})))()}$();export{Nn as default};