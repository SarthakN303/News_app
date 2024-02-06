import { useState } from 'react'
import Navbar from './components/Navbar'
import NewsCard from './components/NewsCard'

const App = () => {
  const [category, setCategory] = useState('general')
  const [loader, setLoader] = useState(true)
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsCard category={category} loader={loader} setLoader={setLoader} />
    </div>
  )
}
export default App
