---
title: ItemObject
---
```csharp
class SoftKitty.ItemObject : DataObject
```

ItemObject is a  **[DataObject]** that manages [Attribute] settings within the system.

You can create this object via the context menu in any Project folder:

`Create → SoftKitty → Data Objects → Item Data`

You can assign the created asset to the database in:
`Project Settings → SoftKitty → Data Settings → Data`
![](../../../static/img/20260146-104626.png)

After assigned the data object, a editor interface can be found at: 

`Project Settings → SoftKitty → SubData - Items`

Where you can easily manage attributes with convenient editor interface.


---

### Properties

#### `public static ItemObject instance`
Retrieve the instance of the ItemObject instance assigned in SoftKitty Data Settings.

---

#### `public List<StringColorData> itemTypes = new List<StringColorData>();`
List of item category.

---

#### `public List<StringColorData> itemQuality = new List<StringColorData>();`
List of item quality levels.

---

#### `private ConcurrentDictionary<int, Item> ItemDic = new ConcurrentDictionary<int, Item>();`
Access the item data by its UID.  Use `itemDic[_uid].Copy()` to get an instance of the [Item] data with specified UID.

---

#### `public List<Enchantment> itemEnchantments = new List<Enchantment>();`
List of Enchantments.

---

#### `public ConcurrentDictionary<int, Enchantment> enchantmentDic = new ConcurrentDictionary<int, Enchantment>();`
Access the [Enchantment] data by its id.

---

#### `public List<Currency> currencies = new List<Currency>();`
List of currencies.

---

#### `public string[] ItemCategoryNames`
An array of [Item] category names. This provides a simple list of the [Item] category names for quick reference.

---

#### `public string[] ItemQualityNames`
An array of [Item] quality level names. This provides a simple list of the [Item] quality level names for quick reference.

---

#### `public string[] ItemNames`
An array of [Item] names. This provides a simple list of the [Item] names for quick reference.

---

#### `public string[] ItemUidArray`
An array of [Item] UIDs. This contains the unique identifiers for each [Item], allowing for direct reference by UID.

---

#### `public List<string> ItemUidList`
A List of [Item] UIDs. This contains the unique identifiers for each [Item], allowing for direct reference by UID.

---

#### `public List<int> ItemIdList`
A List of [Item] IDs. This contains the unique identifiers for each [Item], allowing for direct reference by ID.

---

### Methods

#### `public bool ItemExist(int _id)`
Retrieves whether the [Item] with unique integer ID exists.

---

#### `public Item GetItem(string _uid)`
Retrieves the [Item] setting based on its unique string UID. This is used for fetching specific [Item] data efficiently.

---

#### `public Item GetItem(int _id)`
Retrieves the [Item] setting based on its integer ID. This method allows for fetching by index for faster lookups in certain use cases.

---

#### `public StringColorData TryGetItemTypesById(int _id)`
Try get the [Item] Catogory data by the id.(thread-safe)

---

#### `public StringColorData TryGetItemQualityById(int _id)`
Try get the [Item] Quality data by the id.(thread-safe)

---

#### `public Enchantment TryGetEnchantmentById(int _id)`
Try get the [Enchantment] data by the id.(thread-safe)

---

#### `public void SetCoolDownForAll(float _coolDownTime, bool _onlyUseableItem = true)`
Set cool down time for all items, this can be used for global shared cool down timer.

---

#### `public void AddCoolDownForAll(float _addValue, bool _onlyUseableItem = true)`
Add cool down time for all items, this can be used for global shared cool down timer.

---

#### `public void SetSharedGlobalCoolDown(float _coolDownTime, bool _onlyUseableItem = true)`
Quick method to set global shared cool down timer.

---

#### `public void ExportItemDataToJson(string _path)`
Export the [Item] data into a json txt file.

---

#### `public void ImportItemDataFromJson(string _path)`
Import [Item] data from a json txt file. 
You can store the json file in your game install folder and let modder to modify it, then import it back when game launch.

---

#### `public void ExportEnchantmentDataToJson(string _path)`
Export the [Enchantment] data into a json txt file.

---

#### `public void ImportEnchantmentDataFromJson(string _path)`
Import [Enchantment] data from a json txt file. 
You can store the json file in your game install folder and let modder to modify it, then import it back when game launch.

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