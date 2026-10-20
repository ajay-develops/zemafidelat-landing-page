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
import { cn, withAnchorBase } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileDrawer({ anchorBase = "" }: { anchorBase?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        aria-label="Open menu"
        className="flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-forest/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <MenuIcon className="size-6" aria-hidden />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6">
          <DrawerTitle className="sr-only">Navigation menu</DrawerTitle>
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <Icons.logo className="h-9 w-auto" decorative />
            <span className="font-display text-xl font-bold">
              {siteConfig.name}
            </span>
          </Link>
        </DrawerHeader>
        <nav aria-label="Main" className="flex flex-col px-6 pb-2">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={withAnchorBase(link.href, anchorBase)}
              className="py-3 text-lg font-medium text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </nav>
        <DrawerFooter className="px-6 pb-8">
          <a
            href={withAnchorBase(siteConfig.links.launch, anchorBase)}
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-12 rounded-full text-base font-bold"
            )}
            onClick={() => setOpen(false)}
          >
            {siteConfig.cta}
          </a>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
