import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SplashScreenImg from '~/assets/kda-splash-background.jpg'
import { MOCK_CHARACTERS } from '~/constants'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import SplashCharacter from './SplashCharacter'
import { useTheme } from '@mui/material'

function Character() {
  const [oldValue, setOldValue] = useState(1)
  const [value, setValue] = useState(1)
  const [splashOpacity, setSplashOpacity] = useState(0)
  const [characterData, setCharacterData] = useState(MOCK_CHARACTERS[value])

  const [descriptionLeft, setDescriptionLeft] = useState(true)

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

  useEffect(() => {
    setCharacterData(MOCK_CHARACTERS[value])
    //console.log(value)
  }, [value])

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
                        className={value == index ? 'avatar-active' : ''}
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
                          className={value == index ? 'avatar-active' : ''}
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
                            className={value == index ? 'avatar-active' : ''}
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
          </Box>
          {/* Character Profile */}
          <Box component='header'>
            <Typography sx={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '0.875rem',
              fontStyle: 'italic',
              fontWeight: 600,
              letterSpacing: '0.05em',
              lineHeight: '112%',
              textTransform: 'uppercase',
              color: '#e5b48f',
              mb: '-8px'
            }}
            >
              Band Member
            </Typography>
            <Typography sx={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '5.625rem',
              fontStyle: 'italic',
              fontWeight: 700,
              letterSpacing: '0.05em',
              lineHeight: '112%',
              textTransform: 'uppercase',
              color: 'white',
              mb: '36px'
            }}
            >
              {characterData.name}
            </Typography>
          </Box>
          {/* Character Infomation */}
          <Box
            component='dl'
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              mb: '43px'
            }}
          >
            <Box
              component='dt'
              sx={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.875rem',
                fontStyle: 'italic',
                fontWeight: 600,
                letterSpacing: '0.05em',
                lineHeight: '112%',
                textTransform: 'uppercase',
                color: '#e5b48f',
                mb: '14px',
                width: 'calc(50% - 5px)',
                flexGrow: 0,
                flexShrink: 0
              }}
              style={{ order: 0 }}
            >
              Role
            </Box>
            <Box
              component='dd'
              sx={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1.125rem',
                fontStyle: 'italic',
                fontWeight: 600,
                letterSpacing: '0.05em',
                lineHeight: '112%',
                textTransform: 'uppercase',
                color: 'white',
                ml: '0px',
                mb: '34px',
                width: 'calc(50% - 5px)',
                flexGrow: 0,
                flexShrink: 0
              }}
              style={{ order: 2 }}
            >
              {characterData.role}
            </Box>
            <Box
              component='dt'
              sx={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.875rem',
                fontStyle: 'italic',
                fontWeight: 600,
                letterSpacing: '0.05em',
                lineHeight: '112%',
                textTransform: 'uppercase',
                color: '#e5b48f',
                ml: '0px',
                mb: '14px',
                width: 'calc(50% - 5px)',
                flexGrow: 0,
                flexShrink: 0
              }}
              style={{ order: 1 }}
            >
              Zodiac Sign
            </Box>
            <Box
              component='dd'
              sx={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1.125rem',
                fontStyle: 'italic',
                fontWeight: 600,
                letterSpacing: '0.05em',
                lineHeight: '112%',
                textTransform: 'uppercase',
                color: 'white',
                ml: '0px',
                mb: '34px',
                width: 'calc(50% - 5px)',
                flexGrow: 0,
                flexShrink: 0
              }}
              style={{ order: 3 }}
            >
              {characterData.zodiacSign}
            </Box>
            <Box
              component='dt'
              sx={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.875rem',
                fontStyle: 'italic',
                fontWeight: 600,
                letterSpacing: '0.05em',
                lineHeight: '112%',
                textTransform: 'uppercase',
                color: '#e5b48f',
                ml: '0px',
                mb: '14px',
                width: 'calc(50% - 5px)',
                flexGrow: 0,
                flexShrink: 0
              }}
              style={{ order: 4 }}
            >
              Nicknames
            </Box>
            <Box
              component='dd'
              sx={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1.125rem',
                fontStyle: 'italic',
                fontWeight: 600,
                letterSpacing: '0.05em',
                lineHeight: '112%',
                textTransform: 'uppercase',
                color: 'white',
                ml: '0px',
                mb: '34px',
                width: 'calc(50% - 5px)',
                flexGrow: 0,
                flexShrink: 0
              }}
              style={{ order: 6 }}
            >
              {characterData.nicknames.join(', ')}
            </Box>
            <Box
              component='dt'
              sx={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.875rem',
                fontStyle: 'italic',
                fontWeight: 600,
                letterSpacing: '0.05em',
                lineHeight: '112%',
                textTransform: 'uppercase',
                color: '#e5b48f',
                ml: '0px',
                mb: '14px',
                width: 'calc(50% - 5px)',
                flexGrow: 0,
                flexShrink: 0
              }}
              style={{ order: 5 }}
            >
              Height
            </Box>
            <Box
              component='dd'
              sx={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1.125rem',
                fontStyle: 'italic',
                fontWeight: 600,
                letterSpacing: '0.05em',
                lineHeight: '112%',
                textTransform: 'uppercase',
                color: 'white',
                ml: '0px',
                mb: '34px',
                width: 'calc(50% - 5px)',
                flexGrow: 0,
                flexShrink: 0
              }}
              style={{ order: 7 }}
            >
              {characterData.height}
            </Box>
          </Box>
          {/* Character Facts/Quotes */}
          <Box>
            <Box
              component='ul'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pl: '0px',
                listStyle: 'none'
              }}
            >
              <Box
                component='li'
                sx={{
                  height: '100%',
                  flexGrow: 1,
                  flexShrink: 1
                }}
              >
                <Button
                  disableRipple
                  className={descriptionLeft ? 'active' : ''}
                  onClick={() => setDescriptionLeft(true)}
                  sx={{
                    width: '100%',
                    height: '100%',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    lineHeight: '112%',
                    textTransform: 'uppercase',
                    transition: 'background-color 0.2s',
                    bgcolor: 'transparent',
                    border: '2px solid #e5b48f',
                    color: 'white',
                    ml: '0px',
                    p: '11px 20px',
                    borderRadius: '0px',
                    '&.active': {
                      bgcolor: '#e5b48f',
                      color: 'black'
                    }
                  }}
                >
                  {characterData.bio}
                </Button>
              </Box>
              <Box
                component='li'
                sx={{
                  height: '100%',
                  flexGrow: 1,
                  flexShrink: 1
                }}
              >
                <Button
                  disableRipple
                  className={!descriptionLeft ? 'active' : ''}
                  onClick={() => setDescriptionLeft(false)}
                  sx={{
                    width: '100%',
                    height: '100%',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    lineHeight: '112%',
                    textTransform: 'uppercase',
                    transition: 'background-color 0.2s',
                    bgcolor: 'transparent',
                    border: '2px solid #e5b48f',
                    color: 'white',
                    ml: '0px',
                    p: '11px 20px',
                    borderRadius: '0px',
                    '&.active': {
                      bgcolor: '#e5b48f',
                      color: 'black'
                    }
                  }}
                >
                  8 Facts
                </Button>
              </Box>
            </Box>
            <Box sx={{
              display: 'flex'
            }}>
              {/* Description */}
              <Box sx={{
                fontFamily: 'Merriweather Sans, sans-serif',
                fontSize: '0.875rem',
                fontStyle: 'italic',
                fontWeight: 600,
                letterSpacing: '0.5px',
                lineHeight: '1.42017',
                color: 'white',
                width: '100%',
                flexShrink: 0,
                p: '58px 0 40px',
                visibility: descriptionLeft ? 'visible' : 'hidden'
              }}
              >
                <Typography component='div' dangerouslySetInnerHTML={{ __html: characterData.description }} sx={{
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  letterSpacing: '0.5px',
                  lineHeight: '1.8',
                  color: 'white',
                  whiteSpace: 'pre-wrap'
                }}/>
              </Box>
              {/* Facts */}
              <Box sx={{
                fontFamily: 'Merriweather Sans, sans-serif',
                fontSize: '0.875rem',
                fontStyle: 'italic',
                fontWeight: 600,
                letterSpacing: '0.5px',
                lineHeight: '1.42017',
                color: 'white',
                width: '100%',
                flexShrink: 0,
                p: '58px 0 40px',
                ml: '-100%',
                visibility: !descriptionLeft ? 'visible' : 'hidden'
              }}
              >
                <Typography component='div' dangerouslySetInnerHTML={{ __html: characterData.facts.join('<br/>') }} sx={{
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  letterSpacing: '0.5px',
                  lineHeight: '1.8',
                  color: 'white',
                  whiteSpace: 'pre-wrap'
                }}/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Character