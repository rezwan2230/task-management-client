import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const OverView = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg min-h-screen">
                <div className="bg-[#9bb8cd79]  flex-1  rounded">
                    <div className="flex justify-between">
                        <h3 className="font-semibold p-3">To-dos</h3>
                        <h3 className="font-semibold p-3"><IoMdAdd className="text-xl hover:bg-white hover:rounded"></IoMdAdd></h3>
                    </div>

                    <div className="rounded-lg mt-3 mx-3 bg-base-100 shadow-xl">
                        <div className="">
                            <div className="flex justify-between items-center">
                                <h2 className="mt-2 pl-3 pt-2 text-lg font-semibold">You have to done this</h2>
                                <h2 className=""><RiDeleteBin6Line className="text-xl mr-4 mt-2 hover:text-2xl"></RiDeleteBin6Line></h2>
                            </div>
                            <p className="px-3 pt-2 text-sm">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
                            <p className="px-3 pb-5  text-sm font-semibold mt-2">Deadline : 21-12-2023</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#9bb8cd79] flex-1 rounded">
                    <h2 className="font-semibold p-3">Ongoing</h2>
                </div>

                <div className="bg-[#9bb8cd79] flex-1 rounded">
                    <h2 className="font-semibold p-3">Complete</h2>
                </div>
            </div>
        </>
    );
};

export default OverView;