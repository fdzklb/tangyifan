import { db } from "@/db";
export async function GET() {
  try {
    const data = await db.customer.findMany({
      take: 99,
      select: {
        first_name: true,
        last_name: true,
        phone: true,
        content: true,
        email: true,
      },
      orderBy: [{ id: "desc" }],
    });

    return Response.json(data);
  } catch (error) {
    console.error("Database Error....", error);
    throw new Error("Failed to fetch the customers");
  }
}

export async function POST(request: Request) {
  const { first_name, last_name, phone, content, email } = await request.json();
  console.log("Request Body:", first_name, last_name, phone, content, email);

  try {
    const existingcust = await db.customer.findUnique({
      where: {
        email,
        phone,
      },
    });

    if (!existingcust) {
      await db.customer.create({
        data: {
          first_name,
          last_name,
          phone,
          content,
          email,
        },
      });
    }
  } catch (error) {
    console.error("Error updating page view", error);
    return new Response("Failed to post to DB", { status: 500 });
  }

  return new Response("Successfully posted to DB", { status: 200 });
}
