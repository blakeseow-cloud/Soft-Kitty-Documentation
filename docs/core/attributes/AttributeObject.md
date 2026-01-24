---
title: AttributeObject
---
```csharp
class AttributeObject : DataObject
```

`AttributeObject` is a data object that manages attribute settings within the system.

You can create this object via the Unity Editor:

`Create → SoftKitty → Data Objects → Attribute Data`



### Properties
#### `List<Attribute> AttributeList`

A list of all attribute definitions.
Each entry defines base values, upgrade behavior, and attribute type.

---

#### `string[] AttributesNames`

An array of attribute display names (e.g. "Health", "Attack").
Useful for UI, debugging, or quick reference.

---

#### `string[] AttributesUidArray`

An array of attribute UIDs.
Provides direct access to attributes using unique identifiers.

---

### Methods
#### `Attribute GetAttribute(string _uid)`

Retrieves an attribute definition by its unique string UID.
```csharp
Attribute attribute = data.GetAttribute("atk");
```

More readable and convenient for scripting.

---

#### `Attribute GetAttribute(int _id)`

Retrieves an attribute definition by its integer ID.
```csharp
Attribute attribute = data.GetAttribute(3);
```

Use this for performance-critical lookups.

---