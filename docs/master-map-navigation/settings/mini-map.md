---
title: Mini Map Settings
---
---
#### Default Zoom

Set the default zoom level for the `mini map`.

---

####  Allow Zoom In/Out

Enable or disable zooming in/out on the `mini map` using the mouse scroll wheel.

---

####  Maximum Zoom Out

Define the maximum zoom-out level for the `mini map`.

---

####  Lock Icon Scale

Maintain consistent icon sizes while zooming in/out. To set this per icon, uncheck this option and configure it in the [MapPoint] inspector using `Always keep the same size.`

 ![](../../../static/img/20260306-180659.png)

---

####  Display Scene Title

Show or hide the title of the current `scene` on the `mini map` interface.

---

####  Display Coordinate

Enable or disable the display of the player’s coordinates on the `mini map` interface.

---

####  Map Rotate With Camera

Set the `mini map` to always rotate with camera angle.

---

#### Show Track Arrow When Navigate

When navigate to a target position, toggle this option to show a white arrow point to this position on the mini-map. 
You can also manually call:

```csharp
MapManager.StartTrack(Transform _target)
MapManager.EndTrack()
```

to use this arrow with your own logic.

---


[Map Generator]:/docs/master-map-navigation/map-generator
[Map Point]:/docs/master-map-navigation/map-point
[Navigation Path]:/docs/master-map-navigation/navigation
[Sub-Map]:/docs/master-map-navigation/sub-map
[Fog of War]:/docs/master-map-navigation/fog-of-war
[Callbacks]:/docs/master-map-navigation/callbacks
[callbacks]:/docs/master-map-navigation/callbacks
[Static Map Mode]:/docs/master-map-navigation/getting-started/static-mode
[Dynamic Map Mode]:/docs/master-map-navigation/getting-started/dynamic-mode
[MapPoint]:/docs/master-map-navigation/api/map-point
[MapManeger]:/docs/master-map-navigation/api/map-manager
[MapInteractive]:/docs/master-map-navigation/api/map-interactive
[ControllerMapping]:/docs/master-map-navigation/api/controller-support
[Scene | Map]:/docs/master-map-navigation/settings/scene-map
[General Settings]:/docs/master-map-navigation/settings/general-settings
[WorldMap Settings]:/docs/master-map-navigation/settings/world-map
[MiniMap Settings]:/docs/master-map-navigation/settings/mini-map