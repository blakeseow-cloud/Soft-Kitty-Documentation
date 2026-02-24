---
title: Projectile
---

This section shows how to apply your Damage [GraphObject] to a projectile using [CombatDamage] and **physics detection**.

### Prerequisites
Before starting, make sure:
- You already have a player character and a enemy character, a controller script, and an attack animation
- You have created a **Damage Graph** [GraphObject] (from the previous guide)
- An [EntityComponent] has been added to the player prefab and enemy prefab (from the previous guide)

---

### Step-by-Step Setup
1. Drag out your projectile model prefab or simply create a cube and scale it to a proper size, and put it under the Player prefab.
2. Add a [CombatDamage] component to it.
3. Drag the [GraphObject] you created into the **`Graph`** field of the [CombatDamage] component.
4. Drag the player’s [EntityComponent] into the **`Dealer Entity`** slot under **`Optional References`** section.
5. Enable **`Enable Physics Detection`** under the **`Physics Detection`** section.
6. Set **`Detection Mode`** to **`Rigidbody Collider`**.
   - Click all red **`Auto Fix`** buttons if any are shown.
7. In the **`LayerMask`** field, select the layer used by your enemy prefab.
8. In the **`Tag Filter`** section, add a new tag:
   - `hostile`
9.  Set **`Projectile Mode`** to **`Physics Drive`** under **`Projectile`** section.
    - Click all red **`Auto Fix`** buttons if any are shown.
10. Enable  **`Auto-seeking Targets`**.
11. Now the projectile is ready to use, **Deactivate** it so it does not fire in the begining.
12. To test it, you could set a keycode in your code to instantiate and activate it.
```csharp
public GameObject myProjectile;

public void Fire(){
    GameObject _newProjectile = Instantiate(myProjectile);
     _newProjectile.SetActive(true);
}

void Update(){
    if (Input.GetKeyDown(KeyCode.Space))Fire();
}

```

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