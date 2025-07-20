import React, { Dispatch } from 'react';
import { IconMenu, IconX } from '@tabler/icons-react';
import { ModalOverlay, Dialog, Button, Modal } from 'react-aria-components';

import classes from './OffCanvas.module.css';

type OffCanvasProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const OffCanvas: React.FC<OffCanvasProps> = ({
  title,
  children,
  isOpen,
  setOpen,
}) => {
  return (
    <>
      <Button className='btn btn-primary rounded' onClick={() => setOpen(true)}>
        <IconMenu className='icon' />
      </Button>
      <ModalOverlay
        className={classes['offcanvas-overlay']}
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <Modal className={classes['offcanvas']}>
          <Dialog>
            <div className='d-flex justify-content-between align-items-center mb-3 ms-3'>
              <h4>{title}</h4>
              <Button
                className='btn rounded'
                onClick={() => setOpen(false)}
                autoFocus
                aria-label='close menu'
              >
                <IconX className='icon' />
              </Button>
            </div>
            {children}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </>
  );
};
