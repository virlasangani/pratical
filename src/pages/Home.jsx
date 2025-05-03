import CourseOffer from "../components/Course";
import SpotlightBanner from "../components/spotlightBanner";
import StudentStaticstics from "../components/StudentStatistics";

export default function Home(){
    return(
        <>
            <SpotlightBanner/>
            <StudentStaticstics/>
            <CourseOffer/>
        </>
    )
} 