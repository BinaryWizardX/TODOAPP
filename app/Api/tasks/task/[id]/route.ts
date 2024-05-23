import {NextResponse} from 'next/server';
import { auth, getAuth } from '@clerk/nextjs/server';
import prisma from '@/app/Utils/connect'
import { error } from 'console';


export async function PUT(req:Request , {params} :{params : {id : string}}){

    try{

        const {userId} = auth();
        const {id} = params;

        if(!userId){
            return NextResponse.json({error: "Unauthorized"},{status: 401}) 
        }

        const body = await req.json();
        const {status} = body;

        const taskupdate = await prisma.task.update({
            where:{
                id,
            },
            data:{
                isCompleted:!status
            }
        })

        return NextResponse.json(taskupdate)

    }
    catch(e){
        console.log(e)
        return NextResponse.json({error: "Error Updating Status"},{status:500})

    }

}