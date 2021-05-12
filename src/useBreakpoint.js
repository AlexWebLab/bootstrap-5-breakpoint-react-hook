import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [Breakpoint, setBreakpoint] = useState(getBreakpoint());

  const resizeEvent = () => {
    setBreakpoint(getBreakpoint())
  }

  useEffect(() => {
    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, [])

  return Breakpoint;
}

const getBreakpoint = () => {
  let Breakpoint = null;

  if (typeof window !== 'undefined') {
    if (window.matchMedia('(min-width: 1400px)').matches) {
      Breakpoint = 'xxl';
    } else if (window.matchMedia('(min-width: 1200px)').matches) {
      Breakpoint = 'xl';
    } else if (window.matchMedia('(min-width: 992px)').matches) {
      Breakpoint = 'lg';
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      Breakpoint = 'md';
    } else if (window.matchMedia('(min-width: 576px)').matches) {
      Breakpoint = 'sm';
    } else {
      Breakpoint = 'xs';
    }
  }

  return Breakpoint;
}

export default useBreakpoint;