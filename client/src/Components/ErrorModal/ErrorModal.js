import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ErrorModal = props => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Error</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{props.message}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ErrorModal;
