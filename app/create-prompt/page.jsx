"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import { create } from "eslint-plugin-react/lib/rules/button-has-type";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = React.useState(false);
  const [post, setPost] = React.useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    await fetch("/api/prompt", {});
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
