---
title: CombatDamage
---
```csharp
class SoftKitty.CombatDamage : GraphInstance
```
[GraphInstance] / CombatDamage
 

`CombatDamage` inherits from [GraphInstance] and adds specific functionality for handling damage detection and dealing damage in combat scenarios.

---

### Methods
#### `public void SetEnable(bool _enable)`
Enables or disables damage detection.

---

#### `public void SetEnable(float _autoDisableAfterSeconds)`
Enables damage detection and automatically disables it after a specified number of seconds.

---
#### `public void Launch()`
Launch the projectile to its current forward direction. The damage detection will be enabled in the same time.

---

#### `public void Launch(Vector3 _direction)`
Launch the projectile to the specified direction. The damage detection will be enabled in the same time.

---

#### `public void PhysicsCast()`
Perform a Physics detection for Raycast|SphereCast|Overlap_Sphere|Overlap_Capsule

---

#### `public override void SetDynamicValue(string _uid, float _value)`
Sets a dynamic variable in the visual graph object by its unique UID.

---

#### `public void DealDamage()`
Manually triggers the damage calculation. Triggers are included in the calculation.

---

#### `public void DealDamage(`[Entity]` _target)`
Manually deals damage to the provided target. Triggers are included in the calculation.

---

#### `public void DealDamage(`[Entity]` _dealer, `[Entity]` _target)`
Manually deals damage to the provided target with the provided dealer. Triggers are included in the calculation.

---

#### `public void PerformAction(int _hash)`
Ignores all triggers and directly performs all actions. An integer hash is required for caching the result.

---

#### `public bool isTriggered(int _hash)`
Returns whether all trigger nodes are triggered. An integer hash is required for caching the result.

---

#### `public bool IfTriggerThenPerformAction()`
Calculates the triggers. If all are triggered, it performs all actions and returns the trigger result.

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