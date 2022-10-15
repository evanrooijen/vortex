export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

export const getUsers = (): Promise<User[]> => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  );
};
