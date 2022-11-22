import { Modal, SimpleAnimatedModal } from './components';
import useModal from './hooks/useToggle';

const App = () => {
  const [isOpenModal, handleModal] = useModal(false);

  return (
    <>
      <button onClick={handleModal}>{isOpenModal ? 'Закрыть' : 'Открыть'}</button>
      <SimpleAnimatedModal isOpened={isOpenModal} onClose={handleModal}>
        Привет
      </SimpleAnimatedModal>
    </>
  );
};

export default App;
