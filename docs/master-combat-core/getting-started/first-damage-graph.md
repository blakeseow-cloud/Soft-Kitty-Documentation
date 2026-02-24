---
title: First Damage Graph
---

This guide walks you through creating your first working damage setup using **Master Combat Core**.


By the end, you will:

- Understand how a damage graph work

- Create a simple damage [GraphObject]


---

### Foundation

Before building the graph, we need to prepare some data.

#### Step 0 — Setup Attributes

Go to:
`Project Settings > SoftKitty > Attributes`
Click **`Add`** to create the following [Attribute]::

|Display Name|UID|Default Value|
|---|---|:---:|
|`Attack`|`atk`|5|
|`Defense`|`def`|5|
|`Health`|`hp`|5|

#### Step 0.1 — Setup Entities

Go to: 
`Project Settings > SoftKitty > Entity Manager`
Click **`Add New Entity`** and create two [Entity]:

|UID|Tags|
|---|---|
|`player`|`friendly`|
|`enemy1`|`hostile`|

Then expand `Batch Management Tools` on the top and click `Batch Fill Attributes` 
This assigns all existing attributes to all entities.


---

### Step 1 — Create a Damage Graph


1. Right-click in the Project window

2. Create a **Damage Graph** asset via:
   `Create > Soft Kitty > Node Graph Object`

3. Double-click the asset to open it in the **Graph Editor**

This graph defines **how damage is calculated and applied**.


---

### Step 2 — Setup Conditions

Every damage graph starts with a **Root Node**.


#### Root Node / [Trigger Node] / [Action Node] Relationship

[Trigger Node]
Controls whether the graph is allowed to execute

`Root Node`
Acts as the execution gateway

[Action Node]
Performs actual gameplay changes (damage, healing, etc.)

By default, a `Root Node`, [Trigger Node], [Condition Node], and [Action Node] are already created and connected:

![](../../../static/img/20260139-193913.png)

#### Build the Damage Condition
1. Create [Variable Node]s
- Right-click the graph and select:
`Create Node > Variable > Constant`
![](../../../static/img/20260159-085939.png)
Set the value to `0.01`
- Create another [Variable Node]:
Type: `Attribute`
Attribute: `def`

2. Create [Math Node]
- Right-click the graph:
`Create Node > Math > Multiply`
- Connect:
`0.01 Constant` → `Multiply` A
`Defense Attribute` → `Multiply` B
![](../../../static/img/20260137-093709.png)

3. Configure [Condition Node]
- Connect the Multiply output into the [Condition Node].
- Now create two Entity Nodes:
  - `Create Node > Entity > Dealer`
  - `Create Node > Entity > Target`
- Connect:
  - `Dealer` → [Condition Node] (Entity input)
  - `Target` → Attribute [Variable Node] (Entity input)
- Your graph should now look like this:
![](../../../static/img/20260141-094120.png)



#### What Does This Condition Mean?
This condition evaluates:
```
Is the attacker’s `Attack` greater than the target’s `Defense` × 0.01?
```
If the condition is True, the Root Node will execute all connected Action Nodes.

---

### Step 3 — Setup Actions

Now let’s calculate and apply damage.

We will:
- Subtract Defense × 0.01 from the attacker’s Attack
- Apply the result as damage to the target’s Health

The final graph should look like this:

![](../../../static/img/20260152-095238.png)

At runtime:
- Damage is calculated
- The target’s Health is reduced accordingly

---

### Step 4 — Grouping & Documentation

To improve readability:
- Select the nodes related to `Defense calculation`
- Right-click → **Group**
- Rename the group to `Defense`

Then:
- Right-click an empty area
- Select **Create Sticky Note**
- Right-click the note → **Set as Graph Summary**

Write a short description.
This summary will be visible in the **Inspector**, even outside the graph editor.

---

### How This [GraphObject] Works in Gameplay?
This Damage [GraphObject] can be used by:
- [CombatDamage] component
- [OverTimeEffect]
- A custom system inheriting from [GraphInstance]

Regardless of how it’s used, two runtime inputs are required:
- Dealer — The entity dealing damage
- Target — The entity receiving damage

---

### How to Provide Runtime Inputs

You can:
- Assign them directly in the [CombatDamage] **Inspector**
- Let [CombatDamage] **Physics Detection** auto-assign targets
- Use [OverTimeEffect], which handles both automatically
- Set them manually at runtime via code:
```csharp
combatDamage.SetDealerEntity(attackerEntity);
combatDamage.SetTargetEntity(victimEntity);
```

---

### Summary

You have now:
- Created a complete damage graph
- Defined clear conditions
- Calculated and applied damage
- Prepared it for real gameplay usage

This same workflow applies to **healing**, **buffs**, **debuffs**, and **custom combat logic**.

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