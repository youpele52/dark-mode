import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
import Switch from './Switch'

// save and check the users prefered theme, so that anytime we reload the page remains at the user prefered theme
const getStorageTheme = () => {
  // there seems to be a problem here
  let theme = 'dark-theme'
  let toggleValue = 'false'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
    toggleValue = localStorage.getItem('toggleValue')
  }
  return { theme, toggleValue }
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme().theme)
  const [value, setValue] = useState(getStorageTheme().toggleValue)
  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setValue(!value)
      setTheme('light-theme')
    } else {
      setTheme('dark-theme')
      setValue(!value)
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

          <Switch isOn={value} onColor='#4fa6f7' handleToggle={toggleTheme} />

          {/* <div
            onClick={() => {
              toggleTheme()
            }}
          >
            <label htmlFor='toggle' className='switch'>
              <input
                type='checkbox'
                id='toggle'
                name='toggle'
                checked={checked}
                onChange={(e) => {
                  console.log(e.target.value)
                }}
              />
              <span className='slider round' onClick={toggleTheme}></span>
            </label>
          </div> */}
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
