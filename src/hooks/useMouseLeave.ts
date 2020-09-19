import { RefObject, useEffect } from 'react';

/**
 * MouseLeaveイベントが発火した際に、特定処理を実行するHooks
 * @param {RefObject<HTMLElement | null>} ref 対象のHTML ElementのRefオブジェクト
 * @param {() => void} onMouseLeave MouseLeaveが発火した際に実行する関数
 */

const useMouseLeave = (
  ref: RefObject<HTMLElement | null>,
  onMouseLeave: () => void
) => {
  useEffect(() => {
    const { current: element } = ref;
    if (!element) return () => {};
    element.addEventListener('mouseleave', onMouseLeave);
    return () => {
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseLeave, ref]);
};

export default useMouseLeave;
