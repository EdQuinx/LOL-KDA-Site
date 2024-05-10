import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ModuleBgIm from '~/assets/kda-modules-background.jpg'
import { MOCK_ABOUT } from '~/constants'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import CardActionArea from '@mui/material/CardActionArea'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useTheme } from '@mui/material'

function About() {
  const { breakpoints } = useTheme()

  return (
    // Background
    <Box
      component='section'
      sx={{
        backgroundImage: `url(${ModuleBgIm})`,
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
      }}
    >
      {/* Container */}
      <Box sx={{
        maxWidth: '1060px',
        m: '0 auto',
        p: '80px 20px 40px',
        position: 'relative'
      }}
      >
        {/* Title */}
        <Typography
          variant='h2'
          sx={{
            [breakpoints.down(801)]: {
              fontSize: '1.5625rem'
            },
            fontSize: '2.5rem',
            fontStyle: 'italic',
            letterSpacing: '0.05em',
            lineHeight: '112%',
            textTransform: 'uppercase',
            fontWeight: 800,
            mb: '66px'
          }}
        >More from K/DA</Typography>
        {/* Cards */}
        <Box
          component='ul'
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            m: '0 -10px',
            pl: 0,
            listStyle: 'none'
          }}
        >
          {
            MOCK_ABOUT.map((e, index) => (
              <Box
                component='li'
                key={index}
                sx={{
                  [breakpoints.up(600)]: {
                    width: '280px'
                  },
                  [breakpoints.down(601)]: {
                    flexGrow: 1
                  },
                  m: '0 10px 40px'
                }}
              >
                <Box
                  component='header'
                  sx={{
                    mb: '35px'
                  }}
                >
                  <Typography sx={{
                    fontStyle: 'italic',
                    letterSpacing: '0.05em',
                    lineHeight: '112%',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: (theme) => theme.palette.secondary.main,
                    mb: '8px'
                  }}
                  >
                    {e.category}
                  </Typography>
                  <Typography
                    variant='h2'
                    sx={{
                      fontSize: '1.625rem',
                      fontStyle: 'italic',
                      letterSpacing: '0.05em',
                      lineHeight: '112%',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      height: '35px'
                    }}
                  >
                    {e.title}
                  </Typography>
                </Box>
                <Card sx={{
                  background: '#1e1b2c',
                  border: '2px solid #14091e',
                  display: 'block',
                  outline: 'none',
                  '&:hover': {
                    '& .MuiCardActions-root': {
                      bgcolor: (theme) => theme.palette.secondary.main,
                      '& .MuiTypography-root': {
                        color: 'black'
                      }
                    },
                    '& .MuiSvgIcon-root': {
                      color: 'black'
                    }
                  }
                }}>
                  <CardActionArea disableRipple >
                    <CardMedia
                      sx={{
                        bgcolor: 'black',
                        width: '100%',
                        height: '160px',
                        border: 'none',
                        display: 'block',
                        objectFit: 'cover',
                        outline: 'none'
                      }}
                      image={e.thumbnail}
                      title={e.title}
                    />
                    <CardContent>
                      <Typography sx={{
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                        fontSize: '0.85rem',
                        fontStyle: 'italic',
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                        lineHeight: '1.52817',
                        [breakpoints.up(600)]: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          height: '200px'
                        }
                      }}>
                        {e.description}
                      </Typography>
                    </CardContent>
                    <Divider
                      component='li'
                      sx={{
                        borderWidth: '1px',
                        borderColor: '#14091e'
                      }}
                    />
                    <CardActions sx={{
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'background-color 0.2s'
                    }}>
                      <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '92%'
                      }}>
                        <Typography sx={{
                          boxSizing: 'border-box',
                          fontSize: '1rem',
                          fontStyle: 'italic',
                          letterSpacing: '0.05em',
                          lineHeight: '112%',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          p: '20px 30px'
                        }}>
                          {e.label}
                        </Typography>
                        <ArrowForwardIosIcon
                          fontSize='0.875rem'
                          sx={{
                            color: (theme) => theme.palette.secondary.main
                          }}
                        />
                      </Box>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default About