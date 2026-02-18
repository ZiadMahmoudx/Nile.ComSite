"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SearchIcon, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchResult {
  title: string;
  description: string;
  url: string;
}

export function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
          if (response.ok) {
            const data = await response.json();
            setResults(data);
          } else {
            throw new Error(`Search failed with status ${response.status}`);
          }
        } catch (err) {
          console.error("Error fetching search results:", err);
          setError("Failed to fetch search results. Please try again.");
          // Provide fallback results
          setResults([
            {
              title: "Contact Us",
              description: "If you can't find what you're looking for, please contact our team for assistance.",
              url: "/contact"
            },
            {
              title: "View All Solutions",
              description: "Browse our complete range of IT solutions and services.",
              url: "/solutions"
            },
            {
              title: "View All Services",
              description: "Explore our comprehensive IT services.",
              url: "/services"
            }
          ]);
        } finally {
          setLoading(false);
        }
      };

      fetchResults();
    }
  }, [query]);

  if (!query) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Search</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold my-8">Search</h1>
        <p>Please enter a search query to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Search</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold my-8 flex items-center">
        <SearchIcon className="mr-2 h-8 w-8 text-primary" />
        Search Results for &quot;{query}&quot;
      </h1>
      
      {error && (
        <div className="mb-6 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/10">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <h3 className="ml-2 text-lg font-medium text-yellow-800 dark:text-yellow-200">
              Search Notice
            </h3>
          </div>
          <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
            <p>{error}</p>
            <p className="mt-2">We've provided some alternative pages that might help you find what you're looking for.</p>
          </div>
        </div>
      )}

      {loading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <Card key={index} className="animate-pulse">
              <CardHeader>
                <CardTitle className="h-6 bg-muted rounded w-3/4" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                  <div className="h-4 bg-muted rounded w-4/6" />
                </div>
                <div className="mt-3 h-3 bg-muted rounded w-1/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : results.length > 0 ? (
        <div className="grid gap-4">
          {results.map((result, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  <a
                    href={result.url}
                    className="text-xl font-bold hover:underline text-primary"
                  >
                    {result.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{result.description}</p>
                <div className="mt-3">
                  <a
                    href={result.url}
                    className="text-sm text-primary hover:underline"
                  >
                    {result.url}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <SearchIcon className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No results found</h3>
          <p className="mt-2 text-muted-foreground">
            We couldn't find any pages matching your search for "{query}".
          </p>
          <div className="mt-6">
            <Button asChild>
              <a href="/contact">Contact Us for Help</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}