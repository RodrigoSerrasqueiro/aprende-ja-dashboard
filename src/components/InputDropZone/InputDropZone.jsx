import { useDropzone } from "react-dropzone";
import { DropzoneContainer, ImagePreview, VideoPreview } from "./InputDropZone.style";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function InputDropZone({ setSelectedFile, acceptedFileType }) {

  const [imagePreview, setImagePreview] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: acceptedFileType,
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setSelectedFile(file);

      // Gerar URL temporária para a pré-visualização da imagem ou vídeo
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);

      // Log da URL temporária gerada (para verificar se está correta)
      console.log("URL temporária gerada:", objectUrl);
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