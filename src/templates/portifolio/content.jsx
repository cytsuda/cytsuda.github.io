import React, { useRef, useEffect, useState } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Modal from "@components/Modal";

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${(props) => props.theme.space[4]}px;
`;

const WrapImage = styled.div`
  width: 100%;
  height: ${(props) => props.width / 1.6}px;
  overflow: hidden;
  cursor: pointer;
`;
const WrapImageInner = styled(GatsbyImage)`
  width: 100%;
`;

const Caption = styled.p`
  width: 100%;
  padding: ${props=>props.theme.space[3]}px;
  text-align: center;
  font-family: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.dark[100]};
  font-size: ${props => props.theme.fontSizes[3]};
  background-color:${props=>props.theme.colors.dark[500]};
`

const ProjectContent = ({ photos }) => {
  const [open, setOpen] = useState(false);
  const [imageSelect, setImageSelect] = useState(null);

  const imageRef = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (imageRef) {
      setWidth(imageRef.current.clientWidth);
    }
  }, [imageRef]);

  const openModalHandler = (image) => {
    if (image) {
      setImageSelect(image);
      setOpen(true);
    } else {
      setOpen(false);
      setTimeout(() => {
        setImageSelect(null);
      }, 400);
    }
  };

  return (
    <>
      <Modal show={open} closeHandler={openModalHandler}>
        {imageSelect ? (
          <>
            <GatsbyImage objectFit="contain" alt={imageSelect.alt} image={getImage(imageSelect)} />
            <Caption>{imageSelect.alt}</Caption>
          </>
        ) : (
          <Caption>No Image</Caption>
        )}
      </Modal>
      <Grid my={4}>
        {photos.map((photo, index) => {
          const image = getImage(photo);
          return (
            <WrapImage
              key={index}
              ref={imageRef}
              width={width}
              onClick={() => openModalHandler(photo)}
            >
              <WrapImageInner image={image} alt={photo.alt} objectFit="cover" />
            </WrapImage>
          );
        })}
      </Grid>
    </>
  );
};

export default ProjectContent;
/*
 

*/
