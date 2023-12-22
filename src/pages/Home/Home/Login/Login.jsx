import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../../../assets/LoginImgNext.png'
import { Button, Input, Password } from "rizzui";
import useAuth from '../../../../hooks/useAuth';
import { useForm } from "react-hook-form"
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const { login, googleSignIn } = useAuth()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        login(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                {
                    navigate(location.state ? location.state : '/')
                }
            })
            .catch(error => { console.log(error); })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        navigate('/')
    }

    return (
        <>
            <div className='max-w-screen-xl mx-auto'>
                <div className="flex flex-col md:flex-row  h-[100vh]">
                    <div className=" flex-1  ">
                        <img className='pt-[32%]' src={loginImg} alt="" />
                    </div>
                    <div className="flex-1 mt-[10%]">
                        <section >
                            <div className="">
                                <div
                                    className="first-letter:w-full px-0 pt-5 pb-10 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 lg:w-8/12   md:px-6 sm:mt-8 sm:mb-5"
                                >
                                    <h1 className="mb-6 text-3xl font-semibold  text-left text-gray-800 sm:text-center py-4">Log in to your account</h1>
                                    <form onSubmit={handleSubmit(onSubmit)} className="pb-1 space-y-4">

                                        <Input className='text-2xl font-semibold' {...register("email", { required: true })} label="Email" type='email' placeholder="Enter your email" variant="active" />
                                        <Password className='text-2xl font-semibold' {...register("password", { required: true })} label="Password" placeholder="Enter your password" variant="active" />
                                        <div className="flex items-center justify-between">
                                            <Button type='submit' className='text-white mx-auto bg-slate-700 px-5 mt-2 ' size="sm">Login</Button>
                                        </div>

                                        <div className="text-center">
                                            <div className="mt-5">
                                                <p className=" flex justify-center items-center "><span className="border-1 border-black w-[20px] mr-3"><hr /></span>Login with social accounts <span className="border-1 w-[20px] ml-3"><hr /></span></p>
                                            </div>
                                            <div className="flex justify-center items-center gap-6 mt-2 text-black">
                                                <div className="text-center">
                                                    <button onClick={handleGoogleSignIn} className="">
                                                        <FcGoogle className="text-3xl"></FcGoogle>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex justify-center mt-4 text-black">
                                    <p>Dont have an account?<span className="font-semibold"><Link className="text-[#00719B] underline ml-2" to="/signup">sign up</Link></span></p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;