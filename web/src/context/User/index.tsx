/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRole } from '@/models/UserRole';
import { createContext, useState } from 'react';

export const UserContext = createContext({
  userRole: 'client' as UserRole,
  login: (role: UserRole) => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const localUserRole = localStorage.getItem('userRole') as UserRole;
  const [userRole, setUserRole] = useState<UserRole>(localUserRole ?? 'client');

  const login = (role: UserRole) => {
    localStorage.setItem('userRole', role);
    setUserRole(role);
  };

  return (
    <UserContext.Provider value={{ userRole, login }}>
      {children}
    </UserContext.Provider>
  );
}
