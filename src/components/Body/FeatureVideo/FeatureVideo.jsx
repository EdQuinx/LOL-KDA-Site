import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

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
            maxWidth: '600px'
          }}
        >
              POP/STARS
        </Typography>
      </Box>
    </Paper>
  )
}

export default FeatureVideo