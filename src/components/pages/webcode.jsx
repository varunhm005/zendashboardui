import React from 'react'
import withAuthCheck from '../Auth/withAuthCheck';

function webcode() {
    return (
        <div class="webcodeFirst">
            <div class="webcodeSecond">
                <div class="webcodeThird">
                    <div class="webcodeFourth">
                        <div class="webcodeFifth">
                        </div>
                    </div>
                </div>
                <div class="my-4">
                </div>
            </div>
        </div>
    )
}

export default withAuthCheck(webcode);