---
title: AttributeData
---
```csharp
class AttributeData
```

`AttributeData` represents the runtime value of an attribute during gameplay.
It supports numeric and string values, callbacks, upgrades, and locking.



### Properties

#### `string uid

The UID linking this runtime data to its attribute definition.

---

#### `int id`

The ID linking this runtime data to its attribute definition.

---

#### `string stringValue`

The string value of this attribute.

---

#### `float floatValue`

The numeric value of this attribute.

---


### Methods

#### `void RegisterCallback(AttributeChangeEvent _callback)`

Registers a callback triggered when the attribute value changes.

---

#### `delegate AttributeChangeEvent(string _uid, float _value, Entity _dealer)`

Callback delegate invoked when the attribute value changes.

---

#### `bool isNumber()`

Returns true if this attribute is numeric.

---

#### `bool isString()`

Returns true if this attribute stores a string value.

---

#### `void SetLock(bool _lock)`

Locks or unlocks this attribute.
Locked attributes are invalid and hidden.

---

#### `float GetFloat(int _upgradeLevel = 0)`

Returns the float value, optionally including upgrade scaling.

---

#### `int GetInt(int _upgradeLevel = 0)`

Returns the integer value, optionally including upgrade scaling.

---

#### `string GetString()`

Returns the string value of this attribute.

---

#### `void SetValue(float _value, Entity _dealer = null)`

Overrides the attribute value using a float.

---

#### `void SetValue(int _value, Entity _dealer = null)`

Overrides the attribute value using an integer.

---

#### `void SetValue(string _value)`

Overrides the attribute value using a string.

---

#### `float AddValue(float _value, Entity _dealer = null)`

Adds a float value and returns the result.

---

#### `int AddValue(int _value, Entity _dealer = null)`

Adds an integer value and returns the result.

---

#### `float AddValueClamp(float _value, float _min, float _max, Entity _dealer = null)`

Adds a float value, clamps it, and returns the result.

---

#### `int AddValueClamp(int _value, int _min, int _max, Entity _dealer = null)`

Adds an integer value, clamps it, and returns the result.

---