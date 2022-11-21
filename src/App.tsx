import { Modal } from './components';
import useModal from './hooks/useModal';

const App = () => {
  const { isOpenModal, handleModal } = useModal();

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
