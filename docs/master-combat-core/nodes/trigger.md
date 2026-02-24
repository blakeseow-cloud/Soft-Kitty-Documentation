---
title: Trigger Node
---

### Overview

`Trigger Nodes` are stateful gate nodes used to control when a graph is allowed to execute. They evaluate connected condition nodes and cache their result until explicitly reset.

`Trigger Nodes` do not execute gameplay logic themselves. Instead, they determine whether connected `Root Nodes` are allowed to run.

![](../../../static/img/20260142-224251.png)

---

### Purpose

Trigger Nodes are used to:

- Gate graph execution behind one or more conditions

- Cache condition results across graph calls

- Control one-time or persistent execution

- Provide precise control over when `Root Nodes` activate

They are especially useful for implementing cooldowns, state-based triggers, and one-shot logic.

---

### Execution Behavior

- When the graph is evaluated, the `Trigger Node` checks all connected [condition-type nodes](/docs/master-combat-core/nodes/condition).

- If all connected conditions evaluate to True, the `Trigger Node` becomes triggered.

- Once triggered, the result is cached and reused on subsequent graph evaluations.

- The cached result remains valid until the `Trigger Node` is reset.

`Trigger Nodes` do not perform actions or control flow directly; they only determine whether execution may proceed.

---

### Port Connection Rules
- #### Input Ports

  - `Trigger Input Port` can connect from:

    - [Condition Node]

    - [Condition Group Node]

  - `Reset Input Port` can connect from:

    - [Condition Node]

    - [Condition Group Node]

`Trigger` conditions determine when the node becomes triggered.
`Reset` conditions determine when the cached result is cleared.

- #### Output Ports

   - `Trigger Output Port` can connect only to:

     - `Root Nodes`

The output represents whether the `Trigger Node` is currently in a triggered state.

---

### Root Node Interaction

- A `Root Node` may have multiple `Trigger Nodes` connected to it.

- The `Root Node` will execute only if all connected `Trigger Nodes` evaluate to **True**.

- If any `Trigger Node` is not triggered, the `Root Node` will not execute.

This allows multiple independent trigger requirements to gate the same execution logic.

---

### Reset Behavior

`Trigger Nodes` support two reset mechanisms:

- #### Auto Reset
  When **Auto Reset** is enabled:

    - The Trigger Node automatically resets after the connected `Root Node` finishes execution.

    - The trigger conditions must be met again before execution can occur.

- #### Manual Reset (Condition-Based)
  When **Auto Reset** is disabled:

    - The `Trigger Node` retains its cached result.

    - The cached state remains until all connected reset conditions evaluate to **True**.

This allows `Trigger Nodes` to represent persistent or one-shot states.

---

### Common Use Cases

Typical `Trigger Node` use cases include:

- Cooldown-based activation

- One-time combat or ability triggers

- State-based execution gates

- Multi-condition activation logic

- Persistent unlocks or flags

`Trigger Nodes` are usually placed before `Root Nodes` to explicitly define when execution is allowed.

---

### Design Philosophy

`Trigger Nodes` are designed to be:

- Stateful (cache evaluation results)

- Deterministic (clear activation and reset rules)

- Composable (multiple triggers can gate one Root Node)

By separating trigger logic from execution logic, graphs remain readable, predictable, and flexible.

---

### Summary

- `Trigger Nodes` gate `Root Node` execution

- They cache condition results

- They only output to `Root Nodes`

- They support auto and condition-based reset

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