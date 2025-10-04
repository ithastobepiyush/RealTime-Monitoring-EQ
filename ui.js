export function setupUI(viewer) {
  document.getElementById("btnSearch").onclick = async () => {
    const q = document.getElementById("search").value.trim();
    if (!q) return;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&limit=1`;
    try {
      const r = await fetch(url, { headers: { "Accept": "application/json" } });
      const items = await r.json();
      if (!items.length) return alert("No results");
      const { lat, lon, display_name } = items[0];
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(parseFloat(lon), parseFloat(lat), 3000),
        duration: 2.5
      });
      viewer.entities.removeAll();
      viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(lon, lat),
        point: { pixelSize: 10, color: Cesium.Color.RED },
        label: { text: display_name, showBackground: true, scale: 0.6 }
      });
    } catch (e) {
      console.error(e);
      alert("Search failed");
    }
  };
}
