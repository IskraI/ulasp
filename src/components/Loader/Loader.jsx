import { Grid } from "react-loader-spinner";

export const Loader = () => {
  return (
    <>
      <Grid
        color="#00BFFF"
        back
        height={100}
        width={100}
        wrapperStyle={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};
