---
title: Common Use Cases
---

### How To Access The Player's Inventory And Equipment Data 

The [InventoryData] class is responsible for managing all items for each unit.  

Here’s how you can access it in different scenarios: 

1. Accessing the Player’s Inventory and Equipment 
- **Player’s Inventory**: Use [GameManager]`.PlayerInventoryData` to get the player’s inventory data. 
- **Player’s Equipment**: Use [GameManager]`.PlayerEquipmentData` to get the player’s equipment data. 

2. Accessing [InventoryData] for Other Units (e.g., **NPCs, Crates, Merchants**) 
To retrieve the [InventoryData] data for other units, such as NPCs, crates, or merchants, use the following API call: 

```csharp
//Retrieve the inventory data of a NPC with its unique entity id.
   GameManager.EntityManagerData.GetEntity("Npc_Entity_id").GetInventory();
//Retrieve the equipment data of a NPC with its unique entity id.
   GameManager.EntityManagerData.GetEntity("Npc_Entity_id").GetEquipment(); 
//Retrieve any existing inventory data of a NPC with its unique entity id.
   GameManager.EntityManagerData.GetEntity("Npc_Entity_id").GetAnyInventoryData(); 
```

```csharp
//Retrieve a specified type of inventory data of a NPC with its unique entity id.
GameManager.EntityManagerData.GetEntity("Npc_Entity_id").GetInventoryDataByType(InventoryData.HolderType.Merchant);
```

- **Parameters:**
  - `_type`: The type of [InventoryData] you’re looking for.  

- **Available types include:** 
  - `Crate`: Represents a crate or container. 
  - `Merchant`: Represents a merchant or store inventory. 
  - `PlayerInventory`: Represents the player’s inventory. 
  - `PlayerEquipment`: Represents the player’s equipped items. 
  - `NpcInventory`: Represents an NPC’s inventory. 
  - `NpcEquipment`: Represents an NPC’s equipped items. 

---

### How To Retrieve Player's Attributes With Equipped Items 

  - To get the total stats of the player, including bonuses from all equipped items, use the following method: 

```csharp
//For player
  GameManager.GetPlayer().GetAttributeFloat("atk");
```

```csharp
Entity.GetAttributeFloat(string _uid, bool _inculdTempValue = true)
```

- **Parameter:** 
  - `_uid`: The string unique id of the [Attribute] you want to retrieve. You can define these keys in the [AttributeObject]. In the above example, the Attack [Attribute] has a UID of "**atk**". You can use this UID to retrieve the total Attack value contributed by all equipped items. 
  - _inculdTempValue: Time based stats, see: [TempAttribute]



- **For NPCs:** 
  - The process is the same for NPCs: 

```csharp
//For npc
  GameManager.EntityManagerData.GetEntity("Npc_Entity_id").GetAttributeFloat("atk");
```

- With this method, you can calculate any [Attribute] value for both players and NPCs based on their equipped items. 

---

### How To Get, Add, Remove, Or Use Items From An InventoryData 

#### Get the Number of Items:
Retrieve the number of a specific item in the inventory: 

```csharp
//InventoryData class
  public int GetItemNumber(int _uid, bool _includeHiddenStacks=true)
```

- `_uid`: The **unique ID** of the item. 
- `_includeHiddenStacks`: Whether to include the items in Hidden Stacks.

Example:
```csharp
//For player
  int itemCount = GameManager.GetPlayer().GetInventory().GetItemNumber(5,true);
//For npc
  int itemCount = GameManager.EntityManagerData.GetEntity("Npc_Entity_id").GetInventory().GetItemNumber(5,true);
```

---

#### Add Items:
Add items to an inventory: 

```csharp
//InventoryData class
  public InventoryStack AddItem(Item _item, int _number = 1)
//Returns any items that could not be received (if any).
```

- `_item`: The item you want to add. 
- `_number`: The quantity of the item to add. 

If you need to create a new item from the database, use: 

```csharp
  Item myNewItem = new Item(uid);
```

You can modify the item you created as needed (e.g., upgrade level, enchantments), and then add it to the inventory: 

```csharp
  Item myNewItem = new Item(5);
//For player
  GameManager.GetPlayer().GetInventory().AddItem(myNewItem,2);
//For npc
  GameManager.EntityManagerData.GetEntity("Npc_Entity_id").GetInventory().AddItem(myNewItem,2);
```

---

#### Remove Items:
Remove a specific number of items from the inventory: 

```csharp
//InventoryData class
  public int RemoveItem(int _uid, int _number, int _index = -1);
//Returns the total number of items removed
```

- `_uid`: The **unique ID** of the item to remove. 
- `_number`: The quantity of the item to remove. If the number exceeds the quantity available, it will be capped at the actual number. 
- `_index`: (Optional) If specified, removes the item from the slot at this index in the inventory interface. Use -1 to ignore the index. 

Example:

```csharp
//For player
  GameManager.GetPlayer().GetInventory().RemoveItem(5,2);
//For npc
  GameManager.EntityManagerData.GetEntity("Npc_Entity_id").RemoveItem(5,2);
```

---

#### Use an Item:
Use an item from the inventory: 

```csharp
//InventoryData class
  public void UseItem(int _uid, int _number, int _index = -1)
```

- `_uid`: The unique ID of the item to use. 
- `_number`: The quantity of the item to use. If the number exceeds the available quantity, it will be capped at the actual number. 
- `_index`: (Optional) If specified, uses the item from the slot at this index in the inventory interface. Use -1 to ignore the index. 

After using an item, the [ItemUseCallback] will be triggered. Refer to the[Callbacks] section for more details. 

Example:

```csharp
//For player
  GameManager.GetPlayer().GetInventory().UseItem(5,1);
//For npc
  GameManager.EntityManagerData.GetEntity("Npc_Entity_id").UseItem(5,1);
```

---

### Managing Currencies: 

#### Retrieve the current amount of a specific currency:

```csharp
//InventoryData class
  public int GetCurrency(int _type, bool _includeExchangedValue = false)
```

 - `_type`: The **ID** of the currency. 
 - `_includeExchangedValue`: Whether you want to get the total amount of this currency including the exchanged value from other currencies.

Example:

```csharp
//For player
  int _gold= GameManager.GetPlayer().GetInventory().GetCurrency(1);
//For npc
  int _gold= GameManager.EntityManagerData.GetEntity("Npc_Entity_id").GetCurrency(1);
```

---

#### Add or Remove Currency:
Modify the currency amount (positive to add, negative to remove):

```csharp
//InventoryData class
  public void AddCurrency(int _type, int _add)
```

- `_type`: The ID of the currency. 
- `_add`: The amount to change (positive for adding, negative for removing). 

Example:

```csharp
//For player
  GameManager.GetPlayer().GetInventory().AddCurrency(int _type, int _add);
//For npc
  GameManager.EntityManagerData.GetEntity("Npc_Entity_id").GetInventory().AddCurrency(int _type, int _add);
```

---

#### Set Currency to a Fixed Value:
Directly set the currency to a specific value: 

```csharp
//InventoryData class
  public void SetCurrency(int _type, int _value)
```

- `_type`: The **ID** of the currency. 
- `_value`: The value to set for the currency.

Example:

```csharp
//For player
  GameManager.GetPlayer().GetInventory().SetCurrency(int _type, int _value);
//For npc
  GameManager.EntityManagerData.GetEntity("Npc_Entity_id").GetInventory().SetCurrency(int _type, int _value);
```


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