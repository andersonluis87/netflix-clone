import React, { useEffect, useState } from 'react';
import './App.css'
import MovieDB from './MovieDB';
import Header from './components/Header';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [darkHeader, setDarkHeader] = useState(false);
  
  useEffect(() => {
    const loadAll = async () => {
      let list = await MovieDB.getHomeList();
      
      setMovieList(list);
      setRandomFeaturedMovie(list);
    }

    loadAll();
  }, []);

  const setFeaturedMovie = async (featuredMovie) => {
    console.log('featuredMovie', featuredMovie)
    const mediaType = featuredMovie?.media_type === 'movie' ? 'movie' : 'tv'
    let featuredMovieInfo = await MovieDB.getMovieInfo(featuredMovie.id, mediaType)
    console.log('featuredMovieInfo', featuredMovieInfo)
    
    setFeaturedData(featuredMovieInfo);
  }

  const setRandomFeaturedMovie = (list) => {
    let originals = list.filter(item => item.slug === 'originals');
    let randomItem = Math.floor(Math.random() * (originals[0].items.results.length -1));
    let featuredMovie = originals[0].items.results[randomItem];
      
    setFeaturedMovie(featuredMovie);
  }

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setDarkHeader(true);
      } else {
        setDarkHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);


  return (
    <div className="page">

      <Header dark={darkHeader} />

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }      

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} changeFeaturedMovie={setFeaturedMovie} />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="heart">❤️</span><br />
        Direitos de imagem para Netflix<br />
        Dados obtidos pela API do TMDB (themoviedb.org)
      </footer>
      {movieList.length <= 0 &&  
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_500/Netflix_LoadTime.gif" alt="loading..."/>
        </div>
      }
    </div>
  )
}