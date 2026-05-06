---
title: Overview
---



---

## Health Bar Settings Overview

The `Health Bar System` project settings panel is the authoring center for all runtime bar behavior.
You can define reusable presets and apply them to different character types through UIDs.

![](../../../static/img/20260526-162618.png)

---

## Setting Groups

### Module Setting

Global runtime toggles, including:

- `Use SoftKitty EntityManager and Attributes`
  - When enabled, the value of the bar will be auto-synced with the configured attributes of the Entity.
  - Tooltip: Whether your project is using SoftKitty EntityManager and Attributes.
  - When disabled, you need to manually update bar values via `HealthBar.SetValue(int _barIdx, BarValueType _type, int _value)`.

### Floating Combat Text Settings

Defines reusable floating text styles used for damage/heal feedback.

- Section tooltip: Attributes of this entity.
- `Add`: Create a new floating combat text.

### Bar Settings

Defines visual style and value mapping for each bar profile (Classical / Ball / Segment).

- Section tooltip: Attributes of this entity.
- `Add`: Create a new bar setting.

### Over-time Effect Setting
Controls whether Over-time Effect data syncs from SoftKitty systems.

- `Use SoftKitty Over Time Effect`
  - When enabled, any `OverTimeEffect` applied to the Entity will be auto-synced with the health bar.
    Tooltip: Toggle SoftKitty Over Time Effect system with EntityManager.
    To display effect icons, enable `Show Over-time Effect` in both bar settings and overhead settings.
    This feature is unavailable when `Use SoftKitty EntityManager and Attributes` is disabled in `Module Setting`.
    To display the effect icons, please toggle 'Show Over-time Effect' checkbox in the bar settings and overhead settings.

### Overhead Settings

Builds full overhead UI compositions (main bar, sub bars, avatar, info text, OTE anchor, distance scaling).

The overhead settings are the settings of the UI displayed on top of the characters. It is a combination of multiple bars, texts, over-time effects, and character avatar.
You can have multiple different sets, then input one UID into the `HealthBar` component of the character prefab to assign different setups to different character types (player, NPC, enemy, pet, etc.).
You can assign one UID to the `HealthBar` component of a character prefab to use different setups for different character types (player, NPC, enemy, pet, etc.).

---

## UID-Based Workflow

- Create presets in settings.
- Give each preset a stable UID.
- Reference those UIDs from runtime components.

This makes it easy to reuse the same setup for many entities while keeping configuration centralized.

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