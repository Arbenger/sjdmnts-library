import { ResponsiveLine } from "@nivo/line";

export default function LineChart() {
  const data = [
    {
      id: "lost",
      data: [
        {
          x: "JAN",
          y: 1,
        },
        {
          x: "FEB",
          y: 0,
        },
        {
          x: "APR",
          y: 0,
        },
        {
          x: "MAR",
          y: 2,
        },
        {
          x: "MAY",
          y: 1,
        },
        {
          x: "JUN",
          y: 3,
        },
        {
          x: "JUL",
          y: 1,
        },
      ],
    },
    {
      id: "expired",
      data: [
        {
          x: "JAN",
          y: 2,
        },
        {
          x: "FEB",
          y: 3,
        },
        {
          x: "APR",
          y: 1,
        },
        {
          x: "MAR",
          y: 4,
        },
        {
          x: "MAY",
          y: 5,
        },
        {
          x: "JUN",
          y: 3,
        },
        {
          x: "JUL",
          y: 1,
        },
      ],
    },
    {
      id: "returned",
      data: [
        {
          x: "JAN",
          y: 6,
        },
        {
          x: "FEB",
          y: 8,
        },
        {
          x: "APR",
          y: 7,
        },
        {
          x: "MAR",
          y: 9,
        },
        {
          x: "MAY",
          y: 3,
        },
        {
          x: "JUN",
          y: 5,
        },
        {
          x: "JUL",
          y: 4,
        },
      ],
    },
    {
      id: "borrowed",
      data: [
        {
          x: "JAN",
          y: 7,
        },
        {
          x: "FEB",
          y: 5,
        },
        {
          x: "APR",
          y: 9,
        },
        {
          x: "MAR",
          y: 8,
        },
        {
          x: "MAY",
          y: 2,
        },
        {
          x: "JUN",
          y: 9,
        },
        {
          x: "JUL",
          y: 10,
        },
      ],
    },
  ];
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 40, right: 40, bottom: 60, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      curve="catmullRom"
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Month",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Number of Books",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "dark2" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "top",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: -25,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 100,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
