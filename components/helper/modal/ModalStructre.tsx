import React,{useEffect,useState} from "react";
import ReactModal from "react-modal";

export default function ModalStructre(props: any) {
	const { children, loading, isOpen, setIsOpen, theme } = props;
	const handleClose = () => {
		setIsOpen(!isOpen);
	};
  if(!isOpen){
    return(<></>)
  }else
	return (
    <div className="background w-full h-full absolute overflow-x-hidden text-red-700 z-[100] bg-black">
      <div className="modalBody">
        <div className="modalHeader">
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
		// <ReactModal
		// 	ariaHideApp={false}
		// 	isOpen={isOpen}
		// 	className={`absolute block rounded-sm  border bg-black font-mono`}
		// 	onRequestClose={handleClose}
		// >
		// 	<button onClick={handleClose}>close</button>
		// 	<div 
    //         data-theme={theme ? "winter" : "night"}

    //   >{children}</div>
		// </ReactModal>
	);
}
