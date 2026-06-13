#!/bin/bash

echo "🧪 Testing Popular Topics Implementation"
echo "=========================================="
echo ""

# Check if files exist
echo "✓ Checking files..."
files=(
  "src/lib/database-actions.ts"
  "src/lib/icon-map.ts"
  "src/app/(landing)/components/PopularTopics.tsx"
  "prisma/seed.ts"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✅ $file exists"
  else
    echo "  ❌ $file missing"
    exit 1
  fi
done

echo ""
echo "✓ Checking function exports..."

# Check if getPopularTopicsWithProgress exists
if grep -q "getPopularTopicsWithProgress" src/lib/database-actions.ts; then
  echo "  ✅ getPopularTopicsWithProgress() exported"
else
  echo "  ❌ getPopularTopicsWithProgress() not found"
  exit 1
fi

# Check if icon-map exports exist
if grep -q "export const iconMap" src/lib/icon-map.ts; then
  echo "  ✅ iconMap exported"
else
  echo "  ❌ iconMap not found"
  exit 1
fi

if grep -q "export function getIconComponent" src/lib/icon-map.ts; then
  echo "  ✅ getIconComponent() exported"
else
  echo "  ❌ getIconComponent() not found"
  exit 1
fi

echo ""
echo "✓ Checking component implementation..."

# Check if PopularTopics is async
if grep -q "export default async function PopularTopics" src/app/\(landing\)/components/PopularTopics.tsx; then
  echo "  ✅ PopularTopics is async server component"
else
  echo "  ❌ PopularTopics is not async"
  exit 1
fi

# Check if it imports the new functions
if grep -q "getPopularTopicsWithProgress" src/app/\(landing\)/components/PopularTopics.tsx; then
  echo "  ✅ Imports getPopularTopicsWithProgress"
else
  echo "  ❌ Missing getPopularTopicsWithProgress import"
  exit 1
fi

if grep -q "getIconComponent" src/app/\(landing\)/components/PopularTopics.tsx; then
  echo "  ✅ Imports getIconComponent"
else
  echo "  ❌ Missing getIconComponent import"
  exit 1
fi

# Check if hardcoded data is removed
if grep -q "const topics = \[" src/app/\(landing\)/components/PopularTopics.tsx; then
  echo "  ⚠️  Warning: Hardcoded topics array might still exist"
else
  echo "  ✅ No hardcoded topics array"
fi

echo ""
echo "✓ Checking seed file..."

# Check if seed uses Lucide icon names
if grep -q 'icon: "Layers"' prisma/seed.ts; then
  echo "  ✅ Seed uses Lucide icon names"
else
  echo "  ❌ Seed still uses emoji icons"
  exit 1
fi

echo ""
echo "=========================================="
echo "🎉 All checks passed!"
echo ""
echo "Next steps:"
echo "1. Run: npx prisma migrate dev --name init"
echo "2. Run: npx prisma db seed"
echo "3. Run: npm run dev"
echo "4. Visit: http://localhost:3000"
echo ""
