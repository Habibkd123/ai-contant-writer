import Image from 'next/image';
import React from 'react'
import { TEMPLATE } from './TemplateListSections';
import Link from 'next/link';
function TeamplateCard(item: TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
    <div className='p-5 shadow-md rounded-md border flex flex-col gap-3 cursor-pointer
    hover:scale-105 transition-all bg-background text-foreground'>
      <Image src={item.icon} alt='icon' width={50} height={50} />
      <h2 className='font-medium text-lg'>{item.name}</h2>
      <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
    </div>
    </Link>
  );
}

export default TeamplateCard
