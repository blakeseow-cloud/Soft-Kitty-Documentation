---
title: HealthBarManager
---
```csharp
class SoftKitty.MasterHealthBarSystem.HealthBarManager : MonoBehaviour
```

---

## Description

`HealthBarManager` is the central runtime manager for health bar resources, shared settings, pooled UI objects, and materials.
It is initialized automatically by [HealthBarCanvas] when the scene loads.

---

## Runtime Responsibilities

- load bar prefabs from Resources
- build bar-setting and floating-text lookup dictionaries
- create and cache shared materials for each bar UID
- initialize the overhead setting dictionary
- manage pooled `BarUI`, damage text, and OTE UI objects
- expose shared roots through [HealthBarCanvas]


---

## Core Methods


### `static BarSetting GetBarSetting(string _uid)`

Returns the `BarSetting` that matches a bar UID.

### `static NumberSetting GetNumberSetting(string _uid)`

Returns the floating combat text setting that matches a number-text UID.

### `static Material GetBarMaterial(BarStyle _style, string _barUid)`

Returns the cached shared material for a specific style and bar UID.
All bars using the same setting share this material.

### `static BarUI CreateBar(HealthBar _bar, string _barUid, int _index, Vector2 _size)`

Gets a `BarUI` from the pool or instantiates one if needed.
This is the main entry point used by `HealthBar` to create overhead bars.

### `static void ReturnBarToPool(BarUI _bar)`

Returns a floating `BarUI` to the pool.
The bar is deactivated and moved under `PoolRoot`.

### `static void CreateDamage(int _damage, BarUI _bar, string _textUid = "")`

Creates floating combat text using a configured number-text UID.
This is called internally by `HealthBar.PopNumberText()` and `BarUI.PopNumberText()`.

---

## Important Dictionaries

These are public static runtime caches used by the system:

- `BarSettingDic`
- `NumberSettingDic`
- `OverHeadSettingDic`
- `BarInPool`
- `MaterialDic`
- `DamageObj`
- `DamageInPool`
- `BarPrefabs`
- `OteInPool`

In normal gameplay code, you usually do not need to modify them directly.

---

## Usage Notes

- Most gameplay scripts should call [HealthBar] or [BarUI], not `HealthBarManager` directly.
- `GetBarSetting()` and `GetNumberSetting()` are useful when building custom integrations or debug tools.
- Material sharing is a key part of the system's performance model.

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