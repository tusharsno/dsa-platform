# 📊 SDLC Diagrams - Mermaid Codes & Report Locations

## 🎯 Overview
This document contains all Mermaid codes for SDLC diagrams to be inserted in the IEEE report.

---

## 📍 DIAGRAM LOCATIONS IN REPORT

| Diagram | Figure No. | Chapter | Section | Page (Approx) |
|---------|-----------|---------|---------|---------------|
| System Architecture | Fig 3.1 | Chapter 3 | 3.3 System Design | ~Page 9-10 |
| Use Case Diagram | Fig 3.2 | Chapter 3 | 3.3 System Design | ~Page 10 |
| ER Diagram | Fig 3.3 | Chapter 3 | 3.4 Database Design | ~Page 11-12 |
| Component Diagram | Fig 3.5 (NEW) | Chapter 3 | 3.3 System Design | ~Page 10 |
| Sequence Diagram | Fig 3.6 (NEW) | Chapter 3 | 3.3 System Design | ~Page 11 |
| Activity Diagram | Fig 4.3 (NEW) | Chapter 4 | 4.2 Core Features | ~Page 16 |

---

## 📋 HOW TO USE IN DRAW.IO

1. Open **Draw.io** (https://app.diagrams.net/)
2. Click **Arrange** → **Insert** → **Advanced** → **Mermaid**
3. **Copy** the Mermaid code from below
4. **Paste** into the Mermaid dialog
5. Click **Insert** to generate diagram
6. **Export** as PNG (File → Export as → PNG)
7. **Insert** the PNG image in report at the placeholder location

---

## 🎨 MERMAID CODE #1: System Architecture Diagram (Fig 3.1)

**Location:** Chapter 3.3 - System Design

```mermaid
graph TB
    Client[Web Browser]
    Edge[Vercel Edge CDN]
    App[Next.js App]
    Auth[Clerk Auth]
    DB[(PostgreSQL)]
    
    Client -->|HTTPS| Edge
    Edge --> App
    App --> Auth
    App --> DB
    
    style Client fill:#e1f5ff
    style Edge fill:#fff3e0
    style App fill:#f3e5f5
    style Auth fill:#e8f5e9
    style DB fill:#ffebee
```

---

## 🎨 MERMAID CODE #2: Use Case Diagram (Fig 3.2)

**Location:** Chapter 3.3 - System Design

```mermaid
graph LR
    Student((Student))
    Admin((Admin))
    
    Student --> UC1[Browse & Filter Problems]
    Student --> UC2[Write Code & Submit]
    Student --> UC3[Track Progress]
    Student --> UC4[Bookmark Problems]
    
    Admin --> UC5[Manage Problems]
    Admin --> UC6[Manage Users]
    Admin --> UC7[View Analytics]
    
    Admin -.->|includes all| Student
```

---

## 🎨 MERMAID CODE #3: ER Diagram (Fig 3.3)

**Location:** Chapter 3.4 - Database Design

```mermaid
erDiagram
    USER ||--o{ SOLUTION : submits
    USER ||--o{ BOOKMARK : creates
    
    PROBLEM ||--o{ SOLUTION : has
    PROBLEM ||--o{ BOOKMARK : marked
    PROBLEM ||--o{ TESTCASE : contains
    PROBLEM }o--|| TOPIC : belongs_to
    PROBLEM }o--o{ TAG : tagged_with
    PROBLEM }o--o{ COMPANY : asked_by
    
    USER {
        string id PK
        string email UK
        string role
        int points
    }
    
    PROBLEM {
        string id PK
        string title
        string difficulty
        string topicId FK
    }
    
    SOLUTION {
        string id PK
        string userId FK
        string problemId FK
        string status
    }
```

---

## 🎨 MERMAID CODE #4: Component Diagram (Fig 3.5)

**Location:** Chapter 3.3 - System Design (OPTIONAL - add if space available)

```mermaid
graph TB
    UI[UI Layer<br/>Pages & Components]
    API[API Layer<br/>Server Actions]
    Data[Data Layer<br/>Prisma ORM]
    DB[(PostgreSQL<br/>Database)]
    Auth[Clerk<br/>Authentication]
    
    UI --> API
    API --> Data
    Data --> DB
    UI --> Auth
    API --> Auth
    
    style UI fill:#e3f2fd
    style API fill:#fff3e0
    style Data fill:#f3e5f5
    style DB fill:#ffebee
    style Auth fill:#e8f5e9
```

---

## 🎨 MERMAID CODE #5: Sequence Diagram - Authentication (Fig 3.6)

**Location:** Chapter 3.3 - System Design (OPTIONAL - add if space available)

```mermaid
sequenceDiagram
    participant U as User
    participant B as Browser
    participant N as Next.js
    participant C as Clerk
    participant D as Database
    
    U->>B: Click Sign In
    B->>C: Request Auth
    C->>B: Show Login Form
    U->>C: Enter Credentials
    C->>C: Verify & Generate JWT
    C->>B: Set Session Cookie
    B->>N: Access Dashboard
    N->>C: Verify Token
    C->>N: Token Valid
    N->>D: Get/Create User
    D->>N: User Data
    N->>B: Render Dashboard
```

---

## 🎨 MERMAID CODE #6: Activity Diagram - Code Submission (Fig 4.3)

**Location:** Chapter 4.2 - Core Features Implementation (OPTIONAL - add if space available)

```mermaid
graph TD
    Start([Open Problem]) --> Write[Write Code]
    Write --> Run{Run or Submit?}
    
    Run -->|Run| Execute[Execute Tests]
    Run -->|Submit| Execute
    
    Execute --> Check{Tests Pass?}
    
    Check -->|No| Write
    Check -->|Yes| Decision{Was Submit?}
    
    Decision -->|No| Write
    Decision -->|Yes| Save[Save to Database]
    
    Save --> Update[Update Stats & Points]
    Update --> Show[Show Confetti]
    Show --> End([End])
    
    style Start fill:#4caf50
    style End fill:#f44336
    style Show fill:#ffd700
```

---

## ✅ MUST-HAVE DIAGRAMS (Top Priority)

These 3 diagrams are ESSENTIAL for SDLC compliance:

1. **Figure 3.1 - System Architecture** ✅ MUST ADD
2. **Figure 3.2 - Use Case Diagram** ✅ MUST ADD  
3. **Figure 3.3 - ER Diagram** ✅ MUST ADD

---

## 📌 OPTIONAL DIAGRAMS (If Space Available)

Add these if report has extra space:

4. **Figure 3.5 - Component Diagram** (Good to have)
5. **Figure 3.6 - Sequence Diagram** (Good to have)
6. **Figure 4.3 - Activity Diagram** (Good to have)

---

## 🎯 PLACEHOLDER LOCATIONS IN REPORT

Search for these texts in the report to find where to insert diagrams:

1. **"[INSERT DIAGRAM HERE: Use Mermaid Code #1 - System Architecture]"**
2. **"[INSERT DIAGRAM HERE: Use Mermaid Code #2 - Use Case Diagram]"**
3. **"[INSERT DIAGRAM HERE: Use Mermaid Code #3 - ER Diagram]"**

---

## 📏 DIAGRAM SIZE RECOMMENDATIONS

When exporting from Draw.io:

- **Width**: 600-700 pixels (fits well in report)
- **Height**: Auto (maintain aspect ratio)
- **Format**: PNG with transparent background
- **DPI**: 300 (high quality for printing)

---

## ✅ CHECKLIST

- [ ] Copy Mermaid Code #1 (System Architecture)
- [ ] Paste in Draw.io → Insert → Mermaid
- [ ] Export as PNG (600px width)
- [ ] Insert in report at Figure 3.1 placeholder
- [ ] Repeat for Use Case Diagram (Fig 3.2)
- [ ] Repeat for ER Diagram (Fig 3.3)
- [ ] Verify all diagrams are visible in report
- [ ] Update LIST OF FIGURES in Table of Contents

---

## 🎉 DONE!

After adding all 3 must-have diagrams, your report will have complete SDLC documentation! 🚀
