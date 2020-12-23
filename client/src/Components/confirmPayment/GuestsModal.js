import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";


import "./guests.css";


let GuestsModal = (props) => {
    const [show, setShow] = useState(false); //for modal



    // const inc = () => { props.aduldNumberSet(props.aduldNumber + 1); return false; }
    // const dec = () => { props.aduldNumberSet(props.aduldNumber - 1); return false }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section id="guests-modal">
            <b role="button" variant="primary" onClick={handleShow}>
                Edit</b>

            <Modal show={show} onHide={handleClose} animation={false}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Guests</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <b className="col">Adults</b>
                        <div className="col-6">
                            <button className="btn rounded-circle" onClick={props.aduldNumber > 0 ? () => { props.aduldNumberSet(props.aduldNumber - 1); return false } : null}>-</button>
                            <span className="m-2">{props.aduldNumber}</span>
                            <button className="btn rounded-circle" onClick={() => { props.aduldNumberSet(props.aduldNumber + 1); return false; }}>+</button>
                        </div>
                        <b className="col">children</b>
                        <div className="col-6">
                            <button className="btn rounded-circle" onClick={props.childNumber > 0 ? () => { props.childNumberSet(props.childNumber - 1); return false } : null}>-</button>
                            <span className="m-2">{props.childNumber}</span>
                            <button className="btn rounded-circle" onClick={() => { props.childNumberSet(props.childNumber + 1); return false; }}>+</button>
                        </div>
                        <b className="col">infants</b>
                        <div className="col-6">
                            <button className="btn rounded-circle" onClick={props.infantNumber > 0 ? () => { props.infantNumberSet(props.childNumber - 1); return false } : null}>-</button>
                            <span className="m-2">{props.infantNumber}</span>
                            <button className="btn rounded-circle" onClick={() => { props.infantNumberSet(props.infantNumber + 1); return false; }}>+</button>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default GuestsModal;