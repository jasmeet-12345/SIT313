import React from 'react';
import SearchBar from './SearchBar';
import HeadImage from './HeadImage';
import CardArticle from './CardArticle';
import TutorialCard from './TutorialCard';
import SeeMoreButton from './SeeMoreBtn';
import SubscribeForm from './EmailForm';
import Footer from './Footer';

function App() {
  return (
    <div>
      <SearchBar />
      <HeadImage/>
   <h2 className="section-title">Featured Articles</h2>
<div className="articles-container">
  <CardArticle />
  <CardArticle />
  <CardArticle />
</div>
  <SeeMoreButton text="See all articles" color="grey" />

<h2 className="section-title">Featured Tutorials</h2>
<div className="articles-container">
  <TutorialCard />
  <TutorialCard />
  <TutorialCard />
</div>
  <SeeMoreButton text="See all tutorials" color="grey" />
  <SubscribeForm/>
  <Footer/>
  
    </div>
  );
}

export default App;
