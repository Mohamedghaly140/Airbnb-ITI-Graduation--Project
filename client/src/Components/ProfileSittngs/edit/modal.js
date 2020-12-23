import React from "react";
import { Modal, Button } from "react-bootstrap";
import { RiVisaFill, RiMastercardLine, RiPaypalLine, RiLock2Line } from "react-icons/ri"



function Modael(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add payment method
                    <div className="row" className="m-2"><RiVisaFill /><RiMastercardLine /><RiPaypalLine /></div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3">
                <form>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">First name</label>
                            <input type="text" className="form-control mb-2" placeholder="First name" />
                        </div>
                        <div className="col">
                            <label htmlFor="">Last name</label>
                            <input type="text" className="form-control mb-2" placeholder="Last name" />
                        </div>
                    </div>
                    <label htmlFor="">Card info</label>
                    <input type="text" name="" id="" className="form-control mb-2" placeholder="Card number" />
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control mb-2" placeholder="Expiration" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control mb-2" placeholder="CVV" />
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer className="mr-auto">
                <Button onClick={props.onHide} className=""><RiLock2Line className="m-1" />Done</Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default Modael; 