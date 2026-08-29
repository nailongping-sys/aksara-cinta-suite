import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  assets as seedAssets,
  guests as seedGuests,
  invitations as seedInvitations,
  music as seedMusic,
  orders as seedOrders,
  prayers as seedPrayers,
  quotes as seedQuotes,
  rsvps as seedRsvps,
  sacredTexts as seedSacred,
  templates as seedTemplates,
  users as seedUsers,
  type Asset,
  type Guest,
  type Invitation,
  type Order,
  type Prayer,
  type Quote,
  type Role,
  type Rsvp,
  type SacredText,
  type Track,
  type Template,
  type User,
} from "@/data/mockData";

export type Session = { name: string; email: string; role: Role; tier: string } | null;

type StoreShape = {
  session: Session;
  users: User[];
  invitations: Invitation[];
  templates: Template[];
  prayers: Prayer[];
  quotes: Quote[];
  sacredTexts: SacredText[];
  music: Track[];
  assets: Asset[];
  rsvps: Rsvp[];
  orders: Order[];
  guests: Guest[];
};

const initialState: StoreShape = {
  session: null,
  users: seedUsers,
  invitations: seedInvitations,
  templates: seedTemplates,
  prayers: seedPrayers,
  quotes: seedQuotes,
  sacredTexts: seedSacred,
  music: seedMusic,
  assets: seedAssets,
  rsvps: seedRsvps,
  orders: seedOrders,
  guests: seedGuests,
};

const STORAGE_KEY = "aksara-cinta-store";

type StoreContextValue = StoreShape & {
  hydrated: boolean;
  setState: (updater: (state: StoreShape) => StoreShape) => void;
  signIn: (session: NonNullable<Session>) => void;
  signOut: () => void;
  resetMock: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setStateRaw] = useState<StoreShape>(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setStateRaw({ ...initialState, ...(JSON.parse(stored) as StoreShape) });
      } catch {
        setStateRaw(initialState);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const setState = useCallback((updater: (current: StoreShape) => StoreShape) => {
    setStateRaw((current) => updater(current));
  }, []);

  const value = useMemo<StoreContextValue>(
    () => ({
      ...state,
      hydrated,
      setState,
      signIn: (session) => setStateRaw((current) => ({ ...current, session })),
      signOut: () => setStateRaw((current) => ({ ...current, session: null })),
      resetMock: () => setStateRaw({ ...initialState, session: state.session }),
    }),
    [state, hydrated, setState],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("StoreProvider missing");
  return context;
}

export function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}
