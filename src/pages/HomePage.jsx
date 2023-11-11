import styled from 'styled-components'
import Carousel from '../components/Carousel'
import Companies from '../components/Companies'

import useMovies from '../features/movies/useMovies'
import Category from '../components/Category'
import Loader from '../ui/Loader'

const StyledHome = styled.div`
  background-image: url('/images/home-background.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 10;
`

function HomePage() {
  const { isLoadnig } = useMovies()

  return (
    <StyledHome>
      <Carousel />
      <Companies />
      {isLoadnig ? <Loader /> : <Category />}
    </StyledHome>
  )
}

export default HomePage
