import styled from "styled-components";

const Background = styled.div({
  background:
    "linear-gradient(153.31deg, #000000 15.98%, #369485 73.8%, #900D90 111.75%)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  /* z-index usage is up to you.. although there is no need of using it because the default stack context will work. */
  zIndex: -1, // this is optional
});
export const BackgroundGradient = () => {
  return <Background />;
};
