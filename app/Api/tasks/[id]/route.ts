import {NextResponse} from 'next/server';
import { auth, getAuth } from '@clerk/nextjs/server';
import prisma from '@/app/Utils/connect'
import { error } from 'console';


export async function DELETE(req:Request, {params}: {params:{id:string}}){

    try{

        const{userId} = auth();
        const {id} = params;
        if(!userId){
            return NextResponse.json({error:"Unauthorized"},{status:401})
        }

        const task = await prisma.task.delete({
            where:{
                id
            }
        })
        return NextResponse.json(task)
        console.log("Task Deleted Successfully")


    }
    catch(e){
        console.log(e)
        return NextResponse.json({error:"Error Deleting Task"},{status:500})
    }



}

export async function GET(req:Request, {params}: {params:{id:string}}){
    try{

        const {userId} = auth();
        const {id} = params;

        if(!userId){
            return NextResponse.json({error:"Unauthorize"},{status:401})
        }

        const user = await prisma.task.findUnique({
            where:{
                id
            }
        })

        return NextResponse.json(user)


    }
    catch(e){
        console.log("Error : "+ e)
        return NextResponse.json({error : "Error Getting the single Task"},{status:500})
    }
}

export async function PUT(req:Request, {params}: {params:{id:string}}){
    
    try{

        const {userId} = auth();
        const {id} = params;

        if(!userId){
            return NextResponse.json({error:"Unauthorized"},{status:401})
        }

        const {title, description, date, isCompleted, isImportant} = await req.json();

        console.log(id,title, description, date, isCompleted, isImportant)

        const updateUser = await prisma.task.update({
            where:{
                id
            },
            data:{
                title,
                description,
                date,
                isCompleted,
                isImportant
            }
        
        })
        return NextResponse.json(updateUser,{status:200})

    }
    catch(e){
        console.log(e)
        return NextResponse.json({error:"Error Updating Task"},{status:500})
    }
}