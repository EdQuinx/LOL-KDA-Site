/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { MOCK_FANART } from '~/constants'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSwipe, setCurrentGroup, setNumGroups, setSlideState } from '~/redux/reducers/slidesReducer'

function SlideArt() {
  const swipe = useSelector(state => state.slide.swipe)
  const dispatch = useDispatch()

  const [dimensions, setDimensions] = useState(6)


  const checkCanGoNext = () => {
    if (swipe != undefined) {
      if (swipe.isEnd) dispatch(setSlideState(2))
      else if (!swipe.isBeginning) dispatch(setSlideState(1))
    }
  }

  const checkCanGoPrev = () => {
    if (swipe != undefined) {
      if (swipe.isBeginning) dispatch(setSlideState(0))
      else if (!swipe.isEnd) dispatch(setSlideState(1))
    }
  }

  const calculateGroups = () => {
    if (swipe != undefined) {
      const totalSlides = swipe.slides.length
      const slidesPerGroup = swipe.params.slidesPerGroup
      const groups = Math.ceil(totalSlides / slidesPerGroup)
      dispatch(setNumGroups(groups))
    }
  }

  const setGroupNav = (currentSlide, slideGroup) => {
    if (swipe != undefined) {
      dispatch(setCurrentGroup(currentSlide / slideGroup))
    }
  }

  //   useEffect(() => {
  //     calculateGroups()
  //   }, [swipe])

  useEffect(() => {
    calculateGroups()
  }, [swipe, dimensions])

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={false}
      grabCursor={false}
      simulateTouch={false}
      allowTouchMove={false}
      keyboard={{ enabled: false }}
      speed={400}
      observer={true}
      observeParents={true}
      breakpoints={{
        0: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        635: {
          slidesPerView: 4,
          slidesPerGroup: 4
        },
        941: {
          slidesPerView: 6,
          slidesPerGroup: 6
        }
      }}
      onBreakpoint={(swiper, breakpointParams) => {
        if (swiper) {
          setDimensions(breakpointParams.slidesPerGroup)
        }
      }}
      onInit={(swiper) => {
        dispatch(setSwipe(swiper))
      }}
      onSlideChange={(swiper) => {
        checkCanGoPrev()
        checkCanGoNext()
        setGroupNav(swiper.activeIndex, swiper.params.slidesPerGroup)
      }}
      navigation={{
        prevEl: '.slide-prev',
        nextEl: '.slide-next'
      }}
      modules={{ Navigation, Pagination }}
      initialSlide={3}
      className="mySwiper"
    >
      <Box
        sx={{
          display: 'flex',
          flexShrink: 0,
          width: '150px',
          height: '150px',
          m: '7px'
        }}>
        {
          MOCK_FANART.map((e, index) => (
            <>
              <SwiperSlide key={index} style={{
                paddingLeft: '2px'
              }}>
                <Box
                  component='div'
                  sx={{
                    backgroundImage: `url(${e.imgUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '50%',
                    width: '150px',
                    height: '150px',
                    border: '2px solid #1e1b2c',
                    opacity: '0.6',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, opacity 0.2s',
                    '&:hover': {
                      opacity: 1,
                      borderColor: (theme) => theme.palette.primary.main
                    }
                  }}
                />
              </SwiperSlide>
            </>
          ))
        }
      </Box>
    </Swiper>
  )
}

export default SlideArt