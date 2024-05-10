import { blue, grey } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '80px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

//Typography
const TYPO_COLOR = '#fff'

// Create a theme instance.
const theme = extendTheme({
  kda: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: TYPO_COLOR
        },
        secondary: {
          main: '#e5b48f'
        }
      }
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Barlow Condensed, sans-serif',
          color: TYPO_COLOR,
          fontSize: '0.875rem'
        }
      }
    }
  }
})


export default theme