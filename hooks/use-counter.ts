'use client';

import { useState, useCallback } from 'react';

interface UseCounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
}

export function useCounter({ initialValue = 0, min, max }: UseCounterProps = {}) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => {
      const newValue = prev + 1;
      if (max !== undefined && newValue > max) {
        return prev;
      }
      return newValue;
    });
  }, [max]);

  const decrement = useCallback(() => {
    setCount(prev => {
      const newValue = prev - 1;
      if (min !== undefined && newValue < min) {
        return prev;
      }
      return newValue;
    });
  }, [min]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const setValue = useCallback((value: number) => {
    if (min !== undefined && value < min) {
      setCount(min);
      return;
    }
    if (max !== undefined && value > max) {
      setCount(max);
      return;
    }
    setCount(value);
  }, [min, max]);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
}