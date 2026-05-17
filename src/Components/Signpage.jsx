import { useRef, useState } from "react";

import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../Utils/Firebase/Fiseauth";

function Signpage() {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const email = useRef();
  const password = useRef();

  const handleSignin = async (e) => {

    e.preventDefault();

    // Email Check
    if (!email.current.value) {
      setError("Enter Email");
      setSuccess("");
      return;
    }

    // Password Check
    if (password.current.value.length < 6) {
      setError("Password must be at least 6 characters");
      setSuccess("");
      return;
    }

    setError("");

    try {

      // Firebase Login
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

      console.log(
        "Login Success",
        userCredential.user
      );

      setSuccess("Login Successfully");

      // Clear Inputs
      email.current.value = "";
      password.current.value = "";

    } catch (error) {

      console.log(error);

      if (error.code === "auth/user-not-found") {

        setError("Email not found");

      } else if (
        error.code === "auth/wrong-password"
      ) {

        setError("Wrong Password");

      } else if (
        error.code === "auth/invalid-email"
      ) {
        setError("Invalid Email");
      } else if (
        error.code === "auth/invalid-credential"
      ) {

        setError("Invalid Email or Password");

      } else if (
        error.code === "auth/configuration-not-found"
      ) {

        setError(
          "Enable Email/Password Authentication in Firebase"
        );

      } else {

        setError(error.message);
      }

      setSuccess("");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <div className="w-full max-w-md bg-gray-900 text-white p-8 rounded-lg shadow-lg">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-3 text-center">
          Sign In
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Login with Firebase Authentication
        </p>

        {/* Form */}
        <form
          onSubmit={handleSignin}
          className="flex flex-col gap-4"
        >

          {/* Email */}
          <input
            ref={email}
            type="email"
            autoComplete="email"
            placeholder="Enter Email"
            className="p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-red-600"
          />

          {/* Password */}
          <input
            ref={password}
            type="password"
            autoComplete="current-password"
            placeholder="Enter Password"
            className="p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-red-600"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition py-3 rounded font-semibold"
          >
            Sign In
          </button>

        </form>

        {/* Error */}
        {
          error && (
            <p className="text-red-500 mt-4 text-center">
              {error}
            </p>
          )
        }

        {/* Success */}
        {
          success && (
            <p className="text-green-500 mt-4 text-center">
              {success}
            </p>
          )
        }

      </div>

    </div>
  );
}

export default Signpage;