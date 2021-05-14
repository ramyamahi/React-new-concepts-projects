import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page: {page, links } }  = useGlobalContext();
  const container = useRef(null);
  const [ columns, setColumns ] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current;
    // console.log(submenu,"1")
    // console.log(location, "2")
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if(links.length === 3){
      setColumns('col-3')
    }
    if(links.length > 3) {
      setColumns('col-4')
    }
  }, [location,links])

  return (
    <article className={`${isSubmenuOpen ?  'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return <a key={index} href={url}>
            {icon}
            {label}</a>
        })}
      </div>
    </article>
  )
}

export default Submenu
