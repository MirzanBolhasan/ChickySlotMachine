# 🎨 Full Slot Machine Template Design Guide

## What is a Full Template?

Instead of just decorative overlays, you can design the **ENTIRE slot machine interface** as one complete image. Think of it like designing a poster where specific areas are "windows" for the game elements.

---

## 📐 Template Specifications

### Full Template Size
- **Dimensions**: 1080px × 1920px (portrait) OR 1920px × 1080px (landscape)
- **Format**: PNG or JPG (PNG recommended for transparency)
- **File Size**: Under 2MB
- **DPI**: 72 (screen resolution)

### Mobile-Friendly Design
- **Safe Zone**: Keep important content 60px from all edges
- **Vertical Layout**: Best for mobile (portrait orientation)

---

## 🎯 Required "Window" Areas

You must leave these areas **clear or semi-transparent** for game functionality:

### 1. Reels Area (Center)
```
┌────────────────────────────────┐
│                                │
│     [DECORATIVE HEADER]        │
│                                │
│  ┌────────────────────────┐   │
│  │                        │   │
│  │   CLEAR AREA FOR       │   │  ← 600px × 400px
│  │   3 REELS              │   │     (adjust as needed)
│  │                        │   │
│  └────────────────────────┘   │
│                                │
│  ┌────────────────────────┐   │
│  │   CLEAR AREA FOR       │   │  ← ~200px × 80px
│  │   SPIN BUTTON          │   │
│  └────────────────────────┘   │
│                                │
│     [DECORATIVE FOOTER]        │
└────────────────────────────────┘
```

### Specific Measurements:
- **Reels Window**: ~600px wide × 400px tall (centered)
- **Spin Button Window**: ~500px wide × 100px tall (below reels)
- **Spacing**: ~50px between elements

---

## 🎨 Design Elements

### What to Include:
✅ Custom header with game title
✅ Decorative frame around reel area
✅ Themed background patterns
✅ Custom button styling (around the window)
✅ Side decorations (coins, characters, etc.)
✅ Prize information display area
✅ Footer decorations

### What to Avoid:
❌ Solid colors covering reel windows
❌ Complex patterns in functional areas
❌ Text that will be covered by reels
❌ Important info too close to edges

---

## 🖼️ Layer Structure (Photoshop/GIMP)

```
Layers (top to bottom):
├── Text Layer: Game Title
├── Decorations: Top ornaments
├── Frame Layer: Reel window border
├── [EMPTY/TRANSPARENT]: Reel area
├── Frame Layer: Button window border  
├── [EMPTY/TRANSPARENT]: Button area
├── Decorations: Side elements
├── Decorations: Bottom coins/elements
└── Background: Main theme image
```

---

## 📝 Step-by-Step Creation

### 1. Set Up Canvas
- Create new file: 1080×1920px (portrait) or 900×1600px
- 72 DPI, RGB color mode

### 2. Add Background
- Full themed background
- Can be solid color, gradient, or image

### 3. Mark Functional Zones
- Create guides or selection boxes for:
  - Reel area (center, ~600×400px)
  - Button area (below reels, ~500×100px)
  - Info display area

### 4. Design Frame Elements
- Create decorative frames **AROUND** functional zones
- Leave zones themselves transparent or very subtle

### 5. Add Decorative Elements
- Header/title at top
- Characters, symbols on sides
- Footer decorations at bottom
- Keep away from functional zones

### 6. Export
- Flatten all layers EXCEPT functional windows
- Keep functional windows transparent or with very light background
- Export as PNG-24 with transparency

---

## 💡 Design Examples

### Chinese New Year Theme:
- **Background**: Red with gold patterns
- **Header**: "恭喜發財" (Gong Xi Fa Cai) in gold
- **Frame**: Golden ornate borders with dragon patterns
- **Sides**: Lanterns, firecrackers, gold coins
- **Bottom**: Lucky coins scattered
- **Reels Window**: Light red tint (semi-transparent)
- **Button Area**: Clear with golden frame

### Halloween Theme:
- **Background**: Dark purple with spider webs
- **Header**: "Spooky Spins" with bats
- **Frame**: Wooden coffin-style borders
- **Sides**: Pumpkins, ghosts, candy corn
- **Bottom**: Gravestones, black cats
- **Reels Window**: Misty overlay (very subtle)
- **Button Area**: Clear with spooky frame

### Christmas Theme:
- **Background**: Snow scene with trees
- **Header**: "Holiday Jackpot" with ornaments
- **Frame**: Gift box style borders
- **Sides**: Presents, candy canes, snowmen
- **Bottom**: Snow piles with gifts
- **Reels Window**: Light snow overlay
- **Button Area**: Clear with festive ribbon frame

---

## ✅ Pre-Upload Checklist

- [ ] File is 900-1920px wide
- [ ] Reel window is clear and centered
- [ ] Button window is clear and visible
- [ ] No text in functional zones
- [ ] Safe zone respected (60px from edges)
- [ ] File size under 2MB
- [ ] Tested at 50% size (mobile view)
- [ ] Contrast is good for visibility
- [ ] All text is readable

---

## 🎯 Pro Tips

1. **Use Semi-Transparent Overlays**: Instead of solid windows, use 5-10% opacity tint to add atmosphere without blocking visibility

2. **Frame Everything**: Strong decorative frames around windows make them stand out

3. **Hierarchy**: Make sure eyes go: Title → Reels → Button

4. **Test on Mobile**: Most users are on phones - design mobile-first

5. **Brand Consistency**: Match your event/company colors and style

6. **Seasonal Updates**: Create multiple templates to swap seasonally

---

## 📊 Recommended Tools

- **Canva Pro**: Easiest, has templates
- **Photoshop**: Most powerful
- **Figma**: Great for collaboration
- **GIMP**: Free Photoshop alternative

---

## 🚀 Upload & Configure

1. Design your template following this guide
2. Export as PNG
3. Upload in admin panel → "Full Template Design"
4. Adjust reel and button positions using sliders
5. Preview and fine-tune
6. Save and test!