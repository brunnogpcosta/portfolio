import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: '#000', boxShadow:'1px 1px 5px #a3a3a3'}}>
      <Container maxWidth="xl"  >
        <Toolbar disableGutters >

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'left' } }}
          >
            {`< `}Brunno Costa{` >`}
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Acessar GitHub">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 2 }}>
                <Link href="https://github.com/brunnogpcosta" underline="none" target="blank">
                  <GitHubIcon style={{ color: '#fff', fontSize: 'xx-large' }} />
                </Link>
              </IconButton>
            </Tooltip>

            <Tooltip title="Acessar Linkedin">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Link href="https://www.linkedin.com/in/brunno-costa-a97b32160/" underline="none" target="blank">
                  <LinkedInIcon style={{ color: '#fff', fontSize: 'xx-large' }} />
                </Link>
              </IconButton>
            </Tooltip>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
