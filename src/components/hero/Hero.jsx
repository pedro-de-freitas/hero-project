import heroimage from "../../assets/heroimage.png"

const Hero = () => {
    return(
        <section className="dark:bg-neutral-800 dark:text-white">
            <div className="container flex justify-between items-center py-12 h-[650px]">
                {/* Left content */}
                <div className="max-w-lg">
                    <p className="text-sm uppercase font-semibold tracking-wide">Work Smather. Archive More</p>
                    <h1>
                        Simple fitness 
                        experience for
                        everyone
                    </h1>
                    <p>Track your workouts, get better results, and be the best version of you.
                    Less thinking, more lifting.
                    </p>
                </div>
                {/* Right content */}
                <div>
                    <img src={heroimage} />
                </div>
            </div>
        </section>
    )
}

export default Hero