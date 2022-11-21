import { useState } from 'react';

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  const handleModal = () => setValue((prev) => !prev);

  return [value, handleModal];
};

export default useToggle;
