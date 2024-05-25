import React, {useState, useEffect} from 'react'
import './placementboard.css'
import { fetchData } from '../../../api/api'
import withAuthCheck from '../../Auth/withAuthCheck';

function Placementboard() {

    const [data, setData] = useState(null);

    useEffect(() => {
        // Function to fetch data from the API
        const getPlacementBoard = async () => {
          try {
            const result = await fetchData('/placementboard');
            if(result.code === 200){
                setData(result.data);
              }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Call the fetch data function when the component mounts
        getPlacementBoard();

    
        // Clean-up function (optional)
        return () => {
          // You can do any clean-up here if necessary
        };
      }, []); 

    return (
        <section className='placement-board' >
            <div className='d-flex' >
                { data ?(
                    data.map((item, index) => (
                <div className="col-md-4 placementCol">
                    <div class="card-header-top">
                        <div class="card-header"></div>
                        <div class="card-border">
                            <div class="p-4"><div class="media">
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">{item.name}</h5>
                                    <h6 class="mt-0 mb-1">{item.batch}</h6>
                                    <h6 class="mt-0 mb-1">{item.studyRole}</h6></div>
                                <img class="ml-3 rounded-circle shadow-4-strong" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Generic placeholder image" width="50" height="60"></img>
                            </div>
                                <hr></hr>
                                <div class="portfolioDetails">
                                    <div class="p-status mb-2">Company : <strong>{item.company}</strong>
                                    </div>
                                    <div class="p-mentor mb-2">Current CTC : <strong>{item.currentCTC}</strong>
                                    </div><div class="p-comments mb-2">Placed Through : <strong>{item.placedThrough}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
                ) :(
                    <div>Loading</div>
                )
}
            </div>

        </section>
    )
}

export default withAuthCheck({Placementboard});
