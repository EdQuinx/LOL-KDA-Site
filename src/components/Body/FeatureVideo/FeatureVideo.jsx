import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import SoundBarPng from '~/assets/soundbar.png'
import ReactPlayer from 'react-player'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

const imageUrl = 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blte904e27c82dab9c2/60ee0edc6d4b755f502983f0/kda-music-video-placeholder.jpg'

function FeatureVideo() {
  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: 'black',
        p: '210px 0 150px'
      }}
    >
      <Box
        component='header'
        sx={{
          m: '0 auto',
          textAlign: 'center'
        }}>
        <Typography
          sx={{
            color: '#e5b48f',
            fontSize: '0.875rem',
            fontStyle: 'italic',
            lineHeight: '112%',
            mb: '13px',
            textTransform: 'uppercase'
          }}
        >
          Featured Video
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '2.1rem',
            fontWeight: 700,
            fontStyle: 'italic',
            lineHeight: '112%',
            textTransform: 'uppercase',
            color: 'white',
            maxWidth: '600px',
            mb: '67px'
          }}
        >
          POP/STARS
        </Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          backgroundImage: `url(${SoundBarPng})`,
          backgroundColor: 'transparent',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          p: '80px 20px'
        }}>
        <Box sx={{
          maxWidth: '1020px',
          m: '0 auto',
          border: '2px solid #e5b48f'
        }}>
          <Box sx={{
            width: '100%',
            m: 0,
            p: 0,
            pt: '56.25',
            boxSizing: 'border-box'
          }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
              top: 0,
              m: 0,
              p: 0
            }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  position: 'relative',
                  pointerEvents: 'auto'
                }}
              >
                <Box sx={{
                  width: '99.9%',
                  height: '60vh',
                  minHeight: '175px',
                  position: 'relative'
                }}>
                  <ReactPlayer
                    width='100%'
                    height='100%'
                    light={imageUrl}
                    controls={true}
                    playing={true}
                    playIcon={<PlayArrowIcon sx={{
                      bgcolor: 'black',
                      color: '#e5b48f',
                      border: '2px solid #e5b48f',
                      fontSize: '2.6rem',
                      transition: 'background-color .3s, opacity .3s',
                      '&:hover': {
                        bgcolor: '#e5b48f',
                        color: 'black'
                      }
                    }}/>}
                    url='https://www.youtube.com/watch?v=UOxkGD8qRB4&ab_channel=LeagueofLegends'
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

      </Paper>
    </Paper>
  )
}

export default FeatureVideo