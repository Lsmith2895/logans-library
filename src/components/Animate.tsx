import { useEffect, useState, type ReactNode } from 'react';

interface AnimateProps {
  className?: string;
  children: ReactNode;
}

function Animate({ children, className = '' }: AnimateProps) {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  return (
    <div
      className={`transform transition-all duration-600 ease-out ${animateIn ? 'scale-100 opacity-100' : 'scale-85 opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}

export { Animate };
