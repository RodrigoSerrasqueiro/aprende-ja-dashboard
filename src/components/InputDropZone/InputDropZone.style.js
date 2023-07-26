import { styled } from "styled-components";

export const DropzoneContainer = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
`;

export const ImagePreview = styled.img`
  max-width: 60%;
`;

export const VideoPreview = styled.video`
  max-width: 50%;
  z-index: 4;
`;