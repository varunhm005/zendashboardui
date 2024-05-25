import React from 'react'
import withAuthCheck from '../Auth/withAuthCheck';

function certificate() {
    return (
        <div class="certificateFirst">
            <div class="certificateSecond">
                <div class="certificateThird">
                    <div class="certificateFourth"></div>
                </div><div class="certificateFifth">
                    <div class="py-4"><div class="text-center p-4">
                        <h3> Your Certificate is not yet Generated.</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuthCheck(certificate);