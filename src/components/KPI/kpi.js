import React from 'react'

const Kpi = () => {
    return (
        <>
            <div className="container-box">
                <div class="styled-select">
                    <select id="selectOption">
                        <option value="" disabled selected>Select State</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </div>
            <div className="container-box" style={{backgroundColor: "#21639bff"}}>INDIA</div>
            <div className="container-box" style={{backgroundColor: "#1592a6ff"}}>
                <div class="kpi-box">
                    <span class="bold-text">13,00,290</span>
                    <span class="small-text">Regd. Doctors</span>
                </div>
            </div>
            <div className="container-box" style={{backgroundColor: "#cfad2fff"}}>
                <div class="kpi-box">
                    <span class="bold-text">2,91,271</span>
                    <span class="small-text">Regd. Dentists</span>
                </div>

            </div>
            <div className="container-box" style={{backgroundColor: "#25953fff"}}>
                <div class="kpi-box">
                    <span class="bold-text">7,55,780</span>
                    <span class="small-text">Regd. Ayush Professionals</span>
                </div>
            </div>
            <div className="container-box" style={{backgroundColor: "#f28e2bff"}}>
                <div class="kpi-box">
                    <span class="bold-text">35,14,373</span>
                    <span class="small-text">Nurses (RN&RM, ANM, LHV)</span>
                </div>
            </div>
            <div className="container-box" style={{backgroundColor: "#3d9696ff"}}>
                <div class="kpi-box">
                    <span class="bold-text">13,34,198</span>
                    <span class="small-text">Total Pharmacists</span>
                </div>
            </div>
            <div className="container-box" style={{backgroundColor: "#21639bff"}}>
                <div class="kpi-box">
                    <span class="bold-text">10,47,324</span>
                    <span class="small-text">Total ASHA Workers</span>
                </div>
            </div>
            <div className="container-box" style={{backgroundColor: "#3cc326ff"}}>
                <div class="kpi-box">
                    <span class="bold-text">27.40</span>
                    <span class="small-text">HRH (Dr. & Nurses) Ratio per 10K popl.</span>
                </div>
            </div>
        </>
    )
}

export default Kpi