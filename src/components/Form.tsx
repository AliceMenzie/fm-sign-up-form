import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      className="h-[442px] w-[327px] bg-white flex flex-col items-center justify-around rounded-lg py-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="border text-grey capitalize font-bold w-[279px] h-[56px] rounded-md pl-[14px]"
        placeholder="first name"
        {...register("firstName", { required: true })}
      />
      {errors.firstName && <span>This field is required</span>}
      <input
        className="border text-grey capitalize font-bold w-[279px] h-[56px] rounded-md pl-[14px]"
        placeholder="Last Name"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && <span>This field is required</span>}
      <input
        className="border text-grey capitalize font-bold w-[279px] h-[56px] rounded-md pl-[14px]"
        placeholder="email address"
        {...register("email", { required: true })}
      />
      {errors.email && <span>This field is required</span>}
      <input
        className="border text-grey capitalize font-bold w-[279px] h-[56px] rounded-md pl-[14px]"
        placeholder="password"
        type="password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <input
        className="bg-green text-white uppercase w-[279px] h-[56px] rounded-md"
        type="submit"
        value="Claim your free trial"
      />
      <p className="text-center text-greyBlue">
        By clicking the button, you are agreeing to our {/* <span> */}
        <a className="text-red font-bold" href="###">
          Terms and Services
        </a>
        {/* </span> */}
      </p>
    </form>
  );
}
