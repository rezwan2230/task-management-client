import { Link } from "react-router-dom";
import '../Banner/Banner.css'

const Bannner = () => {
    return (
        // <div className="hero h-[60vh] bg-black bg-opacity-90" style={{ backgroundImage: 'url(https://i.ibb.co/cr8dL4S/Banner.png)' }}>
        <div className="hero h-[65vh] " style={{ backgroundImage: 'url(https://i.ibb.co/vdG3pKN/Banner2.png)' }}>
            <div className="hero-overlay bg-black bg-opacity-5"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="-mt-5 text-5xl font-bold text-[#1B4242] font">Streamlining Your Productivity</h1>
                    <p className="mb-10  text-[#304D30] pt-5 font-semibold">Simplify tasks, enhance collaboration. Your central hub for seamless management and streamlined productivity.</p>
                    <Link to='/login'><button className="btn normal-case btn-sm py-2 bg-[#1B4242] text-white hover:bg-[#1b4242dc]">Let’s Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Bannner;