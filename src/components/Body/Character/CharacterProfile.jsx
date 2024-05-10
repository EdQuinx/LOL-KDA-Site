import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { MOCK_CHARACTERS } from '~/constants'
import Button from '@mui/material/Button'
import { useState } from 'react'


function CharacterProfile( props ) {
  const [descriptionLeft, setDescriptionLeft] = useState(true)

  const characterData = MOCK_CHARACTERS[props.currentCharIndex]

  return (
    <>
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
          color: (theme) => theme.palette.secondary.main,
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
          color: (theme) => theme.palette.primary.main,
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
            color: (theme) => theme.palette.secondary.main,
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
            color: (theme) => theme.palette.primary.main,
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
            color: (theme) => theme.palette.secondary.main,
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
            color: (theme) => theme.palette.primary.main,
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
            color: (theme) => theme.palette.secondary.main,
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
            color: (theme) => theme.palette.primary.main,
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
            color: (theme) => theme.palette.secondary.main,
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
            color: (theme) => theme.palette.primary.main,
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
                color: (theme) => theme.palette.primary.main,
                ml: '0px',
                p: '11px 20px',
                borderRadius: '0px',
                '&.active': {
                  bgcolor: (theme) => theme.palette.secondary.main,
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
                color: (theme) => theme.palette.primary.main,
                ml: '0px',
                p: '11px 20px',
                borderRadius: '0px',
                '&.active': {
                  bgcolor: (theme) => theme.palette.secondary.main,
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
            color: (theme) => theme.palette.primary.main,
            width: '100%',
            flexShrink: 0,
            p: '58px 0 40px',
            visibility: descriptionLeft ? 'visible' : 'hidden'
          }}
          >
            <Typography component='div' dangerouslySetInnerHTML={{ __html: characterData.description }} sx={{
              fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
              fontSize: '0.85rem',
              fontStyle: 'italic',
              fontWeight: 400,
              letterSpacing: '0.5px',
              lineHeight: '1.8',
              color: (theme) => theme.palette.primary.main,
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
            color: (theme) => theme.palette.primary.main,
            width: '100%',
            flexShrink: 0,
            p: '58px 0 40px',
            ml: '-100%',
            visibility: !descriptionLeft ? 'visible' : 'hidden'
          }}
          >
            <Typography component='div' dangerouslySetInnerHTML={{ __html: characterData.facts.join('<br/>') }} sx={{
              fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
              fontSize: '0.85rem',
              fontStyle: 'italic',
              fontWeight: 400,
              letterSpacing: '0.5px',
              lineHeight: '1.8',
              color: (theme) => theme.palette.primary.main,
              whiteSpace: 'pre-wrap'
            }}/>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default CharacterProfile