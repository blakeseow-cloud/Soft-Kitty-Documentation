---
title: AttributeData
---
```csharp
class SoftKitty.AttributeData
```

`AttributeData` represents the runtime value of an attribute during gameplay.
It supports numeric and string values, callbacks, upgrades, and locking.

---

### Callbacks

#### `public delegate void AttributeChangeEvent(string _uid, float _value, `[Entity]` _dealer);`
Callback delegate invoked when the attribute value changes.

_Example_
```csharp
private Entity _player;
void Start(){
     _player = GameManager.GetPlayer();
     _player.RegisterAttributeChangeCallback(OnAttributeChangeEvent);
}

public void OnAttributeChangeEvent(string _uid, float _value, `[Entity]` _dealer){
    if(_uid == "hp"){
        mHealthBar.update(_value);
    }
}

void OnDestroy(){
     _player.UnRegisterAttributeChangeCallback(OnAttributeChangeEvent);
}

```
---

### Properties

#### `string uid

The UID linking this runtime data to its attribute definition.

---

#### `int id`

The ID linking this runtime data to its attribute definition.

---

#### `public `[Attribute]` setting`

Retrieve the [Attribute] settings of this data.

---

#### `string stringValue`

The string value of this attribute.

---

#### `float floatValue`

The numeric value of this attribute.

---

#### `public bool locked`

Whether this attribute is Locked, locked attribute is not valid and invisible.

---

#### `public int randomChange`

Random chance to unlock this attribute. (For rogue-like game)

---

#### `public bool isFixed`

Whether this attribute has fixed value.

---

#### `public float minValue`

The minimal value of this attribute if this attribute has random value.

---

#### `public float maxValue`

The maximum value of this attribute if this attribute has random value.

---


### Methods

#### `public void Init()`

For rogue-like game, call this method to decide whether this attribute should be locked and generate a random value for it.

---

#### `void RegisterCallback(`[AttributeChangeEvent]` _callback)`

Registers a callback triggered when the attribute value changes.

---

#### `bool isNumber()`

Returns true if this attribute is numeric.

---

#### `bool isString()`

Returns true if this attribute stores a string value.

---

#### `void SetLock(bool _lock)`

Locks or unlocks this attribute.
Locked attributes are invalid and hidden.

---

#### `float GetFloat(int _upgradeLevel = 0)`

Returns the float value, optionally including upgrade scaling.

---

#### `int GetInt(int _upgradeLevel = 0)`

Returns the integer value, optionally including upgrade scaling.

---

#### `string GetString()`

Returns the string value of this attribute.

---

#### `void SetValue(float _value, `[Entity]` _dealer = null)`

Overrides the attribute value using a float.

---

#### `void SetValue(int _value, `[Entity]` _dealer = null)`

Overrides the attribute value using an integer.

---

#### `void SetValue(string _value)`

Overrides the attribute value using a string.

---

#### `float AddValue(float _value, `[Entity]` _dealer = null)`

Adds a float value and returns the result.

---

#### `int AddValue(int _value, `[Entity]` _dealer = null)`

Adds an integer value and returns the result.

---

#### `float AddValueClamp(float _value, float _min, float _max, `[Entity]` _dealer = null)`

Adds a float value, clamps it, and returns the result.

---

#### `int AddValueClamp(int _value, int _min, int _max, `[Entity]` _dealer = null)`

Adds an integer value, clamps it, and returns the result.

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