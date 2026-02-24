---
title: Condition & Condition Group
---

### Overview

`Condition Nodes` and `Condition Group Nodes` are evaluation nodes used to determine logical outcomes within the graph system. They evaluate input data and output a boolean result (**True** or **False**) without performing gameplay actions or controlling execution directly.

These nodes form the `decision layer` of the graph and are commonly used by [Trigger Node] and [Branch Node].

![](../../../static/img/20260153-225315.png)

---

### Purpose

`Condition Nodes` and `Condition Group Nodes` are used to:

- Evaluate logical conditions

- Produce boolean results for decision-making

- Gate execution or control flow

- Combine multiple conditions into higher-level logic

They allow complex rules to be expressed in a clear and modular way.

---

### Execution Behavior

- `Condition Nodes` are evaluated when their output value is required.

- Each `Condition Node` evaluates its inputs and outputs either **True** or **False**.

- `Condition Group Nodes` evaluate multiple `Condition Node` inputs and combine their results based on a logical operator.

- These nodes do not modify backend data and have no side effects.

---

### Port Connection Rules
- #### Input Ports
   ##### Condition Node

    `Input ports` depend on the specific condition type.

    `Input ports` can connect from:

    - [Variable Node]

    - [Math Node]

    - [Entity Node]

    - [Branch Node]

    These inputs provide the values required to evaluate the condition.

   ##### Condition Group Node

    - Accepts multiple `Condition Node` outputs as input.

    - `Input ports` can connect only from:

      - `Condition Nodes`

  Each input represents a boolean value to be combined.


- #### Output Ports
  ##### Condition Node

   - `Condition Output Port`

     - Outputs **True** or **False**

     - Can connect to:

       - [Trigger Node]

       - `Condition Group Nodes`

       - [Branch Node] (condition input ports)

  ##### Condition Group Node

   - `Condition Output Port`

     - Outputs **True** or **False**

     - Can connect to:

       - [Trigger Node]

       - `Condition Group Nodes`

       - [Branch Node] (condition input ports)

     - `Condition Group Nodes` can be nested to form complex logical structures.

---

### Condition Group Types

`Condition Group Nodes` support multiple logical operators:

- `AND` — Outputs **True** if all input conditions are **True**

- `OR` — Outputs **True** if at least one input condition is **True**

- `XOR` — Outputs **True** if exactly one input condition is **True**

- `NOR` — Outputs **True** if all input conditions are **False**

The selected type determines how input conditions are combined.

---

### Common Use Cases

Typical `Condition` and `Condition Group` use cases include:

- Attribute comparisons

- State or flag checks

- Cooldown or timing validation

- Complex rule evaluation

- Multi-condition gating for `Triggers` or `Branches`

They are frequently used together to express readable and reusable logic.

---

### Design Philosophy

`Condition Nodes` and `Condition Group Nodes` are designed to be:

- Pure (no side effects)

- Composable (can be chained and nested)

- Reusable across different graphs

Separating condition evaluation from flow control and execution improves clarity and maintainability.

---

### Summary

- `Condition Nodes` evaluate individual conditions

- `Condition Group Nodes` combine multiple conditions

- Both output boolean results

- They are used by [Trigger Node] and [Branch Node]

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