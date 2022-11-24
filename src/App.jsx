import { Route, Routes } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import MoviesList from './components/MoviesList'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MoviesList />} />
        <Route path='/movie/:movieId' element={<MovieDetails />} />
      </Routes>
    </>
  )
}
