import { ReactElement, ReactNode } from 'react';
import { TooltipTrigger, Tooltip as BaseTooltip, OverlayArrow, Button } from 'react-aria-components';
import type { OverlayArrowRenderProps } from 'react-aria-components';
import type { TooltipProps as BaseTooltipProps } from 'react-aria-components';
import { Link } from 'react-aria-components';
import type { Icon } from '@tabler/icons-react';


export type LinkTooltipTarget = {
  label?: string
  icon?: Icon
  url: string
}

export type TooltipProps = {
    label: string
    children: ReactElement,
    isShowArrow?: Boolean | undefined,
} & BaseTooltipProps;

export const Tooltip: React.FC<TooltipProps> = ({ label, children, placement, isShowArrow }) => {

  return (
    <TooltipTrigger delay={0}>
      {children}
      <BaseTooltip placement={placement}>
        {isShowArrow && (<OverlayArrow>
          <svg width={8} height={8} viewBox='0 0 8 8'>
            <path d='M0 0 L4 4 L8 0' />
          </svg>
        </OverlayArrow>)}
        <span>{label}</span>
      </BaseTooltip>
    </TooltipTrigger>
  );
};
