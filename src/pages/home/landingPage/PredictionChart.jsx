import { useMemo } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box } from "@mui/material";

const CHART_HEIGHT = 340;
const PRIMARY_COLOR = "#4760CB";

const PredictionChart = ({ data = [] }) => {
  const defaultData = [
    { label: "Jan", value: 88 },
    { label: "Feb", value: 91 },
    { label: "Mar", value: 89 },
    { label: "Apr", value: 93 },
    { label: "May", value: 94 },
    { label: "Jun", value: 96 },
  ];
  const chartData = data.length > 0 ? data : defaultData;

  const { xLabels, seriesData } = useMemo(() => {
    const xLabels = chartData.map((d) => d.label);
    const seriesData = chartData.map((d) => Number(d.value) ?? 0);
    return { xLabels, seriesData };
  }, [chartData]);

  return (
    <Box
      className="w-full overflow-hidden rounded-xl border border-neutral-2 bg-white shadow-sm"
      sx={{
        "& .MuiChartsAxis-tickLabel": { fill: "#64748b", fontSize: 12 },
        "& .MuiChartsAxis-line": { stroke: "#e2e8f0" },
        "& .MuiChartsAxis-tick": { stroke: "#e2e8f0" },
        "& .MuiLineElement-root": { stroke: PRIMARY_COLOR, strokeWidth: 2.5 },
        "& .MuiAreaElement-root": { fill: `${PRIMARY_COLOR}20` },
        "& .MuiMarkElement-root": { stroke: PRIMARY_COLOR, fill: "white", strokeWidth: 2 },
      }}
    >
      <Box sx={{ px: 2, pt: 2, pb: 0 }}>
        <Box component="span" sx={{ fontSize: 14, fontWeight: 600, color: "#1e293b" }}>
          Attendance trend
        </Box>
      </Box>
      <LineChart
        width={520}
        height={CHART_HEIGHT}
        margin={{ top: 24, right: 24, bottom: 40, left: 50 }}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        series={[
          {
            data: seriesData,
            label: "Attendance %",
            color: PRIMARY_COLOR,
            curve: "natural",
            area: true,
          },
        ]}
        yAxis={[
          {
            min: 80,
            max: 100,
            tickNumber: 5,
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
        hideLegend
      />
    </Box>
  );
};

export default PredictionChart;
