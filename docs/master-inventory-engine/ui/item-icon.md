---
title: ItemIcon.cs | LinkItem.cs| InventoryItem.cs 
---

```csharp
class SoftKitty.InventoryEngine.ItemIcon
class SoftKitty.InventoryEngine.InventoryItem:ItemIcon
class SoftKitty.InventoryEngine.LinkIcon:ItemIcon
```

These are interface scripts attached to each [Item] slot.  

### Properties 
#### `public IconType Type` 
- `Reference`: Only for showing information about an Item. 
- `Link`: Shortcut to an [Item]; it updates its information when the stats of the linked [Item] change. 
- `Item`: Represents an [Item] carried by an [InventoryData]. 

---

#### `public bool CanHover` 
Determines if this [Item] slot reacts to pointer hover events. 

---

#### `public bool CanBeLinked` 
Indicates whether this [Item] slot can be dragged to the shortcut slots.

---

#### `public bool Draggable `
(For `InventoryItem.cs`  and `LinkItem.cs` only) 
Determines if this [Item] slot is draggable. 

---

#### `public bool AutoLinkToHighestUpgradeLevel` 
(For `LinkItem.cs` only)
When set to true, the shortcut will automatically re-link to the highest upgrade level of the same 
[Item] from the player's inventory. 

---

#### `public bool Splittable`
(For `InventoryItem.cs` only) 
Determines if this [Item] slot is splittable. 

---

#### `public bool Deletable` 
(For `InventoryItem.cs` only)
Determines if this [Item] slot is deletable. 

---

#### `public bool RecieveUntradeable` 
(For `InventoryItem.cs` only)
Indicates whether this [Item] slot can receive untradeable items. For example, merchant slots should have this set to false. 

---

#### `public bool RecieveDragging` 
(For `InventoryItem.cs` only)
Indicates whether this [Item] slot can receive dragged items. 

---

#### `public string LimitedByTag` 
(For `InventoryItem.cs` and `LinkItem.cs` only)
If this [Item] slot only accepts items with a specific tag, specify that tag here. 

---


#### `public InventoryData LimitedByOwner` 
(For `InventoryItem.cs` and `LinkItem.cs` only)
If this [Item] slot only accepts items from a specific owner, specify that owner here. 

---

### Methods: 
#### `public void RegisterClickCallback(int _id, OnItemClick _callback)` 
Registers a callback for when this icon is clicked. 

---

#### `public void RegisterLinkedCallback(int _index, OnItemLinked _callback)` 
(For LinkItem.cs only)`
Registers a callback for when this icon is linked with an [Item].

---

#### `public int GetNumber()` 
Returns the number of items in the slot. 

---

#### `public int GetItemId()` 
Returns the [Item] ID. Returns -1 if the slot is empty. 

---

#### `public bool GetHover()` 
Returns whether this [Item] slot is hovered over by the mouse. 

---

#### `public void SetItemId(int _id)` 
Overrides the [Item] ID. 

---

#### `public void SetItemNumber(int _num)` 
Sets the number of items in the slot. 

---

#### `public void SetUpgradeLevel(int _level)` 
Sets the upgrade level of the [Item]. 

---

#### `public void SetAppearance(Texture _icon,Color _backgroundColor , Color _frameColor , bool _numVisible=false, bool _upgradeVisible=false)` 
- `public void SetAppearance(`[Item]` _item, bool _numVisible = false, bool _upgradeVisible = false)` 

Sets the icon and colors for the slot. 

---

#### `public void SetEmpty()` 
Sets the slot to empty. 

---

#### `public void ToggleOutline(bool _visible)` 
Toggles the outline effect of this slot. 

---

#### `public void SetFavorate(bool _favorate)` 
Toggles whether this [Item] is marked as a favorite. 

---

#### `public void SetVisible(bool _visible)` 
Toggles this slot between fully visible or half-transparent. 

---

#### `public bool isTagMatchText (string _tag)` 
Returns whether the [Item] matches the provided **tag**. 

---

#### `public bool isTagsMatchList (List<string> _tags, bool _allMatch = true)` 
Returns whether the tags of this [Item] match the specified **tag** list. 

---

#### `public bool isTagContainText (string _text, bool _caseSensitive = true)` 
Returns whether the [Item] have any tag contains the specified **text**. 

---

#### `public string GetTagContainText (string _text, bool _caseSensitive = true)` 
Returns the tag of the [Item] which contains the specified **text**. 

---

#### `public InventoryStack GetStackData()`
(For `InventoryItem.cs` & `LinkIcon.cs` only) 
Retrieves the InventoryStack data of this [Item]. 

---

#### `public override InventoryData GetStackHolder()`
(For `InventoryItem.cs` & `LinkIcon.cs` only) 
Retrieves the InventoryData of this slot. 

---

#### `public void SetHolder(InventoryData _holder)` 
(For `InventoryItem.cs` & `LinkIcon.cs` only) 
Sets the InventoryData for this slot. 

---

#### `public override Item GetItem()`
(For `InventoryItem.cs` & `LinkIcon.cs` only) 
Retrieves the [Item] in this slot. 

---

#### `public bool isNameMatch(string _name)` 
(For `InventoryItem.cs` only) 
Returns whether the [Item] name matches the provided string. 

---

#### `public bool isTypeMatch(int _type)` 
(For `InventoryItem.cs` only) 
Returns whether the [Item] category matches the provided category ID.

---

#### `public bool isTradeable(bool _emptyResult=true)` 
(For `InventoryItem.cs` only) 
Returns whether the [Item] can be traded. Returns **_emptyResult** when the slot is empty. 

---

#### `public bool isUseable(bool _emptyResult = true)` 
(For `InventoryItem.cs` only) 
Returns whether the [Item] can be used. Returns **_emptyResult** when the slot is empty. 

---

#### `public bool isConsumable(bool _emptyResult = true)` 
(For `InventoryItem.cs` only) 
Returns whether the [Item] can be consumed. Returns **_emptyResult** when the slot is empty. 

---

#### `public bool isDeletable(bool _emptyResult = true)` 
(For `InventoryItem.cs` only) 
Returns whether the [Item] can be deleted. Returns **_emptyResult** when the slot is empty. 

---

#### `public void Split(int _result)` 
(For `InventoryItem.cs` only) 
Splits the [Item] in this slot. 

---

#### `public void LinkItem(InventoryData _holder, Item _item, int _num, bool _empty)`
 (For `LinkIcon.cs` only) 
Links this icon with the provided [InventoryData] and [Item]. 

---

#### `public void SwapLink(LinkIcon _source)` 
(For `LinkIcon.cs` only) 
Swaps the linked [Item] with another LinkIcon. 

---

#### `public void Split()`
(For `InventoryItem.cs` only) 
Pop up the split interface to split this [Item] into two stacks. 

---

#### `public void MarkFav ()`
(For `InventoryItem.cs` only) 
Mark this [Item] as Favorite [Item]. 

---

#### `public void Drop ()`
(For `InventoryItem.cs` only) 
Drop this [Item].

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