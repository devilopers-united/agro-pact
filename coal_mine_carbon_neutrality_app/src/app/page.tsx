import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function Home() {
  // const session = useSession();
  return (
    <>
      <Button variant="outline">hello</Button>
      <div></div>
    </>
  );
}
