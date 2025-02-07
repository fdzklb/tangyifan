import { useEffect, useRef, useState } from 'react';

const useOnScreen = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false); // 新增状态来跟踪是否已经进入过视口

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIntersecting(true);
          setHasIntersected(true); // 设置为 true 以确保只执行一次
        }
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, hasIntersected]); // 添加 hasIntersected 作为依赖项

  return [ref, isIntersecting] as const;
};

export default useOnScreen;