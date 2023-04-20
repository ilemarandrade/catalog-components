import { ChangeEvent, useState } from "react";
import UploadFilesService from "../utils/uploadFilesService";
import MainLayout from "../layout/MainLayout";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import listComponents from "../constants/listComponents";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState<FileList | undefined>(); // file selected
  const [currentFile, setCurrentFile] = useState<File | undefined>(); // file current
  const [progress, setProgress] = useState<number>(0); // progress of upload
  const [isError, setIsError] = useState<boolean>(false); // there was an error uploading file?
  const [message, setMessage] = useState<string>(""); // file upload status message

  const nameFile =
    selectedFile && selectedFile.length > 0 ? selectedFile[0].name : null;

  // function for the onchange of input
  const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setCurrentFile(undefined);
      setMessage("");
      setProgress(0);
      setSelectedFile(event.target.files);
    }
  };

  //function to upload file
  const upload = () => {
    if (selectedFile) {
      let currentFile = selectedFile[0];

      setProgress(0);
      setCurrentFile(currentFile);

      UploadFilesService.upload(currentFile, (event) => {
        if (event.total) {
          setProgress(Math.round((100 * event.loaded) / event.total));
        }
      })
        .then((response) => {
          setIsError(false);
          setMessage(response.data.message);
        })
        .catch(() => {
          setMessage(
            "*Esta funcionalidad es solo un ejemplo no se carga el archivo al servidor porque no estamos conectados a una api con ese tipo de servicio!"
          );
          setIsError(true);
        });
    }
  };

  return (
    <MainLayout title={listComponents.uploadFile.title}>
      <Grid item container xs={12} sm={12} md={8}>
        {currentFile && (
          <Box mb={2} display="flex" alignItems="center" width="100%">
            <Box width="100%" mr={1}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Box minWidth={35}>
              <Typography
                variant="body2"
                color="textSecondary"
              >{`${progress}%`}</Typography>
            </Box>
          </Box>
        )}
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item xs={12} sm={4} component="label" htmlFor="btn-upload">
            <input
              id="btn-upload"
              name="btn-upload"
              style={{ display: "none" }}
              type="file"
              multiple
              onChange={selectFile}
            />
            <Button variant="outlined" component="span" fullWidth>
              Choose Files
            </Button>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={4}
            alignContent="center"
            justifyContent="center"
          >
            <Tooltip title={nameFile}>
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {nameFile}
              </Typography>
            </Tooltip>
          </Grid>
          <Grid container item xs={12} sm={4} justifyContent="flex-end">
            <Button
              color="primary"
              variant="contained"
              component="span"
              disabled={!selectedFile || progress === 100}
              onClick={upload}
              fullWidth
            >
              Upload
            </Button>
          </Grid>
        </Grid>
        <Typography
          variant="subtitle2"
          sx={{ color: isError ? "red" : "green", mt: 2 }}
        >
          {message}
        </Typography>
      </Grid>
    </MainLayout>
  );
};

export default UploadFile;
