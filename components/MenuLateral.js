import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <Paper >
        <MenuList style={{position: 'fixed',top:'64px',bottom:'0px', width:'150px', height:'91.5%', borderRight:'1px solid #5e5e5e',background: '#46b6d2'}}>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Sobre Mim</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Trabalhos</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Jogos</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Skills</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Currículo</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Sonhos</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Contato</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Javascript</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Sobre Mim</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Trabalhos</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Jogos</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Skills</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000', fontWeight:'bolder'}}>Currículo</MenuItem>
      
 
        </MenuList>
      </Paper>
     
    </Stack>
  );
}
