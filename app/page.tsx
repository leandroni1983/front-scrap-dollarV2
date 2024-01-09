'use server'
import CardItem from '@/components/CardItem';
import { revalidateTag } from 'next/cache'
import { DataType } from '@/types';


async function getData():Promise<DataType[]> {
	try {
		const apiUrl = process.env.REACT_APP_API_URL;
		if(!apiUrl){
			throw new Error ('Api URL not defined')
		}
	  	const res = await fetch(apiUrl, { next: { tags: ['dolares'] } })
	  	const data: DataType[] =  await res.json()
	  	return data
	} catch (error) {
		throw error; 
	}
  }
  

export default async function Home() {
	revalidateTag('dolares')
	const data = await getData()
	return (
		<div  className='flex item-center justify-center '>
		<section className="flex flex-row gap-4 py-8 md:py-10">
				{data.map((dato) => (
					<CardItem key={dato.title} dato={dato}  />
					))}
			
		</section>
		</div>
	);
}
