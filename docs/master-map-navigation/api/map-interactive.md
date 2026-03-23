---
title: MapInteractive
---
```csharp
class SoftKitty.MasterNavigationMap.MapInteractive : MonoBehaviour
```

#### `public static MapInteractive MiniMapInstance;`

The instance of the `MiniMap` ui.

---

#### `public static MapInteractive WorldMapInstance;`

The instance of the `WorldMap` ui.

---

#### `public Rect ViewRect;`

With [Dynamic Map mode], when `Unlimited WorldMap` is enabled, players can scroll the map to any position in the 3D world. Ensure that in your script, the 3D scene within `MapInteractive.WorldMapInstance.ViewRect` is always loaded to match the visible map area.

---

#### `public Vector3 Focus(Vector3 _worldPosition, Vector2 _center)`

This method moves the map to focus on a specific 3D world position.

- `_worldPosition`: The 3D world position to focus on.
- `_center`: A normalized screen position (ranging from 0 to 1) that determines where the focused position will appear on the map.

_For example_: 

To center the player’s position on the map, you would use:

```csharp
Focus(Player.position, new Vector2(0.5f, 0.5f));
```

Here, `(0.5f, 0.5f)` represents the **center** of the screen. Use other values to place the position elsewhere (_e.g._, `(0, 0)` for the **bottom-left** corner or `(1, 1)` for the **top-right** corner).

---

#### `public void Zoom(float _value,Vector2 _focus)`

This method zooms the map in or out by a specified value and optionally adjusts the focus point.

- `_value`: Determines the zoom level. Positive values zoom in. Negative values zoom out.
- `_focus`: A normalized screen position (ranging from 0 to 1) that specifies where the zoom will focus.


`(0.5f, 0.5f)` represents the **center** of the screen.

Use other values (_e.g._, `(0, 0)` for **bottom-left** or `(1, 1)` for **top-right**) to focus on a different part of the map.

If you don't need to focus on a specific position, pass `new Vector2(0.5f, 0.5f)` to keep the zoom **centered** on the screen.

---

#### `public void SwitchMapLayer(int _layer)`

Switches the map to a specified layer. This only affects the current map instance interface; it does not alter the player’s position or any other map instance.

---

#### `public void Compass()`

Toggles `Player Orientation` Mode, aligning the player’s direction to always point toward the top of the interface.

---

#### `public static Vector3 WorldToMapPosition(Vector3 _worldPos)`

Converts a world space position to a map space position. The resulting map position is 2D, so the Y-axis value will always be 0.

---

#### `public static Vector3 MapToWorldPosition(Vector3 _mapPos)`

Converts a map space position back to a world space position. The Y-axis value remains 0, as the map space is strictly 2D.

---

#### `public static Vector2 WorldToNormalizedMapPosition(Vector3 _worldPos)`

Convert a world space position to a normalized map space position.

---

#### `public Vector3 TransferPos(Vector3 _pos, RectTransform _parentTransform)`

Transfrom mouse position to map position.

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