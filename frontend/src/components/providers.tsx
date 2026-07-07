"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "@/redux/store";
import { loadCredentials } from "@/redux/features/auth/authSlice";

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    // Restore persisted auth state on mount (client only)
    storeRef.current?.dispatch(loadCredentials());
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
