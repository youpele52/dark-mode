import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
import Switch from './Switch'

// save and check the users prefered theme, so that anytime we reload the page remains at the user prefered theme
const getStorageTheme = () => {
  let theme = 'dark-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return { theme }
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme().theme)
  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    } else {
      setTheme('dark-theme')
    }
  }

  useEffect(() => {
    // here we are accessing the HTML document
    document.documentElement.className = theme

    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Youpele's Poems</h1>
          {/* <button className='btn' onClick={toggleTheme}>
            toggle
          </button> */}

          <Switch
            isOn={theme === 'dark-theme' ? true : false}
            onColor='#4fa6f7'
            handleToggle={toggleTheme}
          />
        </div>
      </nav>
      <section className='articles'>
        {data.map((poem) => {
          return (
            <Article key={poem.id} {...poem}>
              {' '}
            </Article>
          )
        })}
      </section>
    </main>
  )
}

export default App
