import { useState, useEffect } from 'react';

export function useHeroRotation(length: number, intervalMs = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [length, intervalMs]);

  return currentIndex;
}
