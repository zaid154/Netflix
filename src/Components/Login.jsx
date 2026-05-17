import { useRef, useState } from "react";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../Utils/Firebase/Fiseauth";
import { emailRegex } from "../Utils/Validation/LoginRJ";

const Login = () => {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const email = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Email Validation
    const result = emailRegex(email.current.value);

    if (result) {
      setError(result);
      setSuccess("");
      return;
    }

    // Password Validation
    if (password.current.value.length < 6) {
      setError("Password must be at least 6 characters");
      setSuccess("");
      return;
    }

    setError("");

    try {

      // Firebase Signup
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

      console.log(
        "Signup Success",
        userCredential.user
      );

      setSuccess("Account Created Successfully");

      // Clear Inputs
      email.current.value = "";
      password.current.value = "";

    } catch (error) {

      console.log(error);

      if (error.code === "auth/email-already-in-use") {
        setError("Email already exists");
      }
      else if (error.code === "auth/invalid-email") {
        setError("Invalid Email");
      }
      else if (error.code === "auth/weak-password") {
        setError("Weak Password");
      }
      else {
        setError(error.message);
      }

      setSuccess("");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">

        {/* Heading */}
        <h1 className="text-white text-4xl font-bold text-center mb-4">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Signup with Firebase Authentication
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >

          {/* Email */}
          <input
            ref={email}
            type="email"
            placeholder="Enter Email"
            className="p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-red-500"
          />

          {/* Password */}
          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            className="p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-red-500"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition py-3 rounded text-white font-semibold"
          >
            Sign Up
          </button>

        </form>

        {/* Error Message */}
        {
          error && (
            <p className="text-red-500 text-center mt-4">
              {error}
            </p>
          )
        }

        {/* Success Message */}
        {
          success && (
            <p className="text-green-500 text-center mt-4">
              {success}
            </p>
          )
        }

      </div>

    </div>
  );
};

export default Login;