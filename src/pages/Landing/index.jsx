import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'

function Landing() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: '100vh',
        m: 0,
        p: 0,
        position: 'static'
      }}>
      <AppBar />
    </Container>
  )
}

export default Landing