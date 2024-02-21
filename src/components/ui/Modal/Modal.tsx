import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import s from './Modal.module.scss'

export const Modal = () => (
  <DialogPrimitive.Root>
    <DialogPrimitive.Trigger asChild>
      <button className={clsx(s.Button, s.violet)}>Edit profile</button>
    </DialogPrimitive.Trigger>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={s.DialogPrimitiveOverlay} />
      <DialogPrimitive.Content className={s.DialogPrimitiveContent}>
        <DialogPrimitive.Title className={s.DialogPrimitiveTitle}>
          Edit profile
        </DialogPrimitive.Title>
        <DialogPrimitive.Description className={s.DialogPrimitiveDescription}>
          Make changes to your profile here. Click save when you are done.
        </DialogPrimitive.Description>
        <fieldset className={s.Fieldset}>
          <label className={s.Label}>Name</label>
          <input className={s.Input} defaultValue={'Pedro Duarte'} id={'name'} />
        </fieldset>
        <fieldset className={s.Fieldset}>
          <label className={s.Label}>Username</label>
          <input className={s.Input} defaultValue={'@peduarte'} id={'username'} />
        </fieldset>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 25 }}>
          <DialogPrimitive.Close asChild>
            <button className={clsx(s.Button, s.green)}>Save changes</button>
          </DialogPrimitive.Close>
        </div>
        <DialogPrimitive.Close asChild>
          <button className={s.IconButton}>
            <Cross2Icon />
          </button>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
)
