import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MusicStreamBGImg from '~/assets/kda-music-stream-background.jpg'
import MusicStreamImg from '~/assets/kda-music-stream.jpg'
import { useTheme } from '@mui/material'

function NewHit() {
  const { breakpoints } = useTheme()

  return (
    // Background
    <Box
      component='section'
      sx={{
        backgroundImage: `url(${MusicStreamBGImg})`,
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        m: '0',
        p: '0'
      }}
    >
      {/* Container */}
      <Box sx={{
        [breakpoints.down(769)]: {
          flexDirection: 'column',
          width: '100%',
          p: '40px 20px'
        },
        [breakpoints.up(768)]: {
          maxWidth: '1020px',
          p: '90px 20px',
          flexDirection: 'row-reverse'
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        m: '0 auto'
      }}>
        {/* Detail */}
        <Box sx={{
          flexGrow: 1,
          [breakpoints.down(769)]: {
            width: '100%'
          }
        }}>
          <Typography sx={{
            fontSize: '0.875rem',
            fontStyle: 'italic',
            fontWeight: 700,
            color: (theme) => theme.palette.secondary.main,
            letterSpacing: '0.05em',
            lineHeight: '112%',
            textTransform: 'uppercase',
            mb: '8px'
          }}>
            K/DA&apos;s New Hit Single
          </Typography>
          <Typography c
            omponent='h2'
            sx={{
              [breakpoints.up(800)]: {
                fontSize: '2.5rem'
              },
              [breakpoints.down(801)]: {
                fontSize: '1.5625rem'
              },
              fontStyle: 'italic',
              letterSpacing: '0.05em',
              lineHeight: '112%',
              textTransform: 'uppercase',
              fontWeight: 800,
              mb: '26px'
            }}
          >
            POP/STARS
          </Typography>
          <Typography sx={{
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            fontSize: '0.875rem',
            fontStyle: 'italic',
            fontWeight: 400,
            letterSpacing: '0.7px',
            lineHeight: '1.42817',
            color: (theme) => theme.palette.primary.main
          }}>
            You&apos;re ready for another world. Turn on K/DA&apos;s hit single and dive into a bold, sensational universe where no one can bring you down.
          </Typography>
          <Button
            component='a'
            disableRipple
            sx={{
              fontFamily: 'Barlow Condensed, sans-serif',
              maxWidth: '420px',
              fontSize: '1rem',
              fontStyle: 'italic',
              letterSpacing: '0.05em',
              lineHeight: '112%',
              textTransform: 'uppercase',
              fontWeight: 800,
              mt: '26px',
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
            Listen
          </Button>
        </Box>
        {/* Image */}
        <Box sx={{
          [breakpoints.up(768)]: {
            ml: '0',
            mr: '100px'
          },
          [breakpoints.down(769)]: {
            mt: '50px'
          },
          maxWidth: '100%',
          flexGrow: 0,
          flexShrink: 0,
          position: 'relative',
          borderColor: '#9ecaed',
          '&:before': {
            content: '""',
            width: '90%',
            height: '90%',
            top: '5%',
            left: '5%',
            position: 'relative',
            borderRadius: '50%',
            boxShadow: '0 0 80px 30px rgba(56,45,88,.8)'
          }
        }}>
          <Box></Box>
          <Box
            component='img'
            src={MusicStreamImg}
            sx={{
              width: '100%',
              position: 'relative'
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default NewHit