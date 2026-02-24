---
title: SoundManager
---

```csharp
class SoftKitty.SoundManager
```


This module plays a sound from the Resources folder. Place your sound clips in “**Resources/Sound/.**” 

#### `SoundManager.Play2D(string _soundName, float _volume = 1F) `
Plays a 2D sound with the provided audio clip name. 

---

#### `SoundManager.Play3D(string _soundName, Vector3 _position, float _volume = 1F) `
Plays a 3D sound at the specified position using the provided audio clip name. 

---

#### `SoundManager.Play2D(AudioClip _clip, float _volumn = 1F)`
Plays a 2D sound with the provided audio clip

---

#### `SoundManager.Play3D(AudioClip _clip, Vector3 _position, float _volumn = 1F)`
Plays a 3D sound at the specified position using the provided audio clip.

---

#### `SoundManager.ClearSoundCache()`
In order to save performance, after playing an AudioClip,the script will keep it in memory because most likely it going to be played again later.
Calling this will clear all those data to release memory.

---