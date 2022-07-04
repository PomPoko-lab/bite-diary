import { Box, Spinner, useMediaQuery } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';

// Lazy Loading Navs
const DesktopNav = lazy(() => import('./DesktopNav'));
const MobileNav = lazy(() => import('./MobileNav'));

const Header = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Box as='header' p='2' maxW='container.2xl' zIndex='1' shadow='base'>
      <Suspense
        fallback={
          <Spinner
            speed='1s'
            m='auto'
            display='block'
            size='xl'
            color='green.400'
            emptyColor='gray.100'
          />
        }
      >
        {isLargerThan600 ? <DesktopNav /> : <MobileNav />}
      </Suspense>
    </Box>
  );
};

export default Header;
