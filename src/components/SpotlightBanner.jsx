import bannerImg from '../assets/banner.png'
export default function SpotlightBanner(){

    return(

        <div className="p-7 mt-[20px]">
            <div className="flex items-center w-full bg-[#F37921] h-[300px]">
                <div className='w-[50%]'>
            <p className="w-[70%] text-[45px] pl-15 text-start text-white leading-12">India's Prime Online Learning Marketplace</p>

                </div>
            <div className='flex justify-end w-[50%]'>
            <img src={bannerImg} className='pr-15 h-[350px] flex'></img>
            </div>

            </div>
        </div>
    )
}