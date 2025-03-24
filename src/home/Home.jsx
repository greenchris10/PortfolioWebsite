import '../styles/Home.css'
import selfie from "../assets/selfie.png"
import books from './bookshelf.json'


const Home = () => {

  return(

    <div className='home-container'>
      
      <div className="contact-bar">
        <div className="contact-box">
          <div>
            <img className="selfie" src={selfie} alt="profile picture" />
            <h1 className="profile-title">Christian Green</h1>
            <h4 className="profile-desc">Machine Learning & Software Developer Enthusiast</h4>
            <h5 className="profile-location">Boston, MA</h5>
            </div>
            
            <div className="contact-links">
              <a className="contact-item email" href="mailto:cbg654@gmail.com">Email</a> |
              <a className="contact-item linkedin" href="https://www.linkedin.com/in/christian-green-a10443170">LinkedIn</a> |
              <a className="contact-item youtube" href="https://www.youtube.com/@bernard_life">YouTube</a> |
              <a className="contact-item github" href="https://www.github.com/greenchris10">GitHub</a> |
              <a className="contact-item resume" href="/pdf/chrisgreen2025(1).pdf">Resume</a>
          </div>
          </div>
          </div>

      <div className='home-about'>
        <h1> Qui Suis-Je ? </h1>

        <p>
          As a recent graduate and a researcher focused on machine learning applications primarily
          in architecture, I am deeply commited to solving complex problems. My academic and recreational
          projects are where I try to apply my knowledge. Statistics is one of my biggest passions. Currently
          looking to grow as a Developer. I spend all my time learning, researching, watching movies, reading manga
          and watching basketball. For more information, check out the <strong> About </strong> page !
        </p>
      </div>

      <div className='home-bookshelf'>

        <h2 className='bookshelf-title'>Bookshelf</h2>

        <div className='bookshelf-container'>
          
          {books.map((book, index) => (
          <div key={index} className="book">
            <img src={book.img} alt="book picture" className='book-img' />
            <h5 className="book-title">{book.title}</h5>
            <h6>{book.author}</h6>
            <p>{book.desc}</p>
            </div>
            ))}
        </div>
        

      </div>

          <div className='home-agenda'>
            <h2> To-Do List </h2>

            <ul className='todo'>
              <li>Dynamic Programming</li>
              <li>System Design</li>
              <li>Design API using Spring/ Learn Java</li>
              <li>Customer service chatbot ? Filtering emails for IG brand</li>
              <li>NeurIps workshop paper submission</li>
            </ul>
            </div>
            
            </div>
  )
}

export default Home;