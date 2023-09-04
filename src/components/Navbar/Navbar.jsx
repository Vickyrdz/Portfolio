
const NavBar = () => {
  return (
    <div className= 'bg-fixed absolute top-0 h-20 w-full flex'>
        <img className='ml-5' src="data:image/png;base64,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"/>
        <p className='ml-2 font-bold text-2xl h-20 w-60 flex items-center text-white'>
            MyPortfolio
        </p>
        <div className='flex gap-16 text text-2xl w-full font-bold h-20 items-center justify-end mr-5'>
            <div className='flex'>
                <p className='text-pink'>#</p>
                <p className='text-white'>Home</p>
            </div>
            <div className='flex'>
                <p className='text-pink'>#</p>
                <p className='text-white'>Projects</p>
            </div>
            <div className='flex'>
                <p className='text-pink'>#</p>
                <p className='text-white'>Skills</p>
            </div>
            <div className='flex'>
                <p className='text-pink'>#</p>
                <p className='text-white' >About Me</p>
            </div> 
            <div className='flex'>
                <p className='text-pink'>#</p>
                <p className='text-white'>Contact Me</p>
            </div>
            
        </div>
    </div>
  );
};

export default NavBar;
