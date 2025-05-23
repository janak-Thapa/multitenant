"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NavSidebar = ({ items, open, onOpenChange }: Props) => {
  const pathname = usePathname();

  // Automatically close sidebar on route change
  useEffect(() => {
    if (open) {
      onOpenChange(false);
    }
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-left p-4 flex items-center text-base font-medium
                bg-transparent
                hover:bg-pink-600 hover:text-white
                active:bg-pink-700 active:text-white
                focus:bg-pink-600 focus:text-white focus:outline-none
                transition-colors duration-200"
            >
              {item.children}
            </Link>
          ))}

          <div className="border-t">
            <Link
              href="/sign-in"
              className="w-full text-left p-4 flex items-center text-base font-medium
                bg-transparent
                hover:bg-pink-600 hover:text-white
                active:bg-pink-700 active:text-white
                focus:bg-pink-600 focus:text-white focus:outline-none
                transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="w-full text-left p-4 flex items-center text-base font-medium
                bg-transparent
                hover:bg-pink-600 hover:text-white
                active:bg-pink-700 active:text-white
                focus:bg-pink-600 focus:text-white focus:outline-none
                transition-colors duration-200"
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NavSidebar;