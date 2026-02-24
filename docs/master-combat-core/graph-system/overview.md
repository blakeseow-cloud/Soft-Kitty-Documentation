---
title: Overview
---

# GraphObject & GraphInstance

This page explains the **[GraphObject]** and **[GraphInstance]** concepts in **Master Combat Core Framework**, and how they work together at edit-time and runtime.

---

## What is a [GraphObject]?

A *[GraphObject]** is a *design-time asset* that defines combat logic using nodes.

Think of a [GraphObject] as a **blueprint**:

- It contains **nodes**, **connections**, and **configuration**
- It does **not** execute logic by itself
- It is reusable across multiple situations

Typical Graph useage include:

- Damage Graphs
- Buff / Debuff Graphs
- Attribute Modification Graphs
- Conditional Logic Graphs

A Graph answers the question:

> *“What should happen?”*

---

## What is a [GraphInstance]?

A **[GraphInstance]** is the *runtime execution* of a [GraphObject], which:

- Holds **runtime state**
- Resolves **dynamic entities** (Dealer, Target, Instance)
- Evaluates **conditions**
- Executes **actions**
- Manages **temporary data**

A GraphInstance answers the question:

> *“What is happening right now?”*

---

##  [GraphObject] vs [GraphInstance]

| Concept | GraphObject | GraphInstance |
|------|------|------|
| Lifetime | Asset (persistent) | Runtime (temporary) |
| Editable | Yes (Editor) | No |
| State | None | Full runtime state |
| Entity Binding | No | Yes |
| Execution | No | Yes |

You can think of it like this:

> **GraphObject = Class**  
> **GraphInstance = Object**

---

## How a GraphInstance Works

- A [GraphInstance] is a MonoBehaviour class can be inherited :
- [GraphInstance] must be attached to a GameObject to be functional.
- A built-in example is: [CombatDamage]

 
**Internally, the instance:**

1. Manage all [GraphObject] across projects as shared assets.
2. Create small runtime data for each instance.
3. Run the runtime data through shared [GraphObject] and get results.

**During the process:**
- Minimal memory is taken.
- Zero GC allocation.
- Cache nodes result per instance, skip repeat calculation.
- Minimal Dictionary look up, create direct referencing on initialization.
- Cache [Entity]/[Attribute]/[OverTimeEffect] referencing.

---

## Entity Resolution in GraphInstance

[GraphInstance] resolve entity references at runtime.

Supported entity sources:

- **Player**
- **Dealer**
- **Target**
- **Specified UID**
- **Instance Entity**

This allows the same Graph to be reused for:

- Player attacks
- Enemy attacks
- Projectiles
- Temporary combat objects

Example:

```csharp
instance.SetDealerEntity(attackerEntity);
instance.SetTargetEntity(victimEntity);
```

---

## Instance Entity

Each GraphInstance can own a **temporary Instance Entity**.

This is useful for:

- Projectiles
- Traps
- Missiles
- Temporary buffs
- Runtime attribute storage

The Instance Entity:

- Exists only during the GraphInstance lifetime
- Can hold attributes
- Can be modified by graph logic
- Is automatically cleaned up

---

## Why This Separation Matters

Separating [GraphObject] and GraphInstance gives you:

- High performance
- Zero runtime asset mutation
- Safe parallel executions
- Fully data-driven combat logic
- Massive reusability

One [GraphObject] can be executed **hundreds of times per frame**, each with its own isolated [GraphInstance].

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