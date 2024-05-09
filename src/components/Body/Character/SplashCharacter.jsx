import Box from '@mui/material/Box'
import { MOCK_CHARACTERS } from '~/constants'

function SplashCharacter({ index, splashOpacity }) {
  return (
    <Box
      key={index}
      component='div'
      sx={{
        transition: 'opacity 200ms linear 0ms',
        backgroundImage: `url(${MOCK_CHARACTERS[index].croppedSplash})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: {
          md: 'auto auto', //900
          sm: '220% auto', //600
          xs: '220% auto' //0
        },
        backgroundPosition: {
          xl: 'calc(50% - 19vw) 0%',
          lg: 'calc(50% - 16vw) 0%',
          md: 'calc(50% - 195px) 0%',
          xs: '50% 180px'
        },
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: splashOpacity
      }}
    />
  )
}

export default SplashCharacter