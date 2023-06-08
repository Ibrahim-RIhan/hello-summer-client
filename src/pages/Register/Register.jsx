import { useContext, useState } from "react";
import image from "../../assets/images/HelloSummerLogo.png";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { signUpEmailPassword, logOut } = useContext(AuthContext)
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
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch("password", "");
    const onSubmit = data => {
        signUpEmailPassword(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                updateProfile(loggedUser, {
                    displayName: data.name,
                    photoURL: data.photo
                })
                    .then(() => {
                        reset();
                        logOut()
                            .then(() => { })
                            .catch(() => { })
                        navigate('/login')
                    })
                    .catch(() => { })
            })
            .catch(() => { })
    }
    return (
        <section className="bg-white ">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
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
                                        {passwordVisible ?
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
                                <input type="text" {...register("photo", { required: true })} className="input block input-bordered input-info w-full max-w-xs" />
                                {errors.photo?.type === 'required' && <p>Photo is required</p>}
                            </div>

                            {/* Submit Button  */}

                            <div className="form-control mt-6">
                                <input className="btn" type="submit" value="Register" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;