# How to use

### Import

```typescript
import PaginationSection from "@/components/paginationSection";
```

### Usage

```tsx
import { useSearchParams } from "next/navigation";
import PaginationSection from "@/components/paginationSection";

export default function Foo({ data }: { data: Item[] }) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const itemAmountInPage = 8;
  const currentPage: number = +page || 1;
  const lastItemIndex = currentPage * itemAmountInPage;
  const firstItemIndex = lastItemIndex - itemAmountInPage;

  return (
    <section>
      {data.slice(firstItemIndex, lastItemIndex).map((item, index) => (
        <CompanyItem key={index} company={item} />
      ))}
      <PaginationSection
        currentPage={currentPage}
        itemsPerPage={itemAmountInPage}
        totalItems={data.length}
      />
    </section>
  );
}
```

### Props

This component has 3 properties:

- `currentPage` - the active page that you choose. Eg: `1`
- `itemPerPage` - number of items that appear in 1 page. Eg: `8`
- `totalItems` - number of all items that you have. Eg: `50`

# Explanation

### Step 1: import module

```javascript
import PaginationSection from "@/components/paginationSection";
```

This component is a custom component using the shadcn pagination.

### Step 2: usage

To use this component, you need to get the current page, and then calculate the first and last item index.
The current page can be got by using `searchParams()`

Example:

```typescript
const searchParams = useSearchParams();
```

1. We import `useSearchParams` and then use `get()` function to get the query, in this context, we get the `"page"` value.
2. If we have an URL like this: `https://localhost:3000/foo?page=1`, we will get the result:

```typescript
const page = searchParams.get("page"); //1
```

```typescript
const currentPage: number = +page || 1;
```

3. The result type we have above is string, so we need to convert it to number by using `+` operator

```typescript
const lastItemIndex = currentPage * itemAmountInPage;
const firstItemIndex = lastItemIndex - itemAmountInPage;
```

4. Next, we calculate the first and last item index in a page.

```tsx
return (
  <section>
    {data.slice(firstItemIndex, lastItemIndex).map((item, index) => (
      <Item key={index} item={item} />
    ))}
    <PaginationSection
      currentPage={currentPage}
      itemsPerPage={itemAmountInPage}
      totalItems={data.length}
    />
  </section>
);
```

5. Slice the data to display the right amount of items that we want.
