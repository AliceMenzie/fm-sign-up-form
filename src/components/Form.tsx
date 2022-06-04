import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import iconError from "../assets/images/icon-error.svg";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("submitting form");

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ firstName: "", lastName: "", email: "", password: "" });
      console.log("submitted successfully");
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <form
      className="shadow-custom2 font-poppins h-[442px] md:h-[474px] w-[327px] md:w-[540px] bg-white flex flex-col items-center justify-around rounded-lg py-3 md:py-6 mt-6 
      "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative flex justify-center items-center flex-col">
        <input
          className={`border text-grey placeholder:capitalize placeholder:font-semibold focus:outline-purpleFocus focus:outline-[0.5px] w-[279px] md:w-[460px] h-[56px] rounded-md pl-[14px] ${
            errors.firstName && "border-2 border-red text-red focus:outline-red"
          }`}
          placeholder="first name"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <img className="absolute top-4 right-3" src={iconError} alt="error" />
        )}
        {errors.firstName && (
          <span className="text-red text-xs font-bold border-red self-end">
            First Name connot be empty
          </span>
        )}
      </div>
      <div className="relative flex justify-center items-center flex-col">
        <input
          className={`border text-grey placeholder:capitalize placeholder:font-semibold focus:outline-purpleFocus focus:outline-[0.5px] w-[279px] md:w-[460px] h-[56px] rounded-md pl-[14px] ${
            errors.lastName && "border-2 border-red text-red focus:outline-red"
          }`}
          placeholder="Last Name"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <img className="absolute top-4 right-3" src={iconError} alt="error" />
        )}
        {errors.lastName && (
          <span
            className="text-red text-xs font-bold border-red self-end
        "
          >
            Last Name cannot be empty
          </span>
        )}
      </div>
      <div className="relative flex justify-center items-center flex-col">
        <input
          className={`border text-grey placeholder:capitalize placeholder:font-semibold focus:outline-purpleFocus focus:outline-[0.5px] w-[279px] md:w-[460px] h-[56px] rounded-md pl-[14px] ${
            errors.email && "border-2 border-red text-red focus:outline-red"
          }`}
          placeholder="email address"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <img className="absolute top-4 right-3" src={iconError} alt="error" />
        )}
        {errors.email && (
          <span className="text-red text-xs font-bold border-red self-end">
            Looks like this is not an email
          </span>
        )}
      </div>
      <div className="relative flex justify-center items-center flex-col">
        <input
          className={`border text-grey placeholder:capitalize placeholder:font-semibold focus:outline-purpleFocus focus:outline-[0.5px] w-[279px] md:w-[460px] h-[56px] rounded-md pl-[14px] ${
            errors.password && "border-2 border-red text-red focus:outline-red"
          }`}
          placeholder="password"
          type="password"
          {...register("password", {
            required: true,
          })}
        />
        {errors.password && (
          <img className="absolute top-4 right-3" src={iconError} alt="error" />
        )}
        {errors.password && (
          <span className="text-red text-xs font-bold border-red self-end">
            Password cannot be empty
          </span>
        )}
      </div>

      <input
        className="cursor-pointer hover:brightness-110 shadow-custom font-poppins font-semibold bg-green text-white uppercase w-[279px] md:w-[460px] h-[56px] rounded-md "
        type="submit"
        value="claim your free trial"
      />
      <p className="font-poppins text-center text-greyBlue text-xs mx-10">
        By clicking the button, you are agreeing to our {/* <span> */}
        <a className="text-red font-bold" href="###">
          Terms and Services
        </a>
        {/* </span> */}
      </p>
    </form>
  );
}
