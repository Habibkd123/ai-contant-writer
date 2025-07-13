"use client"
import React, { useState } from 'react'
import FromSections from './../_components/FromSections'
import OutPutSections from './../_components/OutPutSections'
import { TEMPLATE } from '../../_components/TemplateListSections'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import main from '@/utils/AiModels'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/Schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalContextUsage'
import { useRouter } from 'next/navigation'
import { UserSubscriptionsContext } from '@/app/(context)/UserSubscribtionsConntext'
import { UpdateUsageCreditsContext } from '@/app/(context)/UpdateUsageCreditsContext'
interface PROPS {
    params: {
        temlate_sulg: string
    }
}
const page = (props: PROPS) => {
    const [loading, setLoading] = React.useState(false);
    const [aiOutPut, setAiOutPut] = useState<string>('')
    const { totalUsage, setTotalUsage } = React.useContext(TotalUsageContext);

    const { userSubscriptions, setUserSubscriptions } = React.useContext(UserSubscriptionsContext);
    const {updateUsageCredits, setUpdateUsageCredits } = React.useContext(UpdateUsageCreditsContext);

    const { user } = useUser()
    const router = useRouter()
    let { temlate_sulg } = props.params
    let selectedTemplate = Templates.find((item: TEMPLATE) => item.slug === temlate_sulg);

    const GenerateAIContent = async (data: any) => {
        if (totalUsage > 1000 && !userSubscriptions) {
            router.push('/dashboard/billing')
        }
        setLoading(true)
        let selectedPrompt = selectedTemplate?.aiPrompt

        let finalyPrompt = JSON.stringify(data) + ", " + selectedPrompt
        let result = await main(finalyPrompt)
        console.log("outside", result);
        if (result) {
            setAiOutPut(result)
            console.log("inside", result);
            await SaveInDb(JSON.stringify(data), selectedTemplate?.slug, result)

        }
        setLoading(false)
        setUpdateUsageCredits(Date.now())
    }

    const SaveInDb = async (data: string, slug: string | undefined, AiRes: string) => {
        if (!slug) {
            console.error("Template slug is missing!");
            return;
        }

        let result = await db.insert(AIOutput).values({
            formData: data,
            templateSlug: slug,
            aiResponse: AiRes,
            createdBy: user?.primaryEmailAddress?.emailAddress ?? 'unknown',
            createdAt: moment().format('DD/MM/YYYY'),
        });

        console.log("result", result);
    };


    return (
        <div className='py-6 px-4'>
            <Link href={'/dashboard'}>
                <Button className='bg-purple-500 hover:bg-purple-400' ><ArrowLeft className='w-6 h-6 mr-0   ' />Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <FromSections loading={loading} userFromInput={(data: any) => GenerateAIContent(data)} selectedTemplate={selectedTemplate} />


                <div className='col-span-2'>
                    <OutPutSections aiOutPut={aiOutPut} />
                </div>
            </div>
        </div>

    )
}

export default page
