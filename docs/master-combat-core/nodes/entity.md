---
title: Entity Node
---

### Overview

`Entity Nodes` act as a bridge between [Entity] instances and the backend data used by the graph system. They provide controlled access to [Entity]-related information without tightly coupling graph logic to scene objects.

`Entity Nodes` allow graphs to read [Entity] context while keeping execution data-driven and backend-focused.

![](../../../static/img/20260127-232722.png)

---

### Purpose

`Entity Nodes` are used to:

- Access [Entity]-related data in a controlled way

- Provide [Entity] context to [Variable Node], [Math Node], [Branch Node], and [Action Node]

- Decouple graph logic from direct [Entity] references

- Support both runtime and backend-only execution

They enable graphs to remain flexible while still reacting to [Entity] state when needed.

---

### Entity Node Types

#### Player
Represents the player entity.
- Automatically resolves to the entity with UID `player` in the [EntityManagerObject].

#### Dealer
A dynamic reference resolved at runtime.
- Usually represents the damage dealer.
- Set automatically by [CombatDamage] Component.
- Can also be set manually via:
  ```csharp
  GraphInstance.SetDealerEntity(Entity entity)
  ```

#### Target
A dynamic reference resolved at runtime.
- Usually represents the damage receiver.
- Managed automatically by [CombatDamage] Component or [OverTimeEffect].
- Can be set manually via:
```csharp
  GraphInstance.SetTargetEntity(Entity entity)
```

#### Specified
References a specific [Entity] by UID.
- Requires a string UID.
- Useful for bosses, NPCs, or world entities.

#### Instance
Creates a **temporary entity owned by the graph instance**.
- Exists only during the [GraphInstance] lifetime.
- Can hold attributes, variables, and effects.
- Ideal for missiles, traps, or temporary logic containers.

---

### Execution Behavior

- `Entity Nodes` are evaluated on demand when their output values are required.

- They do not control execution flow.

- They do not execute gameplay actions by themselves.

---

### Port Connection Rules
#### Input Ports
- None
  `Entity Node` do not expose input ports and represent source of data.


#### Output Ports

Entity Output Port can connect to:

- [Variable Node]

- [Condition Node]

- [Branch Node]

- [Action Node]

The output port provides [Entity] context or [Entity]-related values to downstream nodes.

---

### Common Use Cases

Typical `Entity Node` use cases include:

- Accessing [Attribute] from a specific [Entity]

- Reading [Entity]-related [CustomData]

- Providing source or target [Entity] context

- Evaluating conditions based on [Entity] state

- Applying actions to a specific [Entity]

`Entity Nodes` are often placed near the start of an execution path to establish context.

---

### Design Philosophy

`Entity Nodes` are designed to `expose Entity context without embedding logic`.

They:

- Do not store persistent state

- Do not own gameplay logic

- Serve as a clean interface between Entity instances and backend data

This preserves the system’s data-driven architecture while still enabling [Entity]-aware behavior.

---

### Summary

- `Entity Nodes` provide [Entity] context

- They do not control flow

- They do not perform actions

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