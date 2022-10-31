interface GameProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function Game(props: GameProps){
    return (
        <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={props.bannerUrl} alt="" />

            <div className='w-full pt-16 pb-2 pl-2 bg-gamegradiente absolute bottom-0 left-0 right-0'>
                <strong className='font-bold text-white block'> {props.title}</strong>
                <span className='text-zinc-400 text-sm block mt-1'>{props.adsCount} anúcio(s)</span>
            </div>
        </a>
    )
}