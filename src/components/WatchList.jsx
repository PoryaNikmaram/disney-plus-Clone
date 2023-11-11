/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getBookmarks } from '../features/movies/movieSlice'
import BookmarkItem from './BookmarkItem'

const WatchListContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #040714;
  padding: 5px;
  border-radius: 5px;
  min-width: 230px;
`

const Message = styled.p`
  font-size: 12px;
  color: #fff;
  padding: 7px;
`

function WatchList({ setHover }) {
  const bookmarks = useSelector(getBookmarks)

  return (
    <WatchListContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {bookmarks.length > 0 ? (
        bookmarks.map((movie) => <BookmarkItem key={movie.id} movie={movie} />)
      ) : (
        <Message>No Bookmarks</Message>
      )}
    </WatchListContainer>
  )
}

export default WatchList
