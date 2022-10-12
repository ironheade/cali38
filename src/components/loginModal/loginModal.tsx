import './loginModal.css'

import { Modal, useMantineTheme } from '@mantine/core';
import { AuthenticationForm } from '../LoginScreen';

export function LoginModal(props:any) {
  const theme = useMantineTheme();

  return (
    <Modal
          overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
          overlayOpacity={0.55}
          overlayBlur={3} 
          opened={props.open} 
          onClose={()=>props.changeOpenState(false) }
          //onClose={()=>setOpen(false) }
          >
     <AuthenticationForm/>
    </Modal>
  );
}