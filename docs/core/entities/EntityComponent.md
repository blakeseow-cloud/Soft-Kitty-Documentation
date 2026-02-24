---
title: EntityComponent
---
```csharp
class SoftKitty.EntityComponent
```

`EntityComponent` is a behavior class attached to a GameObject in Unity, responsible for linking [Entity] data with a game entity's behavior. It manages the [Entity]'s interactions and updates in the game world.

---

### Properties

#### `public string uid`
The unique string ID for this [Entity], which connects it to its corresponding [Entity] data.

---

#### `public `[Entity]` mData`
A reference to the [Entity]'s data.

---

#### `public bool isPlayer`
Returns whether this instance represents the player [Entity].

---

#### `public bool Engage`
Returns whether this [Entity] is currently engaged in some action or interaction.

---

#### `public EntityComponent EngagedEntity`
Returns the target [Entity] that this [Entity] is currently engaging with.

---


### Methods

#### `public virtual void ApplyData`
Applies [Entity] data from the database to this instance, such as position, rotation, and scale. Developers can override this for extra data specific to their needs.

---

#### `public virtual void UpdateData()`
Updates the [Entity] data to the database, including position, rotation, and scale. Developers can override this for extra data updates.

---

#### `public void SetEulerAngles(Vector3 _angle, bool _worldSpace = true)`
Sets the Euler angles of the [Entity] immediately.

---

#### `public void SetScale(Vector3 _scale)`
Sets the scale of the [Entity] immediately.

---

#### `public void Move(Vector3 _positionOffset, float _duration, bool _worldSpace, bool _stickToGround = true)`
Moves the [Entity] over a specified duration, optionally sticking to the ground.

---

#### `public void Rotate(Vector3 _angleOffset, float _duration, bool _worldSpace)`
Rotates the [Entity] over a specified duration.

---

#### `public void Scale(Vector3 _scale, float _duration)`
Scales the [Entity] over a specified duration.
Convenient Methods (Similar to [Entity] Data Class):

---

#### `public bool hasMatchingTag(string _filter)`
Returns whether the [Entity] has a matching tag with the provided tag string.

---

#### `public bool hasMatchingTag(List<string> _filters)`
Returns whether the [Entity] has a matching tag from the provided list of tag strings.

---

#### `public void RegisterAttributeChangeCallback(`[AttributeChangeEvent]` _callback)`
Registers a callback for changes to the [Entity]'s attributes.

---

#### `public void UnRegisterAttributeChangeCallback(`[AttributeChangeEvent]` _callback)`
Unregisters a previously registered attribute change callback.

---

#### `public void ClearAttributeChangeCallback()`
Clears all registered attribute change callbacks.

---

#### `public void RegisterEntityEventCallback(`[EntityEvent]` _callback)`
Registers a callback for [Entity] events.

---

#### `public void UnRegisterEntityEventCallback(`[EntityEvent]` _callback)`
Unregisters a previously registered entity event callback.

---

#### `public void ClearEntityEventCallback()`
Clears all registered entity event callbacks.

---

#### `public void RegisterOverTimeChangeCallback(`[OverTimeEffectChangeEvent]` _callback)`
Registers a callback for over-time effect changes on this [Entity].

---

#### `public void UnRegisterOverTimeChangeCallback(`[OverTimeEffectChangeEvent]` _callback)`
Unregisters a previously registered over-time effect change callback.

---

#### `public void ClearOverTimeChangeCallback()`
Clears all registered over-time effect change callbacks.

---

#### `public Vector3 Position`
The position of the [Entity] in world space.

---

#### `public Vector3 Forward`
The forward direction of the [Entity].

---

#### `public Vector3 LocalScale`
The local scale of the [Entity].

---

#### `public void SetPosition(Vector3 _pos, bool _stickToGround = true)`
Sets the [Entity]'s position in world space. If _stickToGround is true, it will adjust the Y-axis to match the ground height.

---

#### `public float GetCustomFloat(string _uid)`
Retrieves a custom float value for the [Entity] by its unique UID.

---

#### `public int GetCustomInt(string _uid)`
Retrieves a custom integer value for the [Entity] by its unique UID.

---

#### `public bool GetCustomBool(string _uid)`
Retrieves a custom boolean value for the [Entity] by its unique UID.

---

#### `public string GetCustomString(string _uid)`
Retrieves a custom string value for the [Entity] by its unique UID.

---

#### `public `[IntList]` GetCustomIntList(string _uid)`
Retrieves a custom integer list for the [Entity] by its unique UID.

---

#### `public `[IdIntList]` GetCustomIdIntList(string _uid)`
Retrieves a custom ID-to-integer list for the [Entity] by its unique UID.

---

#### `public `[IdFloatList]` GetCustomIdFloatList(string _uid)`
Retrieves a custom ID-to-float list for the [Entity] by its unique UID.

---

#### `public void SetCustomFloat(string _uid, float _value)`
Overrides the custom float value for the [Entity] by its unique UID.

---

#### `public void SetCustomInt(string _uid, int _value)`
Overrides the custom integer value for the [Entity] by its unique UID.

---

#### `public void SetCustomBool(string _uid, bool _value)`
Overrides the custom boolean value for the [Entity] by its unique UID.

---

#### `public void SetCustomString(string _uid, string _value)`
Overrides the custom string value for the [Entity] by its unique UID.

---

#### `public `[Attribute]` GetAttribute(string _uid)`
Retrieves the [Attribute] associated with the [Entity] by its unique UID.

---

#### `public `[AttributeData]` GetAttributeData(string _uid)`
Retrieves the [AttributeData] associated with the [Entity] by its unique UID.

---

#### `public float GetAttributeFloat(string _uid)`
Retrieves the float value of an [attribute] by its unique UID.

---

#### `public string GetAttributeString(string _uid)`
Retrieves the string value of an [attribute] by its unique UID.

---

#### `public int GetAttributeInt(string _uid)`
Retrieves the integer value of an [attribute] by its unique UID.

---

#### `public void SetAttributeValue(string _uid, float _value, Entity _dealer = null)`
Sets the value of an [attribute] by its unique UID (float).

---

#### `public void SetAttributeValue(string _uid, string _value)`
Sets the value of an [attribute] by its unique UID (string).

---

#### `public void SetAttributeValue(string _uid, int _value, Entity _dealer = null)`
Sets the value of an [attribute] by its unique UID (integer).

---

#### `public void SetAttributeValue(int _id, float _value, Entity _dealer = null)`
Sets the value of an [attribute] by its integer ID (float).

---

#### `public void SetAttributeValue(int _id, string _value)`
Sets the value of an [attribute] by its integer ID (string).

---

#### `public void SetAttributeValue(int _id, int _value, Entity _dealer = null)`
Sets the value of an [attribute] by its integer ID (integer).

---

#### `public float AddAttributeValue(string _uid, float _value, Entity _dealer = null)`
Adds a float value to an existing [attribute] by its unique UID and returns the result.

---

#### `public int AddAttributeValue(string _uid, int _value, Entity _dealer = null)`
Adds an integer value to an existing [attribute] by its unique UID and returns the result.

---

#### `public float AddAttributeValue(int _id, float _value, Entity _dealer = null)`
Adds a float value to an existing [attribute] by its integer ID and returns the result.

---

#### `public int AddAttributeValue(int _id, int _value, Entity _dealer = null)`
Adds an integer value to an existing [attribute] by its integer ID and returns the result.

---

#### `public float AddAttributeValueClamp(string _uid, float _value, float _min, float _max, Entity _dealer = null)`
Adds a float value to an existing [attribute] by its unique UID, clamps the result, and returns the updated value.

---

#### `public int AddAttributeValueClamp(string _uid, int _value, int _min, int _max, Entity _dealer = null)`
Same as above, but with integer values.

---

#### `public float AddAttributeValueClamp(int _id, float _value, float _min, float _max, Entity _dealer = null)`
Same as above, but with integer ID.

---

#### `public int AddAttributeValueClamp(int _id, int _value, int _min, int _max, Entity _dealer = null)`
Same as above, but with integer values.

---

#### `public bool AvailableForInteraction`
Returns whether the [Entity] is available for interaction.

---

### Master Inventory Engine Methods

#### `public InventoryEngine.`[InventoryData]` GetAnyInventoryData()`
Retrieve any exitsing [InventoryData] of this [Entity] when available.

---

#### `public InventoryEngine.`[InventoryData]` GetEquipment()`
Retrieve any exitsing Equipment type [InventoryData] of this [Entity] when available.

---

#### `public InventoryEngine.`[InventoryData]` GetInventory()`
Retrieve any exitsing Inventory|Crate type [InventoryData] of this [Entity] when available.

---

#### `public InventoryEngine.`[InventoryData]` GetInventoryDataByType(InventoryEngine.`[InventoryData]`.HolderType _type)`
Retrieve specified type [InventoryData] of this [Entity] when available.

---

#### `public InventoryEngine.LootPack DropLootPack(int _index = -1)`
Drop a [Loot Pack] this [Entity] carries, pass an index number for drop a specified pack from the list, otherwise it will random pick one.

---

[attribute]: /docs/core/attributes/AttributeData

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