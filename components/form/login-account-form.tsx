import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import PinInput from "react-code-input";

const LoginAccountForm = () => {
  const [error, setError] = useState(false);
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div>
        <div>
          <div>
            <h1 className="text-white text-2xl font-bold text-center">
              Profile Lock is currently On
            </h1>
            {error ? (
              <p className="text-red-500 text-center">Invalid PIN code</p>
            ) : (
              <p className="text-green-500 text-center">
                Enter your PIN code to unlock your profile
              </p>
            )}
          </div>
          <PinInput
            value={pin}
            onChange={(value) => setPin(value)}
            autoFocus
            inputMode="numeric"
            fields={6}
            type="password"
            name="password"
            disabled={isLoading}
            onComplete={(value) => {
              onSubmit(value);
            }}
            autoSelect={true}
            inputFocusStyle={{
              borderColor: "white",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LoginAccountForm;

