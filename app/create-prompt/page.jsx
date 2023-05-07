"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = React.useState(false);
  const [post, setPost] = React.useState({
    prompt: "",
    tag: "",
  });

  // const createPrompt = async (e) => {};

  return <Form />;
};

export default CreatePrompt;
