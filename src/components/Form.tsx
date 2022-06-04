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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && <span>This field is required</span>}
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      <input {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}

      <input type="submit" value="Claim your free trial" />
      <span>
        By clicking the button, you are agreeing to our Terms and Services
      </span>
    </form>
  );
}
