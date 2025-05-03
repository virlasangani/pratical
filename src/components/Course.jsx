import { useState } from "react"
import courseImg from '../assets/courseImg.png'

export default function CourseOffer(){
    const [activeCourseCategory, setActiveCourseCategory] = useState('PG Courses')
    const courseCategories = [ 'PG Courses', 'UG Courses', 'Executive Education', 'Job Guarantee', 'Doctorate/Ph.D.', 'SKilling & Certificate', 'Study Aboard Online']
    
    const courseList = [
    {
        name: 'IIM Online Course',
        duration: '3-24 Months'
    },
    {
        name: 'IIM Online Course',
        duration: '3-24 Months'
    },{
        name: 'IIM Online Course',
        duration: '3-24 Months'
    },{
        name: 'IIM Online Course',
        duration: '3-24 Months'
    },{
        name: 'IIM Online Course',
        duration: '3-24 Months'
    },{
        name: 'IIM Online Course',
        duration: '3-24 Months'
    },{
        name: 'IIM Online Course',
        duration: '3-24 Months'
    },
    ]
    const handleCourseCategory = (name) => {
        setActiveCourseCategory(name)
    }
    
    return(

        <div className="mt-[30px]">
            <div className="flex justify-center">
                <p className="font-bold text-[25px] w-[28%]">
                Search the 7,000+ courses
                in Campus Unlock
                </p>
            </div>

            {/* course catgroy */}
            <div className="mt-[20px] flex justify-center">
                <div className="w-[80%] flex justify-center flex-wrap gap-3">
                    {
                        courseCategories.map((item) => {
                            return(
                                <div onClick={() =>handleCourseCategory(item)} className={`cursor-pointer w-auto font-medium py-2 px-4 rounded-xl shadow ${activeCourseCategory == item ? 'bg-[#F37921] text-white' : 'bg-[#E9E3F8] text-black'}`}>
                                    {item}
                                </div>
                            )
                        })
                    }
                    </div>  
            </div>

            {/* course list */}
            <div className="mt-[20px] flex justify-center">
                    <div className="w-[80%] flex justify-center flex-wrap gap-3">
                        {courseList.map(item => {
                            return(
                                <div className="shadow-md w-[300px] p-[20px] flex justify-start items-start rounded-md">
                                    <img className="w-[80px] h-[80px]" src={courseImg}></img>
                                    <div className="flex justify-start items-start flex-col">
                                        <p className="font-bold text-[20px]">{item.name}</p>
                                        <p className="text-[#F37921]">{item.duration}</p>
                                    </div>

                                </div>
                                
                            )
                        })}
                    </div>
            </div>
        </div>
    )
}