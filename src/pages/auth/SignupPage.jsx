import React from "react";
import Button from "../../Components/ui/button/Button";
import { PasswordInput } from "../../Components/ui/PasswordInput";
import { IconAccountCircle, IconMail } from "../../assets/icons/InterfaceIcons";
import { IconTextBox } from "../../Components/ui/IconTextBox";
import { InputGroup } from "../../Components/ui/InputGroup";

export const SignupPage = () => {
  return (
     <div className="w-full md:w-auto items-center justify-center flex flex-col gap-6 md:min-w-[356px]">
      <div className="flex-shrink-0 flex gap-4 flex-col items-center justify-center  max-w-[500px]">
        <img
          src="/svgs/brand-logos/logo-flowbee-secondary.svg"
          alt="Logo"
          className=" w-[10rem]"
        />
        <h4 className="text-[20px] mt-4 font-bold text-gray-800">
          Sign into Flowbee
        </h4>
      </div>

      <div className=" relative w-full md:w-auto md:min-w-[546px] h-fit mx-4 md:p-6 p-4 py-8 mt-9 text-left text-sm bg-white rounded-xl border border-gray-100 shadow-sm ">
        <div className="absolute inset-x-0 bottom-0 h-24  dotted-button-bg"></div>

        <form className="mt-6 space-y-5 relative ">
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
              // value={formData.userName}
              // onChange={handleInputChange}
              placeholder="Username or email"
            />
          </InputGroup>

          <InputGroup
            id="mob"
            name="mob"
            label="Phone Number"
            errorMessage={""}
          >
            <PhoneInput
              setNumber={(mob) => {}}
              placeholder="Mobile Number"
              intlProps={{
                inputProps: {
                  name: "mob",
                  id: "mob",
                  className: inputboxVariants({
                    size: "md",
                    className: "w-full",
                  }),
                },
              }}
            />
          </InputGroup>

          <InputGroup id="email" name="email" label="Email Address">
            <IconTextBox
              prefix={<IconMail />}
              name="userName"
              id="userName"
              // value={formData.userName}
              // onChange={handleInputChange}
              placeholder="Email Address"
            />
          </InputGroup>

          <InputGroup
            label="Password"
            labelClassName="font-medium"
            name="password"
            id="password"
          >
            <PasswordInput
              name="password"
              id="password"
              // value={formData.password}
              // onChange={handleInputChange}
              placeholder="Set Password"
              // inputClassName={!formErrors?.password && ""}
              // hasError={!!formErrors?.password}
              // errorMessage={formErrors?.password}
            />
            {/* {formErrors.password && (
              <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
            )} */}
          </InputGroup>

          {/*  Sign In Button */}
          <Button
            variant="secondary"
            type="submit"
            className="w-full mt-4 bg-[#191C1E] cursor-pointer  text-white rounded-xl"
            // disabled={isLoading}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};
