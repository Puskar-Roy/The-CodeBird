import { robot } from "../../assets";
import Button from "../Button";

const RegisterForm = () => {
  return (
    <div>
      <div className="backdrop-blur-2xl p-10 rounded-lg shadow-lg">
        <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
          <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
              <div className="w-[70px] h-[70px] aspect-auto">
                <img src={robot} alt="dsv" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch my-auto min-w-[240px]">
              <div className="text-base text-white">The CodeBird</div>
              <div className="mt-2 text-sm lg:text-n-1/50">
                Join Our Community by Registering with this Form
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-10">
          <div id="input" className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Name"
              value=""
            />
            
          </div>

          <div id="input" className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Roll No"
              value=""
            />
            
          </div>

          <div id="input" className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Department"
              value=""
            />
            
          </div>

          <div id="input" className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Current Year"
              value=""
            />
           
          </div>

          <div id="input" className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="E-mail"
              value=""
              disabled=""
            />
          
          </div>

          <div id="input" className="relative">
            <input
              type="phone"
              id="floating_outlined"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Phone"
              value=""
            />
          
          </div>
        </div>

        <div className="sm:flex sm:flex-row-reverse flex gap-4">
          <Button>Register</Button>
          <Button>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
