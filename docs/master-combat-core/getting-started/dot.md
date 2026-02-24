---
title: Damage Over Time (DoT)
---

This guide walks you through creating your first Damage-over-Time (DoT) effect using **Master Combat Core**.

### Prerequisites
Before starting, make sure:
- You already have a `player character`.
- An [EntityComponent] has been added to the player prefab (from the previous guide)
- Core [Attribute]s have been set up (e.g. hp)

### Step 1 — Create the DoT Graph
1. Right-click in the Project Window and create a new [GraphObject]:
    -  `Create > Soft Kitty > Node Graph Object`
2. Double-click the asset to open it in the **Graph Editor**
3. Create two [Variable Node]s and set their type to [Dynamic Variables].
4. Configure them as follows:
   |UID|Default Value|
   |---|---|
   |damage|1|
   |Layer|1|
5. Add a [Math Node] → **Multiply**.
6. Connect both `Dynamic` [Variable Node]s to the input ports of the `Multiply` [Math Node].

---

### Step 2 — Configure Always-On Execution

7. Remove the Trigger Node and Condition Node.
    - `DoT graphs are executed continuously by the Over-Time Effect system and do not require triggers.`

8. Create a `Target` [Entity Node] and connect it to the `Entity` input of an `AttributeChange` [Action Node].

9. Connect the `Multiply` [Math Node] output to the Value input of the `AttributeChange` [Action Node].
10. Configure the [Action Node]:
    - **Attribute UID**: hp
    - **Operation**: Subtract

Your graph should now look like this:
![](../../../static/img/20260120-132004.png)

---

### Step 3 — Create the Over Time Effect (OTE)

11.  Go to: 
     - `Project Settings > SoftKitty > SubData - Over Time Effect`
12. Click **`Add New OverTimeEffect`**.
13. Fill in basic information such as:
     - `Display Name`
     - `Category`
     - `Duration`
14. Set:
     - **UID**: poison
     - **Design Graph**: drag in the DoT Graph you just created
15. Click **`Read From Design Graph`**.
     - `The system will detect and list all Dynamic Variables.`
16. Adjust values:
     - Set `damage` to any number you want
     - `Layer` is locked (system-managed)
17. Enable:
     - **`Can Be Refreshed`**
     - **`Layered`**
     - Set **`Maximum Layer`** to 99

---

### Step 4 — Apply the DoT via Code

You can now apply the DoT to an entity using code:
```csharp
GameManager.GetPlayer().AddOverTimeEffect("poison", null);
```
During runtime:
- Monitor the [EntityComponent] Inspector.
- Repeatedly apply the DoT
- Observe that:
    - The effect stacks
    - Damage scales with the number of layers
    - The player’s hp decreases accordingly

---

### Step 5 — Apply DoT from a Damage Graph (On Hit)

You can also apply a DoT from another Graph.
  1. Open the `Damage Graph` created in the previous guide.
  2. Add a new [Action Node].
  3. Change its type to **`OverTimeEffect`**.
  4. Set:
     - `Effect ID` to the **integer ID** of `poison`
     - Connect the `Target` [Entity Node] to this [Action Node]

Now, when the damage graph executes:
  - Damage is applied
  - Poison is added to the target on hit

---

### Result

You now have:

- A fully functional Damage-over-Time system
- Layered and refreshable effects
- Graph-driven damage logic
- Reusable DoT behavior across skills, weapons, and enemies

---

### Notes & Best Practices

- Dynamic Variables allow design-time tuning without code changes

- Layering enables powerful effects like poison, burn, bleed, or corrosion

- The same DoT graph can be reused across multiple effects

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