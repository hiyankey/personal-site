"use client";

import { createContext, type ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

import {
  type CounterStore,
  createCounterStore,
  type initCounterStore,
} from "./store";

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
);

export type CounterStoreProviderProps = {
  children: ReactNode;
  initialData: ReturnType<typeof initCounterStore>;
};

export const CounterStoreProvider = ({
  children,
  initialData,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi | null>(null);
  if (!storeRef.current) {
    storeRef.current = createCounterStore(initialData);
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export const useCounterStore = <T,>(
  selector: (store: CounterStore) => T
): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error("useCounterStore must be used within CounterStoreProvider");
  }

  return useStore(counterStoreContext, selector);
};
