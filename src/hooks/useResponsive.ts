import { useEffect } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { BREAKPOINTS_SIZES, LARGE, MEDIUM, SMALL, XLARGE, XSMALL } from '@/constants/app.constant';
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
      dispatch(setCurrentScreenSize(SMALL));
    } else if (
      window.innerWidth >= BREAKPOINTS_SIZES.MEDIUM &&
      window.innerWidth < BREAKPOINTS_SIZES.LARGE
    ) {
      dispatch(setCurrentScreenSize(MEDIUM));
    } else if (
      window.innerWidth >= BREAKPOINTS_SIZES.LARGE &&
      window.innerWidth < BREAKPOINTS_SIZES.XLARGE
    ) {
      dispatch(setCurrentScreenSize(LARGE));
    } else if (window.innerWidth >= BREAKPOINTS_SIZES.XLARGE) {
      dispatch(setCurrentScreenSize(XLARGE));
    } else {
      dispatch(setCurrentScreenSize(XSMALL));
    }
  };

  useEffect(() => getCurrentDevice(), []);

  useEffect(() => {
    window.addEventListener('resize', throttle(getCurrentDevice, 300));
    return () => window.removeEventListener('resize', getCurrentDevice);
  }, [currentScreenSize]);

  return { currentScreenSize };
};
