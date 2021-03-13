import React from 'react'

const Switch = ({ isOn, handleToggle, onColor }) => {
  console.log(isOn)
  return (
    <>
      <input
        // the double !! is to force the JS to inteprete the boolean as boolean
        // because it sometime intepretes it as a string
        checked={!!isOn}
        onChange={handleToggle}
        className='react-switch-checkbox'
        id={`react-switch-new`}
        type='checkbox'
      />
      <label
        style={{ background: isOn && onColor }}
        className='react-switch-label'
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  )
}

export default Switch
