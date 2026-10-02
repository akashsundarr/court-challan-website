type EnquiryPayload = {
  name: string;
  vehicleNumber: string;
  phone: string;
  issue: string;
  message: string;
};

function isEnquiryPayload(value: unknown): value is EnquiryPayload {
  if (typeof value !== "object" || value === null) return false;

  const payload = value as Record<string, unknown>;
  return (
    typeof payload.name === "string" &&
    typeof payload.vehicleNumber === "string" &&
    typeof payload.phone === "string" &&
    typeof payload.issue === "string" &&
    typeof payload.message === "string"
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: "Invalid enquiry request." }, { status: 400 });
  }

  if (!isEnquiryPayload(body)) {
    return Response.json({ success: false, error: "All enquiry fields are required." }, { status: 400 });
  }

  const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_API_URL;
  if (!endpoint) {
    return Response.json(
      { success: false, error: "Enquiry submission is temporarily unavailable. Please try again later." },
      { status: 500 },
    );
  }

  const payload: EnquiryPayload = {
    name: body.name,
    vehicleNumber: body.vehicleNumber,
    phone: body.phone,
    issue: body.issue,
    message: body.message,
  };

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const responseBody = await upstream.text();

    if (!upstream.ok) {
      return Response.json(
        {
          success: false,
          error: `The enquiry service responded with HTTP ${upstream.status}. Please check its deployment access and try again.`,
        },
        { status: upstream.status },
      );
    }

    return new Response(responseBody, {
      status: upstream.status,
      headers: {
        "Content-Type":
          upstream.headers.get("content-type") ?? "application/json; charset=utf-8",
      },
    });
  } catch {
    return Response.json(
      { success: false, error: "We couldn't connect to the enquiry service. Please try again." },
      { status: 502 },
    );
  }
}
