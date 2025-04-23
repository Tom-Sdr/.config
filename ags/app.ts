import { App } from "astal/gtk3";
import style from "./style.scss";
import Bar from "./widget/Bar";

import Hyprland from "gi://AstalHyprland";
import { readFile } from "astal";

function getHyprlandMonitorId(hyprlandMonitorName: string): number {
  const gdkMonitors = App.get_monitors();

  return gdkMonitors.findIndex((gdkMonitor) => {
    const gdkMonitorBoundingBox = gdkMonitor.get_geometry();
    let hyprlandMonitor =
      Hyprland.get_default().get_monitor_by_name(hyprlandMonitorName);
    if (!hyprlandMonitor) return false;

    return (
      hyprlandMonitor.x === gdkMonitorBoundingBox.x &&
      hyprlandMonitor.y === gdkMonitorBoundingBox.y
    );
  });
}

const monitorName = readFile("./monitor-name");

let monitorId = getHyprlandMonitorId(monitorName);

Hyprland.get_default()
  .get_monitors()
  .forEach((m) => {
    console.log(m.name);
  });

App.start({
  css: style,
  instanceName: "js",
  requestHandler(request, res) {
    print(request);
    res("ok");
  },
  main: () => Bar(monitorId),
});
