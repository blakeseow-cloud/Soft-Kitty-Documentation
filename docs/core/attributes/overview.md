---
title: Overview
---

This page explains how **Attributes** work in **Master Combat Core Framework**, including
base values, temporary modifiers, time-based changes, and the global upgrade pipeline
used by systems such as difficulty scaling and player leveling.

---

### What Is an Attribute?

An **Attribute** represents a numeric value associated with an `Entity`, such as:

- Health
- Attack
- Defense
- Movement Speed
- Critical Chance
- Luck

Attributes are **data-driven**, **passive**, and **query-based**:
- No per-frame updates
- No ticking logic
- Values are evaluated **only when accessed**

---

### Attribute Data Model

Each attribute consists of:

- Base Value
- Temporary Modifiers
- Upgrade Modifiers
- Final Evaluated Value

All attribute data lives in memory at runtime and is safe from accidental editor mutation.

---

### Attribute Evaluation Flow

When an attribute value is requested:

1. Base value is read
2. All active temporary modifiers are evaluated
3. Expired modifiers are discarded using timestamps
4. Upgrade modifiers are applied
5. Final value is returned

This happens **on demand**, not over time.

---

### Temporary Attribute Modifiers

Temporary modifiers are represented as:

- Value
- Duration (seconds)
- Start timestamp
- Operation type

#### Supported Operation Types

- Add
- Multiply
- Override

#### Example Use Cases

- +100 Attack for 10 seconds
- Movement Speed ×0.8 while frozen
- Health locked to 1 while invincible

No update loop is required — timestamps handle expiration.

---

### Attribute Upgrade System

The upgrade system applies **persistent scaling** to attributes.

Used for:
- Player leveling
- Enemy difficulty scaling
- Global progression curves

Upgrades are applied **before gameplay begins** or when a level changes.

---

### Global Difficulty Scaling

A global difficulty entity can apply upgrades to:

- Enemy Health
- Enemy Damage
- AI reaction speed
- Loot rarity

This allows difficulty to scale smoothly over time without modifying graph logic.

---

### Graph Integration

Attributes are accessed in graphs via:

- Condition Nodes
- Math Nodes
- Variable Nodes
- Action Nodes

Because attributes are passive, they are safe to read multiple times in the same graph
execution and benefit from runtime result caching.

---

### Best Practices

- Use attributes for all numeric gameplay data
- Prefer temporary modifiers over manual timers
- Let graphs *read* attributes, not manage time
- Use upgrades for long-term scaling only

---

### Related Pages

- Entity & EntityManager
- Dynamic Variables
- Over-Time Effects
- Graph & GraphInstance

---