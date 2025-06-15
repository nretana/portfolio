import { useEffect } from 'react';
import { isBrowser, isMobile, isTablet } from 'react-device-detect';
import { BREAKPOINTS_SIZES } from '@/constants/app.constant';
import { useAppDispatch, useAppSelector } from '@/store';
import { setCurrentScreenSize } from '@/store/slices/themeSlice';
import { throttle } from '@/utils/throttle';

export const useResponsive = () => {
  const dispatch = useAppDispatch();
  const currentScreenSize = useAppSelector(
    (state) => state.theme.currentScreenSize
  );

  const getCurrentDevice = () => {
    const bodyElem = document.documentElement;
    bodyElem.classList.remove('mobile');
    bodyElem.classList.remove('tablet');
    if (isMobile && !isTablet) {
      bodyElem.classList.add('mobile');
    } else if (isMobile && isTablet) {
      bodyElem.classList.add('tablet');
    }

    if (
      window.innerWidth >= BREAKPOINTS_SIZES.SMALL &&
      window.innerWidth < BREAKPOINTS_SIZES.MEDIUM
    ) {
      dispatch(setCurrentScreenSize('small'));
    } else if (
      window.innerWidth >= BREAKPOINTS_SIZES.MEDIUM &&
      window.innerWidth < BREAKPOINTS_SIZES.LARGE
    ) {
      dispatch(setCurrentScreenSize('medium'));
    } else if (
      window.innerWidth >= BREAKPOINTS_SIZES.LARGE &&
      window.innerWidth < BREAKPOINTS_SIZES.XLARGE
    ) {
      dispatch(setCurrentScreenSize('large'));
    } else if (window.innerWidth >= BREAKPOINTS_SIZES.XLARGE) {
      dispatch(setCurrentScreenSize('xlarge'));
    } else {
      dispatch(setCurrentScreenSize('xsmall'));
    }
  };

  useEffect(() => getCurrentDevice(), []);

  useEffect(() => {
    window.addEventListener('resize', throttle(getCurrentDevice, 300));
    return () => window.removeEventListener('resize', getCurrentDevice);
  }, [currentScreenSize]);

  return { currentScreenSize };
};
