import React, { ReactElement } from 'react'
import {
  Button,
  Dialog,
  DialogTrigger,
  OverlayArrow,
  Popover as BasePopover,
} from 'react-aria-components';
import type { PopoverProps as BasePopoverProps } from 'react-aria-components';
import cls from 'clsx';


type Target = {
    content : ReactElement
    className: string
}

type DialogSection = {
  content : ReactElement
  className: string
}


export type PopoverProps = {
  target: Target
  dialogSection: DialogSection
} & BasePopoverProps;

export const Popover: React.FC<PopoverProps> = ({ target, dialogSection, placement }) => {
  return (
    <DialogTrigger >
      <Button className={cls('popover-trigger', target.className)}>{target.content}</Button>
      <BasePopover placement={placement}>
        <Dialog className={dialogSection.className}>{dialogSection.content}</Dialog>
      </BasePopover>
    </DialogTrigger>
  );
};
