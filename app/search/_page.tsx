import { SearchPageContent } from "./content";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}