import {Button, Modal} from "./components";
import {useState} from "react";

export function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <>
      <h1>Frontend task</h1>
      <Button onClick={() => setIsModalOpen(!isModalOpen)}>
        Open modal
      </Button>
        <Modal title='Delete subprocess 03A456 Picking smtg_long name'
               isOpen={isModalOpen}
               onDelete={() => setIsModalOpen(false)}
               onCancel={() => setIsModalOpen(false)}>
            Are you sure you want to delete this subprocess? This action cannot be undone.
        </Modal>
    </>
  )
}