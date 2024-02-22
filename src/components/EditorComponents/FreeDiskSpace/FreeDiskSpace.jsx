import { useGetFreeSpaceOnDiskQuery } from "../../../redux/statisticSlice";
import { Loader, LoaderButton } from "../../Loader/Loader";
import { StatItemEditor } from "../../Statistic/Statistic.styled";

const FreeDiskSpace = () => {
  const { data, isSuccess, isLoading } = useGetFreeSpaceOnDiskQuery();
  let backGroundColorCard;
  let freeSpace;
  let totalSpace;
  if (isSuccess) {
    const fivePercentFree = data.free > data.total * 0.05;
    const twentyPercentFree = data.free > data.total * 0.15;
    const isLessThenFiveFree = data.free < data.total * 0.05;

    freeSpace = Math.floor(data.free / 1000000000);
    totalSpace = Math.floor(data.total / 1000000000);

    backGroundColorCard = twentyPercentFree
      ? ""
      : fivePercentFree
      ? "orange"
      : isLessThenFiveFree
      ? "red"
      : "";
  }

  return (
    <oaderButton>
      {isLoading && <LoaderButton height={50} width={50} color={"#00BFFF"} />}
      {isSuccess && !isLoading && (
        <StatItemEditor backgroundColor={backGroundColorCard}>
          <div style={{ display: "flex" }}>
            <p
              style={{
                textAlign: "center",
                paddingBottom: "0px",
                padding: "6px",
              }}
            >
              {freeSpace}
              <span
                style={{
                  padding: "4px",
                  paddingBottom: "0px",
                  fontSize: "18px",
                }}
              >
                {"Гб"}
              </span>
            </p>
            <p style={{ padding: "6px" }}>{"/"}</p>
            <p style={{ padding: "6px", paddingBottom: "0px" }}>
              {totalSpace}
              <span
                style={{
                  padding: "4px",
                  paddingBottom: "0px",
                  fontSize: "18px",
                }}
              >
                {"Гб"}
              </span>
            </p>
          </div>
          вільного місця
        </StatItemEditor>
      )}
    </oaderButton>
  );
};

export default FreeDiskSpace;
