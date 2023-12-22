import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Task Management | About</title>
            </Helmet>
            <div>
                <h2 className="text-4xl text-center pt-10">About Us</h2>
                <hr className="w-32  mx-auto mt-3 border-1 border-black" />
            </div>
            <section className=" dark:bg-gray-900 mt-10">
                <div className="container px-6 py-10 mx-auto">
                    <div className="xl:flex xl:items-center xL:-mx-4">
                        <div className="xl:w-1/2 xl:mx-4">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl -mt-20">Our Goal</h1>

                            <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                                Our Task Management website aims to streamline work processes, boost collaboration, and improve productivity by providing a user-friendly platform for efficient task organization, assignment, and progress tracking.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                            <div>
                                <img className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">John Doe</h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Founder of Sweetiny</p>
                            </div>

                            <div>
                                <img className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Mia</h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Co-Founder Sweetiny</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;