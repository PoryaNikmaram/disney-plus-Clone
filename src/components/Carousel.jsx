import { useEffect, useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import styled from 'styled-components'
import { register } from 'swiper/element/bundle'
register()

const StyledCarousel = styled.div`
  position: relative;
`
const Img = styled.img`
  transition: all 0.2s ease;
  width: 100%;
`

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem 0.7rem;
  z-index: 2;
  background-color: transparent;
  font-size: 35px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 100%;

  &:hover {
    font-size: 40px;
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media only screen and (min-width: 860px) {
    & {
      font-size: 50px;
    }
    &:hover {
      font-size: 57px;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  ${(props) => (props.type === 'right' ? { right: 0 } : '')}
`

function Carousel() {
  const nextBtnEl = useRef(null)
  const prevBtnEl = useRef(null)
  const swiperEl = useRef()

  useEffect(() => {
    nextBtnEl.current.addEventListener('click', () => {
      swiperEl.current.swiper.slideNext()
    })
    prevBtnEl.current.addEventListener('click', () => {
      swiperEl.current.swiper.slidePrev()
    })
  }, [])

  return (
    <StyledCarousel>
      <swiper-container
        ref={swiperEl}
        slides-per-view="1.2"
        centered-slides="true"
        space-between="10"
        loop="true"
        autoplay="true"
        autoplay-delay="3500"
      >
        <swiper-slide>
          <Img src="public/images/slider-badag.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <Img src="public/images/slider-badging.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <Img src="public/images/slider-scale.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <Img src="public/images/slider-scales.jpg" alt="" />
        </swiper-slide>
      </swiper-container>
      <CarouselButton ref={prevBtnEl}>
        <HiChevronLeft />
      </CarouselButton>
      <CarouselButton ref={nextBtnEl} type="right">
        <HiChevronRight />
      </CarouselButton>
    </StyledCarousel>
  )
}

export default Carousel
