---
title: Overview
---


## Combat Damage Component

The **Combat Damage Component** is a ready-to-use [GraphInstance] implementation
for dealing damage using a Graph Object.

It handles:
- Graph initialization
- [Entity] binding
- **Physics-based** target detection
- Damage execution
- **Projectile** driving

---

### Basic Usage

1. Add `CombatDamageComponent` to a GameObject
2. Assign a Damage [GraphObject]
3. Configure Dealer / Target or **Physics Detection**
4. Trigger damage via code or **Physics Detection**

---

### Optional References

- Dealer [EntityComponent]
- Target [EntityComponent]

Useful for static relationships such as:
- Player-held weapons
- Enemy-attached weapons

---

### Physics Detection

Supported detection modes include:
- IsTrigger Collider
- Rigidbody
- Overlap Sphere
- Overlap Capsule
- Sphere Cast
- Raycast

Each mode exposes different parameters and validates required components automatically.

#### Gizmos
Detection ranges are visualized in the Scene View.

---

### Hit Filtering

- Layer filters
- Tag filters
- Ignore same target within X seconds
`Prevents unintended multiple hits across frames.`

---

### Projectile Mode
Supported projectile modes include:
- Script Drive
  `Move the projectile by script.`
- Physics Drive
  `Move the projectile by Unity Physics System.`

**Projectile Features**:
 - Auto-seeking target
 - Speed curve
 - Gravity (for both modes)
 - Lifetime
 - On hit prefab
 - Auto launch

---

### Extension

Developers may inherit from `GraphInstance` to create custom damage logic,
but `CombatDamageComponent` covers most common scenarios.

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