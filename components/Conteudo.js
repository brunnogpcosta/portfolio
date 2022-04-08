import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Variants() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          mt: 0,
          width: 1000,
          height: 560,
          border: '1px solid #5e5e5e'
        },
      }}
    >
      <Paper variant="outlined" square />
    </Box>
  );
}
