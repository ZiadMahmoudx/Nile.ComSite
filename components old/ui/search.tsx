"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchResult {
  title: string;
  description: string;
  url: string;
}

export function Search() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter results based on query
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setIsOpen(false);
      setSelectedIndex(-1);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    // Debounce the search to avoid too many API calls
    const debounceTimer = setTimeout(() => {
      fetchSearchResults();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        // Fallback results if API fails
        setResults([
          {
            title: "Search Results",
            description: `View all results for "${query}"`,
            url: `/search?q=${encodeURIComponent(query)}`
          }
        ]);
      }
    } catch (error) {
      console.error("Search error:", error);
      // Fallback results if API fails
      setResults([
        {
          title: "Search Results",
          description: `View all results for "${query}"`,
          url: `/search?q=${encodeURIComponent(query)}`
        }
      ]);
    } finally {
      setIsLoading(false);
      setIsOpen(true);
      setSelectedIndex(-1);
    }
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        handleResultClick(results[selectedIndex].url);
      } else if (query.trim()) {
        // Always go to search page if no specific selection
        router.push(`/search?q=${encodeURIComponent(query)}`);
        setIsOpen(false);
        setQuery("");
      }
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setQuery("");
    }
  };

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleResultClick = (url: string) => {
    // Validate URL before navigation
    try {
      // If it's a relative URL, navigate directly
      if (url.startsWith('/')) {
        router.push(url);
      } else {
        // For absolute URLs, open in new tab
        window.open(url, '_blank');
      }
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback to search results page
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
    
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSearch} className="relative">
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          className="w-full pl-10 pr-10"
        />
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={handleClear}
          >
            <XIcon className="h-4 w-4" />
          </Button>
        )}
      </form>

      {isOpen && (
        <div className="absolute top-full z-50 mt-1 w-full rounded-md border bg-popover shadow-lg">
          {isLoading ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <div className="max-h-60 overflow-y-auto py-1">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={cn(
                    "cursor-pointer px-4 py-3 hover:bg-accent hover:text-accent-foreground",
                    index === selectedIndex && "bg-accent text-accent-foreground"
                  )}
                  onClick={() => handleResultClick(result.url)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="font-medium">{result.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-2">
                    {result.description}
                  </div>
                </div>
              ))}
            </div>
          ) : query ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No results found for "{query}". Showing all results instead.
              <div 
                className="mt-2 text-primary cursor-pointer hover:underline"
                onClick={() => router.push(`/search?q=${encodeURIComponent(query)}`)}
              >
                View all results
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}