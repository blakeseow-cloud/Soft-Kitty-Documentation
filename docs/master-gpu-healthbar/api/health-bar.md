---
title: HealthBar
---
```csharp
class SoftKitty.MasterHealthBarSystem.HealthBar : MonoBehaviour
```

---

## Description

`HealthBar` is the runtime component for world-space overhead health bars.
Add it to the root of a character prefab and the system will create the overhead UI based on the assigned `OverheadUID`.
If `Use SoftKitty EntityManager and Attributes` is enabled, place `EntityComponent` on the same GameObject so the bar can auto-sync from entity attributes.

---

## Public Fields and Properties

- `string OverheadUID`
  - The UID of the overhead preset used by this character.
- `float CharacterHeight = 1.8f`
  - World-space height offset used for positioning the overhead UI.
- `bool ActiveOutline`
  - Enables the main bar outline effect.
- `bool ActiveInnerLine`
  - Enables the inner line effect.
- `bool ActiveCrack`
  - Enables the crack effect.
- `string OverheadInfo`
  - Runtime text shown by the overhead info text block.
- `bool Visible`
  - Shows or hides the full overhead UI for this character.
- `BarUI MyBar`
  - Accesses the main created bar UI. Sub bars are children of this bar.
- `OverheadSetting MyOverheadSetting`
  - Resolves the assigned overhead preset.
- `string uid`
  - Returns the `Entity UID` from `EntityComponent` when EntityManager mode is enabled.

---

## Core Methods

### `int GetValue(int _barIdx, BarValueType _type)`

Returns the current value for a bar channel.

- `_barIdx`: bar index. `0` is the main bar.
- `_type`: which value channel to read.

In EntityManager mode, values are read from the mapped attributes.
In standalone mode, values are read from the internal runtime cache.

### `void SetValue(int _barIdx, BarValueType _type, int _value)`

Sets one value channel for a specific bar.

- `_barIdx`: bar index. `0` is the main bar.
- `_type`: which channel to modify.
- `_value`: integer value to assign.

In EntityManager mode, this writes back to the mapped entity attribute.
In standalone mode, this updates the internal runtime cache.

### `void PopNumberText(string _uid, int _num)`

Creates floating combat text on the main overhead bar.

- `_uid`: floating combat text preset UID.
- `_num`: number to display.

### `void SetOverheadInfo(string _text)`

Overrides the overhead text shown by the info text block.
Use `<br>` inside the input string to create line breaks.

### `BarUI GetBar(int _barIndex)`

Returns the created `BarUI` instance for a specific index.

- `0`: main bar
- `1+`: sub bars in the overhead preset

### `void SetAvatar(Texture _texture)`

Sets the avatar texture when `Show Avatar` is enabled in [OverheadSettings].

---

## `BarValueType`

```csharp
public enum BarValueType
{
    BarValue,
    MaximumBarValue,
    OverlayValue,
    MaximumOverlayValue
}
```

- `BarValue`: primary current value
- `MaximumBarValue`: primary maximum value
- `OverlayValue`: overlay current value, such as shield
- `MaximumOverlayValue`: overlay maximum value

---

## Standalone Usage Example

```csharp
public HealthBar player;
public int healthValue = 100;
public int maxHealthValue = 100;
public int shieldValue = 0;
public int maxShieldValue = 100;

void Update()
{
    player.SetValue(0, BarValueType.BarValue, healthValue);
    player.SetValue(0, BarValueType.MaximumBarValue, maxHealthValue);
    player.SetValue(0, BarValueType.OverlayValue, shieldValue);
    player.SetValue(0, BarValueType.MaximumOverlayValue, maxShieldValue);
}
```

---

## Common Usage Notes

- Add this component to the character prefab root.
- Assign a valid `OverheadUID` created in [OverheadSettings].
- In EntityManager mode, add `EntityComponent` on the same GameObject.
- Use `Visible` to show or hide the entire overhead UI.
- Use `PopNumberText()` for world-space overhead bars. For static bars, call `BarUI.PopNumberText()` instead.

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