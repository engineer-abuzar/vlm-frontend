export type Role = "student" | "parent" | "teacher";

export interface RoleOption {
  id: Role;
  label: string;
  description: string;
  icon: string; // lucide icon name
}

export interface LoginPayload {
  phone?: string;
  email?: string;
  password?: string;
}

export interface AuthUser {
  id: string;
  name: string;
  role: Role;
  token: string;
}
