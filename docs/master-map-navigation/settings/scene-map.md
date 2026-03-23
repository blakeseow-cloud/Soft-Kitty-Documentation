---
title: Scene | Map
---
---

#### `Map Mode`
- use the [Static Map Mode] to render stylized 2D maps for **scene-based games** with **pre-designed levels**. 
- For **procedurally generated worlds** or **seamless, massive open-world** environments, switch to the [Dynamic Map Mode] with real-time render textures and customizable stylized shaders.

---

#### `Open [Map Generator] Tool (Render Map Texture)`

Create or locate the [Map Generator] prefab in the current scene.

---

#### `Refresh Scene List From Build Settings`

Automatically adds all `scenes` from your `Build Settings` to the list. **Remove** any `scenes` that don’t require the map system, such as your title screen.

---

#### `Add Current Scene`

Add the **currently opened scene** to the list.

---

#### `Display Title`

Set the name of the `scene` to display on the map.

---

#### `Map Layers`

For **multi-level** `scenes` (_e.g._, buildings with multiple floors), add and configure layers. 
For **flat scenes**, **only one layer** is required. 

- **Name**: Internal name for the layer (_not displayed in the game_).
- **Map Texture**: Assign the map background texture created using the [Map Generator] tool.
- **Layer Height**: Define the **ceiling height** for this layer. For interior scenes, set this value under the roof to ensure proper map rendering.
- **Bottom Left Corner Position/Top Right Corner Position**:
Define the **rectangular area** of the map. These values are automatically set when using the [Map Generator] tool.

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