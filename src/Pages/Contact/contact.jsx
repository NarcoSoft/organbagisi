import ContactJumbotron from "../../Components/ContactJumbotron/contact_jumbotron";
import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Contact = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('iletisim'))
  },[setSheetState])
  return(
    <div className=''>
      <ContactJumbotron/>
    </div>
  )
}

export default Contact;