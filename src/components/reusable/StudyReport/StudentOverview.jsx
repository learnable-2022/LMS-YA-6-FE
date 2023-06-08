import React from 'react'
import UpperTxtSec from './UpperTxtSec'
import StudentData from './StudentData'
import StudentDataCards from './StudentDataCards'
function StudentOverview() {
  return (
    <div
className="lg:px-10 px-2 py-6 overflow-hidden">
            <UpperTxtSec />
            <div className="mt-10">
            <StudentDataCards />
            < StudentData/>
            </div>

    </div>
  )
}

export default StudentOverview