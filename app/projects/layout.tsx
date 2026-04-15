"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return <>{children}</>;
}
