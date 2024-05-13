import {NextResponse} from 'next/server';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/app/Utils/connect';

export async function POST(req:Request){
    try{

        const {userId} = auth();
        if(!userId){
            return NextResponse.json({error:"Unauthorized"},{status:401})
        }

        const {title, description, date, completed, important } = await req.json();
        if(!title || !description || !date){
            return NextResponse.json({error:"Title, Description and Date are required"},{status:400})

        }
        if(title.length < 3){
            return NextResponse.json({error:"Title must be at least 3 characters"},{status:400})
        }

        const task = await prisma.task.create({
            data:{
                title,
                description,
                date,
                isCompleted:completed || false,
                isImportant:important || false,
                userId,
                
                
            }
        })

        return NextResponse.json(task)


    }catch(e){
        console.log(e)
        return NextResponse.json({error:"Error Creating Tasks"},{status:500})
    }
}

export async function PUT(req: Request){

    try{

        const {userId} = auth();

        if(!userId){
            return NextResponse.json({error:"Unauthorized"},{status:401})
        }

        const {isCompleted, id } = await req.json();

        const updateUser = await prisma.task.update({
            where:{
                id
            },
            data:{
                isCompleted,
            }
        })
        return NextResponse.json(updateUser)

    }catch(e){
        console.log(e)
        return NextResponse.json({error:"Error Updating Tasks"},{status:500})
    }

    

}

export async function GET(rq:Request){

    try{

        const {userId} = auth();

        if(!userId){
            return NextResponse.json({error:"Unauthorized"},{status:401})
        }
        const tasks = await prisma.task.findMany({
            where:{
                userId
            }
        })
        return NextResponse.json({tasks})

    }catch(e){
        console.log(e)
        return NextResponse.json({error:"Error Fetching Tasks"},{status:500})
    }
    

    
}