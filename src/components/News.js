import React from 'react'
import Newsitem from './Newsitem'

export default function News() {
  return (
    <div className='container my-3'>
        <h1>NewsMania - Top Headlines</h1>
        <div className="row ">
            <div className="col md-4">
                <Newsitem title="Shane Warne memorial - watch & follow updates" description="Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground." imageurl = "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"></Newsitem>
            </div>
        
            <div className="col md-4">
                 <Newsitem title="News 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Newsitem>
            </div>

            <div className="col md-4">
                 <Newsitem title="News 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Newsitem>
            </div>
        </div>

        
        

    </div>
  )
}
