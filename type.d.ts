declare module 'express' {
  interface Request {
    user: {
      id: number;
      first_name: string;
      role: Role;
    };
  }
}