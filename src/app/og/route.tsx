import { siteConfig } from "@/lib/config";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

/* eslint-disable @next/next/no-img-element */

export const runtime = "edge";

async function loadInterSemiBold() {
  const response = await fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/inter@5.0.18/latin-600-normal.ttf"
  );

  if (!response.ok) {
    throw new Error("Failed to load Inter font");
  }

  return response.arrayBuffer();
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title") || siteConfig.description;
  const fontData = await loadInterSemiBold();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #ffffff 0%, #f4f4f5 100%)",
          fontFamily: "Inter",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "48px",
          }}
        >
          <img
            src={`${siteConfig.url}${siteConfig.logo}`}
            alt={siteConfig.name}
            width={80}
            height={80}
            style={{
              objectFit: "contain",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "52px",
              fontWeight: 600,
              marginTop: "24px",
              textAlign: "center",
              width: "85%",
              letterSpacing: "-0.05em",
              color: "#18181b",
            }}
          >
            {postTitle}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              fontWeight: 500,
              marginTop: "16px",
              color: "#71717a",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <img
          src={`${siteConfig.url}/screenshots/dashboard.png`}
          alt={`${siteConfig.name} dashboard`}
          width={720}
          style={{
            position: "absolute",
            bottom: -80,
            border: "4px solid #e4e4e7",
            background: "#f4f4f5",
            borderRadius: 20,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
