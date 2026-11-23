# ✨ Birthday Surprise Website for Keerthu ✨

A responsive, romantic, and interactive single-page birthday surprise website built with modern HTML5, Tailwind CSS, custom CSS animations, and vanilla JavaScript.

---

## 🌟 Key Features

1. **Interactive Wax-Sealed 3D Envelope Reveal**:
   - Tap-to-open envelope animation with wax seal pop.
   - Smooth transition, automatic background romantic music start, and celebratory multi-colored confetti burst via `canvas-confetti`.

2. **Ambient Particle Canvas**:
   - Dynamic stardust, shimmering golden lights, and floating glowing hearts drifting across the night sky.

3. **Hero Section & Live Relationship Counter**:
   - Headline: *"Happy 20th Birthday, Keerthu ✨"*
   - Live real-time counter displaying Days, Hours, Minutes, and Seconds she has been lighting up your world.

4. **"Our Memories" Interactive Polaroid Gallery**:
   - Polaroid cards with handwritten captions (`Caveat` cursive font), dates, and authentic washi-tape accents.
   - Interactive Lightbox Modal with story notes, previous/next buttons, and keyboard navigation.

5. **"10 Reasons Why I Love You" Card Deck**:
   - Interactive card stack with micro-interactions.
   - Tap the card to flip/cycle forward, or use the **Previous**, **Next**, and **Shuffle** buttons.

6. **Interactive Birthday Cake & Wish Maker**:
   - Stylized cake with flickering candle flames.
   - **Blow Out Candles** button or **Blow with Mic** (Web Audio API analyzes breath/sound).
   - Extinguishes flames, emits rising smoke particle animations, and triggers a joyful confetti shower.

7. **A Letter From My Heart**:
   - Stationery-style parchment letter with red margin lines, elegant Cormorant Garamond typography, and personalized signoff.

8. **Floating Audio Control Bar**:
   - Floating music player with spinning vinyl icon and play/pause controls.
   - Includes fallback synthesized romantic music-box melody via the Web Audio API if offline.

---

## 🎨 How to Customize (Takes < 2 minutes)

Open `script.js` and edit the `BIRTHDAY_CONFIG` object right at the top:

```javascript
const BIRTHDAY_CONFIG = {
  // 1. Her Name
  herName: "Keerthu",

  // 2. Your Name
  yourName: "Nishanth",

  // 3. Birthday milestone
  ageMilestone: "20th",

  // 4. Start date for the live counter (her birthday or the day you met)
  startDate: "2004-12-05T00:00:00",

  // 5. Photos and stories for the gallery
  memories: [
    {
      title: "The Day It All Began",
      date: "Dec 14, 2023",
      caption: "When our story wrote its very first page ☕",
      image: "YOUR_IMAGE_PATH_OR_URL",
      story: "Your personal story for this moment..."
    },
    // ...
  ],

  // 6. Reasons why you love her
  reasons: [
    {
      icon: "✨",
      title: "Your Radiant Smile",
      description: "..."
    },
    // ...
  ]
};
```

### Adding Your Own Music:
In `index.html`, locate line 67:
```html
<audio id="bg-audio" loop preload="auto">
  <source src="your-song.mp3" type="audio/mp3">
</audio>
```
Drop your `.mp3` file into this folder and update `src="your-song.mp3"`.

### Adding Your Own Photos:
Create an `images/` folder, drop your pictures in, and update the `image:` paths in `script.js` (e.g. `images/photo1.jpg`).

---

## 🚀 How to Run

No build tools, npm, or installation required!
- Double-click `index.html` to open it directly in any modern browser (Chrome, Safari, Edge, Firefox).
- Or run a lightweight local server if you have Python: `python -m http.server 8000` and visit `http://localhost:8000`.
