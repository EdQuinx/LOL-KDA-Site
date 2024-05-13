import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import SlideArt from './SlideArt'
import PaginationArt from './PaginationArt'
import NavigationArt from './NavigationArt'
import { useSelector } from 'react-redux'

function Wallpaper() {
  const { breakpoints } = useTheme()

  const numGroups = useSelector(state => state.slide.numGroups)

  return (
    <Box
      component='section'
      sx={{
        maxWidth: '1020px',
        m: '0 auto',
        p: '81px 20px 97px'
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
        Fan Art
      </Typography>
      <Typography sx={{
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
        mb: '47px'
      }}>
        Art from K/DA&apos;s Top Fans
      </Typography>
      <Box sx={{
        m: '0 -7px',
        position: 'relative'
      }}>
        <Box>
          <Box sx={{
            overflow: 'hidden',
            position: 'relative'
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
              whiteSpace: 'nowrap'
            }}>
              <SlideArt key={'slideArt'} />
            </Box>
          </Box>
        </Box>
        <NavigationArt />
        <Box sx={{
          position: 'absolute',
          bottom: '-38px',
          right: '7px'
        }}>
          {Array.from({ length: numGroups }, (_, index) => (
            <PaginationArt key={index} props={{ pageIndex: index }} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Wallpaper