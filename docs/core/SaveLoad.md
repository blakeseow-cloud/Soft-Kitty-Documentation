---
title: Save & Load System
---

The [EntityManagerObject] provides a flexible and lightweight save/load system based on `JSON` serialization. It is designed to handle large numbers of [Entities] and custom gameplay data in a simple and extensible way.

This page explains how to implement:

- Multiple save slots
- Custom game save data
- Entity Manager API usage
- Persistent save slot selection
- Dirty flag optimization

---

### Basic Save Architecture

The save system is split into two parts:

1. **Entity Manager Data**
   Handled automatically by the system, including:
   - Entity [Attribute]s
   - Entity [CustomData]
   - Inventory Data/Character Customization Data/etc

2. **Extra Game Data (User-defined)**
   Used for anything outside entity data, such as:
   - Player progression
   - Quest state
   - World flags
   - Settings
   - Save slot metadata
   You define this using a serializable class.

---

### Creating Custom Save Data

To store additional game-specific information, create a `Serializable` class:

```csharp
[System.Serializable]
public class GameSaveData
{
    public int playerLevel;
    public float playTime;
    public string currentScene;
    public Vector3 playerPosition;
}
```

This data will be stored alongside [Entity] data as `JSON`.

---

### Saving Data (Multiple Save Slots)

You can support multiple save slots by using a save index:

```csharp
public void Save(GameSaveData _data, int _saveIndex)
{
    string _extraString = JsonUtility.ToJson(_data);

    GameManager.EntityManagerData.Save(
        GameManager.GetFullSavePath("UserSave" + _saveIndex.ToString() + ".sav"),
        _extraString
    );
}
```

What happens here:

- `GameSaveData` → converted to `JSON`
- [EntityManagerObject] data is saved automatically
- Both are stored in the same save file

---

### Loading Data

To load a save slot:

```csharp
public void Load(int _saveIndex)
{
    string _extraString = GameManager.EntityManagerData.Load(
        GameManager.GetFullSavePath("UserSave" + _saveIndex.ToString() + ".sav")
    );

    GameSaveData _data =
        (GameSaveData)JsonUtility.FromJson(_extraString, typeof(GameSaveData));

    // Apply loaded data here
}
```

After loading:

- [EntityManagerObject] system restores all [Entities] automatically
- You restore your custom game state manually

---

### Managing Save Slots

A common approach is to store the last selected save slot:

Example workflow:
1. Player selects Save Slot (0, 1, 2...)
2. Store selected index in a separate config file or PlayerPrefs
3. On game start:
   - Load last used save index
   - Call Load(saveIndex)

This allows seamless _**Continue Game**_ functionality.

---

### [EntityManagerObject] API Reference

#### Saving & Loading

`public void ToJson(string _extraInfo)`
_Converts all entities and extra info into a JSON string._

`public string FromJson(string _json)`
_Loads entity data from JSON and returns stored extra info._

#### Full Save System

`public void Save(string _path, string _extraInfo)`
_Saves all entities + extra data to a file._

`public string Load(string _path)`
_Loads all entities + extra data from a file._

#### Single Entity Operations

`public string SingleEntityToJson(string _uid)`
_Returns JSON for a single entity._

`public void SaveSingleEntity(string _uid, string _path)`
_Saves a single entity to a file._

`public void LoadSingleEntity(string _uid, string _path)`
_Loads a single entity from a file._

---

### Performance Optimization (Dirty Flag)

To improve performance in large projects, the [Entity] class includes a dirty flag:

```csharp
public bool isDirty;
```

How it works:

- `isDirty = true` → [Entity] has been modified
- Your save logic can ignore unchanged [Entities]
- Improves performance for large worlds

This reduces unnecessary serialization work in large projects.


---

<!-- API LINKS -->
[Accessories Models]: /docs/master-character-creator/implementing-your-models/accessories-models
[Customization Textures]: /docs/master-character-creator/implementing-your-models/customization-textures
[Outfits Models]: /docs/master-character-creator/implementing-your-models/outfits-models
[CharacterAppearance]: /docs/master-character-creator/system/appearance-data
[CharacterCustomizationModule]: /docs/master-character-creator/system/character-customization-module
[CharacterCustomizationObject]: /docs/master-character-creator/system/character-customization-object
[CharacterEntity]: /docs/master-character-creator/system/character-entity
[InventoryModule]: /docs/master-inventory-engine/inventory-module
[EntityModule]: /docs/core/entities/EntityModule
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