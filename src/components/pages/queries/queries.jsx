import React from 'react'
import './queries.css'
import { Link  } from 'react-router-dom';

export default function Queries() {
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
                    <div class="col-xl-7 my-4 parent-column">
                        <div class="query-top-first">
                            <div class="query-top-second">
                                <span class="query-top-third">QN81929 - Need to know more about my capestone task</span>
                                <div class="query-top-fourth">
                                    <div class="query-top-fifth query-top-sixth">Closed</div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <span class="query-top-seventh">Zen-Class Doubt</span>
                                <span class="query-top-eigth">03/04/2024, 12:41 AM</span>
                            </div>
                        </div>
                    </div>

                    <div class="ml-4 mt-2 col-5 px-0 taskContainer">
                        <div class="Queries_sq__single__item__3QDru">
                            <span class="recent-query">Recent query</span>
                            <span>
                                <span class="description-query">
                                    <span class="query-top-third">QN81929 - Need to know more about my capestone task</span>
                                    <div class="Queries_query__status__btn__cont__1Gdq0">
                                        <div class="query-top-fifth Queries_query__status__closed__1Kr5g">Closed</div>
                                    </div>
                                </span>
                                <div class="created-query">
                                    <div class="column-query">
                                        <span class="Queries_query__grey__text__8FJZa">Created at:</span>
                                        <span>03/04/2024, 12:41 AM</span>
                                    </div>
                                    <div class="column-query">
                                        <span class="Queries_query__grey__text__8FJZa">Assigned to:</span>
                                        <span>Suman Gangopadhyay</span>
                                    </div>
                                    <div class="column-query Queries_grid__col2__3UV94">
                                        <span class="description-second">Description:</span>
                                        <span>Need to know more about my capestone task</span>
                                    </div>
                                </div>
                                <div class="button-query">
                                    <button class="modal__btn__continue">Go to query</button>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}
