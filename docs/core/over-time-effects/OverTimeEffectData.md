---
title: OverTimeEffectData
---
```csharp
class SoftKitty.OverTimeEffectData
```

`OverTimeEffectData` represents the **runtime state** of an over-time effect currently applied to an entity.

This data is created and managed automatically during gameplay.

---
### Callbacks

#### `public delegate void OverTimeEffectChangeEvent(string _uid, OverTimeEffectData _data, OverTimeEffectEventType _eventType);`
Callback delegate invoked when the OverTimeEffect data changes.

_Example_
```csharp
private Entity _player;
void Start(){
     _player = GameManager.GetPlayer();
     _player.RegisterOverTimeChangeCallback(OnOverTimeEffectChangeEvent);
}

public void OnOverTimeEffectChangeEvent(string _uid, OverTimeEffectData _data, OverTimeEffectEventType _eventType){
    if (_eventType == OverTimeEffectEventType.Add) {
        GameObject _prefab = GameManager.GetOverTimeEffect(_uid).GetCustomObject<GameObject>("vfx");
        Instantiate(_prefab, mAnimator.GetBoneTransform(HumanBodyBones.UpperChest).transform);
    }
}

void OnDestroy(){
     _player.UnRegisterOverTimeChangeCallback(OnOverTimeEffectChangeEvent);
}

```
---

### Properties

#### `string uid`

Links this runtime instance to its corresponding [OverTimeEffect] setting.

---

#### `float timer`

Remaining lifetime (in seconds) before the effect expires.

---

#### `int layer`

Current stack count of this effect.

Used for effects that support stacking, such as:
- Poison
- Burning
- Bleeding

---

#### `string dealer`

UID of the entity that applied this effect.

This is commonly used for:
- Damage attribution
- Trigger conditions
- Combat logs

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