// fce9qyq9j49nsh26p1ml9sgecr2blj2f5oomolcc4hueksm2
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Box } from "@mui/material";

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState("");

  return (
    <Box>
      <Editor
        apiKey="fce9qyq9j49nsh26p1ml9sgecr2blj2f5oomolcc4hueksm2"
        value={content}
        onEditorChange={(newValue) => setContent(newValue)}
        init={{
          height: 300,
          menubar: false,
          plugins: ["lists link image"],
          toolbar: "bold italic underline | bullist numlist",
        }}
      />
    </Box>
  );
};

export default RichTextEditor;

