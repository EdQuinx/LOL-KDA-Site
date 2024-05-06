import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const MOCK_URL = 'https://universe.leagueoflegends.com/vn_vn/'

function CustomButton({ content, children }) {
  return (
    <Button
      size='small'
      href={MOCK_URL}
      sx={{
        color: '#f9f9f9',
        height: '30px',
        px: '20px',
        mx: '2px',
        fontSize: '0.813rem',
        fontWeight: '600',
        letterSpacing: '0.08rem',
        transition: 'none',
        '&:hover': {
          bgcolor: 'rgba(128, 128, 128, 0.3)',
          borderRadius: '6.4px',
          '& .MuiBox-root': { opacity: 1 }
        }
      }}
      endIcon={children}
    >
      {content}
      <Box sx={{
        opacity: 0,
        bgcolor: 'rgb(11, 196, 226)',
        position: 'absolute',
        bottom: '-18px',
        height: '4px',
        width: '100%',
        borderRadius: '2px'
      }}>
      </Box>
    </Button>
  )
}

export default CustomButton