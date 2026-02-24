---
title: Callbacks 
---
### ItemChangeCallback
```csharp
public delegate void ItemChangeCallback(Dictionary<Item, int> _changedItems);
```

This callback is triggered whenever items within an [InventoryData] are changed. It’s 
particularly useful for monitoring changes in a player's **inventory** or **equipment**. 

The callback returns a `Dictionary` where each entry represents an item that has been modified. 

The **key** is the item, and the **value** indicates the quantity changed. For example: 

If the player drinks a potion, the `Dictionary` key will be the potion item, and the value will be -1. 

If the player loots a sword, the key will be the sword item, and the value will be 1. 

##### TO REGISTER THIS CALLBACK:

First, define the callback function in your script: 

```csharp
public void OnEquipmentItemChange(Dictionary<Item, int> _changedItems)  
{ 
// Your logic here 
} 
```

In the `Start` method of your script, register the callback: 

```csharp
GameManager.PlayerEquipmentData.RegisterItemChangeCallback(OnEquipmentItemChange); 
```

Remember to **UNREGISTER** the callback in `OnDestroy` to avoid memory leaks when the `GameObject` is destroyed: 

```csharp
GameManager.PlayerEquipmentData.UnRegisterItemChangeCallback(OnEquipmentItemChange);
```

Here is a full **EXAMPLE** of how you could use this callback to change player’s equipment model: 

```csharp
private void Start(){
    GameManager.PlayerEquipmentData.RegisterItemChangeCallback(OnEuqipmentItemChange);//Register callback for player's equipment
}

public void OnEuqipmentItemChange(Dictionary<Item, int> _changedItems){
    foreach (var _item in _changedItems.Keys) {
        if (_changedItems[_item] > 0) //Equip
        {
            //your logic to read the _item information and change the equipment model.
        }
        else //Unequip
        {
            //your logic to read the _item information and change the equipment model.
        }
    }
}

private void OnDestroy(){
    GameManager.PlayerEquipmentData.UnRegisterItemChangeCallback(OnEuqipmentItemChange);
}

```


---

### ItemDropCallback

```csharp
public delegate void ItemDropCallback(Item _droppedItem, int _number);
```

This callback is triggered whenever items within an [InventoryData] are dropped by dragging out of the window. It’s particularly useful for instantiate item prefabs in the game world when player drop an item. 

The callback returns an [Item] that has been dropped and its amount. The _droppedItem is the [Item], and the _number indicates the amount of this item has been dropped. For example: 

If the player drops 10 potion, the _droppedItem will be the potion item, and the _number will be 10. 

##### TO REGISTER THIS CALLBACK: 

First, define the callback function in your script: 

```csharp
public void OnItemDrop(Item _droppedItem,int _number)  
{ 
// Your logic here 
} 
```

In the `Start` method of your script, register the callback: 

```csharp
ItemObject.PlayerInventoryData.RegisterItemDropCallback(OnItemDrop);
```

Remember to **UNREGISTER** the callback in `OnDestroy` to avoid memory leaks when the `GameObject` is destroyed: 
```csharp
`ItemObject.PlayerInventoryData.UnRegisterItemDropCallback(OnItemDrop);
```

---

### ItemUseCallback

```csharp
public delegate void ItemUseCallback(string _action, int _id, int _index);
```

This callback is triggered whenever the player uses an item, which could be a consumable, equipment, or skill. 

The callback provides three pieces of information: 

- `_action`: The **Use Action** string defined in the **ItemObject**. 
- `_id`: The unique ID of the item. 
- `_index`: The slot index of the item within its container (e.g., inventory). 
  
**EXAMPLE**: In the demo scene setup, if the player drinks a **Health Potion (L)** located in the 4th slot of the inventory: 

- `_action` will be **AddHp_200**
- `_id` will be 1 
- `_index` will be 4 

##### TO REGISTER THIS CALLBACK: 

First, define the callback function in your script: 

```csharp
public void OnItemUse(string _action, int _id, int _index)  
{ 
// Your logic here 
} 
```

In the `Start` method of your script, register the callback: 

```csharp
ItemObject.PlayerInventoryData.RegisterItemUseCallback(OnItemUse)
```


Remember to **UNREGISTER** the callback in `OnDestroy` to avoid memory leaks when the `GameObject` is destroyed: 

```csharp
ItemObject.PlayerInventoryData.UnRegisterItemUseCallback(OnItemUse);
```

Here is a full **EXAMPLE** of how you could use this callback to add player’s hp when player drink potion:

```csharp
private void Start(){
    GameManager.PlayerInventoryData.RegisterItemUseCallback(OnItemUse);//Register callback to trigger when player's item being used.
}

public void OnItemUse(string _action, int _id, int _index){ //When player using an item, this callback will be called.
     string _args = _action.Split("_"); 
     //For example, the _action of the potion is `AddHp_200`, which  will split int `AddHp` and `200`.
     if(_args.Length>=2){
         int _value=0;
         int.TryParse(_args[1],out _value);
         switch(_args[0]){ // Check the action name and excute corresponding logic.
            case "AddHp":
               Player.AddHealth(_value); //Your logic of adding hp for player.
            break;
            case "AddMp":
               Player.AddMagic(_value); //Your logic of adding mp for player.
            break;
         }
     }
}

private void OnDestroy(){
    GameManager.PlayerInventoryData.UnRegisterItemUseCallback(OnItemUse);
}
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