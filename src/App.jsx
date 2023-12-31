import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Trending from './Components/Trending/Trending';
// import Sellers from './Components/Sellers/Sellers';
// import Review from './Components/Review/Review';
// import Footer from './Components/Footer/Footer';
  
  
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Trending />
      {/* <Home />
      <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Review />
      <Footer />  */}
    </div>
  )
}

export default App


