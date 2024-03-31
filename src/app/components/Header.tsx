import DarkModeButton from "./DarkModeButton";
import { ToolTip } from "./ToolTip";
import Avator from "./Avatar";
export default function Header() {
  return (
    <div className="w-4/5 h-24 fixed z-10 top-0 left-[50%] -translate-x-1/2">
      <div className="animate-fade-down animate-duration-1000 animate-delay-500 animate-ease-out flex justify-between items-center px-10 py-6">
        <Avator />
        <div className="flex">
          {/* <NavButton /> */}
          <ToolTip />
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
}
