// /* eslint-disable no-inner-declarations */
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { app } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies, setMovies } from './movieSlice'
import { getUsername } from '../user/userSlice'

export function useMovies() {
  const [isLoadnig, setIsLoadnig] = useState(true)
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const userName = useSelector(getUsername)
  const movies = useSelector(getAllMovies)

  useEffect(() => {
    if (movies) return setIsLoadnig(false)
    async function getMovies() {
      const db = getFirestore(app)
      try {
        console.log('effect calls')
        const querySnapshot = await getDocs(collection(db, 'movies'))

        let movies = []

        querySnapshot.forEach((doc) => {
          const data = doc.data()
          movies.push({ ...data, id: doc.id })
        })

        dispatch(setMovies(movies))
      } catch (error) {
        console.error(error.message)
        setError(error.message)
      } finally {
        setIsLoadnig(false)
      }
    }
    getMovies()
  }, [dispatch, movies, userName])

  return {
    isLoadnig,
    error,
  }
}

export default useMovies
