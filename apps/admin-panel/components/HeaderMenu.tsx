import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { UiButton } from '@vortex/ui/button';
import { useContext } from 'react';
import DarkModeContext from './DarkModeContext';

const HeaderMenu = () => {
  const { theme, setTheme } = useContext(DarkModeContext);

  return (
    <>
      <div className="flex justify-between px-2 py-3">
        <div></div>
        <div className="inline-flex">
          {theme === 'dark' && (
            <UiButton
              className="p-2 rounded-full hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-white"
              onClick={() => setTheme('light')}
              type="button"
            >
              <SunIcon className="h-6 w-6 text-gray-200" />
            </UiButton>
          )}
          {theme === 'light' && (
            <UiButton
              className="p-2 rounded-full hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-white"
              onClick={() => setTheme('dark')}
              type="button"
            >
              <MoonIcon className="h-6 w-6 text-purple-500 " />
            </UiButton>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
