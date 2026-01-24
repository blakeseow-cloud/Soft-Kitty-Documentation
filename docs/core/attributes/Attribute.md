---
title: Attribute
---
```csharp
class Attribute
```

`Attribute` represents the setting data for a single attribute, such as a character stat or configurable value.



### Properties
#### `int uid`

The unique identifier for this attribute.

---

#### `int id`

The internal integer ID used for indexing and fast lookup.

---

#### `string name`

The display name of the attribute (e.g. "Health", "Attack").

---

#### `bool stringValue`

Indicates whether this attribute stores a string value.

---

#### `bool coreStats`

Defines whether this attribute is a core stat (e.g. health, attack, stamina).

---

#### `string defaultValue`

The default value of the attribute, stored as a string.

---

#### `float upgradeIncrement`

The value increment applied per upgrade level.

---

### Methods
#### `string GetDisplayString(string _value)`

Returns a formatted display string for this attribute value.

---