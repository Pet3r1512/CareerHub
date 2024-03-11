"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import Link from "@tiptap/extension-link";
import HardBreak from "@tiptap/extension-hard-break";
import CharacterCount from "@tiptap/extension-character-count";
import StarterKit from "@tiptap/starter-kit";
import TipTapToolbar from "./tiptap-toolbar";

export default function TipTapDescription({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) {
  const LIMIT_CHARACTERS = 500;
  const editor = useEditor({
    extensions: [
      StarterKit,
      HardBreak,
      Link.configure({
        linkOnPaste: true,
        HTMLAttributes: {
          class: "!text-primary underline underline-offset-1",
        },
      }),
      CharacterCount.configure({
        limit: LIMIT_CHARACTERS,
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "min-h-[125px] w-full rounded-tr-md rounded-tl-md border border-input bg-background px-3 py-2 text-sm ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="flex flex-col justify-stretch min-h-[200px]">
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
      <TipTapToolbar editor={editor} />
      <div className="text-xs mt-1 text-gray-dark flex justify-between">
        <p>Maximum 500 characters</p>
        <p>
          {editor.storage.characterCount.characters()}/{LIMIT_CHARACTERS}
        </p>
      </div>
    </div>
  );
}
