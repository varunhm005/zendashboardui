import React, {useState} from 'react'
import Capstone from './capstone'
import CapstoneDetail from './capstonedetail'
import withAuthCheck from '../../Auth/withAuthCheck';

function Maincapstone() {

    const [showCapstone, setShowCapstone] = useState(true);

    const toggleComponent = () => {
        setShowCapstone(!showCapstone);
    };

    const hideDetailComponent = () => {
        setShowCapstone(true);
    };

  return (
    <div> {showCapstone ? <Capstone toggleComponent={toggleComponent} /> : <CapstoneDetail hideDetailComponent={hideDetailComponent} />}  </div>
  )
}

export default withAuthCheck(Maincapstone);
