import React, {useState, useEffect} from 'react'
import './queries.css'
import { Link  } from 'react-router-dom';
import { fetchData } from '../../../api/api'


export default function Queries() {

    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Function to fetch data from the API
        const getQuery = async () => {
          try {
            const result = await fetchData('/query');
            if(result.code === 200){
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

      const handleButtonClick = (e) => {
        setIndex(e);
      };

    return (
        <section class="query-section">
            <div class="container-fluid">
                <div class="row search-row">
                    <div class="col-xl-12 search-col-query">
                        <div>
                          <Link  to="/createquery" > <button className='btn btn-primary mt-3' >Create Query</button></Link> 
                        </div>
                        <div class="search-input">
                            <span class="search-icon"><i class="fa fa-search"></i></span>
                            <input type="text" name="searchBox" class="input_search" value="" ></input>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-xl-7 my-4 parent-column" style={{'flex-direction': 'column'}}>
                    { data ?(
                    data.map((item, index) => ( 
                        <div class="query-top-first" onClick={() => handleButtonClick(index)}>
                            <div class="query-top-second">
                                <span class="query-top-third">{item.queryId} - {item.queryTitle}</span>
                                <div class="query-top-fourth">
                                    <div class="query-top-fifth query-top-sixth">Closed</div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <span class="query-top-seventh">{item.category}</span>
                                <span class="query-top-eigth">{item.createdAt}</span>
                            </div>
                        </div>
            ))
        ) :(
            <div>Loading</div>
        )
}
                    </div>

                    <div class="ml-4 mt-2 col-5 px-0 taskContainer">
                        <div class="Queries_sq__single__item__3QDru">
                            <span class="recent-query">Recent query</span>
                            { data ? data.length > 0 ?
                            <span>
                                <span class="description-query">
                                    <span class="query-top-third">{data[index].queryId}  - {data[index].queryTitle}</span>
                                    <div class="Queries_query__status__btn__cont__1Gdq0">
                                        <div class="query-top-fifth Queries_query__status__closed__1Kr5g">Closed</div>
                                    </div>
                                </span>
                                <div class="created-query">
                                    <div class="column-query">
                                        <span class="Queries_query__grey__text__8FJZa">Created at:</span>
                                        <span>{data[index].createdAt}</span>
                                    </div>
                                    <div class="column-query">
                                        <span class="Queries_query__grey__text__8FJZa">Assigned to:</span>
                                        <span>{data[index].assignedTo}</span>
                                    </div>
                                    <div class="column-query Queries_grid__col2__3UV94">
                                        <span class="description-second">Description:</span>
                                        <span>{data[index].queryDescription}</span>
                                    </div>
                                </div>
                                <div class="button-query">
                                    <button class="modal__btn__continue">Go to query</button>
                                </div>
                            </span>
: <span></span> : <span></span>}
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}
