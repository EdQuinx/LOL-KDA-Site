import { useTheme } from '@mui/material'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import KDAMerchBG from '~/assets/kda-merch-background.jpg'
import KDAMerch from '~/assets/kda-merch.png'

function Merchandise() {
  const { breakpoints } = useTheme()

  return (
    <Box
      component='section'
      sx={{
        backgroundImage: `url(${KDAMerchBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        display: 'flex',
        overflow: 'hidden',
        m: '0',
        p: '0'
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        m: '0 auto',
        [breakpoints.up(768)]: {
          maxWidth: '1020px',
          p: '90px 20px'
        },
        [breakpoints.down(769)]: {
          flexDirection: 'column',
          p: '40px 20px',
          width: '100%'
        }
      }}>
        <Box sx={{
          [breakpoints.down(769)]: {
            width: '100%'
          },
          flexGrow: 1
        }}>
          <Typography
            variant='h2'
            sx={{
              [breakpoints.up(800)]: {
                fontSize: '2.5rem'

              },
              [breakpoints.down(801)]: {
                fontSize: '25px'
              },
              fontStyle: 'italic',
              fontWeight: 700,
              letterSpacing: '0.05em',
              lineHeight: '112%',
              textTransform: 'uppercase',
              mb: '26px'
            }}
          >
            K/DA OFFICIAL MERCHANDISE
          </Typography>
          <Typography sx={{
            fontFamily: 'Roboto, Helvetica, sans-serif',
            fontSize: '0.875rem',
            fontStyle: 'italic',
            letterSpacing: '0.5px',
            lineHeight: '1.42817',
            fontWeight: 500
          }}>
          Rep your favorite pop stars with the official K/DA merch collection.
          </Typography>
          <Button
            component='a'
            disableRipple
            sx={{
              fontFamily: 'Barlow Condensed, sans-serif',
              [breakpoints.up(769)]: {
                maxWidth: '420px'
              },
              fontSize: '1rem',
              fontStyle: 'italic',
              letterSpacing: '0.05em',
              lineHeight: '112%',
              textTransform: 'uppercase',
              fontWeight: 800,
              mt: '25px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'color 0.2s',
              '&.MuiButton-root:hover': {
                bgcolor: 'transparent',
                color: (theme) => theme.palette.secondary.main
              },
              '&:after': {
                content: '""',
                boxSizing: 'border-box',
                width: '7px',
                height: '7px',
                display: 'flex',
                flexShrink: 0,
                transform: 'translateY(50%) rotate(45deg)',
                transformOrigin: '100% 0',
                ml: '35px',
                borderTop: (theme) => `2px solid ${theme.palette.secondary.main}`,
                borderRight: (theme) => `2px solid ${theme.palette.secondary.main}`
              },
              p: '0'
            }}>
            Learn more
          </Button>
        </Box>
        <Box sx={{
          maxWidth: '100%',
          flexGrow: 0,
          flexShrink: 0,
          position: 'relative',
          [breakpoints.up(768)]:{
            ml: '100px'
          },
          [breakpoints.down(769)]:{
            ml: '50px'
          }
        }}>
          <Box sx={{
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            content: '""',
            position: 'absolute',
            opacity: 0.05,
            width: '130%',
            height: '130%',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%'
          }} />
          <Box
            component='img'
            src={KDAMerch}
            sx={{
              position: 'relative',
              width: '100%'
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Merchandise