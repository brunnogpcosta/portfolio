import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
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
    <Stack direction="row" spacing={0} style={{ background: '#f3f3f3'}}>
      <Paper>
        <MenuList style={{position: 'relative',top:'-7px', width:'150px', height:'90vh', borderRight:'1px solid #5e5e5e'}}>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Sobre Mim</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Trabalhos</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Jogos</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Skills</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Currículo</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Sonhos</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Contato</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Javascript</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Sobre Mim</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Trabalhos</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Jogos</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Skills</MenuItem>
          <MenuItem style={{borderBottom:'1px solid #000'}}>Currículo</MenuItem>
      
 
        </MenuList>
      </Paper>
     
    </Stack>
  );
}
