import MagnifyingGlassPlus from "phosphor-react/dist/icons/MagnifyingGlassPlus";

export function CreateAd(){
    return (
        <div className='pt-1 bg-gradiente mt-8 self-stretch overflow-hidden rounded-lg'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu Duo?</strong>
            <span className='text-zinc-400 block'>Publique um anucio para encontrar novos players.</span>
          </div>

          <button className='py-3 px-4 bg-violet-400 rounded hover:bg-violet-600 text-white flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anucio
          </button>
        </div>
      </div>
    )
}
