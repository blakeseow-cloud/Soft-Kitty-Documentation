\# First Damage Graph



This guide walks you through creating your first working damage setup using \*\*Master Combat Core\*\*.



By the end, you will:

\- Understand how damage graphs work

\- Create a simple damage calculation

\- Trigger damage at runtime



---



\## Step 1 — Create a Damage Graph



1\. Right-click in the Project window

2\. Create a \*\*Damage Graph\*\* asset

3\. Open it in the Graph Editor



This graph defines \*\*how damage is calculated and applied\*\*.



---



\## Step 2 — Root Node



Every damage graph starts with a \*\*Root\*\* node.



The Root node:

\- Defines \*\*when\*\* the graph is triggered

\- Starts evaluation and execution



Example triggers:

\- Combat

\- Manual

\- Physics-based detection



---



\## Step 3 — Entity Nodes



Entities represent participants in combat.



Common entity roles:

\- \*\*Dealer\*\* — the entity dealing damage

\- \*\*Target\*\* — the entity receiving damage



Use an \*\*Entity Node\*\* to define where an entity comes from:

\- Player

\- Dealer

\- Target

\- Specified UID

\- Graph Instance Entity



---



\## Step 4 — Variable Nodes



Variable nodes produce values used in calculations.



Common variable types:

\- Constant

\- Attribute

\- Dynamic Variable

\- Random



Example:

\- Reading `atk` from Dealer

\- Adding a flat bonus

\- Applying randomness



---



\## Step 5 — Math Nodes



Math nodes operate on variables.



Examples:

\- Add

\- Multiply

\- Clamp

\- Lerp



Math nodes always:

\- Take Variable inputs

\- Output a Variable result



---



\## Step 6 — Action Node (Apply Damage)



Action nodes perform gameplay effects.



Typical damage actions:

\- Attribute change (HP reduction)

\- Apply over-time effects

\- Trigger status effects



Actions execute \*\*only when conditions pass\*\*.



---



\## Step 7 — Setting Dealer and Target



\- \*\*Dealer\*\*: The entity dealing damage

\- \*\*Target\*\*: The entity receiving damage



You can:

\- Assign them directly

\- Let Physics Detection handle targets automatically

\- Set them at runtime via code



\### Example

```csharp

combatDamage.SetDealerEntity(playerEntity);

combatDamage.SetTargetEntity(enemyEntity);

---

## Step 8 — Trigger the Damage

Damage can be triggered by:

- Collision detection
- Trigger volumes
- Manual code calls
- Animation events

When triggered:

1. The graph instance initializes
2. Triggers are evaluated
3. Actions execute if conditions are met

---

## Summary

You’ve just built your first damage graph.

This same workflow scales to:

- Critical hits
- Shields
- Status effects
- Conditional execution
- Complex combat formulas

---

## Next Step

➡️ **Core Concepts → Entity & EntityManager**


