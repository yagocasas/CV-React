import { useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useMemo } from 'react';

const useColor = () => {
  const { colorMode } = useColorMode();

  const setColor = (light, dark) => (colorMode === 'light' ? light : dark);

  const appBackground = useMemo(() => setColor('white', 'black'), [colorMode]);
  const primarySecondary = useMemo(() => setColor('brand.primary', 'brand.secondary'), [colorMode]);
  const secondaryPrimary = useMemo(() => setColor('brand.secondary', 'brand.primary'), [colorMode]);
  const primaryWhitesmoke = useMemo(() => setColor('brand.primary', 'whitesmoke'), [colorMode]);
  const whitesmokePrimary = useMemo(() => setColor('whitesmoke', 'brand.primary'), [colorMode]);
  const whitesmokeSecondary = useMemo(() => setColor('whitesmoke', 'brand.secondary'), [colorMode]);
  const whiteBlack = useMemo(() => setColor('white', 'black'), [colorMode]);
  const blackWhite = useMemo(() => setColor('black', 'white'), [colorMode]);
  const blackOrange = useMemo(() => setColor('black', 'orange'), [colorMode]);
  const grays = useMemo(() => setColor('gray.200', 'gray.900'), [colorMode]);
  const adminContainer = useMemo(() => setColor('gray.200', 'gray.800'), [colorMode]);
  const reverseAdminContainer = useMemo(() => setColor('gray.800', 'gray.200'), [colorMode]);
  const ratingGrays = useMemo(() => setColor('gray.600', 'gray.400'), [colorMode]);
  const priceDefaultColor = useMemo(() => setColor('gray.700', 'gray.400'), [colorMode]);
  const priceOnSaleColor = useMemo(() => setColor('gray.400', 'gray.700'), [colorMode]);
  const darkLightText = useMemo(() => setColor('oscuro', 'claro'), [colorMode]);
  const SwitchIcon = useMemo(() => setColor(FaMoon, FaSun), [colorMode]);


  return {
    setColor,
    whiteBlack,
    appBackground,
    primarySecondary,
    secondaryPrimary,
    primaryWhitesmoke,
    whitesmokePrimary,
    whitesmokeSecondary,
    grays,
    blackWhite,
    darkLightText,
    SwitchIcon,
    priceDefaultColor,
    priceOnSaleColor,
    ratingGrays,
    adminContainer,
    reverseAdminContainer,
    blackOrange,
  };
};

export default useColor;
