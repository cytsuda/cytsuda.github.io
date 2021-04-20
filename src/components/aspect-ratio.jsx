import styled from "styled-components";
import { Box } from "rebass";

const AspectRatioBox = styled(Box)`
  padding-bottom: ${(props) => (1 / props.ratio) * 100}%;
  background: ${(props) => props.theme.colors.white || "red"};
  height: 0;
`;

export default AspectRatioBox;
