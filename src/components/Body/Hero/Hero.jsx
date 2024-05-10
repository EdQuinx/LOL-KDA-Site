import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import HeroImg from '~/assets/kda-hero.jpg'
import LogoImg from '~/assets/kda-logo.png'

function Hero() {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundImage: `url(${HeroImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        position: 'relative'
      }}>
      <Box sx={{
        boxSizing: 'border-box',
        m: 0,
        p: 0,
        pt: '56.25%',
        width: '100%'
      }}>
        <Box sx={{
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          position: 'absolute',
          top: 0,
          m: 0,
          p: 0
        }}>
          <Box sx={{
            bottom: 0,
            width: '100%',
            alignItems: 'center',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            p: '0 20px',
            textAlign: 'center',
            gap: 2
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexDirection: 'column',
              gap: 1
            }}>
              <Box>
                <Box
                  component='img'
                  src={LogoImg}
                  sx={{
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    display: 'block',
                    width: '73%',
                    height: '73%',
                    mx: 'auto',
                    mt: {
                      lg: '30.375rem',
                      md: '20.375rem',
                      xs: '10.375rem'
                    },
                    mb: {
                      lg: '-5.75rem',
                      md: '-2.75rem',
                      xs: '-1.75rem'
                    }
                  }}>
                </Box>
              </Box>
            </Box>
            <Box sx={{
            }}>
              <Box sx={{
                mb: '35px'
              }}>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '2.5rem',
                      md: '2.7rem',
                      sm: '2rem',
                      xs: '2rem'
                    },
                    fontWeight: 700,
                    fontStyle: 'italic',
                    lineHeight: '112%',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: (theme) => theme.palette.primary.main,
                    maxWidth: '600px'
                  }}
                >
              POP/STARS
                </Typography>
              </Box>
              <Box sx={{
                color: (theme) => theme.palette.primary.main,
                fontFamily: '"Helvetica","Arial",sans-serif',
                fontSize: {
                  lg: '0.875rem',
                  md: '0.82rem',
                  xs: '0.75rem'
                },
                lineHeight: '1.42817',
                fontStyle: 'italic',
                fontWeight: 500,
                maxWidth: '610px',
                letterSpacing: '0.368px',
                textAlign: 'center'
              }}>
                <p style={{ lineHeight: 1.8 }}>
                  K/DA exploded into the music scene with their hit song “POP/STARS.” Fans of K/DA can’t get enough of their unconventional flair, from the trademark tails (which fans suspect are real) to otherworldly decor in their studio. “Our songs are for you to remember—-always be true to yourself,” says lead singer Ahri. K/DA hopes to take their music around the world in a global tour.
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default Hero