import type { Block } from "@/lib/data/blog-posts";

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="pt-4 font-display text-2xl font-semibold sm:text-3xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={i} className="pt-2 font-display text-xl font-semibold">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-5 text-muted-foreground">
              {block.items.map((item, j) => (
                <li key={j} className="text-pretty">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
