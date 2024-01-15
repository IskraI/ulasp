import { Grid, Oval, ProgressBar } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div style={{ height: "100vh" }}>
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

export const LoaderButton = () => {
  return (
    <Oval
      visible={true}
      height="20"
      width="20"
      color="#4fa94d"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export const ProgressBarTracksTable = () => {
  return <ProgressBar visible={true} width="80" wrapperStyle={{}} />;
};
