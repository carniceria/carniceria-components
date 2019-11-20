import "./CCModal.scss";

import React, { Fragment, useState, Children } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const classNames = require('classnames');


const CCModal = ({
    backgroundModalColor,
    showModal,
	showBackgroundModal,
	children,
	widthCloseIcon,
	widthModal,
	maxWidthModal
}) => {
	const [modalOpen, setModalOpen] = useState(true);

	const buildModalBackgroundStyles = () => {
		return (
			{
				background: backgroundModalColor
			}
		)
	}

	const buildModalBackground = () => {
		if (!showModal || !showBackgroundModal) return null;

		return  (
			modalOpen &&
			<div
				onClick={() => setModalOpen(false)}
				className="cc-modal-background"
				style={buildModalBackgroundStyles()}
			/>
		)
	}

	const buildStylesModal = () => {
		return (
			{
				width: widthModal,
				maxWidth: maxWidthModal
			}
		)
	}

	const buildStylesCloseIcon = () => {
		return (
			{
				fontSize: `${widthCloseIcon}px`
			}
		)
	}

	const buildModal = () => {
		if (modalOpen) {
			return (
				<div
				style={buildStylesModal()}
					className="cc-modal"
				>
					<div className="cc-modal__container">
						<FontAwesomeIcon
							className="cc-modal__container__close-icon"
							icon={faTimes}
							onClick={() => setModalOpen(false)}
							style={buildStylesCloseIcon()}
						/>
						<div className="cc-modal__container__body">
							{children}
						</div>
					</div>
				</div>
			)
		}
	}

	return (
		<Fragment>
			{buildModalBackground()}
			{buildModal()}
		</Fragment>
	);
};

CCModal.propTypes = {
    backgroundModalColor: PropTypes.string,
    showModal: PropTypes.bool,
	showBackgroundModal: PropTypes.bool,
	children: PropTypes.shape,
	widthCloseIcon: PropTypes.number,
	widthModal: PropTypes.string,
	maxWidthModal: PropTypes.string,
};

CCModal.defaultProps = {
	backgroundModalColor: 'rgba(0, 0, 0, .5)',
	showModal: true,
	showBackgroundModal: true,
	children: null,
	widthCloseIcon: 16,
	widthModal: '60%',
	maxWidthModal: '300px'
};

export default CCModal;
