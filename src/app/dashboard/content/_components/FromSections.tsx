"use client"
import React from 'react'
import { TEMPLATE } from '../../_components/TemplateListSections'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'
interface PROPS {
    selectedTemplate?: TEMPLATE,
    userFromInput?: any
    loading?: boolean
}
const FromSections = ({ loading, selectedTemplate, userFromInput }: PROPS) => {
    const [formData, setFormData] = React.useState({})

    const handleSubmit = (e: any) => {
        e.preventDefault()
        userFromInput(formData)
    }

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

    }


    

console.log("selectedTemplate",selectedTemplate)
    return (
        <div className='p-5 shadow-md rounded-lg border bg-background text-foreground'>
            {/* @ts-ignore */}
            <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70} />
            <h2 className='font-bold text-2xl mb-2 text-purple-600'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
            <form className='mt-6' onSubmit={handleSubmit}>
                {selectedTemplate?.form?.map((item: any, index: number) => (
                    <div key={index} className="my-3 flex flex-col gap-2 mb-7">
                        <label className=" font-bold mb-2">{item.label}</label>
                        {item.field == "input" ?
                            <Input name={item.name} required={item.required} onChange={handleInputChange} /> :
                            item.field == "textarea" ? <Textarea name={item.name} required={item.required} onChange={handleInputChange} /> : null}
                    </div>
                ))}
                <Button type='submit' disabled={loading} className='w-full py-6 bg-purple-700 hover:bg-purple-500'>
                    {loading && <Loader2Icon className='animate-spin' />}Generate Content</Button>
            </form>
        </div>
    )
}

export default FromSections
