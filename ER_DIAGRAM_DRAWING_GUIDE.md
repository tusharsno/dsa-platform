# 📊 DSA Platform - ER Diagram Drawing Instructions (Excel/Draw Tools)

## 🎯 Drawing Instructions for Excel, PowerPoint, or Any Drawing Tool

---

## 📋 Step-by-Step Drawing Guide

### 1️⃣ **Setup Canvas**
- Create a large canvas (A3 size or 1200x800 pixels)
- Set grid lines for alignment
- Use white background

---

## 2️⃣ **Draw Entities (Rectangles)**

### 📍 **Position Layout:**
```
Row 1: [User]     [Problem]     [Topic]
Row 2: [Bookmark] [Solution]    [Tag]    [Company]
```

### 🏗️ **Entity Details:**

#### **User Entity** (Top-Left)
- **Shape**: Rectangle (120x100 pixels)
- **Color**: Light Blue (#DAE8FC)
- **Border**: Blue (#6C8EBF)
- **Text**: 
  ```
  User
  ────────
  id (PK)
  clerkId (U)
  email (U)
  name
  role
  points
  streak
  ```

#### **Problem Entity** (Top-Center)
- **Shape**: Rectangle (120x100 pixels)
- **Color**: Light Blue (#DAE8FC)
- **Border**: Blue (#6C8EBF)
- **Text**:
  ```
  Problem
  ────────
  id (PK)
  title (U)
  slug (U)
  description
  difficulty
  hints
  topicId (FK)
  ```

#### **Topic Entity** (Top-Right)
- **Shape**: Rectangle (120x100 pixels)
- **Color**: Light Blue (#DAE8FC)
- **Border**: Blue (#6C8EBF)
- **Text**:
  ```
  Topic
  ────────
  id (PK)
  name (U)
  slug (U)
  icon
  order
  description
  ```

#### **Solution Entity** (Bottom-Center)
- **Shape**: Rectangle (120x100 pixels)
- **Color**: Light Blue (#DAE8FC)
- **Border**: Blue (#6C8EBF)
- **Text**:
  ```
  Solution
  ────────
  id (PK)
  userId (FK)
  problemId (FK)
  code
  status
  language
  executionTime
  ```

#### **Bookmark Entity** (Bottom-Left)
- **Shape**: Rectangle (120x80 pixels)
- **Color**: Light Blue (#DAE8FC)
- **Border**: Blue (#6C8EBF)
- **Text**:
  ```
  Bookmark
  ────────
  id (PK)
  userId (FK)
  problemId (FK)
  createdAt
  ```

#### **Tag Entity** (Bottom-Right-1)
- **Shape**: Rectangle (120x80 pixels)
- **Color**: Light Blue (#DAE8FC)
- **Border**: Blue (#6C8EBF)
- **Text**:
  ```
  Tag
  ────────
  id (PK)
  name (U)
  slug (U)
  ```

#### **Company Entity** (Bottom-Right-2)
- **Shape**: Rectangle (120x80 pixels)
- **Color**: Light Blue (#DAE8FC)
- **Border**: Blue (#6C8EBF)
- **Text**:
  ```
  Company
  ────────
  id (PK)
  name (U)
  slug (U)
  logo
  ```

---

## 3️⃣ **Draw Relationships (Diamonds)**

### 🔗 **Relationship Details:**

#### **User-Solution Relationship**
- **Shape**: Diamond (80x50 pixels)
- **Color**: Light Purple (#E1D5E7)
- **Border**: Purple (#9673A6)
- **Text**: "submits"
- **Position**: Between User and Solution

#### **User-Bookmark Relationship**
- **Shape**: Diamond (80x50 pixels)
- **Color**: Light Purple (#E1D5E7)
- **Border**: Purple (#9673A6)
- **Text**: "bookmarks"
- **Position**: Between User and Bookmark

#### **Problem-Solution Relationship**
- **Shape**: Diamond (80x50 pixels)
- **Color**: Light Purple (#E1D5E7)
- **Border**: Purple (#9673A6)
- **Text**: "has"
- **Position**: Between Problem and Solution

#### **Problem-Bookmark Relationship**
- **Shape**: Diamond (80x50 pixels)
- **Color**: Light Purple (#E1D5E7)
- **Border**: Purple (#9673A6)
- **Text**: "bookmarked_as"
- **Position**: Between Problem and Bookmark

#### **Topic-Problem Relationship**
- **Shape**: Diamond (80x50 pixels)
- **Color**: Light Purple (#E1D5E7)
- **Border**: Purple (#9673A6)
- **Text**: "contains"
- **Position**: Between Topic and Problem

#### **Problem-Tag Relationship (M:M)**
- **Shape**: Diamond (80x50 pixels)
- **Color**: Light Purple (#E1D5E7)
- **Border**: Purple (#9673A6)
- **Text**: "tagged_with"
- **Position**: Between Problem and Tag

#### **Problem-Company Relationship (M:M)**
- **Shape**: Diamond (80x50 pixels)
- **Color**: Light Purple (#E1D5E7)
- **Border**: Purple (#9673A6)
- **Text**: "asked_by"
- **Position**: Between Problem and Company

---

## 4️⃣ **Draw Connection Lines**

### 📏 **Line Specifications:**
- **Style**: Solid black lines
- **Width**: 2 pixels
- **Type**: Straight lines with right angles

### 🔗 **Connections to Draw:**

1. **User** ──── **submits** ──── **Solution**
2. **User** ──── **bookmarks** ──── **Bookmark**
3. **Problem** ──── **has** ──── **Solution**
4. **Problem** ──── **bookmarked_as** ──── **Bookmark**
5. **Topic** ──── **contains** ──── **Problem**
6. **Problem** ──── **tagged_with** ──── **Tag**
7. **Problem** ──── **asked_by** ──── **Company**

---

## 5️⃣ **Add Cardinality Labels**

### 📊 **Cardinality Positions:**

#### **One-to-Many (1:M) Relationships:**
- **User → Solution**: "1" near User, "M" near Solution
- **User → Bookmark**: "1" near User, "M" near Bookmark
- **Problem → Solution**: "1" near Problem, "M" near Solution
- **Problem → Bookmark**: "1" near Problem, "M" near Bookmark
- **Topic → Problem**: "1" near Topic, "M" near Problem

#### **Many-to-Many (M:M) Relationships:**
- **Problem ↔ Tag**: "M" near Problem, "M" near Tag
- **Problem ↔ Company**: "M" near Problem, "M" near Company

### 📝 **Label Specifications:**
- **Font**: Bold, 12pt
- **Color**: Black
- **Position**: Close to entity, on the connection line

---

## 6️⃣ **Add Legend/Key**

### 📋 **Legend Box** (Bottom-Right Corner):
```
┌─────────────────────────┐
│         LEGEND          │
├─────────────────────────┤
│ □ Entity (Rectangle)    │
│ ◊ Relationship (Diamond)│
│ ── Connection Line      │
│ (PK) Primary Key        │
│ (FK) Foreign Key        │
│ (U) Unique Constraint   │
│ 1, M Cardinality        │
└─────────────────────────┘
```

---

## 7️⃣ **Formatting Guidelines**

### 🎨 **Color Scheme:**
- **Entities**: Light Blue background (#DAE8FC), Blue border (#6C8EBF)
- **Relationships**: Light Purple background (#E1D5E7), Purple border (#9673A6)
- **Text**: Black, Arial/Calibri font
- **Lines**: Black, 2px width

### 📏 **Sizing:**
- **Entity boxes**: 120x100 pixels (or 3x2.5 cm)
- **Relationship diamonds**: 80x50 pixels (or 2x1.25 cm)
- **Font size**: 10-12pt for entity names, 8-10pt for attributes

### 📐 **Alignment:**
- Use grid alignment
- Equal spacing between entities
- Center-align text in shapes
- Keep relationships centered between entities

---

## 8️⃣ **Final Checklist**

### ✅ **Verification Steps:**
- [ ] All 7 entities drawn with correct attributes
- [ ] All 7 relationships drawn with correct names
- [ ] All connection lines properly connected
- [ ] Cardinality labels (1, M) added correctly
- [ ] Primary Keys (PK) marked in yellow/bold
- [ ] Foreign Keys (FK) marked clearly
- [ ] Unique constraints (U) marked
- [ ] Legend/key included
- [ ] Professional color scheme applied
- [ ] Proper alignment and spacing

### 📊 **Quality Check:**
- Entities are clearly distinguishable
- Relationships are properly positioned
- Text is readable and well-formatted
- Diagram follows standard ER notation
- All database relationships are represented
- Cardinality is correctly shown

---

## 🎯 **Pro Tips for Excel/PowerPoint:**

1. **Use Insert → Shapes** for rectangles and diamonds
2. **Use Insert → Text Box** for labels
3. **Use Format → Shape Fill** for colors
4. **Use Insert → Line** for connections
5. **Group related elements** for easy moving
6. **Use Align tools** for professional layout
7. **Save as high-resolution image** for presentations

This ER diagram will perfectly represent your DSA Platform's database structure!