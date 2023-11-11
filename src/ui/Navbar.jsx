import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { getUsername, login, logout } from '../features/user/userSlice'
import {
  HiMiniFilm,
  HiMiniHome,
  HiMiniMagnifyingGlass,
  HiMiniPlus,
  HiMiniStar,
  HiMiniTv,
} from 'react-icons/hi2'
import WatchList from '../components/WatchList'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const StyledNavbar = styled.nav`
  position: ${(props) => (props.user ? 'fixed' : 'static')};
  top: 0;
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 10;

  background-color: ${(props) => (props.user ? '#040714' : 'transparent')};
  @media only screen and (max-width: 780px) {
    & {
      gap: 15px;
      flex-direction: column;
    }
  }
`

const Navigation = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: 25px;

  @media only screen and (max-width: 780px) {
    & {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      margin: auto;
    }
  }
`

const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  gap: 6px;
  background-color: transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  margin: 0 2px;

  &:hover {
    background-color: #fff;
    color: #040714;
    border-radius: 5px;
  }
`

const Logo = styled.img`
  width: 85px;

  @media only screen and (min-width: 768px) {
    & {
      width: 105px;
    }
  }

  @media only screen and (max-width: 780px) {
    & {
      display: none;
    }
  }
`

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1.3rem;
  background-color: transparent;
  color: #fff;
  text-transform: uppercase;
  transition: all 0.35s ease;
  border: 1px solid #fff;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #040714;
  }

  @media only screen and (max-width: 780px) {
    & {
      display: flex;
      gap: 10px;
      padding: 5px;
      font-size: 10px;
    }
  }
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`

const UserName = styled.p`
  font-size: 10px;
`

function Navbar() {
  const [hover, setHover] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userName = useSelector(getUsername)

  function handleLogin() {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(login(result.user))
        navigate('/home')
        toast.success('you Successfully loged in.')
      })
      .catch((error) => {
        console.error(error.message)
        toast.error("can't login")
      })
  }

  function handleLogout() {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        dispatch(logout())
        navigate('/')
        toast.success('you Successfully loged out.')
      })
      .catch((error) => {
        console.error(error.message)
        toast.error("can't logout")
      })
  }
  return (
    <StyledNavbar user={userName}>
      <Logo src="public/images/logo.svg" />
      {userName && (
        <Navigation>
          <StyledLink to="/home">
            <NavItem>
              <HiMiniHome />
              Home
            </NavItem>
          </StyledLink>
          <NavItem onClick={() => setShowSearch(true)}>
            <HiMiniMagnifyingGlass />
            search
            <Search setShowSearch={setShowSearch} showSearch={showSearch} />
          </NavItem>
          <NavItem
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <HiMiniPlus />
            whatchlist
            {hover && <WatchList setHover={setHover} />}
          </NavItem>
          <NavItem>
            <HiMiniStar />
            originals
          </NavItem>
          <NavItem>
            <HiMiniFilm />
            movies
          </NavItem>
          <NavItem>
            <HiMiniTv />
            series
          </NavItem>
        </Navigation>
      )}
      {userName ? (
        <>
          <Button onClick={handleLogout}>
            logout <UserName>{userName}</UserName>
          </Button>
        </>
      ) : (
        <Button onClick={handleLogin}>login</Button>
      )}
    </StyledNavbar>
  )
}

export default Navbar
