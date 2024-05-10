import Box from '@mui/material/Box'
import SplashScreenImg from '~/assets/kda-splash-background.jpg'
import { useState } from 'react'
import SplashCharacter from './SplashCharacter'
import { useTheme } from '@mui/material'
import CharacterButton from './CharacterButton'
import CharacterProfile from './CharacterProfile'

function Character() {
  const [oldValue, setOldValue] = useState(1)
  const [value, setValue] = useState(1)
  const [splashOpacity, setSplashOpacity] = useState(0)

  const { breakpoints } = useTheme()

  const handleChange = (event, newValue) => {
    if (value === newValue) return

    setTimeout(() => {
      setOldValue(value)
      setValue(newValue)
      setSplashOpacity({
        enable: 0,
        disable: 1
      })
    }, 0)


    setTimeout(() => {
      setSplashOpacity({
        enable: 1,
        disable: 0
      })
    }, 100)
  }

  // Callback from CharacterButton
  const callBackCharButton = (data) => {
    handleChange([], data)
  }

  return (
    <Box
      component='section'
      sx={{
        position: 'relative'
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${SplashScreenImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute'
        }}>
        {/* Splash Cropped Character */}
        <SplashCharacter index={value} splashOpacity={splashOpacity.enable} />
        <SplashCharacter index={oldValue} splashOpacity={splashOpacity.disable} />
      </Box>
      {/* Tabs character layout */}
      <Box sx={{
        maxWidth: '1230px',
        m: '0 auto'
      }}>
        <Box sx={{
          [breakpoints.up(800)]: {
            maxWidth: '390px',
            m: '0 20px 0 auto',
            pt: '112px'
          },
          [breakpoints.down(801)]: {
            m: '0 20px',
            pt: '40px'
          },
          position: 'relative'
        }}>
          {/* Character Buttons */}
          <Box sx={{
            [breakpoints.down(801)]: {
              mb: 'calc(100vw + 100px)'
            },
            boxSizing: 'content-box',
            m: '0 auto 75px',
            position: 'relative'
          }}>
            <CharacterButton callBack={callBackCharButton} />
          </Box>
          {/* Character Profile */}
          <CharacterProfile currentCharIndex={value} />
        </Box>
      </Box>
    </Box>
  )
}

export default Character