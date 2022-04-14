import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export default function MenuListComposition() {

  const menu = ["Item A", "Item B", "Item C", "Item D", "Item E", "Item F"]
  const [palavra, SetPalavra] = React.useState("")


  function handleListKeyDown(event) {
    console.log(event)

    SetPalavra(event)
    //, width: '300px', borderRight: '1px solid #5e5e5e', background: '#46b6d2', justifyContent: 'right' 
  }


  return (
    <Stack direction="row" spacing={2}>
      <Paper >
        <MenuList style={{ position: 'fixed', top: '64px', bottom: '0px', width: '150px', height: '91.5%', borderRight: '1px solid #5e5e5e', background: '#46b6d2', boxShadow: '1px 1px 5px #a3a3a3' }}>
          {menu.map((men) => men == palavra ?
            <MenuItem key={men} style={{ borderBottom: '1px solid #4747', fontWeight: 'bolder', position: 'relative', top: '-8px', width: '150px', background: '#276b7c', justifyContent: 'center',borderRight: '1px solid #5e5e5e', textShadow:'#CCC 0px 0 2px'}} onClick={() => handleListKeyDown(men)}>{men}</MenuItem>
            :
            <MenuItem key={men} style={{ borderBottom: '1px solid #4747', fontWeight: 'bolder', position: 'relative', top: '-8px', width: '150px', background: '#46b6d2', justifyContent: 'center' ,borderRight: '1px solid #5e5e5e'}} onClick={() => handleListKeyDown(men)}>{men}</MenuItem>

          )}
        </MenuList>
      </Paper>

    </Stack>
  );
}
