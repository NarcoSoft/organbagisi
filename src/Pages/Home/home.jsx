import Jumbotron from '../../Components/Jumbotron/jumbotron'
import './home.css'

const Home = () => {
  return(
    <>
      <div className='header_text display-5 py-3 text-center text-white d-lg-block d-none' style={{background: 'red', fontWeight: '600'}}>Organ Bağışı Slogan Yarışması</div>
      <Jumbotron/>
    </>
  )
}

export default Home;