import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AverageRating from '../components/averageRating'
import Reviews from '../components/reviews'
import SentimentAnalysis from '../components/sentimentAnalysis'
import Sidebar from '../components/sidebar'
import WebsiteVisitors from '../components/websiteVisitors'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
          <Sidebar />
          <Reviews />
          <AverageRating />
          <SentimentAnalysis />
          <WebsiteVisitors />
    </div>
  )
}

export default App
