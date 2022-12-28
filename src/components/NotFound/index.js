import './index.css'

const NotFound = () => (
  <div>
    <div className="nf-main-cont">
      <img
        src="https://res.cloudinary.com/dvpzl3ogh/image/upload/v1671471484/not-found_mtrd3f.png"
        alt="not found img"
        className="nf-img"
      />
      <h1 className="nf-hd">PAGE NOT FOUND</h1>
      <p className="nf-para">
        we’re sorry, the page you requested could not be found Please go back to
        the homepage
      </p>
      <button type="button" className="nf-btn">
        Home
      </button>
    </div>
  </div>
)

export default NotFound
