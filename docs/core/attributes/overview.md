---
title: Overview
---

This page explains how **attributes** works, including base values, temporary modifiers, 
time-based changes, and the upgrade pipeline used by systems such as difficulty scaling and player leveling.

---
### Core Components
[Attribute] - The settings for attribute.
[AttributeData] - The runtime data for attribute.
[TempAttribute] - The time-based changes for attribute.


---

### What Is an attribute?

An attribute represents a numeric value associated with an [Entity], such as:

- Health
- Attack
- Defense
- Movement Speed
- Critical Chance
- Luck

Attributes are **data-driven**, **passive**, and **query-based**:
- No per-frame updates
- No ticking logic
- Values are evaluated **only when accessed**

---

### Attribute Data Model

Each attribute consists of:

- Base Value
- Temporary Modifiers
- Upgrade Modifiers
- Final Evaluated Value

All attribute data lives in memory at runtime and is safe from accidental editor mutation.

---

### Attribute Evaluation Flow

When an attribute value is requested:

1. Base value is read
2. All active temporary modifiers are evaluated
3. Expired modifiers are discarded using timestamps
4. Upgrade modifiers are applied
5. Final value is returned

This happens **on demand**, not over time.

---

### Temporary Attribute Modifiers

Temporary modifiers are represented as:

- Value
- Duration (seconds)
- Start timestamp
- Operation type

#### Supported Operation Types

- Add
- Multiply
- Override

#### Example Use Cases

- +100 Attack for 10 seconds
- Movement Speed ×0.8 while frozen
- Health locked to 100 while invincible

No update loop is required — timestamps handle expiration.

---

### Attribute Upgrade System

The upgrade system applies **persistent scaling** to attributes.
Each attribute has its own upgrade increment.

Used for:
- Player leveling
- Enemy difficulty scaling
- Global progression curves

Upgrades are applied **before gameplay begins** or when a level changes.

---


### Best Practices

- Use attributes for all numeric gameplay data
- Prefer temporary modifiers over manual timers
- Use upgrades for long-term scaling only


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
