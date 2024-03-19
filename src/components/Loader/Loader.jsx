import { Grid, Oval, ProgressBar } from "react-loader-spinner";

export const Loader = ({ loaderHeight = "100vh" }) => {
  return (
    <div style={{ height: loaderHeight }}>
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
    </div>
  );
};

export const LoaderButton = ({ height, width, color }) => {
  return (
    <Oval
      visible={true}
      height={height || 20}
      width={width || 20}
      color={color || "#4fa94d"}
      secondaryColor={color || "#4fa94d"}
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export const ProgressBarTracksTable = () => {
  return <ProgressBar visible={true} width="80" wrapperStyle={{}} />;
};
