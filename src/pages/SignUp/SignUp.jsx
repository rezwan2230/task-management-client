import { Button, Input, Password } from "rizzui";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SignUpImg from '../../assets/LoginImg.png'


const SignUp = () => {

    const { createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(error => { console.log(error); })
                reset()
            })
    }

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="flex flex-col md:flex-row  h-[100vh]">

                <div className="flex-1 mt-[10%]">
                    <section >
                        <div className="">
                            <div
                                className="first-letter:w-full px-0 pt-5 pb-10 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 lg:w-8/12   md:px-6 sm:mt-8 sm:mb-5"
                            >
                                <h1 className="mb-6 text-3xl font-semibold  text-left text-gray-800 sm:text-center py-4">Create Your Account</h1>
                                <form onSubmit={handleSubmit(onSubmit)} className="pb-1 space-y-4">

                                    <Input className='text-2xl font-semibold' {...register("name", { required: true })} label="Name" type='text' placeholder="Enter your name" variant="active" />
                                    {errors.name && <span className="text-red-500 mt-1">Name is required</span>}

                                    <Input className='text-2xl font-semibold' {...register("photoURL", { required: true })} label="Photo URL" type='text' placeholder="Enter your email" variant="active" />
                                    {errors.photoURL && <span className="text-red-500 mt-1">photo URL is required</span>}

                                    <Input className='text-2xl font-semibold' {...register("email", { required: true })} label="Email" type='email' placeholder="Enter your email" variant="active" />
                                    {errors.name && <span className="text-red-500 mt-1">email is required</span>}

                                    <Password className='text-2xl font-semibold' {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}/
                                    })} label="Password" placeholder="Enter your password" variant="active" />
                                    {errors.password?.type === 'required' && <span className="text-red-500 mt-1">This field is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-500 mt-1">Password must be 6 character</span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-red-500 mt-1">Password must be less than 20 characters</span>}
                                    {errors.password?.type === 'pattern' && <span className="text-red-500 mt-1">Password must have one upperCase, one lowerCase, one Number and one Special character</span>}

                                    <div className="flex items-center justify-between">
                                        <Button type='submit' className='text-white mx-auto bg-slate-700 px-5 mt-2 ' size="sm">Sign Up</Button>
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-center mt-4 text-black">
                                <p>Already have an account?<span className="font-semibold"><Link className="text-[#00719B] underline ml-2" to="/login">sign in</Link></span></p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex-1 ">
                    <img className='pt-[25%]' src={SignUpImg} alt="" />
                </div>
            </div>


        </div>
    );
};

export default SignUp;