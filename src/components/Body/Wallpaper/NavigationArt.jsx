import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'

function NavigationArt() {
  const swipe = useSelector(state => state.slide.swipe)
  const slideState = useSelector(state => state.slide.slideState)

  const goNext = () => {
    if (swipe) {
      swipe.slideNext()
    }
  }

  const goPrev = () => {
    if (swipe) {
      swipe.slidePrev()
    }
  }
  return (
    <Box sx={{
      display: 'flex',
      position: 'absolute',
      top: '-91px',
      right: '7px'
    }}>
      <Button
        className={slideState !== 0 ? 'slide-prev' : ''}
        onClick={goPrev}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          flexGrow: 0,
          minWidth: 0,
          width: '40px',
          height: '40px',
          bgcolor: 'black',
          border: (theme) => `2px solid ${theme.palette.secondary.main}`,
          position: 'relative',
          opacity: 0.2,
          transition: 'border-top-color .2s,border-left-color .2s,border-right-color .2s,background-color .2s,opacity .2s',
          '&:after': {
            content: '""',
            boxSizing: 'border-box',
            width: '7px',
            height: '7px',
            borderLeft: (theme) => `2px solid ${theme.palette.secondary.main}`,
            borderTop: (theme) => `2px solid ${theme.palette.secondary.main}`,
            transformOrigin: '0 0',
            transform: 'translateY(50%) rotate(-45deg)'
          },
          '&.slide-prev': {
            opacity: 1
          }

        }}></Button>
      <Button
        className={slideState !== 2 ? 'slide-next' : ''}
        onClick={goNext}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          flexGrow: 0,
          minWidth: 0,
          width: '40px',
          height: '40px',
          bgcolor: 'black',
          border: (theme) => `2px solid ${theme.palette.secondary.main}`,
          position: 'relative',
          opacity: 0.2,
          ml: '20px',
          transition: 'border-top-color .2s,border-left-color .2s,border-right-color .2s,background-color .2s,opacity .2s',
          '&:after': {
            content: '""',
            boxSizing: 'border-box',
            width: '7px',
            height: '7px',
            borderRight: (theme) => `2px solid ${theme.palette.secondary.main}`,
            borderTop: (theme) => `2px solid ${theme.palette.secondary.main}`,
            transformOrigin: '100% 0',
            transform: 'translateY(50%) rotate(45deg)'
          },
          '&.slide-next': {
            opacity: 1
          }
        }}></Button>
    </Box>
  )
}

export default NavigationArt