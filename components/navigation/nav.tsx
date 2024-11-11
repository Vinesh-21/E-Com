import { auth } from "@/server/auth";
import Logo from "./logo";
import { UserButton } from "./user-button";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default async function Nav() {
  const session = await auth();
  console.log(session);
  return (
    <header className="bg-slate-500 py-4">
      <nav>
        <ul className=" px-2 flex  justify-between ">
          <li>
            Logo
            {/* <Logo /> */}
          </li>

          {!session ? (
            <li>
              <Button asChild>
                <Link
                  className="py-2 px-3 flex items-center gap-2"
                  href="/auth/login"
                >
                  <span>Login</span>
                  <LogIn size={16} />
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton
                expires={session?.expires || ""}
                user={session?.user}
              />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
