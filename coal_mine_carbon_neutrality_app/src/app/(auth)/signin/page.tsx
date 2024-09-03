"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      window.location.href = "/";
    } else {
      console.log(result?.error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex align-middle gap-28">
          <div>
            <div className="text-5xl">Signin</div>
            <div className="m-10">
              {" "}
              New user ?
              <div>
                <button onClick={() => router.push("/signup")}>Signup</button>
              </div>
            </div>
          </div>
          <form onSubmit={handleSignIn}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="text-black"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="text-black"
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}
