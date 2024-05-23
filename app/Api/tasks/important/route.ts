import {NextResponse} from 'next/server';
import { auth, getAuth } from '@clerk/nextjs/server';
import prisma from '@/app/Utils/connect';
import { error } from 'console';

export async function GET(req: Request){

    try{

        const {userId} = auth()

        if(!userId){
            return NextResponse.json({error:"Unauthorized"},{status: 401 })
        }

        const important = await prisma.task.findMany({
            where : {
                isImportant : true
            }
        })

        return NextResponse.json(important)

    }
    catch(e){
        console.log(e)
        return NextResponse.json({error : "Error getting important items"},{status: 500})
    }
}