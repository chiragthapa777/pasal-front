import React, {useState} from "react";
import Modal from 'react-modal';

export default function DetailModal({open, setOpen}: any) {

    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = React.useState(false);
    return (
        <Modal
            style={{
                overlay: {
                    backgroundColor: window.localStorage.getItem("lightMode") === "true" ? "'rgba(255, 255, 255, 0.75)'" : "'rgba(0, 0, 0, 0.75)'"
                },
                content: {
                    border:''
                }
            }}
            isOpen={open}>
            <div className={`bg-base-100`}>
                <button onClick={() => {
                    setOpen(!open)
                }}>colse
                </button>
                this is modal
            </div>
        </Modal>
    )
}
