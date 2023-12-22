import { db } from "@/firebase/Config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { NextResponse } from "next/server"



export async function GET(_, { params }) {
    const { categoria } = params;
    const productosRef = collection(db, "productos");
    const q = categoria === 'todos' 
                ? productosRef
                : query(productosRef, where('categoryId', '==', categoria));
    const querySnapshot = await getDocs(q);

    const docs = querySnapshot.docs.map(doc => doc.data());

    return NextResponse.json(docs);
}