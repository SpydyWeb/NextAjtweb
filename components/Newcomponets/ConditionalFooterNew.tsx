"use client";

import { usePathname } from "next/navigation";
import { FooterNew } from "@/components/layout/footernew";

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Define the routes where you dont show the FooterNew
  const hideFooterOn = ["/homepage2", "/productcards"];

  if (hideFooterOn.includes(pathname)) return null;

  return <FooterNew />;
}
