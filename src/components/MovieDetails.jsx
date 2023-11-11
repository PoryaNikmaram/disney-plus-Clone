import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {
  bookmarkMovie,
  getBookmarById,
  getMovieById,
  unBookmarkMovie,
} from '../features/movies/movieSlice'
import styled from 'styled-components'
import { HiBookmark, HiFilm, HiOutlineBookmark, HiPlay } from 'react-icons/hi2'
import toast from 'react-hot-toast'

const MovieContainer = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    opacity: 0.3;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 50%;
  margin-left: 40px;
  z-index: 1;

  @media only screen and (max-width: 750px) {
    & {
      width: 70%;
    }
  }
`
const Img = styled.img`
  width: 600px;

  @media only screen and (max-width: 750px) {
    & {
      width: 400px;
    }
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 10px;
  gap: 10px;
`
const PlayButton = styled.button`
  padding: 0.7rem 1.3rem;
  border: ${(props) =>
    props.type === 'secondary' ? '1px solid #fff' : 'none'};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  color: #040714;

  background-color: ${(props) =>
    props.type === 'secondary' ? 'transparent' : '#fff'};
  color: ${(props) => (props.type === 'secondary' ? '#fff' : '#040714s')};

  &:hover {
    background-color: ${(props) =>
      props.type === 'secondary' ? '#fff' : '#040714'};

    color: ${(props) => (props.type === 'secondary' ? '#040714' : '#fff')};
  }
`

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`

const Description = styled.p``
const SubTitle = styled.p``

function MovieDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const movie = useSelector((state) => getMovieById(state, id))
  const isBookmarked = useSelector((state) => getBookmarById(state, id))

  function handleBookmark() {
    if (isBookmarked) {
      dispatch(unBookmarkMovie(id))
      toast.success('movie removed from watchlist')
    } else {
      dispatch(bookmarkMovie(movie))
      toast.success('movie added to watchlist')
    }
  }

  return (
    <MovieContainer url={movie.backgroundImg}>
      <Details>
        <Img src={movie.titleImg}></Img>
        <ButtonContainer>
          <PlayButton>
            <HiPlay /> Play
          </PlayButton>
          <PlayButton type="secondary">
            <HiFilm /> Trailer
          </PlayButton>
          <AddButton onClick={handleBookmark}>
            {isBookmarked ? <HiBookmark /> : <HiOutlineBookmark />}
          </AddButton>
        </ButtonContainer>
        <SubTitle>{movie.subTitle}</SubTitle>
        <Description>{movie.description}</Description>
      </Details>
    </MovieContainer>
  )
}

export default MovieDetails
