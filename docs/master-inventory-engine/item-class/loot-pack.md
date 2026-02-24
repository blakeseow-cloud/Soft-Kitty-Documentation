---
title: Loot Pack
---
```csharp
class SoftKitty.InventoryEngine.LootPack : MonoBehaviour
class SoftKitty.InventoryEngine.LootPackData
```

`LootPack` is a runtime loot container system responsible for generating randomized items and currency rewards.

`LootPackData` stores the configuration.
LootPack is the runtime MonoBehaviour instance created when a pack is spawned.

![](../../../static/img/20260230-173012.png)


#### A LootPack:

- Generates random items based on item drop rates

- Applies DropChanceMultiplier

- Supports random enhancement levels

- Supports random enchantments

- Generates currency rewards

- Optionally destroys itself when the loot window is closed

---

### Create LootPack

Navigate to:

`Project Settings → SoftKitty → SubData - Items → Loot Pack Settings`

#### Basic

- `UID` – unique identifier

- `VFX` – optional prefab instantiated as child when spawned

#### Item Pool

- List of item IDs

- `MaxiumItemCount` – total number of items dropped

- `MaxiumCountEachItem` – stack limit per item

- `DropChanceMultiplier` – global drop rate multiplier

#### Enhancement

- `RandomLevel` – enable random upgrade level

- `MaxiumEnhancingLevel` – cap for generated level

Enhancement success chance is evaluated using:

#### `ItemObject.instance.EnhancingSuccessCurve`

#### Enchantments

- `RandomEnchantment` – enable random enchantment system

- `EnchantmentPool` – optional whitelist

Enchantments only apply if:

- Item type matches `EnchantingCategoryID`

- Enchanting is enabled

- Success roll passes

#### Currency

- `CurrencyMin` / `CurrencyMax` define reward ranges per currency index

#### Behavior

- `DestoryWhenPlayerCloseLootWindow`

When enabled, the LootPack auto-destroys after the loot UI closes.

---

### Assign LootPack to [Entity]

Go to:

`Project Settings → SoftKitty → Entity Manager`

1. Select [Entity]

2. Expand Loot Packs

3. Add desired LootPack UID

When the entity drops loot, it initializes a LootPack using its configuration.

---

### Drop LootPack

- **Directly Drop**

This will:

- Instantiate a LootPack GameObject

- Call Init(LootPackData)

- Generate rewards immediately

- Instantiate VFX (if assigned)

```csharp
var _loot = GameManager.DropLootPack(Vector3.zero, "TestLootPack01");//Drop a loot pack from loot packs list via its UID.
```

- **Drop from** [Entity]

This uses the LootPack assigned to that entity.

```csharp
var _loot = GameManager.GetEntity("Monster01").DropLootPack(); //Drop a random loot pack from an entity.
var _loot = GameManager.GetEntity("Monster01").DropLootPack(1); //Drop a specified loot pack with its index number from an entity.
//or
var _loot = GameManager.GetEntityInstance("Monster01").DropLootPack(); //Drop a loot pack from an entity instance.
var _loot = GameManager.GetEntityInstance("Monster01").DropLootPack(2); //Drop a specified loot pack with its index number from an entity instance.

```

---

### Open LootPack

OpenPack:

- Opens Loot UI using LootUi.ShowLoot(mHolder)

- Displays generated rewards

- Tracks window state

```csharp
var _loot = GameManager.DropLootPack(Vector3.zero, "TestLootPack01");//Drop a loot pack from loot packs list.
//or
var _loot = GameManager.GetEntity("Monster01").DropLootPack(); //Drop a loot pack from an entity.
//or
var _loot = GameManager.GetEntityInstance("Monster01").DropLootPack(); //Drop a loot pack from an entity instance.

_loot.OpenPack();//Open the loot pack;
```

---

### Methods (LootPack.cs)

#### `public void Init(LootPackData _data)`
Initializes the LootPack instance with LootPackData.

---

#### `public void OpenPack()`
Opens the Loot UI.

---

#### `public void DestroyPack()`
Destroys the LootPack GameObject.

Called when:

- Loot UI closes (if enabled)

- Manually invoked

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