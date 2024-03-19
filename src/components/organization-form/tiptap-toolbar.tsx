"use client";
import { type Editor } from "@tiptap/react";
import { Bold, Italic, ListOrdered, ListIcon, LinkIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import { twMerge } from "tailwind-merge";

type ToolbarProps = {
  editor: Editor | null;
};

export default function TipTapToolbar({ editor }: ToolbarProps) {
  const setLink = useCallback(() => {
    const prevUrl = editor?.getAttributes("link").href;
    const url = window.prompt("Enter the URL", prevUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);
  if (!editor) return null;

  return (
    <div className="flex rounded-bl-md rounded-br-md border border-t-0 border-input bg-transparent px-2 text-sm items-center">
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold size={16} />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic size={16} />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered size={16} />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <ListIcon size={16} />
      </Toggle>
      <Button
        size="sm"
        type="button"
        className={twMerge(
          "inline-flex items-center bg-transparent text-black justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
          editor.isActive("link") ? "" : ""
        )}
        onClick={() => setLink()}
      >
        <LinkIcon size={16} />
      </Button>
    </div>
  );
}
