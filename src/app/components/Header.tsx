import { ToolTip } from "./ToolTip";
import Avator from "./Avatar";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
export default function Header() {
  return (
    <div className="w-4/5 h-24 fixed z-10 top-0 left-[50%] -translate-x-1/2">
      <div className="flex justify-between items-center px-10 py-6">
        <Avator />
        <div className="flex animate-fade-left animate-duration-1000 animate-delay-100">
          {/* <NavButton /> */}
          <Link href="/Posts" className="mr-12 font-bold hover:text-blue-600">
            Posts
          </Link>
          <ToolTip />
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
}
