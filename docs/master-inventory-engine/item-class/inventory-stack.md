---
title: InventoryStack 
---

```csharp
class SoftKitty.InventoryEngine.InventoryStack
```

---

### Properties

#### `public Item Item`
The [Item] object in this InventoryStack.

---

#### `public int Number`
The number of items in this InventoryStack.

---

### Methods

#### `public InventoryStack(int _uid, int _number)` 
Creates a new InventoryStack with the specified [Item] **UID** and quantity.

---

#### `public InventoryStack(Item _item, int _number)` 
Creates a new InventoryStack with the specified [Item] and quantity. 

---

#### `public InventoryStack()` 
Creates an empty InventoryStack. 

---

#### `public InventoryStack Copy()` 
Returns a copy of this InventoryStack. 

---

#### `public InventoryStack Merge(InventoryStack _source)` 
Merges another `InventoryStack (_source)` with this one if they contain the same [Item]; otherwise, it swaps them. Returns the resulting stack. You should assign the result to the source. 

---

#### `public InventoryStack Split(int _number)` 
Splits this [InventoryStack], returning the split stack. 

---

#### `public void Set(InventoryStack _data)` 
Overrides this InventoryStack with the provided data. 

---

#### `public void Delete()` 
Deletes the items in this InventoryStack. 

---

#### `public void OverideNumber(int _number)` 
Overrides the quantity of items in this InventoryStack. 

---

#### `public void AddNumber(int _number)` 
Adds the specified number of items to this InventoryStack; the **_number** can be negative. 

---

#### `public bool Consume(int _number)` 
Consumes the specified number of items from this InventoryStack and returns **true** if successful. 

---

#### `public float GetWeight()` 
Returns the total weight of the items in this InventoryStack. 

---

#### `public bool isTagMatchText (string _tag)` 
Returns whether the items in this InventoryStack have the specified **tag**. 

---

#### `public bool isTagsMatchList (List<string> _tags, bool _allMatch = true)` 
Returns whether the tags of this [Item] match the specified **tag** list. 

---

#### `public bool isTagContainText (string _text, bool _caseSensitive = true)` 
Returns whether the items in this InventoryStack have any tag contains the specified **text**. 

---

#### `public string GetTagContainText (string _text, bool _caseSensitive = true)` 
Returns the tag of the [Item] which contains the specified **text**. 

---

#### `public int GetItemId()` 
Returns the UID of the items in this InventoryStack. Returns **-1** if the stack is empty. 

---

#### `public int GetType(int _emptyResult=0)` 
Returns the category ID of the items in this InventoryStack. Returns **_emptyResult** if the stack is empty. 

---

#### `public int GetUpgradeLevel()` 
Returns the upgrade level of the items in this InventoryStack. 

---

#### `public int GetAvailableSpace()` 
Returns the available space in this stack. For example, if the maximum stack size is 99 and the current quantity is 10, the available space would be 89. 

---

#### `public bool isSameItem(int _uid, int _upgradeLevel,List<int> _enchantments,List<int> _sockets)` 
- `public bool isSameItem(int _uid, int _upgradeLevel,List<int> _enchantments)` 
- `public bool isSameItem(int _uid, int _upgradeLevel)` 
- `public bool isSameItem(int _uid)` 

Returns whether the items in this InventoryStack match the provided conditions. 

---

#### `public bool isEmpty()` 
Returns whether this InventoryStack is empty. 

---

#### `public bool canBeMerged(int _uid)` 
Returns whether the items in this InventoryStack can be merged with the provided item **UID**.

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