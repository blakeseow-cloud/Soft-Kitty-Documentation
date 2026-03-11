---
title: Inventory Module
---

```csharp
class SoftKitty..InventoryEngine.InventoryModule : EntityModule
```


InventoryModule is an [EntityModule] extension that provides inventory functionality to an Entity.

It manages the storage and manipulation of [item]s, allowing an [entity] to carry, add, remove, and query [item]s during gameplay. The module integrates with the Master Inventory Engine Pro and handles all item-related data associated with the [entity].

Because it is implemented as an [EntityModule], the inventory system is fully optional and modular. [Entitie]s only contain inventory functionality when this module is present, allowing projects to include or exclude the inventory system without affecting the core [entity] architecture.

Typical use cases include:

- Player inventories/equipment

- NPC inventories/equipment

- Loot containers

- Item trading systems

The module also participates in the [entity] save/load process and runtime initialization, ensuring inventory data persists correctly across game sessions.

**To retrieve the InventoryModule** from an [Entity], use:

```csharp
mEntity.GetModule<InventoryModule>();
```

---

### Properties

#### `public List<`[InventoryData]`> Inventory `
List of the inventories.

#### `public List<string> LootPacks`
List of the [loot pack] uid.

---

### Methods

#### `public InventoryEngine.`[InventoryData]` GetAnyInventoryData()`
Retrieve any exitsing [InventoryData] of this [Entity] when available.

---

#### `public InventoryEngine.`[InventoryData]` GetEquipment()`
Retrieve any exitsing Equipment type [InventoryData] of this [Entity] when available.

---

#### `public InventoryEngine.`[InventoryData]` GetInventory()`
Retrieve any exitsing Inventory|Crate type [InventoryData] of this [Entity] when available.

---

#### `public InventoryEngine.`[InventoryData]` GetInventoryDataByType(InventoryEngine.`[InventoryData]`.HolderType _type)`
Retrieve specified type [InventoryData] of this [Entity] when available.

---

#### `public InventoryEngine.LootPack DropLootPack(int _index = -1)`
Drop a [Loot Pack] this [Entity] carries, pass an index number for drop a specified pack from the list, otherwise it will random pick one.

---





---

 <!-- API LINKS -->
[InventoryModule]: /docs/master-inventory-engine/inventory-module
[EntityModule]: /docs/core/entities/EntityModule
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