import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// DELETE POST
export const DELETE = async (req, { params }) => {
  const { slug } = params;

  try {
    await prisma.post.delete({
      where: { slug },
    });

    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Failed to delete post!" }),
      { status: 500 }
    );
  }
};


export const PUT = async (req, { params }) => {
  const { slug } = params;
  const { title, desc, img, catSlug } = await req.json();

  try {
    const updatedPost = await prisma.post.update({
      where: { slug },
      data: {
        title,
        desc,
        img,
        catSlug,
        updatedAt: new Date(), // Add a field for updated timestamp if you have one
      },
    });

    return new NextResponse(JSON.stringify(updatedPost), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Failed to update post!" }),
      { status: 500 }
    );
  }
};