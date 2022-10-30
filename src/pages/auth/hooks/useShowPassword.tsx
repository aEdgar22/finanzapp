import React, { useCallback, useState } from "react";

function useShowPassword(state: boolean) {
  const [show, setShow] = useState<boolean>(state);

  const handleClick = (): void => {
    setShow(!show);
  };

  return {show, handleClick};
}

export default useShowPassword;
