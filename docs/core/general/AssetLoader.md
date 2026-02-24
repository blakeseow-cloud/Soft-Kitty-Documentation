---
title: AssetLoader
---
```csharp
class SoftKitty.AssetLoader
```

AssetLoader is a base class responsible for handling asset loading, including prefabs, textures, audio clips, and more.

Inherit from this class to create your own loader script, override the load methods as needed (eg: Asset Bundles, Addressable), then attach the script to an empty prefab and assign it in [SGD_Settings] via:

`Project Settings > SoftKitty > Data Settings > General > Custom Loader`


---


### Methods


#### `public virtual T Load<T>(string _path) where T : UnityEngine.Object`
Load an Asset from AssetBundle or your custom loading method. Loaded bundle will be add to a Dictionary.

_Example code for load from Addressables_
```csharp
public override T Load<T>(string _path) where T : UnityEngine.Object{
   var op = Addressables.LoadAssetAsync<T>(_path);
   T go = op.WaitForCompletion();
   return go;
}
```

_Example code for load from AssetBundle_
```csharp
/// In this example, the bundle path and the object path are separated using "#".
/// For example, an object with the path "icons/food" stored in a bundle named "IconData"
/// would be accessed using the path: "IconData#icons/food".
public override T Load<T>(string _path) where T : UnityEngine.Object{
    string[] _args = _path.Split("#");
    if (_args.Length >= 2)
    {
        AssetBundle myLoadedAssetBundle=null;
        if (LoadedBundle.ContainsKey(_args[0]))
        {
            myLoadedAssetBundle = LoadedBundle[_args[0]];
        }
        else
        {
            myLoadedAssetBundle = AssetBundle.LoadFromFile(Path.Combine(Application.streamingAssetsPath, _args[0]));
            if (myLoadedAssetBundle == null)
            {
                Debug.Log("Failed to load AssetBundle: " + _args[0]);
                return null;
            }
            else
            {
                LoadedBundle.Add(_args[0], myLoadedAssetBundle);
            }
        }
               
        var go = myLoadedAssetBundle.LoadAsset<T>(_args[1]);
        return go;
    }
    else
    {
        Debug.Log("The path must be in this format: BundleName#ObjectPath,  for example: IconData#icons/food" + _args[0]);
        return null;
    }
}
```

---
#### `public virtual T LoadAndInstantiate<T>(string _path) where T : UnityEngine.Object`
Load and Instantiate an Asset from AssetBundle or your custom loading method. Loaded bundle will be add to a Dictionary.

_Example code for load from Addressables_
```csharp
public override T LoadAndInstantiate<T>(string _path) where T : UnityEngine.Object{
    var _handle = Addressables.LoadAssetAsync<T>(_path);
    T _ref = _handle.WaitForCompletion();
    if (_ref != null)
    {
        var op = Addressables.InstantiateAsync(_path);
        T newObj = op.Result;
        Addressables.Release(_handle);
        //Make sure to call Addressables.Release(newObj); when this object is about to destroied!!
        return newObj;
    }
    else
    {
        return null;
    }
}
```

_Example code for load from AssetBundle_
```csharp
/// In this example, the bundle path and the object path are separated using "#".
/// For example, an object with the path "icons/food" stored in a bundle named "IconData"
/// would be accessed using the path: "IconData#icons/food".
public override T LoadAndInstantiate<T>(string _path) where T : UnityEngine.Object{
    string[] _args = _path.Split("#");
    if (_args.Length >= 2)
    {
        AssetBundle myLoadedAssetBundle = null;
        if (LoadedBundle.ContainsKey(_args[0]))
        {
            myLoadedAssetBundle = LoadedBundle[_args[0]];
        }
        else
        {
            myLoadedAssetBundle = AssetBundle.LoadFromFile(Path.Combine(Application.streamingAssetsPath, _args[0]));
            if (myLoadedAssetBundle == null)
            {
                Debug.Log("Failed to load AssetBundle: " + _args[0]);
                return null;
            }
            else
            {
                LoadedBundle.Add(_args[0], myLoadedAssetBundle);
            }
        }
        var go = myLoadedAssetBundle.LoadAsset<T>(_args[1]);
        return Instantiate(go);
    }
    else
    {
        Debug.Log("The path must be in this format: BundleName#ObjectPath,  for example: IconData#icons/food" + _args[0]);
        return null;
    }
}
```

---

#### `public virtual void ReleaseAllBundles(bool _unloadAllLoadedObjects)`
Release all loaded AssetBundle.

---

#### `public virtual void ReleaseAllLoadedAsset()`
Release all loaded icons and custom assets from the memory.

---

#### `public virtual void ReleaseAsset(string _path)`
When 'ReleaseLoadedAsset()' is called from an item, this method will be called with the unloading asset.
You can override this method to handle it.

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