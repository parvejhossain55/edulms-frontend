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
import AdbIcon from '@mui/icons-material/Adb';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Image from 'next/image';
import logo from '../../assect/img/leadeducare-lg-logo.png'
import Link from 'next/link';
import { Drawer, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from '@mui/material';
import { useRouter } from 'next/router';
import {getToken, logOut, removeSessions} from "../../helper/sessionStorage";
import axios from "axios";
import {Dropdown, Space} from "antd";
import {DownOutlined, KeyOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons";




export default function Navbar(props) {

    const router = useRouter()
    const [user, setUser] = React.useState({ value: null })
    const [key, setKey] = React.useState(0)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const SidebarToggle = () => {
        setOpen(true)
    }
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };




    React.useEffect(() => {
        if (window.location.pathname === "/") {
            setSelectedIndex(0)
        } else if (window.location.pathname === '/programs') {
            setSelectedIndex(1)
        } else if (window.location.pathname === '/blog') {
            setSelectedIndex(2)
        } else if (window.location.pathname === '/contact-us') {
            setSelectedIndex(3)
        } else if (window.location.pathname === '/about-us') {
            setSelectedIndex(4)
        }
    }, [])

    const AuthVerify = async () => {
        const token = getToken()
        const AuthToken = { headers: { 'Authorization': `Bearer ${token}` } }

        try {
            await axios.get(`${process.env.NEXT_PUBLIC_URL}/auth/auth-check`, AuthToken)
        } catch (err) {
            if (err?.response?.status === 401) {
                removeSessions()
                router.push('/login')
            } else if (err?.response?.status === 500) {
                removeSessions()
                router.push('/404');
            }
        }
    }
    React.useEffect(() => {

        const token = localStorage.getItem('token')
        if (token) {
            setUser({ value: token })
            setKey(Math.random())
            AuthVerify()
        }

    }, [])

    const logout = ()=>{
        logOut()
    }

    const items = [
        {
            key: '1',
            label: (
                <Link href='/dashboard'>
                    Dashboard
                </Link>
            ),
            icon: <UserOutlined />
        },
        {
            key: '2',
            label: (
                <Link href='/dashboard/profile'>
                    Profile
                </Link>
            ),
            icon: <KeyOutlined rotate={-130} />
        },
        {
            key: '3',
            label: (
                <Link href='/' onClick={logout} >
                    Log Out
                </Link>
            ),
            icon: <UploadOutlined rotate={90} />
        }
    ];


    return (

        <ElevationScroll {...props}>
            <AppBar position='sticky' sx={{ background: '#fff' }} >
                <Container maxWidth="xl">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            href="/"
                            sx={{
                                mr: 10,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Image
                                src={logo}
                                width={70}
                                height={70}
                                alt="Picture of the author"
                            />
                        </Typography>

                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={SidebarToggle}
                                color="secondary"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 0,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Image
                                src={logo}
                                width={70}
                                height={70}
                                alt="Picture of the author"
                            />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
                            {pages.map((page, index) => (
                                <MenuItem
                                    key={index.toString()}
                                    // onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2, color: '#514848', fontWeight: '600', display: 'block', textTransform: 'capitalize',
                                        '&.Mui-selected': {
                                            color: '#ea512e',
                                            background: 'none'

                                        }
                                    }}
                                    component={Link}
                                    href={`${page.link}`}
                                    selected={selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index)}
                                >
                                    {page.title}
                                </MenuItem>
                            ))}
                        </Box>
                        {
                            !user.value && <Box sx={{ flexGrow: 0 }}>
                                <Button color='secondary' component={Link} href='/login' className='mr-4' sx={{ textTransform: 'capitalize', fontWeight: '600', background: '#ea512e', '&:hover': {background: '#ff2e00'} }} variant='contained' disableElevation>Login</Button>
                                <Button color='secondary' component={Link} href='/register' sx={{ textTransform: 'capitalize', fontWeight: '600', background: '#ea512e', '&:hover': {background: '#ff2e00'} }} variant='contained' disableElevation>Register</Button>
                            </Box>
                        }
                        {
                            user.value && <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">

                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
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
                                    {settings.map((setting, i) => (
                                        <MenuItem component={Link} href={`${setting.link}`} key={i.toString()} onClick={handleCloseUserMenu}>
                                            <Typography sx={{ paddingRight: 8 }} textAlign="center">{setting.title}</Typography>
                                        </MenuItem>
                                    ))}
                                    <MenuItem component={Link} href='/' onClick={logOut}>
                                        <Typography sx={{ paddingRight: 8 }} textAlign="center">Logout</Typography>
                                    </MenuItem>


                                </Menu>
                            </Box>
                        }

                    </Toolbar>
                </Container>
                <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                    <Box component='div' sx={{ background: '#7b1fa2', height: '100vh' }}>
                        <Box p={2} width={240} textAlign='center' role='presentation' >
                            <Typography variant='h5' component={Link} href='/' sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Image
                                    src={logo}
                                    width={70}
                                    height={70}
                                    alt="Picture of the author"
                                />
                            </Typography>
                        </Box>
                        <List>
                            {
                                pages.map((page, i) => (
                                    <ListItemButton key={i.toString()} component={Link} href={page.link} selected={selectedIndex === i}>
                                        <ListItem sx={{
                                            '&.Mui-selected': {
                                                color: '#50f53d'
                                            }
                                        }}>
                                            <ListItemText sx={{
                                                color: '#fff'
                                            }} primary={`${page.title}`}></ListItemText>
                                        </ListItem>
                                    </ListItemButton>
                                ))
                            }
                        </List>
                    </Box>
                </Drawer>
            </AppBar>
        </ElevationScroll>
    );
}




function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        sx: {
            padding: trigger ? '0' : '20px 0px',
            backgroundColor: trigger ? '#fff' : '#e7ddf4',
            transition: '300ms ease-in-out',
            boxShadow: trigger ? '9px 7px 40px #00000036' : 'none'
        },
    });
}

const pages = [
    {
        link: '/',
        title: 'Home'
    },
    {
        link: '/programs',
        title: 'programs'
    },
    {
        link: '/blog',
        title: 'Blog'
    },
    {
        link: '/contact-us',
        title: 'Contact'
    },
    {
        link: '/about-us',
        title: 'About Us'
    },
];

const settings = [
    {
        link: '/dashboard',
        title: 'Dashboard'
    },
    {
        link: '/dashboard/profile',
        title: 'Profile'
    },
]