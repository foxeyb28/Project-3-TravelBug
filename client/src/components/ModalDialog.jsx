import Dialog from "@mui/material/Dialog";
import TripForm from "./TripForm";

const ModalDialog = ({ open, handleClose }) => {
  return (
    <>
      <Dialog maxScreen={true} open={open} onClose={handleClose}>
        <TripForm handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default ModalDialog;
