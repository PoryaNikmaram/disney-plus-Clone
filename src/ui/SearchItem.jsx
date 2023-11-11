/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const SuggestContainer = styled.div`
  display: flex;
  padding: 2px;
  align-items: center;
  border-bottom: 1px solid #1434a4;
  padding: 10px;

  &:last-child {
    border-bottom: none;
  }

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

function SearchItem({ suggest, handleClose }) {
  const navigate = useNavigate()
  function handleMovieClick(e) {
    navigate(`/movie/` + suggest.id)
    handleClose(e)
  }

  return (
    <SuggestContainer onClick={(e) => handleMovieClick(e)}>
      <CardImg src={suggest.cardImg} />
      <Title>{suggest.title}</Title>
      <Title>{suggest.subTitle}</Title>
    </SuggestContainer>
  )
}

export default SearchItem
