# 📊 DSA Platform - ER Diagram (Draw.io Code)

## 🎯 Quick Import Instructions
1. Open draw.io → File → Import from → Text
2. Paste the XML code below
3. Click Import

---

## 📋 Draw.io XML Code

```xml
<mxGraphModel dx="1422" dy="794" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="827">
  <root>
    <mxCell id="0"/>
    <mxCell id="1" parent="0"/>
    
    <!-- User Entity -->
    <mxCell id="user" value="User" style="whiteSpace=wrap;html=1;align=center;fillColor=#dae8fc;strokeColor=#6c8ebf;fontStyle=1;fontSize=14;" vertex="1" parent="1">
      <mxGeometry x="100" y="100" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- User Attributes -->
    <mxCell id="userId" value="id (PK)" style="ellipse;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="20" y="50" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="clerkId" value="clerkId" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
      <mxGeometry x="120" y="30" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="email" value="email" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
      <mxGeometry x="220" y="50" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="name" value="name" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="20" y="180" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="role" value="role" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="120" y="200" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="points" value="points" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="220" y="180" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <!-- Problem Entity -->
    <mxCell id="problem" value="Problem" style="whiteSpace=wrap;html=1;align=center;fillColor=#dae8fc;strokeColor=#6c8ebf;fontStyle=1;fontSize=14;" vertex="1" parent="1">
      <mxGeometry x="500" y="100" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Problem Attributes -->
    <mxCell id="problemId" value="id (PK)" style="ellipse;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="420" y="50" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="title" value="title" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
      <mxGeometry x="520" y="30" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="slug" value="slug" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
      <mxGeometry x="620" y="50" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="description" value="description" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="420" y="180" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="difficulty" value="difficulty" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="520" y="200" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="hints" value="hints" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="620" y="180" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <!-- Topic Entity -->
    <mxCell id="topic" value="Topic" style="whiteSpace=wrap;html=1;align=center;fillColor=#dae8fc;strokeColor=#6c8ebf;fontStyle=1;fontSize=14;" vertex="1" parent="1">
      <mxGeometry x="800" y="100" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Topic Attributes -->
    <mxCell id="topicId" value="id (PK)" style="ellipse;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="720" y="50" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="topicName" value="name" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
      <mxGeometry x="820" y="30" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="topicSlug" value="slug" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
      <mxGeometry x="920" y="50" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="icon" value="icon" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="820" y="200" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <!-- Solution Entity -->
    <mxCell id="solution" value="Solution" style="whiteSpace=wrap;html=1;align=center;fillColor=#dae8fc;strokeColor=#6c8ebf;fontStyle=1;fontSize=14;" vertex="1" parent="1">
      <mxGeometry x="300" y="350" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Solution Attributes -->
    <mxCell id="solutionId" value="id (PK)" style="ellipse;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="220" y="300" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="code" value="code" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="320" y="280" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="status" value="status" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="420" y="300" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="language" value="language" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="220" y="450" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="executionTime" value="executionTime" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="320" y="470" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="memoryUsage" value="memoryUsage" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="420" y="450" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <!-- Bookmark Entity -->
    <mxCell id="bookmark" value="Bookmark" style="whiteSpace=wrap;html=1;align=center;fillColor=#dae8fc;strokeColor=#6c8ebf;fontStyle=1;fontSize=14;" vertex="1" parent="1">
      <mxGeometry x="100" y="350" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Bookmark Attributes -->
    <mxCell id="bookmarkId" value="id (PK)" style="ellipse;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="20" y="300" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="createdAt" value="createdAt" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="120" y="280" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <!-- Tag Entity -->
    <mxCell id="tag" value="Tag" style="whiteSpace=wrap;html=1;align=center;fillColor=#dae8fc;strokeColor=#6c8ebf;fontStyle=1;fontSize=14;" vertex="1" parent="1">
      <mxGeometry x="700" y="350" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Tag Attributes -->
    <mxCell id="tagId" value="id (PK)" style="ellipse;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="620" y="300" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="tagName" value="name" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
      <mxGeometry x="720" y="280" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="tagSlug" value="slug" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
      <mxGeometry x="820" y="300" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <!-- Company Entity -->
    <mxCell id="company" value="Company" style="whiteSpace=wrap;html=1;align=center;fillColor=#dae8fc;strokeColor=#6c8ebf;fontStyle=1;fontSize=14;" vertex="1" parent="1">
      <mxGeometry x="500" y="350" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Company Attributes -->
    <mxCell id="companyId" value="id (PK)" style="ellipse;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="420" y="500" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="companyName" value="name" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
      <mxGeometry x="520" y="480" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <mxCell id="logo" value="logo" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
      <mxGeometry x="620" y="500" width="80" height="40" as="geometry"/>
    </mxCell>
    
    <!-- Relationships -->
    
    <!-- User-Solution (1:M) -->
    <mxCell id="userSolution" value="submits" style="shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;fillColor=#e1d5e7;strokeColor=#9673a6;" vertex="1" parent="1">
      <mxGeometry x="200" y="225" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- User-Bookmark (1:M) -->
    <mxCell id="userBookmark" value="bookmarks" style="shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;fillColor=#e1d5e7;strokeColor=#9673a6;" vertex="1" parent="1">
      <mxGeometry x="100" y="225" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Problem-Solution (1:M) -->
    <mxCell id="problemSolution" value="has" style="shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;fillColor=#e1d5e7;strokeColor=#9673a6;" vertex="1" parent="1">
      <mxGeometry x="400" y="225" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Problem-Bookmark (1:M) -->
    <mxCell id="problemBookmark" value="bookmarked" style="shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;fillColor=#e1d5e7;strokeColor=#9673a6;" vertex="1" parent="1">
      <mxGeometry x="300" y="225" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Topic-Problem (1:M) -->
    <mxCell id="topicProblem" value="contains" style="shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;fillColor=#e1d5e7;strokeColor=#9673a6;" vertex="1" parent="1">
      <mxGeometry x="650" y="100" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Problem-Tag (M:M) -->
    <mxCell id="problemTag" value="tagged_with" style="shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;fillColor=#e1d5e7;strokeColor=#9673a6;" vertex="1" parent="1">
      <mxGeometry x="600" y="225" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Problem-Company (M:M) -->
    <mxCell id="problemCompany" value="asked_by" style="shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;fillColor=#e1d5e7;strokeColor=#9673a6;" vertex="1" parent="1">
      <mxGeometry x="500" y="225" width="120" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Connection Lines -->
    
    <!-- User Attribute Connections -->
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="user" target="userId"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="user" target="clerkId"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="user" target="email"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="user" target="name"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="user" target="role"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="user" target="points"/>
    
    <!-- Problem Attribute Connections -->
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problem" target="problemId"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problem" target="title"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problem" target="slug"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problem" target="description"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problem" target="difficulty"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problem" target="hints"/>
    
    <!-- Topic Attribute Connections -->
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="topic" target="topicId"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="topic" target="topicName"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="topic" target="topicSlug"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="topic" target="icon"/>
    
    <!-- Solution Attribute Connections -->
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="solution" target="solutionId"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="solution" target="code"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="solution" target="status"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="solution" target="language"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="solution" target="executionTime"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="solution" target="memoryUsage"/>
    
    <!-- Bookmark Attribute Connections -->
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="bookmark" target="bookmarkId"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="bookmark" target="createdAt"/>
    
    <!-- Tag Attribute Connections -->
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="tag" target="tagId"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="tag" target="tagName"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="tag" target="tagSlug"/>
    
    <!-- Company Attribute Connections -->
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="company" target="companyId"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="company" target="companyName"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="company" target="logo"/>
    
    <!-- Relationship Connections -->
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="user" target="userSolution"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="userSolution" target="solution"/>
    
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="user" target="userBookmark"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="userBookmark" target="bookmark"/>
    
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problem" target="problemSolution"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problemSolution" target="solution"/>
    
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problem" target="problemBookmark"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problemBookmark" target="bookmark"/>
    
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="topic" target="topicProblem"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="topicProblem" target="problem"/>
    
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problem" target="problemTag"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problemTag" target="tag"/>
    
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problem" target="problemCompany"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="problemCompany" target="company"/>
    
    <!-- Cardinality Labels -->
    <mxCell id="card1" value="1" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" vertex="1" parent="1">
      <mxGeometry x="160" y="200" width="20" height="20" as="geometry"/>
    </mxCell>
    
    <mxCell id="cardM1" value="M" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" vertex="1" parent="1">
      <mxGeometry x="360" y="330" width="30" height="20" as="geometry"/>
    </mxCell>
    
    <mxCell id="card2" value="1" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" vertex="1" parent="1">
      <mxGeometry x="560" y="200" width="20" height="20" as="geometry"/>
    </mxCell>
    
    <mxCell id="cardM2" value="M" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;" vertex="1" parent="1">
      <mxGeometry x="760" y="330" width="30" height="20" as="geometry"/>
    </mxCell>
    
  </root>
</mxGraphModel>
```

---

## 📊 ER Diagram Summary

### 🏗️ **Entities (7)**
1. **User** - System users (students/admins)
2. **Problem** - Coding problems
3. **Topic** - Problem categories (Arrays, DP, etc.)
4. **Solution** - User submissions
5. **Bookmark** - Saved problems
6. **Tag** - Problem tags (Two Pointers, etc.)
7. **Company** - Companies (Google, Amazon, etc.)

### 🔗 **Relationships**
- **User → Solution** (1:M) - User submits solutions
- **User → Bookmark** (1:M) - User bookmarks problems
- **Problem → Solution** (1:M) - Problem has solutions
- **Problem → Bookmark** (1:M) - Problem can be bookmarked
- **Topic → Problem** (1:M) - Topic contains problems
- **Problem ↔ Tag** (M:M) - Problems tagged with multiple tags
- **Problem ↔ Company** (M:M) - Problems asked by companies

### 🎨 **Color Coding**
- **Blue**: Entities
- **Yellow**: Primary Keys (PK)
- **Red**: Unique/Required attributes
- **Purple**: Relationships
- **White**: Regular attributes

### 📋 **Key Features**
- Primary keys clearly marked
- Unique constraints shown
- Cardinality indicated (1, M)
- Complete attribute coverage
- Proper normalization (3NF)