---
title: Callbacks
---
---

All callbacks in the system are managed by the [MapManager].cs script. Below is the list of available callbacks and their usage, including script examples for each.

---

#### MapPointStateChangeCallback

**Signature**: `MapPointStateChange(Transform _key, int _state)`
**Trigger**: When the state variable of a [MapPoint] changes.

_Usage Example_:

```csharp
MapManeger.MapPointStateChangeCallback += OnMapStateChange;
public void OnMapStateChange(Transform _key, int _state){}
```

---

#### MapPointCreateCallback

**Signature**: `MapPointCreate(Transform _key, MapPointData _data, int _state)`
**Trigger**: When a [MapPoint] is added to the map system.

_Usage Example_:

```csharp
MapManeger.MapPointCreateCallback += OnMapPointCreate;
public void OnMapPointCreate(Transform _key, MapPointData _data, int _state){}
```

---

#### MapPointRemoveCallback

**Signature**: `MapPointRemove(Transform _key)`
**Trigger**: When a [MapPoint] is removed from the map system.

_Usage Example_:

```csharp
MapManeger.MapPointRemoveCallback+= OnMapPointRemove;
public void OnMapPointRemove (Transform _key){}
```

---

#### MapPointDataUpdateCallback

**Signature**: `MapPointDataUpdate(Transform _key, MapPointData _data)`
**Trigger**: When the data of a [MapPoint] is updated.

_Usage Example_:

```csharp
MapManeger. MapPointDataUpdateCallback += OnMapPointDataUpdateCallback;
public void OnMapPointDataUpdateCallback (Transform _key, MapPointData _data){}
```

---

#### NavigationPathCallback

**Signature**: `NavigationPathUpdate(List<Vector3> _path,bool _updateAll)`
**Trigger**: When a [navigation path] is created, removed, or updated.

_Usage Example_:

```csharp
MapManeger. NavigationPathCallback += OnNavigationPathUpdate;
public void OnNavigationPathUpdate (List<Vector3> _path,bool _updateAll){}
```

When `_updateAll` is false, means only the first and last position of the List has changed, you should pull the first and last value of the list to replace the current one. When the List is empty means the path has been removed.

---

#### MapIconClickCallback

**Signature**: `MapIconClick(MapPoint _point, int _button)`
**Trigger**: When a player clicks on a `map icon`.

_Usage Example_:

```csharp
MapManeger. MapIconClickCallback += OnMapIconClick;
public void OnMapIconClick (MapPoint _point, int _button){}
```

---

#### MapLayerChangeCallback

**Signature**: `MapLayerChange(int _layer)`
**Trigger**: When the player enters a different map layer.

_Usage Example_:

```csharp
MapManeger. MapLayerChangeCallback+= OnMapLayerChange;
public void OnMapLayerChange (int _layer){}
```

---

#### MarkerOutLimitCallback

**Signature**: `MarkerOutLimit(Vector3 _worldPos)`
**Trigger**: When the player try to place more marker than the maximum allowed number.

_Usage Example_:

```csharp
MapManeger.MarkerOutLimitCallback+= OnMarkerOutLimit;
public void OnMarkerOutLimit(Vector3 _worldPos) { }
```

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