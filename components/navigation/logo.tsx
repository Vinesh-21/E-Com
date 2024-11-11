import logo from "@/public/logo.svg";
import Image from "next/image";

export default function Logo() {
  return <Image src={logo} height={30} width={60} alt="logo-sprout&scribble" />;
}
