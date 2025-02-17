import { useState } from "react";
import { robot } from "../../assets";
import Button from "../Button";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    } else if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" })); 
      console.log("Login Submitted", formData);
    }
  };

  return (
    <div>
      <div className="backdrop-blur-2xl p-10 rounded-lg shadow-lg">
        <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
          <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
              <img src={robot} alt="Logo" className="w-[70px] h-[70px]" />
            </div>
            <div className="flex flex-col justify-start items-start self-stretch my-auto min-w-[240px]">
              <div className="text-base text-white">The CodeBird</div>
              <div className="mt-2 text-sm lg:text-n-1/50">
                Welcome Back! Please Login
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1  gap-6 mb-10">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="relative flex flex-col items-start">
              <label
                className="text-sm font-medium text-white mb-1 capitalize"
                htmlFor={key}
              >
                {key.replace(/([A-Z])/g, " $1").trim()}
              </label>
              <input
                type={key === "password" ? "password" : "text"}
                name={key}
                id={key}
                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500"
                placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                value={value}
                onChange={handleChange}
              />
              {errors[key] && <div className="text-red-500 text-sm mt-2">{errors[key]}</div>}
            </div>
          ))}

          <div className="sm:flex mt-3 sm:mt-0 sm:flex-row-reverse flex gap-4 col-span-1">
            <Button type="submit">Login</Button>
            <Button
              type="button"
              onClick={() => setFormData({ email: "", password: "" })}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
