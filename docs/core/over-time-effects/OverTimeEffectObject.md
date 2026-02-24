---
title: OverTimeEffectObject
---
```csharp
class SoftKitty.OverTimeEffectObject : DataObject
```

`OverTimeEffectObject` is a **[DataObject]** that manages all over-time effect definitions within the system.

You can create this object via the context menu in any Project folder:

`Create → SoftKitty →  Data Objects → Over Time Effect Data`

You can assign the created asset to the database in:
`Project Settings → SoftKitty → Data Settings → Data`
![](../../../static/img/20260146-104626.png)

After assigned the data object, a editor interface can be found at: 

`Project Settings → SoftKitty → SubData - OverTimeEffect`

Where you can easily manage OTE with convenient editor interface.

![](../../../static/img/20260121-152124.png)

---

### Properties

#### `public static OverTimeEffectObject instance`

Retrieve the instance of the OverTimeEffectObject instance assigned in SoftKitty Data Settings.

---

#### `List<OverTimeEffect> OverTimeEffects`

A list of all over-time effects available in the system, including damage-over-time effects, buffs, and debuffs.

Each entry defines:
- Duration
- Stacking rules
- Visual representation
- Execution logic

See:  [OverTimeEffect]

---

#### `float OverTimeEffectInterval`

The global tick interval (in seconds) used to evaluate over-time effects.

Example:
- `1.0` → effects tick once per second
- `0.2` → effects tick five times per second

---

### Methods

#### `GetOverTimeEffect(int id)`

Retrieves an over-time effect using its integer ID.
```csharp
OverTimeEffect effect = data.GetOverTimeEffect(3);
```

Use this for performance-critical lookups.

---

#### `GetOverTimeEffect(string uid)`

Retrieves an over-time effect using its string UID.

```csharp
OverTimeEffect effect = data.GetOverTimeEffect("fireDot");
```

More readable and convenient for scripting.

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