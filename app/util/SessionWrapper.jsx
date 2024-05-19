"use client";  // Bu, bileşenin istemci tarafında çalışacağını belirtir
import { SessionProvider } from "next-auth/react";
import React from "react";

const SessionWrapper = ({ children,  }) => {
  return <SessionProvider >{children}</SessionProvider>;
};

export default SessionWrapper;
