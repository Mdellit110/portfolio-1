import React from 'react';
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import p4 from '../img/p4.png';

const Works = () => {
  return (
    <div className='works'>
      <h1>Works</h1>
      <div className='works-container'>
        <article>
          <a href='https://the-candy-drop.surge.sh/'>
            <img className='project-img' src={p1} />
          </a>
          <p>The Candy Drop</p>
          An addicting game made with Javascript, HTML and CSS.
        </article>
        <article>
          <a href='https://nifty-swirles-9a8f36.netlify.com/'>
            <img className='project-img' src={p2} />
          </a>
          <p>What's for lunch?</p>A random lunch generator to help you decide
          what to eat for lunch. This app was made with React along with the
          Yelp api.
        </article>
        <article>
          <a href='https://luxuriant-bun.surge.sh/'>
            <img className='project-img' src={p3} />
          </a>
          <p>Postpic</p>
        </article>
        <article>
          <a href='https://stark-harbor-15567.herokuapp.com/'>
            <img className='project-img' src={p4} />
          </a>
          <p>CodeTutor</p>
        </article>
      </div>
    </div>
  );
};

export default Works;
