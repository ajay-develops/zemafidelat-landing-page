"use client";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const drawerNavLinks = siteConfig.navLinks.filter(
  (link) => link.text !== "Download"
);

export function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger aria-label="Open menu">
        <IoMenuSharp className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6">
          <DrawerTitle className="sr-only">Navigation menu</DrawerTitle>
          <Link
            href="/"
            title="brand-logo"
            className="relative flex items-center space-x-2"
            onClick={() => setOpen(false)}
          >
            <Icons.logo className="w-auto h-[40px]" />
            <span className="font-bold text-xl">{siteConfig.name}</span>
          </Link>
        </DrawerHeader>
        <nav className="flex flex-col gap-4 px-6 pb-4">
          {drawerNavLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="text-lg font-medium text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </nav>
        <DrawerFooter>
          <Link
            href={siteConfig.links.download}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "text-white rounded-full group"
            )}
            onClick={() => setOpen(false)}
          >
            {siteConfig.cta}
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
