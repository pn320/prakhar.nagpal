import { IconButton, useColorMode } from '@chakra-ui/react';
import { IoMoonSharp } from 'react-icons/io5';
import { TbSun } from 'react-icons/tb';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <IconButton
      position="fixed"
      top={4}
      right={4}
      icon={isDark ? <TbSun /> : <IoMoonSharp />}
      aria-label="Toggle Theme"
      variant={'ghost'}
      onClick={toggleColorMode}
    />
  )
}
