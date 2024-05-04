import React from 'react'
import './leaderboard.css'
// import leaderImage from '../../../../public/leader.svg';


export default function leaderboard() {
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
                        <tr>
                            <td style={{ 'text-align': 'center', 'vertical-align': 'middle' }}>
                                <img class="p-2" src="/Icons/rankone.svg" alt="add/plus"></img>
                            </td>
                            <td style={{ 'vertical-align': 'middle' }}>Sowmiyarani V</td>
                            <td style={{ 'vertical-align': 'middle' }}>B50 WE2 Tamil</td>
                            <td style={{ 'vertical-align': 'middle', 'cursor': 'pointer' }}>88.70</td>
                        </tr>
                        <tr>
                            <td style={{ 'text-align': 'center', 'vertical-align': 'middle' }}>
                                <img class="p-2" src="/Icons/ranktwo.svg" alt="add/plus"></img>
                            </td>
                            <td style={{ 'vertical-align': 'middle' }}>Sowmiyarani V</td>
                            <td style={{ 'vertical-align': 'middle' }}>B50 WE2 Tamil</td>
                            <td style={{ 'vertical-align': 'middle', 'cursor': 'pointer' }}>88.70</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
