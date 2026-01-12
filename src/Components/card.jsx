import React from 'react'
import {Bookmark} from 'lucide-react'
const card = () => {
  return (
    <div>
        <div class="card">
        
            <div class="top">
                <img src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt="Profile Image"/>
                <button>Save <Bookmark /></button>
            </div>
        
            
            <div class="center">
                
                <h3>Amazon<span>5 Days Ago</span></h3>
                <h2>Senior UI/UX Designer</h2>
                <div>
                  <h4>Part Time</h4>
                  <h4>Remote/Hybrid</h4>
                  <h4>Senior Level</h4>
                </div>
            </div>
        
            
            <div class="bottom">
                
                  <div>
                    <h3>$120/hr</h3>
                    <p>Mumbai, India</p>
                  </div>
                  <button>Apply Now</button>
                
            </div>
        
        </div>
    </div>
  )
}

export default card
