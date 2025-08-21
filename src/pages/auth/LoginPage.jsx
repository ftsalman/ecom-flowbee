import React from "react";
import { InputGroup } from "../../Components/ui/InputGroup";
import { IconTextBox } from "../../Components/ui/IconTextBox";
import { IconAccountCircle } from "../../assets/icons/InterfaceIcons";
import { PasswordInput } from "../../Components/ui/PasswordInput";
import Button from "../../Components/ui/button/Button";
import { useNavigate } from "react-router-dom";

const INI_FORM_DATA = {
  userName: "",
  password: "",
  rememberMe: false,
};
export const LoginPage = () => {
  const [formData, setFormData] = useState(INI_FORM_DATA);
  const [formErrors, setFormErrors] = useState(INI_FORM_DATA);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData?.userName === "admin" && formData?.password === "123") {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setFormErrors({
        password: "Invalid username or password",
      });

      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="w-full md:w-auto items-center justify-center flex flex-col gap-6 md:min-w-[356px] ">
        <div className="flex-shrink-0 max-w-[500px]">
          <img
            src="/svgs/brand-logos/logo-flowbee-secondary.svg"
            alt="Logo"
            className=" w-[10rem]"
          />
        </div>

        <div className=" relative w-full md:w-auto md:min-w-[546px] h-fit mx-4 md:p-6 p-4 py-8 mt-10 text-left bg-white text-sm rounded-xl border border-gray-100 shadow-sm ">
          <div className="absolute inset-x-0 bottom-0 h-24  dotted-button-bg"></div>

          <div className="flex items-center justify-center">
            <h4 className="text-[20px] mt-4 font-bold text-gray-800">
              Login to Flowbee
            </h4>
          </div>
          <form className="mt-6 space-y-5 relative " onSubmit={handleSubmit}>
            <InputGroup
              // errorMessage={formErrors?.userName}
              label="Username or email"
              labelClassName="font-medium"
              name="userName"
              id="userName"
            >
              <IconTextBox
                prefix={<IconAccountCircle size="20" />}
                name="userName"
                id="userName"
                value={formData.userName}
                onChange={handleInputChange}
                placeholder="Username or email"
                inputClassName={
                  !formErrors?.userName && "border-brand-secondary-100"
                }
                hasError={!!formErrors?.userName}
              />
            </InputGroup>
            {/* Password */}
            <InputGroup
              label="Password"
              labelClassName="font-medium"
              name="password"
              id="password"
            >
              <PasswordInput
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                inputClassName={!formErrors?.password && ""}
                hasError={!!formErrors?.password}
                errorMessage={formErrors?.password}
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.password}
                </p>
              )}
            </InputGroup>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 rounded border-gray-300 accent-yellow-400"
              />
              <label
                htmlFor="rememberMe"
                className="text-sm text-gray-800 font-medium"
              >
                Remember Me
              </label>
            </div>

            {/* Log In Button */}
            <Button
              variant="secondary"
              type="submit"
              className="w-full mt-4 bg-[#191C1E] cursor-pointer  text-white rounded-xl"
              disabled={isLoading}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
