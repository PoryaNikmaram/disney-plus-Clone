import { useSelector } from 'react-redux'
import {
  getNewMovies,
  getOriginalMovies,
  getRecommandMovies,
  getTrendingMovies,
} from '../features/movies/movieSlice'
import Movies from '../features/movies/Movies'
import styled from 'styled-components'

const MoviesContainer = styled.div`
  padding: 0.2rem;
`

function Category() {
  const newMovies = useSelector(getNewMovies)
  const recommandMovies = useSelector(getRecommandMovies)
  const originalMovies = useSelector(getOriginalMovies)
  const trendingMovies = useSelector(getTrendingMovies)

  return (
    <MoviesContainer>
      <Movies title="recommended for you" movies={recommandMovies} />
      <Movies title="New to disney+" movies={newMovies} />
      <Movies title="originals" movies={originalMovies} />
      <Movies title="trendings" movies={trendingMovies} />
    </MoviesContainer>
  )
}

export default Category
