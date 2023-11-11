/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const MovieContainer = styled.div`
  width: 100%;
  padding: 1rem;
`

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: 1rem 0;
  width: 100%;
  @media only screen and (max-width: 700px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
const MovieImg = styled.div`
  flex: 25%;
  border: 1px solid #fff;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  object-fit: cover;

  &:hover {
    border: 4px solid #fff;
    transform: scale(108%);
    margin: 0 1%;
  }
`

const Img = styled.img`
  height: 100%;
  width: 100%;
`

const Title = styled.h3`
  text-transform: capitalize;
`

function Movies({ title, movies }) {
  const navigate = useNavigate()

  function handleMovieClick(movie) {
    navigate(`/movie/` + movie.id)
  }

  return (
    <MovieContainer>
      <Title>{title}</Title>
      <ImgContainer>
        {movies.map((movie) => (
          <MovieImg key={movie.id} onClick={() => handleMovieClick(movie)}>
            <Img src={movie.cardImg} />
          </MovieImg>
        ))}
      </ImgContainer>
    </MovieContainer>
  )
}

export default Movies
