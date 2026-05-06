---
title: BarUI
---
```csharp
class SoftKitty.MasterHealthBarSystem.BarUI : WorldToScreenPosition
```

---

## Description

`BarUI` is the runtime visual component used by both overhead bars and static bars.
For floating overhead bars, the system creates and manages it automatically through [HealthBarManager].
For static HUD bars, you initialize it manually and optionally link it to an Entity.

---

## Public Fields and Properties

- `bool StaticBar`
  - Enable this when the prefab is used as a fixed UI bar, such as a player HUD bar.
- `RectTransform oteRoot`
  - Parent transform for Over-time Effect icons on static bars.
- `int Health`, `int MaxHealth`, `int Shield`, `int MaxShield`
  - Runtime values displayed by the bar.
- `bool ActiveCrack`, `bool ActiveInnerLine`, `bool ActiveOutline`
  - Runtime visual toggles.
- `BarSetting myBarSetting`
  - Resolves the current bar setting from `BarUID`.
- `BarStyle myStyle`
  - Current bar style used by this instance.

---

## Core Methods

### `void Init(HealthBar _bar, BarStyle _style, string _barUid, int _index = 0, Vector2 _size = default)`

Initializes the bar instance.

- `_bar`: owning [HealthBar]. Pass `null` for static bars.
- `_style`: bar style type.
- `_barUid`: bar preset UID from [BarSettings].
- `_index`: bar index. `0` is the main bar.
- `_size`: optional explicit size override.

Notes:
- Floating world-space bars are initialized automatically by the system.
- Static HUD bars must call `Init()` manually.
- If you use EntityManager with a static bar, also call `LinkEntity(Entity _entity)`.
- If you do not use EntityManager, manually set values through `Health`, `MaxHealth`, `Shield`, and `MaxShield`.

### `void LinkEntity(Entity _entity)`

Links a static bar to an Entity when EntityManager integration is enabled.
This method only applies to `StaticBar == true`.

### `void PopNumberText(string _uid, int _num)`

Displays floating combat text from this bar.
Use this for static bars. For floating overhead bars, call `HealthBar.PopNumberText()` instead.


---

## Static Bar Example

```csharp
public BarUI playerBar;

void Start()
{
    playerBar.Init(null, BarStyle.HealthBall, "DemoPlayer");
}
```

### Static Bar With EntityManager

```csharp
public BarUI playerBar;
public Entity playerEntity;

void Start()
{
    playerBar.Init(null, BarStyle.HealthBall, "DemoPlayer");
    playerBar.LinkEntity(playerEntity);
}
```

### Static Bar Popping Text

```csharp
playerBar.PopNumberText("DamageText", 120);
```

---

## Usage Notes

- Use `StaticBar` for fixed screen-space UI bars.
- Create and assign `oteRoot` if you want static bars to show Over-time Effect icons.
- Create and assign `damageRoot` if you want static bars to show floating combat text.
- In world-space mode, the system handles creation, pooling, and positioning automatically.

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