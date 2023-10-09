import React from 'react'

const Map = () => {
  return (
    <div>
      <div className="container-box">
        <div className="split-container">
          <div className="left-sub-container">
            <div className="left-sub-container-box">
              <div class="styled-select">
                <select id="selectOption">
                  <option value="" disabled selected>Professions</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="right-sub-container">
            <div className="right-sub-container-box">
              <div class="styled-select">
                <select id="selectOption">
                  <option value="" disabled selected>Filter By</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-box">Container 11</div>
    </div>
  )
}

export default Map