---
title: CharacterAppearance
---

```csharp
class SoftKitty.MasterCharacterCreator.CharacterAppearance
```

`CharacterAppearance` represents a data class for all the appearance settings of a character. Holding information such as its gender, race, body shape, skin color, hair setting, outfit id and custom outfit color.

---

### Properties

#### `public string _Name`

The name of the character.

---

#### `public CharacterData _CharacterData`

The base data of the character, such as its gender, race, body shape, skin color, hair setting.

```csharp
public class CharacterData{
    public byte Sex = 0; //Gender 0-Male 1-Female
    public byte Race=0; //Race id
    public byte[] DataFloat = new byte[120]; //Float values for shape sliders (0~100)
    public Uint8Color[] DataColor = new Uint8Color[15]; //Custom colors in Uint8Color format.
    public byte[] DataInt = new byte[10]; //Int values for texture/model id, such as hair id, lip id, etc.
}
```

`Uint8Color` is a compressed format for colors, each color channel is a byte value from 0~255.

```csharp
public class Uint8Color
{
        public byte r;
        public byte g;
        public byte b;
        public byte a;
}
```

---

#### `public byte[] _OutfitID`

The id list of the outfits. The array index matches the index of the `OutfitSlots` enum.

```csharp
enum SoftKitty.MasterCharacterCreator.OutfitSlots
{
    Armor, //0
    Helmet, //1
    Gauntlet, //2
    Boot, //3
    Pants, //4
    Back, //5
    Tail //6
}
```

---

#### `public Uint8Color[] _CusColor1` | `_CusColor2` | `_CusColor3`

The custom colors of the outfits. The array index matches the index of the `OutfitSlots` enum.

```csharp
enum SoftKitty.MasterCharacterCreator.OutfitSlots
{
    Armor, //0
    Helmet, //1
    Gauntlet, //2
    Boot, //3
    Pants, //4
    Back, //5
    Tail //6
}
```

`Uint8Color` is a compressed format for colors, each color channel is a byte value from 0~255.

```csharp
public class Uint8Color
{
        public byte r;
        public byte g;
        public byte b;
        public byte a;
}
```
---

#### `public Sex _Sex`

The gender of the character.

```csharp
enum SoftKitty.MasterCharacterCreator.Sex
{
    Male,
    Female
}
```

---

#### `public int _Race` 

_(readonly)_
The race id of the character, this is a quick access of: `_CharacterData.Race`

---

### Methods

#### `public bool isSameAs(CharacterAppearance _target)`

Compare two `CharacterAppearance` class and return whether their data is the same.

---

#### `public void DefaultValue()`

Reset the data to default values.

---

#### `public void Load(byte[] _bytes, DataVersions _dataVersion= DataVersions.Lastest)`

Load the `CharacterAppearance` from a byte array. Because we have changed the data structure in the previous versions, so a `DataVersions` parameter is required:

```csharp
enum SoftKitty.MasterCharacterCreator.DataVersions
{
    Before_v1_3,
    Before_v1_5,
    Lastest
}
```

---

#### `public byte[] ToBytes(BlurPrintType _bluePrintType = BlurPrintType.AllAppearance)`

Convert the `CharacterAppearance` to a `byte` array, `BlurPrintType` parameter is the filter of the data that will be included in the `byte` array:

```csharp
enum SoftKitty.MasterCharacterCreator.BlurPrintType
{
    BodyShape, //Only include the body shape data
    Character, //Only include the character base data such as body shape, face shape, hair, accessories,skin color.
    Outfits, //Only include the outfit id and custom outfit colors
    AllAppearance //Include all data.
}
```

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