import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FlowRate from "./charts/flow-rate/flow-rate";
import CyclesChart from "./charts/cycles-chart/cycles-chart";
import ScrubChartsVoronoi from "./charts/scrub-charts-voronoi/scrub-charts-voronoi";
import ScrubChartsCursor from "./charts/scrub-charts-cursor/scrub-charts-cursor";
import ScrubChartsVoronoiAlt from "./charts/scrub-charts-voronoi-alt/scrub-charts-voronoi-alt";

const useStyles = makeStyles((theme) => ({
  page: {
    margin: 16,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <h3>Victory Charts</h3>
      <div>
        <a href="https://formidable.com/open-source/victory/" target="_blank">
          https://formidable.com/open-source/victory/
        </a>
      </div>
      <div>
        <a href="https://github.com/FormidableLabs/victory" target="_blank">
          Victory Github
        </a>
      </div>
      <div>
        <a
          href="https://github.com/jsaelhof/victory-chart-test"
          target="_blank"
        >
          Github for this test
        </a>
      </div>
      <FlowRate />
      <CyclesChart />
      <ScrubChartsVoronoi />
      <ScrubChartsVoronoiAlt />
      <ScrubChartsCursor />
    </div>
  );
};

export default App;
