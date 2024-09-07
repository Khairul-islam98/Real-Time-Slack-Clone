import { UserButton } from "@/features/auth/components/user-button";
import { WorkspaceSwitcher } from "./workspace-switcher";

export const SideBar = () => {
    return (
        <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
            <WorkspaceSwitcher />
            <div className="flex flex-col items-center justify-center gap-y-1 mt-auto"><UserButton /></div>
        </aside>
    );
};

