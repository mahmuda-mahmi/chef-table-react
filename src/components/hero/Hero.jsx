

const Hero = () => {
    return (
        <div className='bg-[url("https://i.ibb.co/d2KPJJ2/pexels-elletakesphotos-2696064.jpg")] rounded-xl after:rounded-xl py-28 bg-cover bg-no-repeat bg-center after:bg-gradient-to-t from-neutral-950 relative after:absolute after:w-full after:h-full after:top-0'>
            <div className='w-2/3 mx-auto text-center z-20 relative'>
                <h1 className='text-5xl font-bold text-white leading-normal'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-white my-5'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='*:px-8 flex gap-3 justify-center mt-8'>
                    <button className='btn btn-success rounded-full'>Explore Now</button>
                    <button className='btn btn-outline rounded-full text-white'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;