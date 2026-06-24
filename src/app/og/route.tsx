import { siteConfig } from "@/lib/config";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title") || siteConfig.description;
  const font = fetch(
    new URL("../../assets/fonts/Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

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
          backgroundColor: "#fff",
          backgroundImage: `url(${siteConfig.url}/og.png)`,
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            top: "125px",
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
              fontSize: "64px",
              fontWeight: "600",
              marginTop: "24px",
              textAlign: "center",
              width: "80%",
              letterSpacing: "-0.05em",
            }}
          >
            {postTitle}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "16px",
              fontWeight: "500",
              marginTop: "16px",
              color: "#808080",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <img
          src={`${siteConfig.url}/screenshots/dashboard.png`}
          alt={`${siteConfig.name} dashboard`}
          width={900}
          style={{
            position: "relative",
            bottom: -160,
            aspectRatio: "auto",
            border: "4px solid lightgray",
            background: "lightgray",
            borderRadius: 20,
            zIndex: 1,
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
        },
      ],
    }
  );
}
