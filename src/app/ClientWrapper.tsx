// ClientWrapper.tsx (Client Component)
"use client";

import { useEffect, useState } from "react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.documentElement.classList.add("light"); // default theme
  }, []);

  if (!isMounted) return null; // avoids FOUC

  return <>{children}</>;
}
