import React from 'react'

export default function Navbar(props) {
  return (
  <>

    <nav>
      <div className="cap"><a href=""><span>BIG</span>{props.title}</a></div>
      <ul className="nav-links">
        <li><a href="#campus">Service</a></li>
        <li><a href="#third">Review</a></li>
        <li><a href="#campus2">Contact us</a></li>
      </ul>

    </nav>
    <div className="center">
      <h1>Headless Commerce</h1>
      <p>Headless commerce is growing in popularity, and for brands,
        it provides more ecommerce platform options. Lets look at the ins
        and outs of the headless commerce approach.</p>
    </div>
    <div className='down'>
      <h2>New Era of Ecommerce: Headless Commerce Whitepaper</h2>
      <button>Download Guide</button>
    </div>

    <div className="man">
      <h2>Featured Headless Commerce Resources</h2>
      <div className="row">
        <div className="col">plan A for your business ,we can to do this for you,this is business ok,i have done it </div>
        <div className="col">plan A for your business ,we can to do this for you,this is business ok,i have done it </div>
        <div className="col">plan A for your business ,we can to do this for you,this is business ok,i have done it </div>
        <div className="col">plan A for your business ,we can to do this for you,this is business ok,i have done it </div>
      </div>
    </div>


    <footer >
      {props.foot}
    </footer>
    </>

  )
}


