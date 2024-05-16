import {NextResponse} from 'next/server';
import { auth, getAuth } from '@clerk/nextjs/server';
import prisma from '@/app/Utils/connect';

export async function GET(req: Request){

    try{

        const {userId} = auth();
        console.log(userId+"from get Users")

        return NextResponse.json({message:"Hello World"})

    }catch(e){
        console.log(e)
        return NextResponse.json({error:"Error Fetching Tasks"},{status:500})
    }
}