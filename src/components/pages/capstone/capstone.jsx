import React, {useState, useEffect}  from 'react'
import './capstone.css'
import { fetchData } from '../../../api/api'

export default function Capstone({ toggleComponent }) {

    const [data, setData] = useState(null);
    useEffect(() => {
        // Function to fetch data from the API
        const getQuery = async () => {
            try {
                const result = await fetchData('/capstone');
                if (result.code === 200) {
                    setData(result.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetch data function when the component mounts
        getQuery();


        // Clean-up function (optional)
        return () => {
            // You can do any clean-up here if necessary
        };
    }, []);

  return (
        <section class="capstone-section">
        <div class="container-fluid">
          <div class="row search-row">
            <div class="col-xl-12 search-col">
                <div class="search-input"> 
                    <span class="search-icon"><i class="fa-solid fa-search"></i></span>
                    <input type="text" name="searchBox" class="input_search" value="" ></input>
                </div>
            </div>
                
            </div>
            <div class="row">
                <div class="col-xl-12 my-4 parent-column">
                {data ? (
                            data.map((item, index) => (
                    <div class="main-content" onClick={() => toggleComponent()}>
                        <div class="left-content">
                            <h3>Varun Harikumar</h3>
                            <div>
                                <span class="batch-details">(B50 WE2 Tamil - Capstone Project)</span> <br />
                                <span class="class-details">{item.capstoneName}</span>
                            </div>
                        </div>
                        <div class="right-content">
                            <span class="submission mb-2">Yet to be graded</span>
                            <div class="task-details">
                                <span class="task px-2">Capstone</span>
                            </div>
                        </div>
                    </div>
                     ))
                    ) : (
                        <div>Loading</div>
                    )
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
