import AppbarUI from "./AppbarUI";

export default function Appbar({open, onClose}) {
    return (<AppbarUI open={open} onClose={onClose} />);
}