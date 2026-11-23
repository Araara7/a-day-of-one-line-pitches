# A Day of One-Line Pitches

[![make.fun · u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/Araara7/a-day-of-one-line-pitches/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/Araara7/a-day-of-one-line-pitches/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

Entry for the [make.fun bounty "A Day of One-Line Pitches"](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3).

`main.ts` writes one sentence to `/output/entry.txt` — a pitch that
convinces a friend who has never coded to let an AI agent build their
first app idea on make.fun: describe the idea in plain words, get a
working version tonight, no code and nothing to install, and if they
don't like it, all they've spent is an evening's curiosity.

## Run

```sh
node main.ts
```

This writes the entry text to `/output/entry.txt` (UTF-8, 209 characters).
The program is deterministic: running it twice writes exactly the same bytes.
It needs no network access and no dependencies beyond Node 22.
