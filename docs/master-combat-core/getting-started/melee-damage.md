---
title: Melee Damage Setup
---

This section shows how to apply your Damage [GraphObject] to a melee weapon using [CombatDamage] and **physics detection**.

### Prerequisites
Before starting, make sure:
- You already have a player character and a enemy character, a controller script, and an attack animation
- You have created a **Damage Graph** [GraphObject] (from the previous guide)

---

### Step-by-Step Setup

#### Player Setup

1. Add an [EntityComponent] to the root GameObject of your player.
   - Select player from the **`Entity UID`** dropdown
   - Make sure **`Available for Interaction`** is checked

2. Add a [CombatDamage] component to the player’s weapon GameObject.

3. Drag the [GraphObject] you created into the **`Graph`** field of the [CombatDamage] component.

4. Drag the player’s [EntityComponent] into the **`Dealer Entity`** slot under **`Optional References`** section.

5. Enable **`Enable Physics Detection`** under the **`Physics Detection`** section.

6. Set **`Detection Mode`** to **`Trigger Collider`**.
   - Click all red **`Auto Fix`** buttons if any are shown.

7. In the **`LayerMask`** field, select the layer used by your enemy prefab.

8. In the **`Tag Filter`** section, add a new tag:
   - `hostile`

---

#### Enemy Setup

9. Add an [EntityComponent] to the root GameObject of your enemy prefab.
   - Select the corresponding enemy entity from the **`Entity UID`** dropdown

10. Add a `Capsule Collider` (or any suitable collider) to the enemy and check **`Is Trigger`**.
     

---

#### Test the Damage

11. Run the game.
Whenever the player’s weapon touches the enemy:
   - The damage graph will execute
   - The enemy will take damage

You can monitor the enemy’s Health (hp) in the [EntityComponent] Inspector during runtime.

---

### Trigger Damage via Animation (Recommended)

To ensure damage only occurs during an attack animation, use a Unity `Animation Event`.

Example:
```csharp
public CombatDamage SwordDamageScript;

void Start(){
    SwordDamageScript.SetEnable(flase); //Disable the damage on Start.
}

void OnDamageAnimation(){
    SwordDamageScript.SetEnable(0.1F); //Enable the damage for 0.1 second
}
```

This approach gives you precise control over:

- Attack timing

- Hit windows

- Combo balancing

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