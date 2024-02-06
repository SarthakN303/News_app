import { useState } from 'react'
import NewsItem from './NewsItem'
import { useEffect } from 'react'
import Loader from './Loader'

const NewsCard = ({ category, loader, setLoader }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`

    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .then(() => setLoader(false))
  }, [category])
  return (
    <div>
      <h2 className="text-center text-white my-2">
        Latest <span className="badge bg-danger">NEWS</span>
      </h2>
      {loader ? (
        <Loader />
      ) : (
        articles.map((article, index) => {
          return <NewsItem key={index} article={article} loader={loader} />
        })
      )}
    </div>
  )
}
export default NewsCard
