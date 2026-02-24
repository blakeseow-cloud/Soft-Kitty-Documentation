---
title: GraphObject
---

A **GraphObject** is a reusable `ScriptableObject` that defines combat and gameplay logic using a node-based graph.

You can create a **GraphObject** by right-clicking in the Project Window:
- `Create > SoftKitty > Node Graph Object`

---

### What Is a GraphObject?

A **GraphObject** is a **design-time asset**.
It stores **node data and connections**, but it does **not execute logic by itself**.

Think of a **GraphObject** as a **blueprint**:

- It defines **how logic should work**

- It contains **nodes**, **connections**, and **configuration**

- It can be reused across multiple systems and entities

- It requires a **runtime executor** (such as [CombatDamage] or [OverTimeEffectInstance]) to run

---
### Typical Use Cases

**GraphObjects** can be used to define:

- **Damage Graphs**

- **Buff / Debuff Graphs**

- **Damage Over Time (DoT) Graphs**

- **Attribute Modification Graphs**

- **Conditional Logic Graphs**

The same GraphObject can be shared across:

- Multiple weapons

- Multiple skills

- Multiple entities

- Multiple gameplay systems

---

### Design-Time vs Runtime
|Aspect|GraphObject|
|---------------|---------------|
|Asset Type     |ScriptableObject|
|Purpose|Define logic|
|Execution|❌ Does not execute|
|Reusability|✅ Highly reusable|
|Runtime Data|❌ None|


At runtime, a [GraphInstance] is connected with a **GraphObject**.
The [GraphInstance] handles:
- Runtime state
- Cached values
- Entity references
- Execution flow

---

### Inspector Behavior

When a **GraphObject** is selected in the Project Window, the Inspector displays:

- **Graph Summary** (from Sticky Notes marked as summary)

- **Node statistics**

- **Dynamic Variable list**

- **Detailed node configuration**

This allows designers to understand a graph’s purpose **without opening the visual editor**.

---

### Graph Editor

When you **double-click** a GraphObject:

- The **Visual Graph Editor** opens

- All nodes, connections, and groups become editable

- Changes are saved directly to the GraphObject asset

---

### Share Graph with Community

Master Combat Core allows you to easily share Graphs created by developers with the community using a built-in export workflow.

A shared Graph is packaged together with all required data, making it safe and easy for others to import and use without missing dependencies.

#### How to Share a Graph

1. Select the **GraphObject** you want to share in the `Project` window.

2. In the `Inspector`, click the **Share With Community** button.

3. Choose a folder where the package file should be saved.

4. The system will automatically:

   - Analyze the selected GraphObject

   - Collect all associated data assets (such as [AttributeObject] and [OverTimeEffectObject])

   - Package everything together with the Graph into a single `.unitypackage` file

Once exported, the Graph can be shared with other developers and imported into any project using Master Combat Core.

#### Why Use This?
- No manual dependency tracking

- Preserves asset references and IDs

- One-click import for recipients

- Ideal for community sharing, tutorials, and sample Graphs

This makes GraphObjects truly **reusable**, **portable**, and **community-friendly**.

[Share on Community (GitHub Discussions)](https://github.com/blakeseow-cloud/Soft-Kitty-Documentation/discussions/categories/master-combat-core)


---

### Key Takeaways

- **GraphObject** = logic definition

- [GraphInstance] = logic execution

- One **GraphObject** can power many gameplay systems

- Clear separation of **design** and **runtime** logic


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