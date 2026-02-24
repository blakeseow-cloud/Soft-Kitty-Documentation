---
title: Entity
---
```csharp
class SoftKitty.Entity
```

`Entity` represents a data class for an entity in the system. This could be anything from a character to an interactive object in the world, holding information such as its [Attribute]s, [CustomData] position, and tags.

---

### Callbacks

#### `public delegate void EntityEvent(string _eventName, float _floatArg, Entity _entityArg, bool _boolArg);`
EntityEvent is a callback event class for Entities, it is used for presenting the data changes.

_Example_
```csharp
private Entity _player;
void Start(){
     _player = GameManager.GetPlayer();
     _player.RegisterEntityEventCallback(OnEntityEvent);
}

public void OnEntityEvent(string _eventName, float _floatArg, Entity _entityArg, bool _boolArg){
    if(_eventName == "Hit" && _floatArg>0F){
        mAnimator.Play("HitAnimation");
    }
}

void OnDestroy(){
     _player.UnRegisterEntityEventCallback(OnEntityEvent);
}

```
---

### Properties

#### `public string uid`
The unique string ID for this entity.

---

#### `public int id`
The unique integer ID for this entity.

---

#### `public bool MultipleInstances`
A 'MultipleInstances' Entity will no longer be one to one connection with [EntityComponent], it will allow multiple [EntityComponent]s inherit the data instead, but they don't write data back, think of the Entity as prefab, [EntityComponent] as instantiation. .

---

#### `public List<`[AttributeData]`> Attributes`
A list of attribute data associated with this entity.

---

#### `public int AttributesUpgradeLevel`
The level of attribute upgrades (e.g., character level). This is tied to the upgradeIncrement of attributes.

---

#### `public Vector3 Position`
The position of the entity in the world space.

---

#### `public Vector3 Forward`
The forward direction of the entity. Used instead of rotation since, in many calculations, only the forward direction matters. The up direction can be inferred from the forward vector.

---

#### `public Vector3 Scale`
The scale of the entity.

---

#### `public List<string> Tags`
A list of tags associated with the entity.

---

#### `public bool AvailableForInteraction`
Determines whether this entity can be interacted with or controlled. When set to false, all calculations and controls stop, such as for a dead character.

---

### Master Inventory Engine Properties

#### `public List<InventoryEngine.`[InventoryData]`> Inventory`
The list of [InventoryData] this entity carries.

---


### Methods

#### `public float GetCustomFloat(string _uid)`
Retrieves a custom float value by its unique UID.

---

#### `public int GetCustomInt(string _uid)`
Retrieves a custom integer value by its unique UID.

---

#### `public bool GetCustomBool(string _uid)`
Retrieves a custom boolean value by its unique UID.

---

#### `public string GetCustomString(string _uid)`
Retrieves a custom string value by its unique UID.

---

#### `public IntList GetCustomIntList(string _uid)`
Retrieves a custom integer list by its unique UID.

---

#### `public IdIntList GetCustomIdIntList(string _uid)`
Retrieves a custom ID-to-integer list by its unique UID.

---

#### `public IdFloatList GetCustomIdFloatList(string _uid)`
Retrieves a custom ID-to-float list by its unique UID.

---

#### `public void SetCustomFloat(string _uid, float _value)`
Overrides the value for a custom float data by its unique UID.

---

#### `public void SetCustomInt(string _uid, int _value)`
Overrides the value for a custom integer data by its unique UID.

---

#### `public void SetCustomBool(string _uid, bool _value)`
Overrides the value for a custom boolean data by its unique UID.

---

#### `public void SetCustomString(string _uid, string _value)`
Overrides the value for a custom string data by its unique UID.

---

#### `public bool hasMatchingTag(string _filter)`
Returns whether this entity has a matching tag with the provided tag string.

---

#### `public bool hasMatchingTag(List<string> _filters)`
Returns whether this entity has any matching tag from the provided list of tag strings.

---

#### `public void SetPosition(Vector3 _pos, bool _stickToGround)`
Sets the entity's position. If _stickToGround is true, the position's Y-value will be automatically adjusted based on the ground height.

---

#### `public void AddTempAttributes(int _id, float _value, float _duration, BasicMathFunction _math, string _sourceUid)`
Adds a temporary attribute to this entity based on its integer ID.

---

#### `public void AddTempAttributes(string _uid, float _value, float _duration, BasicMathFunction _math, string _sourceUid)`
Same as above, but with a string UID.

---

#### `public List<`[OverTimeEffectData]`> GetOverTimeEffectList()`
Retrieves a list of over-time effects applied to this entity.

---

#### `public `[OverTimeEffectData]` AddOverTimeEffect(string _uid, Entity _dealer)`
Adds an over-time effect by its string UID and the dealer entity. Returns the OverTimeEffectData.

---

#### `public `[OverTimeEffectData]` AddOverTimeEffect(int _id, Entity _dealer)`
Same as above, but with an integer ID.

---

#### `public `[OverTimeEffectData]` DispellOverTimeEffect(string _uid)`
Dispels an over-time effect by its string UID. The success depends on the settings, and it only removes one layer of the effect.

---

#### `public `[OverTimeEffectData]` DispellOverTimeEffect(int _id)`
Same as above, but with an integer ID.

---

#### `public void RemoveOverTimeEffect(string _uid)`
Completely removes an over-time effect by its string UID, ensuring success and removing all layers.

---

#### `public void RemoveOverTimeEffect(int _id)`
Same as above, but with an integer ID.

---

#### `public int GetOverTimeEffectLayer(string _uid)`
Retrieves the stack count (layer) of a specific over-time effect by its string UID.

---

#### `public `[OverTimeEffectData]` GetOverTimeEffect(string _uid)`
Retrieves the over-time effect data by its string UID if it exists.

---

#### `public `[OverTimeEffectData]` GetOverTimeEffect(int _id)`
Same as above, but with an integer ID.

---

#### `public `[AttributeData]` GetAttributeData(int _id)`
Retrieves the attribute data by its integer ID. If the entity does not have this attribute, it will return a placeholder value of 0.

---

#### `public `[AttributeData]` GetAttributeData(string _uid)`
Same as above, but with a string UID.

---

#### `public void SetAttributeValue(int _id, float _value)`
Sets the value of an attribute by its integer ID to a float value.

---

#### `public void SetAttributeValue(string _uid, float _value)`
Same as above, but with a string UID.

---

#### `public void SetAttributeValue(int _id, int _value)`
Sets the value of an attribute by its integer ID to an integer value.

---

#### `public void SetAttributeValue(string _uid, int _value)`
Same as above, but with a string UID.

---

#### `public void SetAttributeValue(int _id, string _value)`
Sets the value of an attribute by its integer ID to a string value.

---

#### `public void SetAttributeValue(string _uid, string _value)`
Same as above, but with a string UID.

---

#### `public float AddAttributeValue(int _id, float _value)`
Adds a float value to an existing attribute by its integer ID and returns the result.

---

#### `public float AddAttributeValue(string _uid, float _value)`
Same as above, but with a string UID.

---

#### `public int AddAttributeValue(int _id, int _value)`
Adds an integer value to an existing attribute by its integer ID and returns the result.

---

#### `public int AddAttributeValue(string _uid, int _value)`
Same as above, but with a string UID.

---

#### `public float AddAttributeValueClamp(int _id, float _value, float _min, float _max)`
Adds a float value to an existing attribute by its integer ID, clamps the result, and returns it.

---

#### `public float AddAttributeValueClamp(string _uid, float _value, float _min, float _max)`
Same as above, but with a string UID.

---

#### `public int AddAttributeValueClamp(int _id, int _value, int _min, int _max)`
Same as above, but with integer values.

---

#### `public int AddAttributeValueClamp(string _uid, int _value, int _min, int _max)`
Same as above, but with a string UID.

---

#### `public float GetAttributeFloat(int _id, bool _inculdTempValue = true)`
Retrieves the float value of an attribute by its integer ID, optionally including temporary values.

---

#### `public float GetAttributeFloat(string _uid, bool _inculdTempValue = true)`
Same as above, but with a string UID.

---

#### `public int GetAttributeInt(int _id, bool _inculdTempValue = true)`
Retrieves the integer value of an attribute by its integer ID, optionally including temporary values.

---

#### `public int GetAttributeInt(string _uid, bool _inculdTempValue = true)`
Same as above, but with a string UID.

---

#### `public string GetAttributeString(int _id)`
Retrieves the string value of an attribute by its integer ID.

---

#### `public string GetAttributeString(string _uid)`
Same as above, but with a string UID.

---

#### `public void RegisterAttributeChangeCallback(`[AttributeChangeEvent]` _callback)`
Registers a callback for changes to an attribute.

---

#### `public void UnRegisterAttributeChangeCallback(`[AttributeChangeEvent]` _callback)`
Unregisters a callback for changes to an attribute.

---

#### `public void ClearAttributeChangeCallback()`
Clears all registered attribute change callbacks.

---

#### `public void RegisterEntityEventCallback(`[EntityEvent]` _callback)`
Registers an entity event callback to receive events.

---

#### `public void UnRegisterEntityEventCallback(`[EntityEvent]` _callback)`
Unregisters an entity event callback.

---

#### `public void ClearEntityEventCallback()`
Clears all registered entity event callbacks.

---

#### `public void RegisterOverTimeChangeCallback(`[OverTimeEffectChangeEvent]` _callback)`
Registers a callback for changes to over-time effects on this entity.

---

#### `public void UnRegisterOverTimeChangeCallback(`[OverTimeEffectChangeEvent]` _callback)`
Unregisters a callback for changes to over-time effects on this entity.

---

#### `public void ClearOverTimeChangeCallback()`
Clears all registered over-time effect change callbacks.

---

### Master Inventory Engine Methods

#### `public InventoryEngine.`[InventoryData]` GetAnyInventoryData()`
Retrieve any exitsing [InventoryData] of this entity when available.

---

#### `public InventoryEngine.`[InventoryData]` GetEquipment()`
Retrieve any exitsing Equipment type [InventoryData] of this entity when available.

---

#### `public InventoryEngine.`[InventoryData]` GetInventory()`
Retrieve any exitsing Inventory|Crate type [InventoryData] of this entity when available.

---

#### `public InventoryEngine.`[InventoryData]` GetInventoryDataByType(InventoryEngine.`[InventoryData]`.HolderType _type)`
Retrieve specified type [InventoryData] of this entity when available.

---

#### `public InventoryEngine.LootPack DropLootPack(int _index = -1)`
Drop a [Loot Pack] this entity carries, pass an index number for drop a specified pack from the list, otherwise it will random pick one.

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