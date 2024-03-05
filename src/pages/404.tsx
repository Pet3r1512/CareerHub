import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="justify-center min-h-screen bg-contain bg-right flex items-center flex-col md:flex-row">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">{`404 - Not found`}</h1>
        <p className="text-lg">{`Sorry, the page you are looking for does not exist.`}</p>
        <p className="text-lg">{`Please go back to `}<Link href="/" className="text-primary underline" >Home</Link> </p>
      </div>
      <div className="h-[500px] relative w-[500px]">
        <Image src="/images/Ilustration.png" alt="" fill className="object-cover"/>
      </div>
    </div>
  );
}
