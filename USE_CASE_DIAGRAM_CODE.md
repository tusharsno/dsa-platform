# 📊 DSA Platform - Use Case Diagram (Draw.io Code)

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
    
    <!-- System Boundary -->
    <mxCell id="system" value="DSA Learning Platform" style="swimlane;whiteSpace=wrap;html=1;fillColor=#e1d5e7;strokeColor=#9673a6;fontSize=16;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="200" y="50" width="700" height="600" as="geometry"/>
    </mxCell>
    
    <!-- Actors -->
    <mxCell id="student" value="Student" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="1">
      <mxGeometry x="50" y="200" width="30" height="60" as="geometry"/>
    </mxCell>
    
    <mxCell id="admin" value="Admin" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
      <mxGeometry x="50" y="450" width="30" height="60" as="geometry"/>
    </mxCell>
    
    <mxCell id="systemActor" value="System" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" vertex="1" parent="1">
      <mxGeometry x="980" y="350" width="30" height="60" as="geometry"/>
    </mxCell>
    
    <!-- Student Use Cases -->
    <mxCell id="login" value="Login" style="ellipse;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="system">
      <mxGeometry x="50" y="50" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="viewProblems" value="View Problems" style="ellipse;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="system">
      <mxGeometry x="200" y="50" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="solveProblem" value="Solve Problem" style="ellipse;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="system">
      <mxGeometry x="350" y="50" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="runCode" value="Run Code" style="ellipse;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="system">
      <mxGeometry x="500" y="50" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="submitSolution" value="Submit Solution" style="ellipse;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="system">
      <mxGeometry x="50" y="130" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="bookmarkProblem" value="Bookmark Problem" style="ellipse;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="system">
      <mxGeometry x="200" y="130" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="viewDashboard" value="View Dashboard" style="ellipse;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="system">
      <mxGeometry x="350" y="130" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="viewProgress" value="View Progress" style="ellipse;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="system">
      <mxGeometry x="500" y="130" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <!-- Admin Use Cases -->
    <mxCell id="adminLogin" value="Admin Login" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="system">
      <mxGeometry x="50" y="250" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="createProblem" value="Create Problem" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="system">
      <mxGeometry x="200" y="250" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="editProblem" value="Edit Problem" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="system">
      <mxGeometry x="350" y="250" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="deleteProblem" value="Delete Problem" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="system">
      <mxGeometry x="500" y="250" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="manageUsers" value="Manage Users" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="system">
      <mxGeometry x="50" y="330" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="viewAnalytics" value="View Analytics" style="ellipse;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="system">
      <mxGeometry x="200" y="330" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <!-- System Use Cases -->
    <mxCell id="validateCode" value="Validate Code" style="ellipse;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" vertex="1" parent="system">
      <mxGeometry x="350" y="450" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <mxCell id="executeTests" value="Execute Tests" style="ellipse;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;" vertex="1" parent="system">
      <mxGeometry x="500" y="450" width="100" height="50" as="geometry"/>
    </mxCell>
    
    <!-- Student Associations -->
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="student" target="login"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="student" target="viewProblems"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="student" target="solveProblem"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="student" target="runCode"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="student" target="submitSolution"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="student" target="bookmarkProblem"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="student" target="viewDashboard"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="student" target="viewProgress"/>
    
    <!-- Admin Associations -->
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="admin" target="adminLogin"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="admin" target="createProblem"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="admin" target="editProblem"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="admin" target="deleteProblem"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="admin" target="manageUsers"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="admin" target="viewAnalytics"/>
    
    <!-- System Associations -->
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="systemActor" target="validateCode"/>
    <mxCell style="endArrow=none;html=1;" edge="1" parent="1" source="systemActor" target="executeTests"/>
    
    <!-- Include Relationships -->
    <mxCell style="endArrow=open;dashed=1;html=1;dashPattern=1 3;strokeWidth=2;" edge="1" parent="1" source="solveProblem" target="runCode">
      <mxGeometry width="50" height="50" relative="1" as="geometry"/>
    </mxCell>
    
    <mxCell style="endArrow=open;dashed=1;html=1;dashPattern=1 3;strokeWidth=2;" edge="1" parent="1" source="submitSolution" target="validateCode">
      <mxGeometry width="50" height="50" relative="1" as="geometry"/>
    </mxCell>
    
  </root>
</mxGraphModel>
```

---

## 📊 Use Case Summary

### 👨‍🎓 Student (8 Use Cases)
- Login, View Problems, Solve Problem, Run Code
- Submit Solution, Bookmark Problem, View Dashboard, View Progress

### 👨‍💼 Admin (6 Use Cases)  
- Admin Login, Create/Edit/Delete Problem
- Manage Users, View Analytics

### 🖥️ System (2 Use Cases)
- Validate Code, Execute Tests

---

## 🔗 Relationships
- **Include**: Solve Problem → Run Code
- **Include**: Submit Solution → Validate Code

---

## 🎨 Color Coding
- **Blue**: Student use cases
- **Red**: Admin use cases
- **Yellow**: System use cases
- **Purple**: System boundary