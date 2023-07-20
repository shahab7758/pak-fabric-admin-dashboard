import { UserButton } from "@clerk/nextjs";

import { MainNav } from "@/components/main-nav";
import StoreSwticher from "@/components/store-switcher";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwticher />
        <MainNav className="mx-6" />
        <div className="flex ml-auto items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
