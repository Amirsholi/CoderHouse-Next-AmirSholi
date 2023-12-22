import { db } from "@/firebase/Config"
import { doc, getDoc } from "firebase/firestore"
import { NextResponse } from "next/server"



export async function GET(_, { params }) {
    const { slug } = params;

    const docRef = doc(db, "productos", slug);
    const docSnapshot = await getDoc(docRef);

    return NextResponse.json( docSnapshot.data() );
}