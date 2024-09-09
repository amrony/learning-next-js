'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleNavigate = () => {
    router.push('products')
  }

  console.log("router", router);
  return (
    <main className="flex min-h-screen flex-col gap-8 items-center p-24">
      <h1>Welcome to NEXT JS </h1>
      <Link href="/products">Navigate to products page</Link>
      <Link href="/account">Navigate to account page</Link>

      <h2 className="font-bold mt-3 text-lg">Alternative way to navagating using useRoute</h2>
      <button onClick={handleNavigate}>Navigate to products page using to use Route</button>
    </main>
  );
}
