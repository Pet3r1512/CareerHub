import { useDropzone, FileRejection } from "react-dropzone";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";
import { ImageIcon, XIcon } from "lucide-react";
import { FormValues } from "@/pages/business/create-organization";
import { useState, useEffect, ChangeEventHandler, useCallback } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useFieldArray, useFormContext, UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormLabel,
  FormMessage,
} from "../ui/form";

type ImageDropzoneProps = {
  name: string;
  form: UseFormReturn<FormValues>;
};

export default function ImageDropzone(props: ImageDropzoneProps) {
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const { name, form } = props;
  const { register, unregister, setValue, watch, setError, clearErrors } =
    useFormContext();
  const [files, setFiles] = useState<(File & { preview: string })[]>(
    watch(name) || []
  );

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setValue(name, []);
        setFiles([]);
        setError(name, {
          type: "manual",
          message: rejectedFiles && rejectedFiles[0].errors[0].message,
        });
      } else {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        clearErrors(name);
        acceptedFiles.forEach((file) => {
          const reader = new FileReader();
          reader.onabort = () => console.log("File reading was aborted");
          reader.onerror = () => console.log("file reading has failed");
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            setValue(name, file, { shouldValidate: true });
          };
        });
      }
    },
    [name, setValue, setError, clearErrors]
  );

  const thumbs = files.map((file) => (
    <div key={file.name} className="w-full h-auto rounded-md relative">
      <Image
        src={(file as any).preview}
        alt={"Image preview"}
        width={100}
        height={100}
        className="h-fit w-fit object-cover rounded-md"
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
      <button
        type="button"
        className="absolute -top-2 -right-2 bg-pink-400 rounded-full p-1 lg:hover:bg-white lg:hover:text-pink-400 lg:hover:border-pink-400 lg:border-2 lg:border-pink-400 lg:transition-all lg:duration-300 lg:ease-in-out group"
        onClick={() => {
          setFiles([]);
        }}
      >
        <XIcon size={16} className="text-white lg:group-hover:text-pink-400" />
      </button>
      <p className="text-gray-dark text-sm break-all">{file.name}</p>
    </div>
  ));

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".jpg", ".jpeg", ".png"] },
    maxSize: MAX_FILE_SIZE,
    multiple: false,
    onDrop,
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormField
      control={form.control}
      name="image"
      render={({ field: { onChange } }) => (
        <FormItem>
          <div className="flex justify-between items-start gap-16">
            <div>
              <FormLabel htmlFor="image" className="text-base">
                Company Logo
              </FormLabel>
              <FormDescription className="text-xs">
                This image will be shown publicly as company logo
              </FormDescription>
            </div>
            <FormControl>
              <section className="flex flex-col items-center w-fit h-fit">
                <div
                  {...getRootProps({
                    className: cn(
                      "p-3 mb-4 flex flex-col items-center border-2 border-dashed rounded-md bg-primary/10 border-gray-light",
                      "focus:outline-none focus:border-primary/70"
                    ),
                  })}
                >
                  <Input
                    type="image"
                    {...getInputProps({ onDrop: onChange })}
                  />
                  <div className="flex flex-col gap-2 items-center">
                    <span>
                      <ImageIcon
                        size={30}
                        strokeWidth={1}
                        className="text-primary"
                      />
                    </span>
                    <p className="text-sm text-gray-dark">
                      <span className="text-primary">Click to replace </span>
                      <span>or drag and drop an image here</span>
                    </p>
                    <p className="text-xs text-gray-400">Max file size: 5MB</p>
                  </div>
                </div>
                <aside className="max-w-[300px] h-full">
                  <div className="w-full h-full">{thumbs}</div>
                </aside>
              </section>
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
