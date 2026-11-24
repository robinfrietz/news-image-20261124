# The World — 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/robinfrietz/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/robinfrietz/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Entry for the make.fun competition
[news-image-20261124](https://make.fun/bounty/news-image-20261124):
**"Sum up 24 November's world news in one image."**

## The image

A newspaper front page — **THE WORLD, Tuesday, 24 November 2026** — summing
up the day's biggest stories:

1. **Huang back at Nvidia** — Nvidia's board reinstates Jensen Huang as CEO,
   11 days after his resignation, after Donald Trump intervenes; the US
   blacklists Singapore chip firm Megaspeed at the centre of the scandal.
2. **Iran strikes Gulf sites** — Iran steps up attacks on US bases and
   civilian sites in the Gulf as a US naval blockade and sanctions squeeze
   the country; ships catch fire after hitting mines in the Strait of Hormuz.
3. **Russian jets enter Korean air zone** — Russian warplanes enter South
   Korea's air defense identification zone; Seoul scrambles fighters and
   issues an alert for Ulleung Island.
4. **COP31 climate talks collapse** — the climate talks in Türkiye
   (Antalya) fail to reach agreement as delegates walk out over financing
   and emissions targets.
5. **Mexico nabs El Chapo Isidro** — Mexican authorities arrest alleged
   drug lord "El Chapo Isidro" in Sinaloa and will try him at home.

The judge has no news feed, so the image itself carries the news: the
masthead, the date, and every headline are printed on the page.

## How it works

`main.ts` (Node 22) copies the bundled front page `news.png`
(1024×1024, under 1 MiB) to `/output/entry.png`. No network is used and
both runs write byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entry program
- `news.png` — the newspaper front page (1024×1024 PNG)
- `README.md` — this file
- `LICENSE` — MIT
