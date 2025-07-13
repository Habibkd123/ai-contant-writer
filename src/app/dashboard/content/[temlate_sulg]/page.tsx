"use client";
import { useState, useContext } from "react";
import FromSections from './../_components/FromSections';
import OutPutSections from './../_components/OutPutSections';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import main from '@/utils/AiModels';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/Schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/TotalContextUsage';
import { UserSubscriptionsContext } from '@/app/(context)/UserSubscribtionsConntext';
import { UpdateUsageCreditsContext } from '@/app/(context)/UpdateUsageCreditsContext';
import { TEMPLATE } from '../../_components/TemplateListSections';
import { useParams, useRouter } from "next/navigation";



const Page = () => {
    const {template_slug}=useParams()
  const [loading, setLoading] = useState(false);
  const [aiOutPut, setAiOutPut] = useState<string>('');
const router = useRouter()
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscriptions } = useContext(UserSubscriptionsContext);
  const { updateUsageCredits, setUpdateUsageCredits } = useContext(UpdateUsageCreditsContext);
  const { user } = useUser();

  const selectedTemplate = Templates.find(
    (item: TEMPLATE) => item.slug === template_slug
  );

  const GenerateAIContent = async (data: any) => {
    if (totalUsage > 1000 && !userSubscriptions) {
      router.push('/dashboard/billing');
    }

    setLoading(true);
    let selectedPrompt = selectedTemplate?.aiPrompt;
    let finalPrompt = JSON.stringify(data) + ", " + selectedPrompt;

    let result = await main(finalPrompt);
    if (result) {
      setAiOutPut(result);
      await SaveInDb(JSON.stringify(data), selectedTemplate?.slug, result);
    }

    setLoading(false);
    setUpdateUsageCredits(Date.now());
  };

  const SaveInDb = async (data: string, slug: string | undefined, AiRes: string) => {
    if (!slug) return;

    await db.insert(AIOutput).values({
      formData: data,
      templateSlug: slug,
      aiResponse: AiRes,
      createdBy: user?.primaryEmailAddress?.emailAddress ?? 'unknown',
      createdAt: moment().format('DD/MM/YYYY'),
    });
  };

  return (
    <div className='py-6 px-4'>
      <Link href="/dashboard">
        <Button className='bg-purple-500 hover:bg-purple-400'>
          <ArrowLeft className='w-6 h-6 mr-0' /> Back
        </Button>
      </Link>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FromSections
          loading={loading}
          userFromInput={(data: any) => GenerateAIContent(data)}
          selectedTemplate={selectedTemplate}
        />

        <div className='col-span-2'>
          <OutPutSections aiOutPut={aiOutPut} />
        </div>
      </div>
    </div>
  );
};

export default Page;
