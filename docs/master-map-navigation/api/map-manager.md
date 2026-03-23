---
title: MapManager
---
```csharp
class SoftKitty.MasterNavigationMap.MapManager : MonoBehaviour
```

#### `public static void SetPlayer(Transform _playerTransform)`

Assigns the player's transform to the `Master Map Navigation` system. 

This function must be called when the scene starts to initialize the player's position.

---

#### `public static void SetCamera(Camera _camera)`

Assigns the player's camera to the `Master Map Navigation` system. Otherwise `Camera.main` will be used.

This function must be called when the scene starts to initialize the player's orientation.

---

#### `public static string SaveFog()`

Convert the current [Fog of War] data into a json string.

---

#### `public void LoadFog(string _json)`

Load the [Fog of War] data with a json string.

---

#### `public void AddFog(Vector3 _worldPos, float _radius)`

Cover a world space position with [Fog of War] by normalized radius (0~1).

---

#### `public void RemoveFog(Vector3 _worldPos, float _radius)`

Reveal a world space position from [Fog of War] by normalized radius (0~1).

---

#### `public void ClearFog()`

Clear all [Fog of War] from the map.

---

#### `public void FillFog()`

Cover the whole map with [Fog of War].

---

#### `public static void NavigateToHere(Vector3 _worldPos)`

Creates a [navigation path] from the player's current position to the specified world space position.

`_worldPos`: The target position in world space.

---

#### `public static void StopNavigation()`

Clears the current [navigation path] and stops the navigation.

---

#### `public static MapPoint PlaceMarker(Vector3 _worldPos)`

Adding a `custom marker` on the map to mark points of interest. 

Places a `marker` on the map at the specified world space position. 

Return the [MapPoint] component representing the created `marker`. 

---

#### `public static void RemoveMarker(MapPoint _point)`

Removes a previously placed `marker` from the map.

`_point`: The [MapPoint] component of the marker to be removed.

---

#### `public static int GetLayerByPosition(Vector3 _pos)`

Retrieves the layer ID of the map based on a given world space position. The layer ID where the position resides.

`_pos`: The target position in world space.

---

#### `public static List<MapPoint> GetLayerEntrance(int _ownLayer, int _targetLayer)`

Retrieves a list of entrance points to move from one map layer _ownLayer to another `_targetLayer`.

`_ownLayer`: The current layer ID.

`_targetLayer`: The destination layer ID.

---

#### `public static MapPoint GetLayerClosestEntrance(int _ownLayer, int _targetLayer)`

Finds the closest entrance point between one map layer _ownLayer to another `_targetLayer`. 

`_ownLayer`: The current layer ID. 

`_targetLayer`: The destination layer ID.

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
[MapManager]:/docs/master-map-navigation/api/map-manager
[MapInteractive]:/docs/master-map-navigation/api/map-interactive
[ControllerMapping]:/docs/master-map-navigation/api/controller-support
[Scene | Map]:/docs/master-map-navigation/settings/scene-map
[General Settings]:/docs/master-map-navigation/settings/general-settings
[WorldMap Settings]:/docs/master-map-navigation/settings/world-map
[MiniMap Settings]:/docs/master-map-navigation/settings/mini-map