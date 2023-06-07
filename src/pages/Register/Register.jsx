import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import image from "../../assets/images/HelloSummerLogo.png";

const Register = () => {
    return (
        <section className="bg-white ">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <div>
                            <img className="w-full mx-auto" src={image} alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" required name="name" placeholder="Your Name" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name="email" placeholder="Your Email" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="Password" required placeholder="Your Password" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" required placeholder="Confirm Your Password" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Choose Your Photo</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                            </div>
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