/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { HiXMark } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllMovies } from '../features/movies/movieSlice'
import SearchItem from './SearchItem'

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  z-index: 3;
  transition: all 0.3s ease;

  ${(props) =>
    props.show
      ? { transform: 'translateY(0%)' }
      : { transform: 'translateY(-100%)' }}
`

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Input = styled.input`
  width: 70%;
  padding: 0 0.4rem;
  border: none;
  border-radius: 5px 0 0 5px;
  height: 50%;

  &:focus {
    outline: none;
  }
`

const CloseButton = styled.button`
  height: 50%;
  width: 40px;
  background-color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 20px;

  &:hover {
    background-color: red;
    color: #fff;
  }
`
const StyledSuggest = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 7px;
  display: flex;
  flex-direction: column;
  background-color: #040714;
`

const Message = styled.p`
  padding: 0.7rem;
  color: #fff;
`

function Search({ setShowSearch, showSearch }) {
  const [searchValue, setSearchValue] = useState('')
  const movies = useSelector(getAllMovies)
  const [searchedMovie, setSearchMovie] = useState([])

  function handleClose(e) {
    e.stopPropagation()
    setShowSearch(false)
    setSearchMovie([])
    setSearchValue('')
  }

  useEffect(() => {
    if (searchValue.length === 0) return setSearchMovie([])
    setSearchMovie(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    )
  }, [movies, searchValue])

  return (
    <StyledSearch show={showSearch}>
      <SearchContainer>
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <CloseButton onClick={(e) => handleClose(e)}>
          <HiXMark />
        </CloseButton>
      </SearchContainer>
      <StyledSuggest>
        {searchedMovie.length === 0 && showSearch && searchValue ? (
          <Message>No movie found with this name</Message>
        ) : (
          searchedMovie.map((suggest) => (
            <SearchItem
              key={suggest.id}
              suggest={suggest}
              handleClose={(e) => handleClose(e)}
            />
          ))
        )}
      </StyledSuggest>
    </StyledSearch>
  )
}

export default Search
