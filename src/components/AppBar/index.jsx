import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import RiotLogoSvg from '~/assets/logo.svg?react'
import LOLLogoSvg from '~/assets/lol.svg?react'
import SvgIcon from '@mui/material/SvgIcon'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CustomButton from '../Header/CustomButton'
import LanguageIcon from '@mui/icons-material/Language'
import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import NorthEastIcon from '@mui/icons-material/NorthEast'

const MOCK_URL = 'https://universe.leagueoflegends.com/vn_vn/'

function AppBar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      m: 0,
      border: 0,
      zIndex: 20000
    }}>
      <Box sx={{
        bgcolor: '#111',
        width: '100%',
        height: (theme) => theme.kda.appBarHeight,
        display: 'flex',
        fontSize: '0.875rem !impportant',
        lineHeight: 'normal',
        textAlign: 'left',
        fontWeight: 'bold',
        borderBottom: '2px solid rbga(51, 51, 51, 0.25)',
        justifyContent: {
          lg: 'flex-start',
          md: 'space-between',
          xs: 'space-between'
        }
      }}>
        {/* Left */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pl: '36px'
        }}>
          <Box sx={{
            height: (theme) => theme.kda.appBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Link
              sx={{
                textDecoration: 'none',
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                '&:hover': {
                  '.MuiSvgIcon-root': {
                    color: 'red'
                  }
                }
              }}
              href={MOCK_URL}
            >
              <SvgIcon
                component={RiotLogoSvg}
                inheritViewBox
                sx={{
                  color: 'white',
                  fontSize: '5.2rem'
                }} />
              <SvgIcon
                component={ArrowDropDownIcon}
                sx={{
                  color: 'grey',
                  fontSize: 'large'
                }} />
            </Link>
          </Box>
        </Box>
        {/* Center */}
        <Box sx={{
          display: {
            lg: 'flex',
            md: 'none',
            xs: 'none'
          },
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 1,
          width: '100vh'
        }}>
          <Box
            sx={{
              height: '80px',
              ml: '22px',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Link
                href={MOCK_URL}
              >
                <SvgIcon
                  component={LOLLogoSvg}
                  inheritViewBox
                  sx={{
                    fontSize: '1.6rem'
                  }}
                />
              </Link>
            </Box>
          </Box>
          <Link
            href={MOCK_URL}
            underline='none'
          >
            <Typography
              sx={{
                display: 'block',
                color: '#f9f9f9',
                fontSize: '1.125rem',
                fontWeight: '500',
                textAlign: 'center',
                letterSpacing: '0.5px',
                ml: 0,
                pl: '10px',
                pt: 0
              }}
            >
              Universe
            </Typography>
          </Link>
          <Box sx={{
            ml: '10px',
            width: '100vh',
            height: (theme) => theme.kda.appBarHeight
            // transition: 'opacity ease 0.3s'
          }}>
            <Box sx={{
              display: 'inline-flex',
              alignItems: 'center',
              position: 'relative',
              height: (theme) => theme.kda.appBarHeight
            }}>
              <CustomButton content='Champions'/>
              <CustomButton content='Regions'/>
              <CustomButton content='Comics' />
              <Box sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <CustomButton content='Alt Universe' />
                <SvgIcon
                  component={ArrowDropDownIcon}
                  inheritViewBox
                  sx={{
                    ml: '-25px',
                    color: 'grey',
                    fontSize: 'large'
                  }} />
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <CustomButton content='Map' />
                <SvgIcon
                  component={NorthEastIcon}
                  inheritViewBox
                  sx={{
                    ml: '-20px',
                    color: 'grey',
                    fontSize: '0.875rem'
                  }} />
              </Box>
              <CustomButton content='Explore'/>
              <CustomButton content='Search'/>
            </Box>
          </Box>
        </Box>
        {/* Right */}
        <Box sx={{
          display: 'flex',
          pr: '32px',
          gap: 1
        }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              top: 0,
              ml: '-20px',
              height: '100%',
              position: 'relative'
            }}
          >
            <Box sx={{
              display: 'block',
              top: '50px',
              width: '32px',
              height: '32px',
              cursor: 'pointer'
            }}>
              <Box sx={{
                width: '32px',
                height: '32px',
                p: 0,
                position: 'absolute',
                borderRadius: '6.4px'
              }}>
                <SvgIcon
                  component={LanguageIcon}
                  inheritViewBox
                  sx={{
                    position: 'absolute',
                    m: 'auto',
                    top: '8px',
                    left: '8px',
                    width: '16px',
                    height: '16px',
                    color: 'white'
                  }}
                  fontSize='1rem'
                  id="menu-language"
                  aria-controls={open ? 'menu-language' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                />
                <Menu
                  id="menu-language"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'menu-language'
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2
          }}>
            <Box sx={{
              display: 'inline-block',
              p: '0, 6px'
            }}>
              <Button sx={{
                bgcolor: 'rgba(128, 128, 128, 0.2)',
                color: '#f9f9f9',
                display: 'inline-block',
                transition: 'color 1s cubic-bezier(0.06, 0.81, 0, 0.98)',
                verticalAlign: 'middle',
                fontSize: '0.813rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                p: '8px 16px',
                borderRadius: '6.4px',
                letterSpacing: '0.08em',
                lineHeight: '120%',
                height: '32px',
                '&:hover': {
                  bgcolor: 'rgba(128, 128, 128, 0.2)'
                }
              }}
              >
                SIGN IN
              </Button>
            </Box>
            <Box sx={{
              display: 'inline-block',
              p: '0, 6px'
            }}>
              <Button sx={{
                background: 'linear-gradient(315deg, rgb(11, 196, 226) 0%, rgb(44, 140, 194) 100%)',
                color: '#111',
                transition: 'color 1s cubic-bezier(0.06, 0.81, 0, 0.98)',
                fontWeight: 600,
                textTransform: 'uppercase',
                textOverflow: 'ellipsis',
                p: '8px 16px',
                borderRadius: '12px',
                letterSpacing: '0.08em',
                lineHeight: '16px',
                height: '32px',
                '&:hover': {
                  background: 'rgb(11, 196, 226)'
                }
              }}
              >
                PLAY NOW
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AppBar