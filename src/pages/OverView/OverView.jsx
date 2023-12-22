import { useQuery } from "@tanstack/react-query";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const OverView = () => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()


    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get('/toDoes')
            return res.data
        }
    })

    console.log(tasks);

    
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/toDoes/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg min-h-screen">


                <div className="bg-[#9bb8cd79]  flex-1  rounded">
                    <div className="flex justify-between">
                        <h3 className="font-semibold p-3">To-dos : {tasks.length}</h3>
                        <h3 className="font-semibold p-3"><Link to='/dashboard/addtask'><IoMdAdd className="text-xl hover:bg-white hover:rounded"></IoMdAdd></Link></h3>
                    </div>
                    {
                        tasks.map(item => <>
                            <div className="rounded-lg mt-3 mx-3 bg-base-100 shadow-xl">
                                <div className="">
                                    <div className="flex justify-between items-center">
                                        <h2 className="mt-2 pl-3 pt-2 text-lg font-semibold">{item.title}</h2>
                                        <h2 className=""><RiDeleteBin6Line onClick={()=>handleDelete(item._id)} className="text-xl mr-4 mt-2 hover:text-2xl"></RiDeleteBin6Line></h2>
                                    </div>
                                    <p className="px-3 pt-2 text-sm">{item.description}</p>
                                    <div className="grid grid-cols-2 justify-between">
                                        <p className="px-3 pb-5  text-sm font-semibold mt-2">Deadline : {item.deadLine}</p>
                                        <p className="px-3 pb-5  text-sm font-semibold mt-2">Priority : {item.priority}</p>
                                    </div>
                                </div>
                            </div>

                        </>)
                    }
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