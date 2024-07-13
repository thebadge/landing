import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const notion = new Client({ auth: process.env.NOTION_SECRET_AUTH });
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_WAITLIST_DATABASE_ID,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: body?.email,
              },
            },
          ],
        },
      },
    });
    revalidateTag("waitlist");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET() {
  const notion = new Client({ auth: process.env.NOTION_SECRET_AUTH });

  let totalRows = 0;
  let hasMore = true;
  let startCursor: string | undefined = undefined;

  while (hasMore) {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_WAITLIST_DATABASE_ID,
      start_cursor: startCursor,
    });

    // Add the number of rows in the current page to the total count
    totalRows += response.results.length;

    // Check if there are more pages to fetch
    hasMore = response.has_more;
    startCursor = response.next_cursor || undefined;
  }

  return NextResponse.json({ count: totalRows }, { status: 200 });
}
