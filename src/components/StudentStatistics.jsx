import learners from '../assets/learners.png'
import publicProgram from '../assets/publicPrograms.png'
import privatePrograms from '../assets/privatePrograms.png'
import universities from '../assets/universities.png'

export default function StudentStaticstics(){
    const dummyData = [
        {
            count: '3M+',
            name: 'Learners',
            icon: learners
        },
        {
            count: '300+',
            name: 'PUblic Programs',
            icon: publicProgram
        },
        {
            count: '300+',
            name: 'Universities',
            icon: universities,
        },
        {
            count: '4250+',
            name: 'Private Programs',
            icon: privatePrograms
        },
    ]
    return(

        <div className="flex justify-center p-[30px] flex-col">
            <p className="font-bold text-[30px]">A global community</p>
            <div className="mt-[20px] grid grid-cols-4 gap-3">

                {
                    dummyData.map(item => {
                        return(
                            <div className='flex flex-row gap-5 items-center'>
                                <img className='w-[100px] h-[100px]' src={item.icon}/>
                                <div className='text-start'>
                                    <p className='font-bold text-[20px]'>{item.count}</p>
                                    <p className='text-[20px]'>{item.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}