import React from 'react';
import "./styles.css";
import Button from "../button/button";
import AlertIcon from '../../assets/alert.svg'
import useTimerExpired from "../../hooks/useTimerExpired";

interface ModalProps {
    title: string;
    children: string;
    isOpen: boolean;
    onDelete: () => void;
    onCancel: () => void;
}

const DURATION = 2000

const Modal: React.FC<ModalProps> = ({title,isOpen, children, onDelete, onCancel}) => {
    const isTimerExpired = useTimerExpired(DURATION, isOpen);

    if (!isOpen) {
        return null;
    }

    return (
        <div className='modal-wrapper'>
            <div className='modal'>
                <div className="modal__icon">
                    <img src={AlertIcon} alt="alert_icon" />
                </div>
                   <h4 className='modal__header'>{title}</h4>
                   <p className='modal__content'>{children}</p>
                <div className='modal__footer'>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button disabled={!isTimerExpired} variant='danger' onClick={onDelete}>Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;