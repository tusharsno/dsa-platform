import { getUserBookmarks } from "@/lib/database-actions";
import { BookmarkCard } from "./BookmarkCard";

export default async function BookmarksPage() {
  const bookmarks = await getUserBookmarks();

  return (
    <div className="min-h-screen bg-black p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Bookmarked Problems</h1>
        <p className="text-white/80 mt-2">
          Problems you've saved for later practice
        </p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-white/60">No bookmarks yet. Start bookmarking problems!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {bookmarks.map((bookmark) => (
            <BookmarkCard key={bookmark.id} bookmark={bookmark} />
          ))}
        </div>
      )}
    </div>
  );
}
