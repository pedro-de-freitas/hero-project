import heroimage from "../../assets/heroimage.png"

const Hero = () => {
    return(
        <section className="dark:bg-neutral-800 dark:text-white">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 py-12 min-h-[650px] px-4">
                {/* Left content */}
                <div className="max-w-lg">
                    <p className="text-sm uppercase font-semibold tracking-wide">Work Smather. Archive More</p>
                    <h1 className="text-5xl font-bold leading-light mt-4">
                        Simple fitness 
                        experience for <br />
                        everyone
                    </h1>
                    <p className="mt-6 text-gray-600 dark:text-gray-300 text-sm">Track your workouts, get better results, and be the best version of you.
                    Less thinking, more lifting.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <button className="px-6 py-3 rounded-full border border-gray-300 bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-500">Get started</button>
                        <button className="px-6 py-3 rounded-full border border-gray-300 dark:border-neutral-600 hover:bg-gray-100 dark:hover:bg-gray-800">View pricing</button>
                    </div>
                </div>
                {/* Right content */}
                <div className="mt-12 md:mt-0 w-full flex justify-center">
                    <img src={heroimage} className="w-[450px] md:w-[550px] drop-shadow-2xl" />
                </div>
            </div>
        </section>
    )
}

export default Hero