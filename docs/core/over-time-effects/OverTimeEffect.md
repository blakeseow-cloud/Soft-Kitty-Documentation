---
title: OverTimeEffect
---
```csharp
class SoftKitty.OverTimeEffect
```

`OverTimeEffect` defines the **static configuration** of an over-time effect, such as a buff, debuff, or damage-over-time effect.

This data determines **what the effect does**, not its runtime state.

---

### Properties

#### `string uid`

Unique string identifier used to reference this effect in code and data.

---

#### `int id`

Unique integer ID used internally for fast lookups.

---

#### `string name`

Display name shown in UI (e.g. *Poison*, *Burn*, *Freeze*).

---

#### `string category`

Category used to group effects, such as:

- Buff
- Debuff
- DoT

---

#### `Texture icon`

Icon used to represent the effect in UI.
Supported loading methods include:
- Direct Reference
- Resources
- Asset Bundles
- Custom [AssetLoader]

---

#### `float duration`

Total duration of the effect in seconds.

---

#### `Color backGroundColor`

Background color used when displaying the effect in UI.

---

#### `Color frameColor`

Frame or border color used in UI.

---

#### [GraphObject] `DesignGraph` 
(`When Master Combat Core is installed`)
Defines the behavior of the effect using the visual graph system.

This graph controls:
- Tick logic
- Scaling
- Conditional behavior

---

#### `List<`[DynamicFloat]`> DynamicVariables`
(`When Master Combat Core is installed`)

[Dynamic Variables] passed into the graph at runtime, allowing behavior to be modified without changing graph structure.

---

#### `List<CustomField> mCustomField`

Custom data fields that allow you to attach arbitrary objects to this effect.

---

### Methods

#### `GetCustomObject<T>(string key)`

Retrieves a custom object associated with this effect.

```csharp
AudioClip clip = effect.GetCustomObject<AudioClip>("HitSound");
```

Useful for attaching:
- Prefabs
- Audio
- VFX
- Data assets

---

<!-- API LINKS -->
[Loot Pack]:/docs/master-inventory-engine/item-class/loot-pack
[Item Database Settings]:/docs/master-inventory-engine/settings
[ItemChangeCallback]:/docs/master-inventory-engine/callbacks
[ItemDropCallback]:/docs/master-inventory-engine/callbacks
[ItemUseCallback]:/docs/master-inventory-engine/callbacks
[Callbacks]:/docs/master-inventory-engine/callbacks
[LinkIcon]:/docs/master-inventory-engine/ui/item-icon
[InventoryItem]:/docs/master-inventory-engine/ui/item-icon
[ItemIcon]:/docs/master-inventory-engine/ui/item-icon
[WindowsManager]:/docs/master-inventory-engine/ui/windows-manager
[Enchantment]: /docs/master-inventory-engine/item-class/enchantment
[InventoryStack]: /docs/master-inventory-engine/item-class/inventory-stack
[InventoryData]: /docs/master-inventory-engine/item-class/item-data
[Item]: /docs/master-inventory-engine/item-class/item
[ItemObject]: /docs/master-inventory-engine/item-class/item-object
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
