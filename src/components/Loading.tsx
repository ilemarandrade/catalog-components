import { CircularProgress, Dialog } from "@mui/material";

interface ILoading {
  open: boolean;
}
const Loading = ({ open }: ILoading) => (
  <Dialog
    open={open}
    sx={{ "& .MuiDialog-paper": { overflow: "hidden", p: 1 } }}
  >
    <CircularProgress />
  </Dialog>
);

export default Loading;
