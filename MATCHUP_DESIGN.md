# MCU Rock-Paper-Scissors - Narrative Matchup Design

## Design Philosophy
All matchups should be based on MCU movie canon:
- Actual fight outcomes from films
- Character abilities and powers
- Narrative logic (e.g., Black Widow calms Hulk)
- Power scaling consistency

## Avengers Saga - Heroes Only (5 characters)

Each hero beats 2 others, loses to 2 others.

| Character | Beats | Reasoning |
|-----------|-------|-----------|
| **Captain America** | Black Widow, Hulk | BW: Superior strength/training; Hulk: Tactical mind (held Thanos) |
| **Iron Man** | Captain America, Black Widow | Cap: Civil War victory; BW: Tech superiority |
| **Thor** | Iron Man, Captain America | IM: Lightning disrupts reactor; Cap: God-tier power |
| **Hulk** | Thor, Iron Man | Thor: Rage matches god strength; IM: Brute force breaks armor |
| **Black Widow** | Hulk, Thor | Hulk: Lullaby/calming; Thor: Cunning defeats arrogance |

### Verification Matrix (Heroes)
```
           Cap  IM  Thor Hulk  BW
Cap        -    L   L    W     W
IM         W    -   L    L     W
Thor       W    W   -    L     L
Hulk       L    W   W    -     L
BW         L    L   W    W     -

Wins:      2    2   2    2     2   ✓ BALANCED
```

## Avengers Saga - Villains Only (5 characters)

Each villain beats 2 others, loses to 2 others.

| Character | Beats | Reasoning |
|-----------|-------|-----------|
| **Loki** | Red Skull, Killmonger | RS: Magic beats tactics; KM: Trickery defeats pride |
| **Red Skull** | Ronan, Ultron | Ronan: Tesseract knowledge counters Power Stone; Ultron: HYDRA AI experience |
| **Ronan** | Loki, Ultron | Loki: Kree strength overpowers trickster; Ultron: Power Stone disrupts AI |
| **Ultron** | Killmonger, Loki | KM: Vibranium body + intelligence; Loki: No mind to trick |
| **Killmonger** | Red Skull, Ronan | RS: Vibranium overpowers HYDRA tech; Ronan: Wakandan prowess |

### Verification Matrix (Villains)
```
           Loki RS  Ronan Ultron KM
Loki       -    W   L     L      W
RS         L    -   W     W      L
Ronan      W    L   -     W      L
Ultron     W    L   L     -      W
KM         L    W   W     L      -

Wins:      2    2   2     2      2   ✓ BALANCED
```

## Avengers Saga - Mixed Mode (10 characters)

In mixed mode, each character must beat exactly 4 others and lose to 4 others.
- Keep same-faction matchups from above
- Add 2 cross-faction wins per character

### Heroes vs Villains Cross-Faction Matchups

**Design constraint:**
- 5 heroes × 2 villain wins each = 10 hero→villain wins
- 5 villains × 2 hero wins each = 10 villain→hero wins
- This creates perfect balance!

#### Captain America
- Same-faction: beats BW, Hulk | loses to IM, Thor
- Cross-faction: **beats Loki, Red Skull** | loses to ??, ??
- Reasoning: Loki (resisted mind control, Avengers 1), Red Skull (First Avenger victory)

#### Iron Man
- Same-faction: beats Cap, BW | loses to Thor, Hulk
- Cross-faction: **beats Ultron, Loki** | loses to ??, ??
- Reasoning: Ultron (creator advantage), Loki (tower fight, Avengers 1)

#### Thor
- Same-faction: beats IM, Cap | loses to Hulk, BW
- Cross-faction: **beats Loki, Ultron** | loses to ??, ??
- Reasoning: Loki (brother always wins eventually), Ultron (lightning shorts circuits)

#### Hulk
- Same-faction: beats Thor, IM | loses to Cap, BW
- Cross-faction: **beats Loki, Ultron** | loses to ??, ??
- Reasoning: Loki ("puny god"), Ultron (raw strength tears vibranium)

#### Black Widow
- Same-faction: beats Hulk, Thor | loses to Cap, IM
- Cross-faction: **beats Loki, Killmonger** | loses to ??, ??
- Reasoning: Loki (outsmarted in interrogation), Killmonger (spy craft vs warrior)

**Hero wins against villains (count):**
- vs Loki: Cap, IM, Thor, Hulk, BW = 5 ✓
- vs Red Skull: Cap = 1 (need 1 more)
- vs Ronan: 0 (need 2)
- vs Ultron: IM, Thor, Hulk = 3 (need -1, too many!)
- vs Killmonger: BW = 1 (need 1 more)

Let me rebalance:

#### Captain America - beats Loki, Red Skull
#### Iron Man - beats Ultron, Loki
#### Thor - beats Loki, Ronan
#### Hulk - beats Ultron, Ronan
#### Black Widow - beats Loki, Killmonger

Count check:
- Loki loses to: Cap, IM, Thor, BW = 4 ❌ (should be 2)
- Red Skull loses to: Cap = 1 ❌ (should be 2)
- Ronan loses to: Thor, Hulk = 2 ✓
- Ultron loses to: IM, Hulk = 2 ✓
- Killmonger loses to: BW = 1 ❌ (should be 2)

Loki is too weak, needs to beat 2 heroes. Let me reassign...

**REVISED - Heroes beat Villains:**

| Hero | Beats (Villains) |
|------|------------------|
| Captain America | Loki, Red Skull |
| Iron Man | Ultron, Ronan |
| Thor | Loki, Killmonger |
| Hulk | Ultron, Ronan |
| Black Widow | Red Skull, Killmonger |

Count:
- Loki: Cap, Thor = 2 ✓
- Red Skull: Cap, BW = 2 ✓
- Ronan: IM, Hulk = 2 ✓
- Ultron: IM, Hulk = 2 ✓
- Killmonger: Thor, BW = 2 ✓

**Villains beat Heroes** (the inverse):

| Villain | Beats (Heroes) |
|---------|----------------|
| Loki | Iron Man, Hulk, Black Widow |
| Red Skull | Iron Man, Thor, Hulk |
| Ronan | Captain America, Thor, Black Widow |
| Ultron | Captain America, Thor, Black Widow |
| Killmonger | Captain America, Iron Man, Hulk |

Wait, that's 3 per villain, not 2! Let me recalculate...

If each hero beats 2 villains, that's 5 × 2 = 10 total.
If each villain beats 2 heroes, that's 5 × 2 = 10 total.
Perfect balance!

So villains beat:
- Cap is beaten by: ?, ? (2 needed)
- IM is beaten by: ?, ? (2 needed)
- Thor is beaten by: ?, ? (2 needed)
- Hulk is beaten by: ?, ? (2 needed)
- BW is beaten by: ?, ? (2 needed)

From the heroes beating villains:
- Loki LOSES to: Cap, Thor → Loki BEATS 2 heroes (not Cap, Thor)
- Red Skull LOSES to: Cap, BW → Red Skull BEATS 2 heroes (not Cap, BW)
- Ronan LOSES to: IM, Hulk → Ronan BEATS 2 heroes (not IM, Hulk)
- Ultron LOSES to: IM, Hulk → Ultron BEATS 2 heroes (not IM, Hulk)
- Killmonger LOSES to: Thor, BW → Killmonger BEATS 2 heroes (not Thor, BW)

**Villains beat Heroes (final):**

| Villain | Beats (Heroes) | Reasoning |
|---------|----------------|-----------|
| Loki | Iron Man, Hulk, Black Widow | Choose 2 from {IM, Hulk, BW} |
| Red Skull | Iron Man, Thor, Hulk | Choose 2 from {IM, Thor, Hulk} |
| Ronan | Captain America, Thor, Black Widow | Choose 2 from {Cap, Thor, BW} |
| Ultron | Captain America, Thor, Black Widow | Choose 2 from {Cap, Thor, BW} |
| Killmonger | Captain America, Iron Man, Hulk | Choose 2 from {Cap, IM, Hulk} |

Let me assign:
- Loki beats: IM, BW
- Red Skull beats: Thor, Hulk
- Ronan beats: Cap, BW
- Ultron beats: Cap, Thor
- Killmonger beats: IM, Hulk

Check each hero:
- Cap is beaten by: Ronan, Ultron ✓ (2)
- IM is beaten by: Loki, Killmonger ✓ (2)
- Thor is beaten by: Red Skull, Ultron ✓ (2)
- Hulk is beaten by: Red Skull, Killmonger ✓ (2)
- BW is beaten by: Loki, Ronan ✓ (2)

Perfect! Let me add narrative reasoning...

| Villain | Beats (Heroes) | Reasoning |
|---------|----------------|-----------|
| Loki | Iron Man, Black Widow | IM: Scepter mind control potential; BW: God vs spy |
| Red Skull | Thor, Hulk | Thor: Tesseract energy; Hulk: HYDRA containment protocols |
| Ronan | Captain America, Black Widow | Cap: Cosmic power > super soldier; BW: Kree warrior dominance |
| Ultron | Captain America, Thor | Cap: AI calculates all tactics; Thor: Tech neutralizes lightning |
| Killmonger | Iron Man, Hulk | IM: Vibranium absorbs repulsors; Hulk: Tactical Wakandan combat |

## Complete Avengers Saga Mixed Mode Matrix

TODO: Build full 10×10 verification matrix
