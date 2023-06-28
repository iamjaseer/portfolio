"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'
import Brand from './Brand'


function HeaderElemnt() {
  const [isActive, setActive] = React.useState(false);
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);


  //HEADER FIXED
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    //  document.body.classList.add("light");
  });


  const themeSwitch = () => {
    document.body.classList.toggle("dark");
    document.body.classList.remove("light");
  };

  return (
    <>

      <header className={`header${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 d-flex align-items-center justify-content-between'>
              <Brand />
              <div className='nav d-sm-flex d-none'>
                <Link href="/#about">About</Link>
                <Link href="/cases/">Case studies</Link>
                <Link href="/contact/">Contact</Link>
                <Link href="#">Read.cv</Link>
                {/* THEME TOGGLE START */}
                <input type="checkbox" id="toggle-mode-cb" onClick={themeSwitch} />
                <div id="mode-wrapper">
                  <label id="toggle-mode" htmlFor="toggle-mode-cb">
                    <span className="toggle-border">
                      <span className="toggle-indicator"></span>
                    </span>
                  </label>
                </div>
                {/* THEME TOGGLE END */}
              </div>
              <button className='open-nav d-sm-none' onClick={() => setActive(!isActive)}>menu</button>
            </div>
          </div>
        </div>
      </header>
      {/* NAVIGATION MOBILE START */}
      <div className={`mobile-navigation d-flex  align-items-end justify-content-end ${isActive ? "mobile-navigation d-flex d-sm-none align-items-end justify-content-end active" : ""}`}  >
        <div className='nav d-grid text-end' >
          <Link href="/#about" onClick={() => setActive(!isActive)}>About</Link>
          <Link href="/cases/" onClick={() => setActive(!isActive)}>Case studies</Link>
          <Link href="/contact/" onClick={() => setActive(!isActive)}>Contact</Link>
          <Link href="#" onClick={() => setActive(!isActive)}>Read.cv</Link>
          {/* THEME TOGGLE START */}
          <input type="checkbox" id="toggle-mode-cb-2" onClick={themeSwitch} />
          <div id="mode-wrapper-2">
            <label id="toggle-mode-2" htmlFor="toggle-mode-cb-2">
              <span className="toggle-border">
                <span className="toggle-indicator"></span>
              </span>
            </label>
          </div>
          {/* THEME TOGGLE END */}
        </div>
      </div>
      {/* NAVIGATION MOBILE END */}
    </>
  );
}

const Header = () => {
  return (
    <>
      {/* HEADER START */}
      {HeaderElemnt()}
      {/* HEADER END */}
    </>
  )
}

export default Header