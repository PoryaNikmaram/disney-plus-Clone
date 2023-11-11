/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { athenticated } from '../features/user/userSlice'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

function ProtectedRoute({ children }) {
  const isAthenticated = useSelector(athenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAthenticated) {
      navigate('/')
    }
  }, [navigate, isAthenticated])

  return isAthenticated ? children : null
}
export default ProtectedRoute
