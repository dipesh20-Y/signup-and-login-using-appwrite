import React,{forwardRef, useState} from "react";

const Password = forwardRef(function Password({
  placeholder='Enter your Password',
  props
},ref)
{
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const toggleIcon = (e) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  return(
    <div className="relative">
              <input
                className="p-2 mb-2 border hover:bg-gray-50 w-full mt-2 rounded-lg"
                type={isPasswordVisible ? "text" : "password"}
                placeholder={placeholder}
                ref={ref}
              />
              <button
                onClick={toggleIcon}
                className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
              >
                {isPasswordVisible ? (
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="gray"
                      strokeWidth="2"
                      d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                    />
                    <path
                      stroke="gray"
                      strokeWidth="2"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="gray"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
  )
  
}
)


export default Password;
