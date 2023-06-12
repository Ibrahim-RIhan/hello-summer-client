import { useContext, useState } from "react";
import image from "../../assets/images/HelloSummerLogo.png";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";


const Register = () => {
    useTitle("SignUp")
    const { signUpEmailPassword, signInGoogle, updateUserProfile, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [showPassword, setShowPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };
    const handlePasswordChange = (e) => {
        setShowPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then((result) => {
                const savedUser = { name: result.user.displayName, email: result.user.email, photo: result.user.photoURL, role: 'Student' ,category : 'New' }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire('User Created Successfully')
                    })
            })
            .catch((error) => {
                alert(error.message)
            });
    }
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch("password", "");
    const onSubmit = data => {
        signUpEmailPassword(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo: data.photo, role: 'Student', category : 'New' }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                 
                                    logOut()
                                        .then(() => {
                                            Swal.fire('User Created Successfully')
                                            reset();
                                            navigate('/login');
                                        })
                                        .catch(() => { })
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    return (
        <section className="bg-white ">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                            Register a new account
                        </h2>
                        <p className="mt-2 text-base text-gray-600">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                            >
                                Please login!
                            </Link>
                        </p>
                        <div>
                            <img className="w-full mx-auto" src={image} />
                        </div>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-emerald-400">

                        <form className="card-body" onSubmit={handleSubmit(onSubmit)} >

                            {/* Name  */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered input-info w-full max-w-xs" />
                                {errors.name?.type === 'required' && <p>Name is required</p>}
                            </div>

                            {/* Email     */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered input-info w-full max-w-xs" />
                                {errors.email && <p>Email is required</p>}
                            </div>

                            {/* Password  */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={passwordVisible ? "text" : "password"}
                                        name="password"
                                        value={showPassword}
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                        onChange={handlePasswordChange}
                                        placeholder="Your Password"
                                        className="input block input-bordered input-info w-full max-w-xs" />

                                    <span
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {passwordVisible ?
                                            <BsFillEyeSlashFill></BsFillEyeSlashFill>
                                            : <BsFillEyeFill></BsFillEyeFill>
                                        }
                                    </span>
                                </div>
                                {errors.password?.type === 'required' && <p>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p>Password Should be at least 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                            </div>


                            {/* Confirm Password  */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        {...register("confirmPassword", {
                                            required: true,
                                            validate: value =>
                                                value === password
                                        })}
                                        type={confirmPasswordVisible ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        placeholder="Confirm Your Password"
                                        className="input block input-bordered input-info w-full max-w-xs" />
                                    <span
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        {confirmPasswordVisible ?
                                            <BsFillEyeSlashFill></BsFillEyeSlashFill>
                                            : <BsFillEyeFill></BsFillEyeFill>
                                        }
                                    </span>
                                </div>
                                {errors.confirmPassword?.type === 'validate' && <p> Password Does not Match</p>}
                            </div>

                            {/* Photo  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Your Photo URl</span>
                                </label>
                                <input type="text"
                                    placeholder="Photo URL"
                                    {...register("photo", { required: true })} className="input block input-bordered input-info w-full max-w-xs" />
                                {errors.photo?.type === 'required' && <p>Photo is required</p>}
                            </div>

                            {/* Submit Button  */}

                            <div className="flex mt-4 flex-col items-center justify-center w-full lg:flex-row">
                                <div className="form-control">
                                    <input className="btn" type="submit" value="Register" />
                                </div>
                                <div className="divider lg:divider-horizontal">OR</div>
                                <div className=" space-y-3">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        type="button"
                                        className="btn"
                                    >
                                        <FcGoogle></FcGoogle> Google
                                    </button>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;