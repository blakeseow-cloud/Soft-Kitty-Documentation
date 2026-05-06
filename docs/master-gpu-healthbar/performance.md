---
title: Performance
---



---

## How does `Master GPU Health Bar` optimize performance?

1. Instead of nesting Unity `Image` / `RawImage` / `Text` UI components in the traditional way, `Master GPU Health Bar` draws the whole health bar fully by one shader, including the value text.
   This advanced approach saves huge amounts of text mesh vertices, large amounts of UI draw calls, and UI rebuild CPU & GPU costs.

2. All health bars with the same bar setting share the same single material.
   The dynamic runtime data is transferred through `UV2` & `UV3` channels instead of setting material values directly.
   That ensures multiple health bars do not create multiple material instances.
   As a result, you can have 1000 health bars on screen while still costing only **1 draw call**.

---

### Exceptions that break the single-material benefit

- Enable Avatar module:
  Avatar textures cannot be transferred through `UV2`, so it becomes an extra `RawImage` child component, which brings more draw calls depending on the overlapping rate of the bars.

- Enable Overhead Info Text:
  Overhead info text can be any string, so it is not possible to transfer it through `UV2` as well.
  It is rendered as an extra `RawImage` child component, bringing more draw calls depending on the overlapping rate of the bars.

- Enable Over-time Effect in Overhead Settings:
  Over-time effect icons listed during runtime cannot be transferred through `UV2` either.
  They are implemented as a few extra `RawImage` child components, bringing more draw calls depending on the overlapping rate of the bars.

- Multiple bar settings on the same screen:
  Multiple bar settings require multiple material instances, which increases draw calls depending on the overlapping rate of the bars.

With the above understanding, if you have large amounts of health bars in your game and want to maximize performance, it is recommended to:

1. Disable `Show Avatar` in `Overhead Settings`.
2. Disable `Show Info Text` in `Overhead Settings`.
3. Disable `Show Over-time Effect` in `Overhead Settings`.
4. Use the same bar setting for most health bars (it’s fine to have a few bars with different bar settings).

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