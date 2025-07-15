"use client"
import React, { useEffect, useState } from 'react'
import Templates from '@/app/(data)/Templates';
import TeamplateCard from './TeamplateCard';
export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateListSections = ({ userSearchInput }: any) => {
    const [filterTemplate,setFilterTemplate]=useState<TEMPLATE[]>([])
  useEffect(() => {
    // Add any side effects related to userSearchInput here
    if(userSearchInput){
      setFilterTemplate(Templates.filter((item: TEMPLATE) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      ))
    }else{
      setFilterTemplate(Templates)
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 bg-background text-foreground">
      {filterTemplate.filter((item: TEMPLATE) =>
        item.name.toLowerCase()?.includes(userSearchInput.toLowerCase())
      ).map((item: TEMPLATE, index: number) => (
        <TeamplateCard key={index} {...item} />
      ))}
    </div>
  );
};

export default TemplateListSections
