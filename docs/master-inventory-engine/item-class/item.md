---
title: Item 
---
```csharp
class SoftKitty.InventoryEngine.Item
```

### Properties

#### `public int uid` 
The unique id  of this item, in most scenarios you will need this uid to access an item. 

---

#### `public string name` 
The display name of this item. 

---

#### `public string nameWithAffixing` 
Retrieve the item display name with prefixes and suffixes. 

---

#### `public string description` 
The description text of this item. 

---

#### `public string compiledDescription` 
The compiled description text of this item, which replaced dynamic text such as `Attribute name` with actual values. 

---

#### `public int type` 
The category index of this item. You can manage the categories in the [ItemObject] database. 

---

#### `public Texture2D GetIcon()` 
The icon texture of this item. 

---

#### `public int quality` 
The quality index of this item. You can mange the quality levels  in the [ItemObject] database.  

---

#### `public bool tradeable` 
Whether this item is tradable with NPC merchant. 

---

#### `public bool deletable` 
Whether this item is deletable when drag out from inventory. 

---

#### `public bool useable` 
Whether this item is useable when right click or triggered from hot bar.

---

#### `public bool consumable` 
Whether this item will be consumed when use. 

---

#### `public bool visible` 
Whether this item is visible on the interface. If an item is not visible, it wll be put into HiddenStacks of [InventoryData] component. 

---

#### `public int price` 
The base price of this item when trading. 

---

#### `public int currency` 
The currency index of the trading price. 

---

#### `public int maxiumStack` 
The maximum number this item can be stack. 

---

#### `public int upgradeLevel` 
The enchancement level of this item. 

---

#### `public float weight` 
The weight value of this item. 

---

#### `public int dropRates` 
The drop rate of this item (0~100)% 

---

#### `public bool favorite` 
Whether this item is in player's favorite list. 

---

#### `public List<`[AttributeData]`> attributes` 
The attributes list of this item.

---

#### `public List<int> enchantments` 
The enchantments list of this item. 

---

#### `public List<Vector2> craftMaterials` 
The materials list required to craft this item. 

---

#### `public List<string> actions` 
The action string list of this item. 

---

#### `public List<string> tags` 
The tag string list of this item. 

---

#### `public List<CustomField> `[CustomData] 
The custom data list. You could use them to link audio clips, prefabs, images, etc. 

---

#### `public int socketingSlots` 
The socketing slots number, if Socketing module is enabled, player will be able to socketing other items with specified tag and category into this item to boost its attributes.

---

#### `public List<int> socketedItems` 
The list of socketed items, if Socketing module is enabled, player will be able to socketing other items with specified tag and category into this item to boost its attributes. 
When the value of the list is -2, means this socket is locked, if it is -1 means this socket is empty, any number larger or equal to 0 represents the uid of this item. 

---

#### `public List<string> socketingTag` 
This item will only recieve skocketing items with any tag in this list. 

---

### Methods

#### `public Item(int _uid, bool _initializeEnchantments = false, bool _initializeSocketingSlots = false)` 
Create an Item by the UID of the database in the [ItemObject]. 
- When **_initializeEnchantments** is set to true, depending on your **Enchantments** settings in the [ItemObject], the enchantments of this item could be randomized. 
- When **_initializeSocketingSlots** is set to true, depending on your **Socketing** settings in the  [ItemObject], the socketing slots of this item could be randomized. 

Example:  
```csharp
myNewItem= new Item(23, true,true); //23 is the uid of the item
//or
myNewItem= new Item(23); 
```

---

#### `public Item Copy()` 
Get an instance of this item data. 

---

#### `public bool AbleToUse(InventoryData _inventory)` 
Return whether this item can be use or equip by compare the [Attribute] value of the [InventoryData] with the restriction [Attribute] setting.

---

#### `public T GetCustomData<T>(string _key) where T : UnityEngine.Object` 
Get custom data by its string key. 

Example:
```csharp
Instantiate(_item.GetCustomData<GameObject>("myVFX"));
```

---

#### `public void ReleaseLoadedAsset()`
Whenever the icon or CustomData is accessed, it will be loaded into memory by its loading method, call this method to unload it when necessary.

---

#### `public float GetCoolDownTime()` 
Get the total cool down time of this item.

---

#### `public float GetRemainCoolDownTime ()` 
Get the remaining cool down time of this item.

---

#### `public bool isCoolDown ()` 
Return whether this item is being cool down. 

---

#### `public void SetCoolDownTimeStamp()` 
When the item is used, call this function to set the time stamp. 

---

#### `public void SetRemainCoolDownTime(float _coolDownTime)` 
Override the remaining cool down time. 

---

#### `public void AddRemainCoolDownTime(float _addValue)` 
Add time in seconds to the remaining cool down time, the _addValue can be either postive or negative. 

---

#### `public float GetAttributeFloat(string _uid_)` 
Returns the float value of the [AttributeData] with the provided **UID**. Returns 0 if no such [AttributeData] is found.

---

#### `public float GetAttributeFloat(int _id_)` 
Returns the float value of the [AttributeData] with the provided **ID**. Returns 0 if no such [AttributeData] is found.

---

#### `public int GetAttributeInt(string _uid_)` 
Returns the int value of the [AttributeData] with the provided **UID**. Returns 0 if no such [AttributeData] is found. 

---

#### `public int GetAttributeInt(int _id_)` 
Returns the int value of the [AttributeData] with the provided **ID**. Returns 0 if no such [AttributeData] is found. 

---

#### `public string GetAttributeString(string _uid)`
Returns the string value of the [AttributeData] with the provided **UID**. Returns **None** if no such [AttributeData] is found. 

---

#### `public string GetAttributeString(int _id)`
Returns the string value of the [AttributeData] with the provided **ID**. Returns **None** if no such [AttributeData] is found. 

---

#### `public void UpdateAttribute(string _uid_, float _value)`
- `public void UpdateAttribute(string _key, int _value)` 
- `public void UpdateAttribute(string _key, string _value)` 
Updates the value of the [AttributeData] with the provided **UID**. 

---

#### `public void RemoveAttribute(string _uid)` 
Removes an [AttributeData] with the provided **UID**. 

---

#### `public void ClearAttribute()` 
Removes all [AttributeData]. 

---

#### `public void ResetAttributes()` 
Resets all [AttributeData] to their original settings. 

---

#### `public bool isTagMatchText (string _tag)` 
Returns whether the items have the matching **tag**. Tags such as **#1**, **#2**, **#3** are ignored. 

---

#### `public bool isTagsMatchList (List<string> _tags, bool _allMatch = true)` 
Returns whether the tags of this item match the specified **tag** list. 

---

#### `public bool isTagContainText (string _text, bool _caseSensitive = true)` 
Returns whether the items in this [InventoryStack] have any tag contains the specified **text**. 

---

#### `public string GetTagContainText (string _text, bool _caseSensitive = true)` 
Returns the tag of the item which contains the specified **text**. 

---

#### `public void AddEnchantment(int _uid)` 
Adds an enchantment by its **UID**. 

---

#### `public void RemoveEnchantment(int _uid)` 
Removes an enchantment by its **UID**. 

---

#### `public void ReplaceEnchantment(List<int> _enchantments)` 
Replaces the current enchantments with a list of **enchantment UIDs**. 

---

#### `public List<int> RandomEnchantment ()` 
Adds a group of random enchantments based on the success rate in the [Enchantment] Setting. 
Returns the result as a list of UIDs. Note that the result could be empty. 

---

#### `public void ResetEnchantment()` 
Removes all [Enchantment]. 

---

#### `public int Upgrade()` 
Upgrades the item by one level. 

---

#### `public void ResetUpgrade()` 
Resets the upgrade level to 0. 

---

#### `public void ResetAll()` 
Resets all settings, including enchantments, attributes, and upgrade level. 

---

#### `public void ReplaceSocketing(List<int> _sockets)` 
Override the socketed item list. 

---

#### `public Color GetQualityColor()` 
Retrieves the color associated with the item’s quality level. 

---

#### `public string GetQualityName()` 
Retrieves the name of the item’s quality level. 

---

#### `public Color GetTypeColor()` 
Retrieves the color associated with the item’s category. 

---

#### `public string GetTypeName()` 
Retrieves the name of the item’s category. 

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