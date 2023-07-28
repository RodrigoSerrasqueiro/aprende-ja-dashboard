import { useDropzone } from "react-dropzone";
import { DropzoneContainer, ImagePreview, VideoPreview } from "./InputDropZone.style";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function InputDropZone({ sendFile, acceptedFileType }) {

  const [imagePreview, setImagePreview] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: acceptedFileType,
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      sendFile(file);

      // Gerar URL temporária para a pré-visualização da imagem ou vídeo
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);

    },
  });


  return (
    <DropzoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Solte o arquivo aqui...</p>
      ) : (
        <p>Arraste e solte o arquivo aqui ou clique para selecionar.</p>
      )}
      {imagePreview && (
        <>
          {acceptedFileType === "image/*" ? (
            <ImagePreview src={imagePreview} alt="preview da imagem" />
          ) : (
            <VideoPreview>
              <source src={imagePreview} />
            </VideoPreview>
          )}
        </>
      )}
    </DropzoneContainer>
  )
}

export default InputDropZone;