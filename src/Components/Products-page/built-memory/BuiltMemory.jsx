import React, { useMemo, useState } from "react";

import { List } from "../../ui/List";
import { Skeleton } from "../brand-slidebar/Brand";
import { Searchbar } from "../../ui/Searchbar";
export const BuiltMemory = ({ data = [], loading = false, onChange }) => {
  // state
  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState([]);
  const [isSearchExpanded, setIsSearchExpanded] = useState(true);

  /* */
  const filtered = useMemo(
    () =>
      data.filter((m) =>
        m.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [data, searchValue]
  );

 
  const toggle = (name) => {
    const next = selected.includes(name)
      ? selected.filter((n) => n !== name)
      : [...selected, name];

    setSelected(next);
    onChange?.(next);  // bubble to parent if they passed a handler
  };

  return (
    <div className="space-y-2 px-4">
      {/* search bar */}
      <Searchbar
        isSearchExpanded={isSearchExpanded}
        setIsSearchExpanded={setIsSearchExpanded}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        className="h-9 px-7"
      />

      {/* loading skeleton vs real list */}
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
          className="flex flex-col max-h-48 overflow-y-auto pr-1 panel-scrollbarfilters list-none"
          data={filtered}
          uniqueKey="name"
          render={(item) => (
            <li key={item.name}>
              <label className="flex items-center gap-2 px-2 text-sm">
                <input
                  type="checkbox"
                  className="accent-black"
                  checked={selected.includes(item.name)}
                  onChange={() => toggle(item.name)}
                />
                <span className="flex-1">{item.name}</span>
                <span className="text-gray-400">{item.count}</span>
              </label>
            </li>
          )}
        />
      )}
    </div>
  );
};
