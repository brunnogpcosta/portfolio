import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export default function MenuListComposition(props) {
  const [palavra, setPalavra] = React.useState("")


  function handleListKeyDown(event) {
    console.log(event)
    setPalavra(event)
    props.handleClick(event)

    //, width: '300px', borderRight: '1px solid #5e5e5e', background: '#46b6d2', justifyContent: 'right' 
  }


  return (
    <Stack direction="row" spacing={2}>
      <Paper >
        <MenuList style={{ position: 'fixed', top: '68px', bottom: '0px', width: '152px', height: '91.5%', background: '#fff', border: '1px solid #f3f8f8' }}>
          {props.menu.map((men) => (<MenuItem
            key={men}
            value={men}
            style={{ borderBottom: '1px solid #4747', fontWeight: 'bolder', position: 'relative', top: '0px', width: '150px', background: men == palavra ? '#ededed' : '#fff', justifyContent: 'center' }}
            onClick={() => handleListKeyDown(men)}>{men}
          </MenuItem>
          )

          )}
        </MenuList>
      </Paper>

    </Stack>
  );
}
