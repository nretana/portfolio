import React from 'react';
import { IconMenu, IconX } from '@tabler/icons-react';
import {
  ModalOverlay,
  Dialog,
  DialogTrigger,
  Button,
  Modal,
} from 'react-aria-components';

import classes from './OffCanvas.module.css';

type OffCanvasProps = {
  title: string;
  children: React.ReactNode;
};

export const OffCanvas: React.FC<OffCanvasProps> = ({ title, children }) => {
  return (
    <DialogTrigger>
      <Button className='btn btn-primary rounded'> 
        <IconMenu className='icon' />
      </Button>
      <ModalOverlay className={classes['offcanvas-overlay']} isDismissable>
        <Modal className={classes['offcanvas']}>
          <Dialog>
            <div className='d-flex justify-content-between align-items-center mb-3 ms-3'>
              <h4>{title}</h4>
              <Button
                className='btn rounded'
                slot='close'
                autoFocus
                aria-label='close menu'
              >
                <IconX className='icon'/>
              </Button>
            </div>
            {children}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
