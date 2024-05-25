import React, {useState, useEffect} from 'react'
import './leaderboard.css'
// import leaderImage from '../../../../public/leader.svg';
import { fetchData } from '../../../api/api'
import withAuthCheck from '../../Auth/withAuthCheck';


function Leaderboard() {

    const [data, setData] = useState(null);

    useEffect(() => {
        // Function to fetch data from the API
        const getLeaderBoard = async () => {
          try {
            const result = await fetchData('/leaderboard');
            if(result.code === 200){
                setData(result.data);
              }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Call the fetch data function when the component mounts
        getLeaderBoard();

    
        // Clean-up function (optional)
        return () => {
          // You can do any clean-up here if necessary
        };
      }, []); 

    return (
        <section className='leaderboard-section' >
            <div class="leaderboard-image">
                <h1 class="leaderboard-heading">Competition is a good thing; it forces us to do our best.</h1>
                <div class="leaderboardImgTag"><img class="p-2" src="/Icons/leader.svg" alt="add/plus"></img>
                </div>
            </div>
            <div className='leaderboard-table'>
                <table class="table-border table table-sm">
                    <thead>
                        <tr>
                            <th style={{ "text-align": 'center' }}>Rank</th>
                            <th>Name</th>
                            <th>Batch</th>
                            <th>Learning</th>
                        </tr>
                    </thead>
                    <tbody>
                    { data ?(
                    data.map((item, index) => (
                        <tr>
                            <td style={{ 'text-align': 'center', 'vertical-align': 'middle' }}>
                                {
                                    item.rank === "1" ? <img class="p-2" src="/Icons/rankone.svg" alt="add/plus"></img> : item.rank === "2" ? <img class="p-2" src="/Icons/ranktwo.svg" alt="add/plus"></img> : item.rank
                                }
                                
                            </td>
                            <td style={{ 'vertical-align': 'middle' }}>{item.name}</td>
                            <td style={{ 'vertical-align': 'middle' }}>{item.batch}</td>
                            <td style={{ 'vertical-align': 'middle', 'cursor': 'pointer' }}>{item.learning}</td>
                        </tr>
                    ))
                ) :(
                    <tr>Loading</tr>
                )
}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default withAuthCheck(Leaderboard);
