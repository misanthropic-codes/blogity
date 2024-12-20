"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface LayoutProps {
  children: React.ReactNode;
  session: Session | null;
}

export default function Layout({ children, session }: LayoutProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
