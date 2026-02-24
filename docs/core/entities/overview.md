---
title: Overview
---


The **Entity system** is the foundation of all gameplay logic.  
Damage, conditions, attributes, buffs, debuffs, items, skills, AI decisions — everything operates on **Entities**, not GameObjects.

This page explains what an [Entity] is, how it is managed, and how it fits into graphs.

---

### What Is an [Entity]?

An **[Entity]** is a lightweight data container that represents a combat participant.

Examples:
- Player
- Enemy
- Summoned unit
- Projectile
- Temporary [GraphObject] instance entity

An Entity is **not** a GameObject, but it can be linked to one through an `[EntityComponent]`.

Each Entity has:
- A **unique ID (uid)**
- A set of **[Attributes]**
- A set of **[CustomData]**
- Runtime state used by  [GraphObject] and systems

---

### [EntityComponent] (Unity Side)

To connect a GameObject to the combat system, attach an:

```csharp
EntityComponent
```

This component:
- Registers the GameObject as an [Entity] instance
- Exposes [AttributeData] in the inspector
- Connect behaviors with runtime [Entity] data` (read/write)`
- Allows physics detection to resolve targets

---

### [EntityManager]

The **[EntityManager]** is a global registry that stores and resolves Entities.

Responsibilities:
- Create and register [Entity]
- Resolve [Entity] by `uid`
- Track runtime [Entity]

---

### [AttributeData] on Entities

[AttributeData] are numeric values of [Attribute] such as:
- Health
- Attack
- Defense
- CritRate
- MoveSpeed

They are read and modified at runtime.

---

### Entity Runtime Lifecycle

1. GameObject spawns
2. [EntityComponent] registers as instance of [Entity]
3. Behaviors on entity
4. [Entity] instance removed on destroy

```
Note: 
Combat logic and behavior execution do not require an Entity instance. 
These systems operate entirely on backend data.
The Entity instance is used solely to visualize or present the results of events and data updates.
As a result, you can simulate combat in the background, reuse logic across different contexts 
(AI, previews, server logic), and reduce unnecessary coupling between data and presentation.
```

---

### Why This Matters

The Entity system enables:
- Fully data-driven combat
- Improves system flexibility, performance, and testability.
- Clean scaling for AI, loot, and difficulty
- Lightweight and highly modular.

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