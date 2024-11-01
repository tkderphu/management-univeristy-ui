
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

const pages = ([
  {
    page: "Course",
    link: "/admin/course"
  },
  {
    page: "Major",
    link: "/admin/major"
  },
  {
    page: "Subject",
    link: "/admin/subject"
  },
  {
    page: "Điểm thi",
    link: "/xem-diem"
  }
]);
const settings =([
  {
    name: "Thông tin cá nhân",
    link: "/profile"
  },
  {
    name: "Đổi mật khẩu",
    link: "/doi-mat-khau"
  },
  {
    name: "Quản lý vai trò",
    link: "/admin"
  }
])

function HeaderAdmin() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event:any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
          
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Trang chủ
          </Typography>
          {pages.length > 0 && (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      variant="h6"
                      noWrap
                      component={Link}
                      to={page.link}
                      sx={{

                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >{page.page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to={'/trang-chu'}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Trang chủ
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block-inline', fontSize:'15px' }}
                component={Link}
                to={page.link}
                key={index}
              >
                {page.page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {/* {Token.info === null ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'inline' }}
                component={Link}
                to={"/dang-nhap"}
              >
                Đăng nhập
              </Button>
            ) : (
              <div style={{ display: "flex", }}>
                <h6 style={{ marginRight: "10px", transform: "translateY(25%)" }}>{Token.info != null && Token.info.person != null ? `${Token.info.person.user.username}` : ''}</h6>
                <div>
                  <Tooltip title={Util.getProfile() != null ? Util.getProfile().fullName : ''}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={img} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '50px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                        <Typography
                          textAlign="center"
                          component={Link}
                          to={setting.link}
                          sx={{
                            mr: 3,
                            // display: { xs: 'none', md: 'flex' },
                            // fontFamily: 'monospace',
                            fontSize: '20px',
                            // fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                          }}
                        >{setting.name}</Typography>
                      </MenuItem>
                    ))}
                    <MenuItem onClick={handleLogout}>
                      <Typography
                        textAlign="center"
                        sx={{
                          mr: 3,
                          // display: { xs: 'none', md: 'flex' },
                          // fontFamily: 'monospace',
                          fontSize: '20px',
                          // fontWeight: 700,
                          // letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                      >Đăng xuất</Typography>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            )}
 */}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderAdmin;