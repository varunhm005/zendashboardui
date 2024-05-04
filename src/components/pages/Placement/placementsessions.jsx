import React from 'react'
import './placement.css'

export default function placementsessions() {
  return (
    <section class="Placement-section">
    <div class="container-fluid">
      <div class="row justify-content-start">
        <div class="col-8">
          <div class="join-class">
            <h2 class="p-4">No session title available</h2>
          </div>
          <div class="session-content p-4">
            <div class="content mb-4">
              <p class="second-sub-header">Contents:</p>
              <span class="second-sub-content">No content availabe</span>
            </div>
            <div class="pre-read">
              <p class="second-sub-header">Pre-read:</p>
              <span class="second-sub-content">No preread availabe</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="roadmap">
            <div class="card"> 
              <div class="card-header common-card-header">
                Placement Sessions
              </div>
              <div class="card-body">
                  <span>ⓘ No Placement Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
