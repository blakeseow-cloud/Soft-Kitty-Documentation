---
title: Game Manager
---
```csharp
class SoftKitty.GameManager
```

**GameManager** is a global static class responsible for managing data in memory and handling instances of [EntityComponent] within the scene. It provides access to entities, attributes, over-time effects, and convenient utilities for sound and object instantiation.

You can also access the static properties of GameManager in `Editor mode`.
In this case, instead of returning runtime data, the properties access data directly from the database.

`Note: Writing values to these static properties in Editor mode will write the values directly to the database.`

---

### Properties

#### `public static `[EntityManagerObject]` EntityManagerData`
Returns the entity manager data object. It returns a copy in memory during runtime and links to the actual ScriptableObject in editor mode.

---

#### `public static `[AttributeObject]` AttributeData`
Same as above, but for attribute settings.

---

#### `public static `[OverTimeEffectObject]` OverTimeEffectData`
Same as above, but for over-time effects settings.

---

### Master Inventory Engine Properties

#### `public static `[ItemObject]` ItemData`
Returns the Item Data Object. It returns a copy in memory during runtime and links to the actual ScriptableObject in editor mode.

---

#### `public static InventoryEngine.`[InventoryData]` PlayerInventoryData`
Retrieve the [InventoryData] class for player's invetory.

---

#### `public static InventoryEngine.`[InventoryData]` PlayerEquipmentData`
Retrieve the [InventoryData] class for player's equipments.

---

### Methods

#### `public static void DeleteAllEntityInstance()`
Delete all registered EntityComponents in the scene from the manager.

---

#### `public static void ClearAllEntityInstance()`
Clear all registered EntityComponents from the manager without verifying their deletion.

---

#### `public static `[EntityComponent]` GetEntityInstance(string _uid)`
Retrieves the EntityComponent instance in the scene by its unique UID.

---

#### `public static List<`[EntityComponent]`> GetEntityInstanceList()`
Retrieves a list of all EntityComponent instances in the scene.

---

#### `public static `[EntityComponent]` GetPlayerInstance()`
Retrieves the player’s EntityComponent instance in the scene.

---

#### `public static `[Entity]` GetPlayer()`
Retrieves the player entity data.

---

#### `public static `[Entity]` GetEntity(string _uid)`
Retrieves the entity data by its unique UID.

---

#### `public static `[Entity]` GetEntity(int _id)`
Retrieves the entity data by its integer ID.

---

#### `public static `[Attribute]` GetAttribute(string _uid)`
Retrieves the attribute by its unique UID.

---

#### `public static `[Attribute]` GetAttribute(int _id)`
Retrieves the attribute by its integer ID.

---

#### `public static `[OverTimeEffect]` GetOverTimeEffect(string _uid)`
Retrieves the over-time effect by its unique UID.

---

#### `public static `[OverTimeEffect]` GetOverTimeEffect(int _id)`
Retrieves the over-time effect by its integer ID.

---

### Master Inventory Engine Methods

#### `public static InventoryEngine.LootPack DropLootPack(Vector3 _pos, string _uid)`
Drop a [Loot Pack] at the providing position via the unique string id..

---

### Convenience Utility Methods

#### `public static GameObject InstantiateGameObject(GameObject original, Transform parent, Vector3 position, Vector3 eulerAngles, Vector3 scale)`
Instantiates a game object with the specified position, rotation (Euler angles), and scale, and sets its parent.

---

#### `public static GameObject InstantiateGameObject(GameObject original, Transform parent)`
Instantiates a game object and sets its parent without specifying position or scale.

---

#### `public static void PlaySound2D(AudioClip clip, float volume)`
Plays a 2D sound at the specified volume.

---

#### `public static void PlaySound3D(AudioClip clip, float volume, Vector3 position)`
Plays a 3D sound at the specified volume and position.

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