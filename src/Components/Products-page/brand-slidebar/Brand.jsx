import React, { useState, useMemo } from "react";

import { cn } from "../../../utils/utils";
import { Searchbar } from "../../ui/Searchbar";
import { List } from "../../ui/List";

export const Brand = ({
  data = [],
  loading = false,
  onChange,
  selected = [],
}) => {
  const [searchValue, setSearchValue] = useState("");

  const filtered = useMemo(
    () =>
      data.filter((b) =>
        b.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [data, searchValue]
  );

  const toggle = (name) => {
    const next = selected.includes(name)
      ? selected.filter((b) => b !== name)
      : [...selected, name];

    onChange?.(next); 
  };

  return (
    <div className="space-y-2 px-4">
      <Searchbar
        isSearchExpanded
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        className="h-9  px-7"
      />

      {/* ------ Loading State with Skeleton ------ */}
      {loading ? (
        <ul className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>
              <Skeleton className="h-5 w-full" />
            </li>
          ))}
        </ul>
      ) : (
        <List
          className="flex flex-col max-h-48 panel-scrollbarfilters overflow-y-auto pr-1 panel-scrollbar list-none"
          data={filtered}
          uniqueKey="name"
          render={(item) => (
            <li key={item.name}>
              <label className="flex items-center px-2 gap-2 text-sm">
                <input
                  type="checkbox"
                  className="accent-black"
                  checked={selected.includes(item.name)}
                  onChange={() => toggle(item.name)}
                />
                <span className="">{item.name}</span>
                <span className="text-gray-400">{item.count}</span>
              </label>
            </li>
          )}
        />
      )}
    </div>
  );
};

export const Skeleton = ({ className }) => {
  return <div className={cn("animate-pulse bg-gray-200 rounded", className)} />;
};
