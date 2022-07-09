import Head from 'next/head'
import { useState } from 'react'

import CreateRoomModal from '../components/CreateRoomModal'
import JoinRoomModal from '../components/JoinRoonModal'
import styles from '../styles/home.module.scss'

export default function Home() {
  const [createRoomIsOpen, setCreateRoomIsOpen] = useState(false)

  function openCreateRoomModal() {
    setCreateRoomIsOpen(true)
  }

  function closeCreateRoomModal() {
    setCreateRoomIsOpen(false)
  }

  const [joinRoomIsOpen, setJoinRoomIsOpen] = useState(false)

  function openJoinRoomModal() {
    setJoinRoomIsOpen(true)
  }

  function closeJoinRoomModal() {
    setJoinRoomIsOpen(false)
  }

  return (
    <div>
      <Head>
        <title>Tomodoro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CreateRoomModal
        isOpen={createRoomIsOpen}
        closeModal={closeCreateRoomModal}
      />

      <JoinRoomModal isOpen={joinRoomIsOpen} closeModal={closeJoinRoomModal} />

      <div className={styles.HomeContainer}>
        <h1 className="text-center">Tomodoro</h1>
        <p className="text-center mb-4">
          Seul on va plus vite, à plusieurs on va plus loin.
        </p>

        <div className="d-flex justify-content-between">
          <button className="button-24 mx-3" onClick={openCreateRoomModal}>
            Créer un salon
          </button>
          <button className="button-24 mx-3" onClick={openJoinRoomModal}>
            Rejoindre un salon
          </button>
        </div>
      </div>
    </div>
  )
}
