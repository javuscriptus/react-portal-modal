import { useState } from 'react';

import { Modal } from './components';

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => setIsOpenModal((prev) => !prev);

  return (
    <>
      <button onClick={handleModal}>{isOpenModal ? 'Закрыть' : 'Открыть'}</button>
      <Modal isOpen={isOpenModal} onClose={handleModal}>
        Modal
      </Modal>
    </>
  );
};

export default App;
