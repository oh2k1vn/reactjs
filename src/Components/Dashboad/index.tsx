import Chart from "./Chart";
import Chartmonth from "./Chartmonth";
import classes from "./Dashboad.module.css";
import Menubar from "./Menubar";

export default function Dashboad(prop: any) {
  return (
    <div className={classes.dashboad}>
      <div className={classes.dashboadmiddle}>
        <Chart />
        <Chartmonth />
      </div>
      <Menubar />
    </div>
  );
}
