import { useState } from "react";
import { robot } from "../../assets";
import Button from "../Button";

const departmentMap = {
  "10": "CSE",
  "20": "ECE",
  "30": "IT",
  "40": "AEIE",
  "50": "EE",
  "60": "CE",
};

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    currentYear: "",
    email: "",
    phone: "",
  });

  const calculateCurrentYear = (rollNo) => {
    if (rollNo.length < 4) return ""; 

    const admissionYear = parseInt(rollNo.substring(0, 4)); 
    const currentYear = new Date().getFullYear(); 
    let yearInCollege = currentYear - admissionYear; 

    if (yearInCollege < 1) yearInCollege = 1; 
    if (yearInCollege > 4) yearInCollege = 4; 

    return yearInCollege;
  };

  const detectDepartment = (rollNo) => {
    if (rollNo.length < 6) return ""; 

    const deptCode = rollNo.substring(4, 6); 
    return departmentMap[deptCode] || ""; 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };

    if (name === "rollNo" && value.length >= 6) {
      updatedData.currentYear = calculateCurrentYear(value);
      updatedData.department = detectDepartment(value);
    }

    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
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
                Join Our Community by Registering with this Form
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mb-10">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="relative flex flex-col items-start">
              <label className="text-sm font-medium text-white mb-1 capitalize" htmlFor={key}>
                {key.replace(/([A-Z])/g, " $1").trim()}
              </label>
              {key === "department" ? (
                <select
                  name={key}
                  className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200"
                  value={value}
                  onChange={handleChange}
                  disabled 
                >
                  <option value="">Select Department</option>
                  {Object.values(departmentMap).map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  name={key}
                  className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200"
                  placeholder={key
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .replace(/^./, (str) => str.toUpperCase())}
                  value={value}
                  onChange={handleChange}
                  disabled={key === "currentYear"} 
                />
              )}
            </div>
          ))}

          <div className="sm:flex mt-3  sm:mt-0 flex-row-reverse md:justify-start justify-center  flex gap-4 col-span-2">
            <Button onClick={() => console.log(formData)}>Register</Button>
            <Button
              type="button"
              onClick={() =>
                setFormData({
                  name: "",
                  rollNo: "",
                  department: "",
                  currentYear: "",
                  email: "",
                  phone: "",
                })
              }
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
