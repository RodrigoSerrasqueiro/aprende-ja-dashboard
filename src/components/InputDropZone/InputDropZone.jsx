import { useDropzone } from "react-dropzone";
import { DropzoneContainer } from "./InputDropZone.style";

// eslint-disable-next-line react/prop-types
function InputDropZone({ setSelectedFile, acceptedFileType }) {

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: acceptedFileType,
    onDrop: (acceptedFiles) => {
      setSelectedFile(acceptedFiles[0]);
    },
  });


  return (
    <DropzoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Solte o arquivo aqui...</p>
      ) : (
        <p>Arraste e solte uma imagem aqui ou clique para selecionar.</p>
      )}
    </DropzoneContainer>
  )
}

export default InputDropZone;