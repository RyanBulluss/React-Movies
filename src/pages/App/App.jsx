import { useState } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import { movies } from "../../data.js";


import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(0)

  return (
    <main className='text-center mx-auto'>
      { user ? 
        <>
        <div className='my-4 mx-4 border-b-2'>
          <NavBar user={user} />
        </div>
        <Routes>
          <Route path='/actors' element={< ActorListPage movies={movies} />} />
          <Route path='' element={< MoviesListPage movies={movies} />} />
          <Route path='/movies/:movieName' element={< MovieDetailPage movies={movies} />} />
        </Routes> 
        </>
        : 
        <LoginPage setUser={setUser} />
        }
    </main>
  );
}


