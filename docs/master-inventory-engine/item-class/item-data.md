---
title: InventoryData
---


```csharp
class SoftKitty.InventoryEngine.InventoryData
```

---

### Properties

#### `public string Name`
The display name of this InventoryData.

---

#### `public string EntityUid`
The UID of the owner [Entity] of this InventoryData.

---

#### `public `[Entity]` mEntity`
The owner [Entity] of this InventoryData.

---


#### `public List<`[InventoryStack]`> Stacks` 
The list of [InventoryStack] objects. All normal items are stored here. 

---

#### `public List<`[InventoryStack]`> HiddenStacks` 
The list of [InventoryStack] objects where all hidden items are stored. 

---

#### `public CurrencySet Currency` 
The class to managing the currencies. 

---

#### `public List<int> CurrencyValue`
The list of the currency values. 

---

#### `public int InventorySize` 
The size of the Stacks. Items will be rejected if the inventory is full. 

---

#### `public float MaxiumCarryWeight` 
The maximum carry weight for this InventoryData. 

---

#### `public float SellPriceMultiplie` 
This multiplier is applied when selling items. For example, a merchant NPC with a SellPriceMultiplier of 1.2 will sell an [Item] priced at 1000 for 1200. 

---

#### `public float BuyPriceMultiplier` 
This multiplier is applied when buying items. For example, a merchant NPC with a BuyPriceMultiplier of 0.8 will buy an [Item] priced at 1000 for 800.

---

#### `public float BuyPriceMultiplier` 
This multiplier is applied when buying items. For example, a merchant NPC with a BuyPriceMultiplier of 0.8 will buy an [Item] priced at 1000 for 800.

---

#### `public float BuyPriceMultiplier` 
This multiplier is applied when buying items. For example, a merchant NPC with a BuyPriceMultiplier of 0.8 will buy an [Item] priced at 1000 for 800.

---

#### `public bool isCrafting`
Returns if a crafting job is processing.

---

#### `public int CraftingItemId`
Returns the crafting item id.

---

#### `public int CraftingItemNumber`
Returns the crafting item number. 

---

#### `public int CraftedItemNumber`
Returns the crafted item number. 

---

#### `public float CraftingProgress`
Returns the crafting progress(0~1). 

---

#### `public bool CraftingFailed`
Returns true if the crafting failed.

---

### Methods

#### `public static InventoryData GetInventoryDataByType(`[Entity]`_entity, HolderType _type)` 
Returns the InventoryData of specified HolderType from the providing Entity. 

---

#### `public UiWindow OpenWindow()` 
Opens the appropriate interface based on the type of this InventoryData. 

---

#### `public UiWindow OpenForgeWindow(bool _enableCrafting=true, bool _enableEnhancing = true, bool _enableEnchanting=true, bool _enableSocketing=true)` 
Opens the crafting/enhancing/enchanting/socketing window for this InventoryData, using the items in Stacks as materials. You can enable/disable different modules by the args. 

---

#### `public UiWindow OpenWindowByName(string _prefabName,string _displayName)` 
Opens a window prefab inheriting from `UiWindow.cs` and sets its title. 

---

#### `public float GetAttributeValue(string _uid)` 
Retrieves the total value of an [Attribute] by its string uid from all equipped items. 

---

#### `public float GetAttributeValue(int _id)` 
Retrieves the total value of an [Attribute] by its int id from all equipped items. 

---

#### `public float GetAttributeValueByTag(string _uid_, List<string> _tags)` 
Retrieves the total value of an [Attribute] by its string uid, counting only equipment with matching tags. 

---

#### `public float GetAttributeValueByTag(int _id_, List<string> _tags)` 
Retrieves the total value of an [Attribute] by its int id, counting only equipment with matching tags. 

---

#### `public int GetItemNumber(int _uid, bool _includeHiddenStacks=true)` 
Retrieves the number of items with a specific UID.  Set _includeHiddenStacks to indicate whether include the hidden stacks.

---

#### `public int GetItemNumberWithHighestUpgradeLevel(int _uid)` 
Retrieves the number of items with a specific UID, but only counts the items with the highest upgrade level if there are multiple items with the same UID. 

---

#### `public int GetHighestUpgradeLevel(int _uid)` 
Retrieves the highest upgrade level of the [Item] with a specific UID. 

---

#### `public int GetAvailableSpace(int _uid, int _maxmiumNumber = 999)` 
Returns how many more items with the specified UID can be stacked in this InventoryData. Set a cap number to improve performance. 

---

#### `public int GetCurrency(int _type)` 
Retrieves the currency value by its index number. 

---

#### `public void AddCurrency(int _type,int _add)` 
Adds to the currency value by its index number. The _add value can be negative. 

---

#### `public void SetCurrency(int _type, int _value)` 
Overrides the currency value by its index number. 

---

#### `public ItemSaveRoot GetSaveData()` 
Returns a save class of all the item data in this InventoryData.

---

#### `public void LoadSaveData(ItemSaveRoot _saveRoot)` 
Loads [Item] data into this InventoryData from a save class. 

---

#### `public void ItemChanged()` 
Whenever you manually change the [Item] data of an InventoryData, be sure to call `ItemChanged()` to inform other scripts to update linked data. 

---

#### `public InventoryData GetSnapShot()` 
Captures a snapshot of the current data state of this InventoryData. You can revert to this snapshot later if needed. 

---

#### `public void RevertSnapShot(InventoryData _snapshot)` 
Reverts all [Item] data to the provided snapshot. 

---

#### `public void RegisterItemUseCallback(`[ItemUseCallback]` _callback)` 
Registers a callback that is triggered when an [Item] from this InventoryData is used. Remember to call `UnRegisterItemUseCallback()` when the game object of your script is destroyed. 

---

#### `public void UnRegisterItemUseCallback(`[ItemUseCallback]` _callback)` 
Unregisters the callback. It’s best to call this in `OnDestroy()` when the callback receiver is destroyed. 

---

#### `public void ClearAllItemUseCallback()` 
Clears all registered callbacks for [Item] use. 

---

#### `public void RegisterItemChangeCallback(`[ItemChangeCallback]` _callback)` 
Registers a callback that is triggered when items in this InventoryData are changed.  
Remember to call `UnRegisterItemChangeCallback()` when the game object of your script is destroyed. 

---

#### `public void UnRegisterItemChangeCallback (`[ItemChangeCallback]`_callback)` 
Unregisters the callback. It’s best to call this in `OnDestroy()` when the callback receiver is destroyed. 

---

#### `public void ClearAllItemChangeCallback ()` 
Clears all registered callbacks for [Item] changes. 

---

#### `public void RegisterItemDropCallback(`[ItemDropCallback]` _callback)` 
Registers a callback that is triggered when items in this InventoryData has been dropped by dragging out of the window.  
Remember to call `UnRegisterItemDropCallback ()` when the game object of your script is destroyed. 

---

#### `public void UnRegisterItemDropCallback (`[ItemDropCallback]` _callback)` 
Unregisters the callback. It’s best to call this in `OnDestroy()` when the callback receiver is destroyed. 

---

#### `public void ClearAllItemDropCallback ()` 
Clears all registered callbacks for [Item] drop. 

---

#### `public void ClearInventoryItems()` 
Clears all normal items in this InventoryData. 

---

#### `public void ClearHiddenItems()` 
Clears all hidden items in this InventoryData. 

---

#### `public float GetWeight()` 
Retrieves the total weight of all items in this InventoryData (hidden items are not counted). 

---

#### `public `[InventoryStack]` AddItem(`[Item]` _item, int _number = 1)` 
Adds a specified number of items. Returns any items that could not be received (if any). 

---

#### `public `[InventoryStack]` AddHiddenItem(`[Item]` _item, int _number = 1)` 
Adds a specified number of hidden items. Returns any items that could not be received (if any). 

---

#### `public void MoveItem(int sourceIndex, int _targetIndex)` 
Moves an [Item] from one index to another. 

---

#### `public `[InventoryStack]` Split(int sourceIndex, int _number)` 
Splits the stack and returns the split stack. 

---

#### `public void DeleteItem(int _uid, int _upgradeLevel, List<int> _enchantments, List<int> _sockets)` 
Deletes an [Item] with a specific UID, upgrade level, sockets and enchantments. 

---

#### `public int GetItemIndex (int _uid, int _upgradeLevel, List<int> _enchantments, List<int> _sockets)` 
Returns the slot index of an [Item] with a specific UID, upgrade level, socketing and enchantments. 

---

#### `public Item GetItemByTag(List<string> _tags, bool _allMatch=true)` 
Returns the [Item] matches the specific tag list, set _allMatch to false if you require the [Item] matches any tag in the list, set _allMatch to true if require the [Item] matches all tags in the list. 

---

#### `public Item FindItem(int _uid, int _upgradeLevel, List<int> _enchantments, List<int> _sockets)` 
Returns an [Item] with a specific UID, upgrade level, sockets and enchantments. 

---

#### `public int RemoveItem(int _uid, int _number, int _index=-1)` 
Removes a specified number of items with a specific UID and index. Set _index to -1 if you don’t know the index. Returns the total number of items removed. 

---

#### `public void UseItem(int _uid, int _number, int _index = -1)` 
Uses a specified number of items with a specific UID and index. Set _index to -1 if you don’t know the index. 

---

#### `public static void EquipItem(InventoryData _InventoryData, InventoryData _equipmentHolder,int _itemId, int _inventorySlotIndex)` 
Equip an [Item] from _InventoryData  to _equipmentHolder by specific [Item] uid and slot index 
of inventory. 

---

#### `public void OpenWindow ()` 
Opens the appropriate interface based on the type of this InventoryData. 

---

#### `public UiWindow OpenForgeWindow(bool _enableCrafting=true, bool _enableEnhancing = true, bool _enableEnchanting=true, bool _enableSocketing=true,float _craftingTimeMultiplier=1F,string _name="Forge")` 
Opens the crafting window for this InventoryData, using the items in Stacks as materials. 

---

#### `public UiWindow OpenWindowByName(string _prefabName,string _displayName)` 
Opens a window prefab inheriting from `UiWindow.cs` and sets its title. 

---

#### `public void CloseWindow()` 
Close the opened window associated with this InventoryData.

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