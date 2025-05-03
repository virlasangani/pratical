import { Link } from 'react-router-dom'
import forwardArrow from '../assets/forwardArrow.svg'

let breadCrumb = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'List Yourself',
        route: '/list'
    },
    {
        name: 'Corporate',
        route: '/corporate'
    },

]
export default function BreadCrumb(){
    return(
        <div className="flex justify-start items-center gap-2 w-full h-14 bg-[#F37921] text-white pl-[35px]">
            {
                breadCrumb.map((item, index, arr) => {
                    return (
                        <>
                            <Link to={item.route} className={`${index == (arr.length - 1) ? 'font-bold' : ''}`}>{item.name}</Link>
                            {index != (arr.length - 1) && <img alt='forward arrwo' src={forwardArrow} />}
                        </>
                    )
                })
            }
        </div>
    )
}