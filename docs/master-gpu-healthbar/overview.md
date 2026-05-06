---
title: Overview
---



---

## Master GPU Health Bar

Master GPU Health Bar is a high-performance Unity health bar framework designed for large-scale combat scenes.
It renders bar visuals through a shader-driven workflow with pooling-first runtime behavior, helping you keep UI overhead stable when many units are visible at once.

---

## Why Use It

- **Performance-oriented runtime**: pooled bar instances, shared materials, and lightweight value updates.
- **Flexible presentation**: supports Classical, Segment, and Ball bar styles.
- **Data-driven setup**: bind bar values through `Attribute UID` mapping, or drive values manually through API.
- **Integrated combat feedback**: optional Floating Combat Text and Over-time Effect icon display.
- **Production-ready integration**: works as a standalone package or with SoftKitty shared systems.

---

## Core Workflow

1. Configure your presets in [HealthBarObject] (`Project Settings > SoftKitty > Health Bar System`).
2. Choose your runtime mode:
   - integrated with [EntityManagerObject], [AttributeObject], [OverTimeEffectObject]
   - standalone, manual value updates
3. Add [HealthBar] to character prefabs for world-space bars.
4. Use [BarUI] for fixed screen-space bars.

---

## Documentation Map

- Start here: [Installation](/docs/master-gpu-healthbar/getting-started/installation)
- Runtime setup: [Getting-Started](/docs/master-gpu-healthbar/getting-started)
- Entity-linked workflow: [Using with EntityManager](/docs/master-gpu-healthbar/getting-started/using-with-entitymanager)
- Bar parameter details: [BarSettings]
- Fixed UI bars: [Static Bar]
- API reference: [HealthBar], [BarUI], [HealthBarManager], [HealthBarCanvas]

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