import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useComic from '../ComicAPI';
import './Comic.css';

const Comic = () => {

  let url = 'http://localhost:5001/Comic';
  const number = useParams().number;
  if (number) {
    url = 'http://localhost:5001/Comic/' + number;
  }
  const { comic, error } = useComic(url);
  if (comic) {
    let currentNum = comic.num;
    const latestComic = 2546;
    
    const nextComic = () => {
      let nextComicUrl = 'http://localhost:3000/';

      if (currentNum === latestComic) {
        currentNum = 1;
        nextComicUrl += currentNum;
      } else {
        nextComicUrl += currentNum + 1;
      }
      window.location.replace(nextComicUrl);
    }

    const previousComic = () => {
      let previousComicUrl = 'http://localhost:3000/';

      if (currentNum === 1) {
        currentNum = latestComic;
        previousComicUrl += currentNum;
      } else {
        previousComicUrl += currentNum - 1;
      }
      window.location.replace(previousComicUrl);
    }

    const randomComic = () => {
      let randomComicUrl = 'http://localhost:3000/';
      const randomNumber = Math.floor(Math.random() * latestComic) + 1;
      randomComicUrl += randomNumber;

      window.location.replace(randomComicUrl);
    }


  let transcript = comic.transcript;
  transcript = transcript.replace(/\[/g, '');
  transcript = transcript.replace(/\]/g, '');
  transcript = transcript.replace(/\{/g, '');
  transcript = transcript.replace(/\}/g, '');
  transcript = transcript.split('Alt');

    return (
      <>
        <div className="container">
          <div className="header">
              <div>
                <h2 className="title">{comic.title}</h2>
              </div>
              <div>
                <h4 className="title-date">Made on {new Date(comic.year, comic.month, comic.day).toLocaleDateString()}</h4>
              </div>
          </div>

          <div className="comic-content">
            <img src={comic.img} alt={comic.alt} className="comic-img"/>
            <p className="transcript">Transcript: {transcript[0]}</p>
            <p>Alt: {comic.alt}</p>
          </div>

          <div className="comic-btn">
              <button onClick={previousComic} title="Previous Comic" className="prev-btn">
                Prev
              </button>
              <button onClick={nextComic} title="Next Comic" className="next-btn">
                Next
              </button>
              <button onClick={randomComic} title="Random Comic" className="random-btn">
                Random
              </button>
          </div>
          <footer className="footer">
          Copyright &copy; 2021 by Abdulbasid Guled
        </footer>
        </div>
      </>
    );
  }
  return error;
}

export default Comic;