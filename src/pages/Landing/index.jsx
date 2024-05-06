import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'
import Body from '~/components/Body/Body'

function Landing() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        bgcolor: 'black',
        height: '100%',
        m: 0,
        p: 0
      }}>
      <AppBar />
      <Body />
    </Container>
  )
}

export default Landing