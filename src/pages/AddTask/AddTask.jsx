import { Button, Input, Textarea } from "rizzui";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddTask = () => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
       
        const task = {
            title : data.title,
            priority : data.priority,
            deadLine : data.deadLine,
            description : data.description,
        }
        console.log(task);
        const res = await axiosPublic.post('/addToDoes', task)
        if (res.data.insertedId) {
            // refetch()
            reset()
            Swal.fire({
                position: "center",
                icon: "success",
                title: "New task has been addeded",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard/overview')
        }
    }


    return (
        <div>
            <div>
                <div className="flex flex-col md:flex-row h-[100vh]">

                    <div className="flex-1 mt-10">
                        <section >
                            <div className="  ">
                                <div
                                    className="bg-[#9bb8cd79]  first-letter:w-full px-0 py-10  mx-auto mt-4 mb-0  border-0 border-gray-200 rounded-lg  md:border sm:w-10/12 lg:w-8/12   md:px-6 sm:mt-8 sm:mb-5 "
                                >
                                    <h1 className="mb-4 text-3xl font-semibold text-left text-gray-800 sm:text-center py-4 ">Create Your Task</h1>

                                    <form onSubmit={handleSubmit(onSubmit)} className="pb-1 space-y-4">


                                        <div className='grid grid-cols-3 gap-5'>

                                            <Input className='text-2xl font-semibold' {...register("title", { required: true })} label="Title" type='text' placeholder="Title" variant="active" required />

                                            <div>
                                                <label className="text-black text-sm font-semibold mb-20">Priority</label>
                                                <select {...register("priority", { required: true })} name="priority" id="" className="bg-[#9bb8cd27]  block w-full text-gray-700  border border-black rounded-md dark:bg-gray-800  focus:ring-opacity-40  focus:outline-none" required>
                                                    <option className='text-sm font-semibold' value="Low">Low</option>
                                                    <option className='text-sm font-semibold' value="Moderate">Moderate</option>
                                                    <option className='text-sm font-semibold' value="High">High</option>
                                                </select>
                                            </div>

                                            <Input className='text-2xl font-semibold' {...register("deadLine", { required: true })} label="DeadLine" type='date' placeholder="Deadline" variant="active" required />

                                        </div>

                                        <Textarea {...register("description", { required: true })} label="Message" placeholder="Write you message..." />


                                        <div className="flex items-center justify-between">
                                            <Button type='submit' className='text-white mx-auto bg-slate-700 px-5 mt-2 ' size="sm">Added Task</Button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddTask;