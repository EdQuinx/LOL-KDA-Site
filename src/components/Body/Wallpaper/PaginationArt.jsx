import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentGroup } from '~/redux/reducers/slidesReducer'

function PaginationArt({ props }) {
  const swipe = useSelector(state => state.slide.swipe)
  const currentGroup = useSelector(state => state.slide.currentGroup)

  const dispatch = useDispatch()

  const goToGroup = (index) => {
    if (swipe) {
      const targetSlide = index * swipe.params.slidesPerGroup
      swipe.slideTo(targetSlide)
      dispatch(setCurrentGroup(index))
    }
  }

  return (
    <Button
      onClick={() => goToGroup(props.pageIndex)}
      className={currentGroup === props.pageIndex ? 'slide-next' : ''}
      disableRipple
      sx={{
        minWidth: '0px',
        minHeight: '0px',
        width: '25px',
        height: '4px',
        border: 'none',
        opacity: 0.2,
        p: 0,
        ml: '9px',
        cursor: 'default',
        bgcolor: (theme) => theme.palette.secondary.main,
        transition: 'background-color .2s,opacity .2s',
        '&:hover': {
          bgcolor: (theme) => theme.palette.primary.main,
          opacity: 1
        },
        '&.slide-next': {
          bgcolor: (theme) => theme.palette.secondary.main,
          opacity: 1
        }
      }}>
    </Button>
  )
}

export default PaginationArt