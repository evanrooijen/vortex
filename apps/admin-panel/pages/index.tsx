import { useQuery } from '@tanstack/react-query';
import HeaderMenu from '../components/HeaderMenu';
import { getUsers } from '../lib/users';
export function Index() {
  const { data } = useQuery(['users'], getUsers);

  return (
    <>
      <div className="container mx-auto">
        <HeaderMenu />
        <div id="welcome">
          <h1 className="dark:text-gray-200">
            <span> Hello there, </span>
            Welcome admin-panel 👋
          </h1>
          {data ? (
            <div className="grid grid-cols-5">
              {data.map((u) => (
                <div key={u.id}>{JSON.stringify(u, null, 2)}</div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Index;
