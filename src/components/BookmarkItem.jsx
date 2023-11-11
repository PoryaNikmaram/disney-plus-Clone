import { HiXMark } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { unBookmarkMovie } from '../features/movies/movieSlice'

/* eslint-disable react/prop-types */
const StyledBookmark = styled.div`
  padding: 7px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #12172c;
  }
`

const CardImg = styled.img`
  width: 50px;
  object-fit: cover;
`

const Title = styled.p`
  z-index: 1;
  color: #fff;
  justify-self: flex-start;
  text-transform: uppercase;
  font-size: 12px;
  margin: 0 12px;
`

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  background-color: red;
  border-radius: 50%;
  border: none;
  line-height: 0.5;
  padding: 1px;
  margin-left: 10px;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    opacity: 0.8;
  }
`

function BookmarkItem({ movie }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleMovieClick() {
    navigate(`/movie/` + movie.id)
  }

  function handleUnBookmark(e) {
    e.stopPropagation()
    dispatch(unBookmarkMovie(movie.id))
    navigate('/home')
  }

  return (
    <StyledBookmark onClick={handleMovieClick}>
      <CardImg src={movie.cardImg} />
      <Title>{movie.title}</Title>
      <Button onClick={(e) => handleUnBookmark(e)}>
        <HiXMark />
      </Button>
    </StyledBookmark>
  )
}

export default BookmarkItem
