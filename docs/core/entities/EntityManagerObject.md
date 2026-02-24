---
title: EntityManagerObject
---
```csharp
class SoftKitty.EntityManagerObject : DataObject
```
`EntityManagerObject` is a **[DataObject]** that manages and handles all [Entity] in the system, providing easy access and modification.

You can create this object via the context menu in any Project folder:

`Create → SoftKitty → Data Objects → Entity Manager Data`

You can assign the created asset to the database in:

`Project Settings → SoftKitty → Data Settings → Data`

![](../../../static/img/20260146-104626.png)

After assigned the data object, a editor interface can be found at: 

`Project Settings → SoftKitty → Entity Manager`

Where you can easily manage Entities with all kinds of convenient tools.

![](../../../static/img/20260130-133050.png)

---

### Properties

#### `public static EntityManagerObject instance`

Retrieve the instance of the EntityManagerObject instance assigned in SoftKitty Data Settings.

---

### Methods
#### `public EntityCollection EntityData`
The collection of entity data, holding all the registered entities.

---

#### `public string[] CustomDataUidArray`
Returns a list of custom data UIDs for the entities.

---

#### `public List<string> EntityUidList`
A list of all entity UIDs.

---

#### `public string ToJson(string _extraInfo)`
Converts all entities (along with any extra info) into a JSON string for saving. This is useful for saving and loading entity data.

---

#### `public string SingleEntityToJson(string _uid)`
Returns the JSON string for a specific entity by its UID.

---

#### `public string FromJson(string _json)`
Loads entity data from a JSON string. The method also returns the extra info from the saved file.

---

#### `public void Save(string _path, string _extraInfo)`
Saves all entities’ data to a file at the provided path, along with any extra info in JSON format.

---

#### `public void SaveSingleEntity(string _uid, string _path)`
Saves data for a single entity (identified by UID) to the provided path.

---

#### `public string Load(string _path)`
Loads entity data from a file at the provided path and returns the extra info from the save.

---

#### `public void LoadSingleEntity(string _uid, string _path)`
Loads data for a single entity (by UID) from the provided path.

---

#### `public `[Entity]` NewEntity()`
Creates a new entity and returns it.

---

#### `public `[Entity]` NewEntity(string _uid)`
Creates a new entity with the specified UID and returns it.

---

#### `public int GetCustomIndex(string _uid)`
Retrieves the index number of custom data by providing its UID.

---

#### `public `[CustomData]`.CustomTypes GetCustomType(string _uid)`
Gets the custom data type by providing the UID.

---

#### `public string GetCustomUid(`[CustomData]`.CustomTypes _type, int _index)`
Retrieves the UID of custom data based on its type and index.

---

#### `public `[Entity]` GetEntity(string _uid)`
Retrieves an entity by its string UID. This method caches results for better performance.

---

#### `public `[Entity]` GetEntity(int _id)`
Retrieves an entity by its integer ID. Results are cached for better performance.

---

#### `public string GetStringKey(int _id)`
Retrieves the string UID of an entity by its integer ID.

---

#### `public int GetId(string _key)`
Retrieves the integer ID of an entity by its string UID.

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