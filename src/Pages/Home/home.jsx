import Jumbotron from '../../Components/Jumbotron/jumbotron'
import './home.css'
import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('home'))
    window.scrollTo(0,0)
  },[setSheetState])
  return(
    <>
      <div className='header_text display-5 py-3 text-center text-white d-lg-block d-none' style={{background: 'red', fontWeight: '600'}}>Organ Bağışı Slogan Yarışması</div>
      <Jumbotron/>
    </>
  )
}

export default Home;