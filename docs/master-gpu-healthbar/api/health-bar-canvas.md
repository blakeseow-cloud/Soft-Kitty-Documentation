---
title: HealthBarCanvas
---
```csharp
class SoftKitty.MasterHealthBarSystem.HealthBarCanvas : MonoBehaviour
```

---

## Description

`HealthBarCanvas` is the scene-level canvas controller for the health bar system.
It provides the rendering roots used by world-space health bars, floating combat text, and pooled UI objects.

---

## Scene Requirement

`HealthBarCanvas` is used so the system can find the UI Canvas that should display world-space [HealthBar] elements.
![](../../../static/img/20260543-164305.png)
Your scene must contain **one and only one** `HealthBarCanvas`.
On the same GameObject, also add Unity's `Canvas` component.
In the `Canvas` component, enable `TexCoord1` and `TexCoord2` under `Additional Shader Channels`.
This allows the shader to receive runtime data through UV2 and UV3 channels and helps avoid creating multiple material instances.
![](../../../static/img/20260543-164347.png)

---

## Public Static Properties

### `HealthBarCanvas instance`

Returns the active singleton instance.
If no instance exists, the system will try to find one in the scene.
If none is found, it logs an error and may auto-create one under a detected `CanvasScaler`.

### `Camera MainCamera`

Returns the camera used by the system for world-to-screen conversion.
By default, it uses `Camera.main` unless overridden.

### `Vector2 ScreenSize`

Returns the cached canvas size used by the UI system.
It resolves from `CanvasScaler`, root `RectTransform`, or parent `RectTransform`.

---

## Core Method

### `void SetMainCamera(Camera _camera)`

Overrides the default camera used for 3D view calculations.
Call this when your project does not use the standard `MainCamera` tag or when you need a custom rendering camera.

---

## Runtime Behavior

- On `Awake()`, duplicate `HealthBarCanvas` instances are detected and removed.
- On `Awake()`, the manager is initialized automatically through `HealthBarManager.Init()`.
- Child roots such as `HealthBarRoot`, `FloatingBarRoot`, and `PoolRoot` are created lazily when first accessed.

---

## Usage Notes

- Place `HealthBarCanvas` under your main UI canvas.
- Use a full-screen `RectTransform` layout.
- If bars do not render, first verify that the scene contains exactly one `HealthBarCanvas` and that the attached `Canvas` has `TexCoord1` and `TexCoord2` enabled.

---

<!-- API LINKS -->
[BarSetting]: /docs/master-gpu-healthbar/settings/bar-settings
[BarSettings]: /docs/master-gpu-healthbar/settings/bar-settings
[FloatingCombatTextSettings]: /docs/master-gpu-healthbar/settings/floating-combat-text-settings
[FloatingCombatTextSetting]: /docs/master-gpu-healthbar/settings/floating-combat-text-settings
[OverheadSettings]: /docs/master-gpu-healthbar/settings/overhead-settings
[OverheadSetting]: /docs/master-gpu-healthbar/settings/overhead-settings
[HealthBarObject]: /docs/master-gpu-healthbar/settings/overview
[Font]: /docs/master-gpu-healthbar/customize-font
[Bar Style]: /docs/master-gpu-healthbar/customize-healthbar
[Health Bar]: /docs/master-gpu-healthbar/assign-healthbar
[Static Bar]: /docs/master-gpu-healthbar/static-healthbar
[BarUI]: /docs/master-gpu-healthbar/api/bar-ui
[HealthBar]: /docs/master-gpu-healthbar/api/health-bar
[HealthBarCanvas]: /docs/master-gpu-healthbar/api/health-bar-canvas
[HealthBarManager]: /docs/master-gpu-healthbar/api/health-bar-manager
[EntityModule]: /docs/core/entities/EntityModule
[Attribute]: /docs/core/attributes/Attribute
[AttributeData]: /docs/core/attributes/AttributeData
[AttributeObject]: /docs/core/attributes/AttributeObject
[TempAttribute]: /docs/core/attributes/TempAttribute
[Entity]: /docs/core/entities/Entity
[Entities]: /docs/core/entities/Entity
[EntityComponent]: /docs/core/entities/EntityComponent
[EntityManagerObject]: /docs/core/entities/EntityManagerObject
[OverTimeEffect]: /docs/core/over-time-effects/OverTimeEffect
[OverTimeEffectData]: /docs/core/over-time-effects/OverTimeEffectData
[OverTimeEffectObject]: /docs/core/over-time-effects/OverTimeEffectObject
[DataObject]: /docs/core/general/DataObject
[GameManager]: /docs/core/general/game-manager
[AssetLoader]: /docs/core/general/AssetLoader
[SGD_Settings]: /docs/core/general/SGD_Settings
[GraphInstance]: /docs/master-combat-core/damage-component/graphinstance
[Dynamic Variables]: /docs/master-combat-core/graph-system/dynamic-variables
[DynamicFloat]: /docs/master-combat-core/graph-system/dynamic-variables
[OverTimeEffectInstance]: /docs/master-combat-core/damage-component/over-time-effect-instance
[CombatDamage]: /docs/master-combat-core/damage-component/combat-damage
[GraphObject]: /docs/master-combat-core/graph-system/GraphObject
[CustomData]:/docs/core/CustomData
[AttributeChangeEvent]: /docs/core/attributes/AttributeData
[OverTimeEffectChangeEvent]:/docs/core/over-time-effects/OverTimeEffectData
[EntityEvent]:/docs/core/entities/Entity
[IntList]:/docs/core/CustomData
[IdIntList]:/docs/core/CustomData
[IdFloatList]:/docs/core/CustomData
[Action Node]:/docs/master-combat-core/nodes/action
[Branch Node]:/docs/master-combat-core/nodes/branch
[Condition Node]:/docs/master-combat-core/nodes/condition
[Condition Group Node]:/docs/master-combat-core/nodes/condition
[Entity Node]:/docs/master-combat-core/nodes/entity
[Trigger Node]:/docs/master-combat-core/nodes/trigger
[Variable Node]:/docs/master-combat-core/nodes/variable-math
[Math Node]:/docs/master-combat-core/nodes/variable-math
<!-- API LINKS -->