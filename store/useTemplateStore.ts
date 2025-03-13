'use client'
import { fetchTemplatesAction, templateSubmitAction } from "@/actions/templateSubmitAction";
import { create } from "zustand";

type Template = {
  id: string;
  name: string;
  imageUrl: string; 
};

type TemplateStore = {
  templates: Template[];
  setTemplates: (templates: Template[]) => void;
  addTemplate: (template: Template) => void;
  fetchTemplates: () => void;
};

export const useTemplateStore = create<TemplateStore>((set) => ({
  
  templates: [],
  setTemplates: (templates) => set({ templates }),
  fetchTemplates: async ()=>{
    try {
      const data:Template[] = await fetchTemplatesAction();
      if(!data) throw new Error("failed to fetch the template list from the database.");

      set({templates:data});
    }catch(error){
      console.log(error)
    }
  },
  addTemplate: async (template: Template) => {

    set((state)=>({
      templates:[...state.templates,template]
    }))

    // console.log("inside the addTemplate of useTemplateStore.ts")
    const res = await templateSubmitAction(template);
    console.log("res" ,res)

    
   
    
  }
    
}));


