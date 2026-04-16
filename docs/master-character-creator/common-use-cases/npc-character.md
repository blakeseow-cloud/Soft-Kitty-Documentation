---
title: Setting Up NPC Character
---

---

#### Create Prefab

- Duplicate the NPC and Player prefab located in: `Assets/SoftKitty/MasterCharacterCreator/Prefabs/` for your player and NPC.
- You can build your own demo or download the pre-made demo using the link below. This allows for a quicker and more streamlined way to create and save appearance files for your player and NPC characters:
[Download Demo (google drive)](https://drive.google.com/file/d/14VotGV2vhYFKdnn-ZXAav_JfiDxDadHv/view?usp=drive_link)
- It is recommnended to use `MCC` with SoftKitty shared system [EntityManagerObject], the [Entity] of [EntityManagerObject] will manage character customization data along with [Attribute]s, tags, [CustomData] and [OverTimeEffect]. To enable this, simply add [EntityComponent] to the character prefab, and select a `UID` from the [EntityManagerObject] database.

---

#### CREATE INITIAL APPEARANCE

- **Pre-designed appearance**: 
Use the `Demo` scene to design your player's initial appearance. Save this data in either the Resources folder or a designated folder within your game’s installation directory (where player save files are stored). Then use the load methods in #5 below to load this appearance data to the player character.
- **Default appearance**: 
   You can leave the player as default appearance , to do that, use the following code to Initialize your player to the default appearance:

```csharp
   GetComponent<CharacterEntity>().Initialize (Sex _sex)
```

   Let player create their character: 
   If you want to begin with character creation interface to let player to create their character before playing, simply call:

```csharp
   GetComponent<CharacterEntity>(). CreateCharacter ()
```

---

#### ADD NPC CONTROL SCRIPT

Attach your custom NPC control script to the root GameObject of the prefab.
View the [Character Controllers] section for more details.

---

#### ASSIGN MECANIM CONTROLLERS

In the [CharacterEntity] component, assign a Mecanim controller to both the Male and Female slots to handle animations.

![](../../../static/img/20260428-212811.png)

---

#### UNCHECK 'LOAD FROM PRESET FILE'

In the [CharacterEntity] component, uncheck the `Load from preset file` option to allow loading from save files.

![](../../../static/img/20260451-215141.png)

_For example_:
`MasterCharacterCreator/CustomBlueprints/Characters/NpcPreset_1`

![](../../../static/img/20260453-215305.png)

---

#### GENERATING A STATIC NPC CHARACTER PREFAB

If your `Non-Player Character` (NPC) **does not require** any **runtime customization** (_e.g._, swapping clothes or features during gameplay), you can generate a **static, optimized character prefab** using the `Master Character Creator (MCC)` tools. This allows the NPC to be used efficiently as a standard, pre-configured asset.

Here is the process for creating the prefab:

1. **Open the Tool**: Access the utility by navigating to `Window > MasterCharacterCreator > Tools` in the editor menu.
2. **Select Source Preset**: Click the `Select` button to choose the source character data file (the `*.bytes` preset) that contains the configuration for your NPC.
3. **Define Asset Paths**:
   - **Character Asset Folder Name**: Input the name for the folder where the tool will save the unique, generated materials and textures for this specific character.
   - **Prefab Name**: Input the desired name for the final character prefab asset. 
4. **Generate Prefab**: Click the `Generate Character Prefab` button. The new prefab will be created in your project, along with its unique material assets, and will be automatically selected in the Project window.

![](../../../static/img/20260458-215827.png)

---

#### EXPORTING THE PREFAB

The generated prefab and its associated assets are now ready for use. If you wish to export this character prefab to a different project, ensure you uncheck the `All script` checkbox during the package creation process. You only need to include the `CharacterBoneControlLite.cs` script, along with the prefab and its associated **textures** and **materials**, to ensure the exported asset functions correctly.

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