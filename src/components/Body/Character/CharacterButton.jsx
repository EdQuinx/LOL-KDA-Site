import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { MOCK_CHARACTERS } from '~/constants'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'

function CharacterButton( props ) {
  const [characterIndex, setCharacterIndex] = useState(0)

  const handleChange = (event, newCharacterIndex) => {
    if (characterIndex === newCharacterIndex) return

    setCharacterIndex(newCharacterIndex)
  }

  useEffect(() => {
    props.callBack(characterIndex)
  }, [characterIndex, props])

  return (
    <Box>
      <Box sx={{
        position: 'relative'
      }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            whiteSpace: 'nowrap'
          }}
        >
          {
            MOCK_CHARACTERS.map((e, index) => (
              <Button
                key={index}
                className={characterIndex == index ? 'avatar-active' : ''}
                id={`character-${index}`}
                disableRipple
                onClick={() => handleChange(e, index)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'visible',
                  background: 'none',
                  border: 'none',
                  boxSizing: 'border-box',
                  flexShrink: 0,
                  opacity: '0.5',
                  p: '0',
                  transition: 'opacity 0.2s',
                  transform: 'skewX(-20deg)',
                  width: '86px',
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent',
                    opacity: '1'
                  },
                  '&.avatar-active': {
                    opacity: '1'
                  }
                }}
              >
                <Box
                  className={characterIndex == index ? 'avatar-active' : ''}
                  sx={{
                    width: '86px',
                    height: '102px',
                    p: '3px',
                    border: '2px solid rgba(0, 0, 0, 0)',
                    transition: 'border-color 0.2s',
                    transformOrigin: '0 100%',
                    '&.avatar-active': {
                      borderColor: '#e5b48f'
                    }
                  }}>
                  <Box
                    className={characterIndex == index ? 'avatar-active' : ''}
                    sx={{
                      borderColor: '#e5b48f',
                      border: '2px solid #000',
                      overflow: 'hidden',
                      height: '100%',
                      '&:hover': {
                        borderColor: 'white'
                      },
                      '&.avatar-active': {
                        borderColor: '#e5b48f'
                      }

                    }}>
                    <Box sx={{
                      backgroundImage: `url(${e.avatar})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: '50%',
                      width: 'calc(100% + 32px)',
                      height: '100%',
                      transformOrigin: '0 100%',
                      transform: 'skewX(20deg)'

                    }}></Box>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'Barlow Condensed, Arial, sans-serif',
                    fontSize: '1.125rem',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    lineHeight: '112%',
                    textTransform: 'uppercase',
                    transform: 'skewX(20deg)',
                    color: 'white',
                    mt: '20px',
                    ml: '20px'
                  }}
                >
                  {e.name}
                </Typography>
              </Button>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default CharacterButton