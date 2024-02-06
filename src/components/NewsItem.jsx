import photo from '../assets/news.png'
import Loader from './Loader'
const NewsItem = ({ article, loader }) => {
  // Input date string
  const inputDateStr = article.publishedAt

  // Convert string to Date object
  const inputDate = new Date(inputDateStr)

  // Format the date as desired
  const options = { day: 'numeric', month: 'short', year: 'numeric' }
  const formattedDateStr = inputDate.toLocaleDateString('en-US', options)
  return (
    <>
      {' '}
      {loader ? (
        <Loader />
      ) : (
        <div
          className="card bg-light  text-dark mb-3 d-inline-block my-3 mx-3 py-2 px-2"
          style={{ maxWidth: '340px' }}
        >
          <img
            src={article.urlToImage ? article.urlToImage : photo}
            style={{ height: '200px', width: '320px' }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{article.title.slice(0, 50)}</h5>
            <p className="card-text">
              {article.description
                ? article.description.slice(0, 90)
                : 'Unfortunately no specific news description is available at the moment. It seems that the details for this particular news piece are currently unavailable or not provided. Please check back later for updates or explore other news topics.'}
            </p>
            <p>{formattedDateStr}</p>
            <a href={article.url} className="btn btn-primary" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      )}
    </>
  )
}
export default NewsItem
