---
title: MapPoint
---
```csharp
class SoftKitty.MasterNavigationMap.MapPoint : MonoBehaviour
```

#### `public int State`

Get/Set the state of this [map point]. Setting the value to `-1` will hide the state icon.

---

#### `public void SetPoping(bool _enable)`

Enables or disables the "`popping`" effect of the `map icon` to draw the player's attention.

---

#### `public void SetVisible(bool _visible)`

Toggles the visibility of the [map point].

---

#### `public void Toggletext(bool _enable)`

Enables or disables the visibility of the text associated with the [map point]. 

---

#### `public void SetText(string _text)`

Sets the content of the text displayed for the [map point].

---

#### `public void SetTextColor(Color _color)`

Sets the color of the text.

---

#### `public void SetTextSize(int _fontSize)`

Sets the font size of the text.

---

#### `public void ToggleRange(bool _enable)`

Enables or disables the visibility of the range circle around the [map point].

---

#### `public void SetRangeRadius(float _radius)`

Sets the radius of the range circle.

---

#### `public void SetRangeColor(Color _color)`

Sets the color of the range circle.

---

#### `public void ToggleIcon(bool _enable)`

Enables or disables the visibility of the `map icon`.

---

#### `public void SetIcon(Texture2D _icon)`

Sets the texture of the `map icon`.

---

#### `public void SetIconColor(Color _color)`

Sets the color of the `map icon`.

---

#### `public void SetIconSize(int _pixelSize)`

Sets the pixel size of the `map icon`.

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