import { setupUI } from "./ui.js";
Cesium.Ion.defaultAccessToken = ""; // optional
const viewer = new Cesium.Viewer("cesiumContainer", {
  timeline: true,
  animation: true,
  baseLayerPicker: true,
  geocoder: false,
  homeButton: false,
  sceneModePicker: true,
  navigationHelpButton: false
});
// Add OpenStreetMap imagery
viewer.imageryLayers.removeAll();
viewer.imageryLayers.addImageryProvider(new Cesium.OpenStreetMapImageryProvider({
  url: "https://a.tile.openstreetmap.org/"
}));
// Setup UI controls
setupUI(viewer);
