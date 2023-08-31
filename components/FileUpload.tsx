"use-client";
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface FileUploadProps {
  onChange: (url?: string) => void; //this is type for onchange function which returns void
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const FileType = value?.split(".").pop(); //This is for checking the fileType by splitting the file name by "." and then poped it

  //   console.log(value);

  if (value && FileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />

        <button
          onClick={() => onChange("")}
          className="cursor-pointer bg-rose-500 text-white p-1 rounded-full top-0 right-0 shadow-sm absolute"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div>
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => onChange(res?.[0].url)}
        onUploadError={(error: Error) => console.log(error)}
      />
    </div>
  );
};
