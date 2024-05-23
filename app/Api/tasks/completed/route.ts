import {NextResponse} from 'next/server';
import { auth, getAuth } from '@clerk/nextjs/server';
import prisma from '@/app/Utils/connect';


export async function GET(req:Request){
    try{

        const {userId} = auth();
        if(!userId){
            return NextResponse.json({error:"Unauthorized"},{status:401})
        }
        
        const CompletedTask = await prisma.task.findMany({
            where:{
                isCompleted:true
            }
        })
        return NextResponse.json(CompletedTask)

    }catch(error){
        console.log(error)
        return NextResponse.json({error:"Error getting completed tasks"},{status:500})
    }
}