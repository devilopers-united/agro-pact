"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (res.ok) {
      router.push("/api/auth/signin");
    } else {
      // Handle error
      console.log("Signup failed");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex align-middle gap-28">
          <div>
            <div className="text-5xl">Signup</div>
            <div className="m-10">
              {" "}
              Already have an account ?
              <div>
                <button onClick={() => router.push("/api/auth/signin")}>
                  Signin
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="text-black"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className=" text-black"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className=" text-black"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}
