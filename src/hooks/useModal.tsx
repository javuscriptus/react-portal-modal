import { useState } from 'react';

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => setIsOpenModal((prev) => !prev);

  return { isOpenModal, handleModal };
};

export default useModal;
