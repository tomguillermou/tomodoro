import ReactModal from 'react-modal'

import styles from '../styles/modals.module.scss'

export default function JoinRoomModal({ isOpen, closeModal }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <div className="d-flex flex-column">
        <h2 className="text-center mb-4">Rejoindre un salon</h2>
        <form className="mb-4">
          <div className="form-floating">
            <input
              className="form-control"
              type="text"
              id="floatingInput"
              placeholder="Nom du salon"
            />
            <label htmlFor="floatingInput">Nom du salon</label>
          </div>
        </form>
        <div className="d-flex flew-row">
          <button className="button-25 mx-auto" onClick={closeModal}>
            Annuler
          </button>
          <button className="button-24 mx-auto">Rejoindre le salon</button>
        </div>
      </div>
    </ReactModal>
  )
}
