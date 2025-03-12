"use server";

import { prisma } from "@/lib/prisma";

export const templateSubmitAction = async (template: {
  id: string;
  name: string;
  imageUrl: string;
}) => {
  try {
    console.log("Inside the try block of templateSubmitAction");
    const res = await prisma.templates.create({
      data: {
        name: template.name,
        imageUrl: template.imageUrl,
      },
    });
    return res; // Return the created template
  } catch (error) {
    console.error("Error creating template:", error);
    return { error: "Failed to create template" };
  }
};


export const fetchTemplatesAction = async () => {
  try {
    return await prisma.templates.findMany();
  } catch (error) {
    console.error("Error fetching templates:", error);
    return [];
  }
};
