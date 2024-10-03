import { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircle from '@mui/icons-material/AccountCircle'; // Ícone de perfil
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    borderRadius: '20px',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMoreMenuOpen = Boolean(menuAnchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoreMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        sx={{ background: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleMoreMenuOpen}
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: 'black' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge
                badgeContent={17}
                color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="user profile"
              color="inherit"
              onClick={handleMenuOpen}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        sx={{ mt: '5px', ml: '15px' }}>
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
        <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
      </Menu>
      <Menu
        anchorEl={menuAnchorEl}
        open={isMoreMenuOpen}
        onClose={handleMenuClose}
        sx={{ mt: '5px' }}>
        <MenuItem onClick={handleMenuClose}>Favoritos</MenuItem>
        <MenuItem onClick={handleMenuClose}>Carrinho</MenuItem>
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
        <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
      </Menu>
    </Box>
  );
}