import HeaderMenu from '../components/HeaderMenu';
export function Index() {

  return (
    <>
      <div className="container mx-auto">
        <HeaderMenu />
        <div id="welcome">
          <h1 className='dark:text-gray-200'>
            <span> Hello there, </span>
            Welcome admin-panel 👋
          </h1>
          
        </div>
      </div>
    </>
  );
}

export default Index;
