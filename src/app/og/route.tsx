import { siteConfig } from "@/lib/config";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

/* eslint-disable @next/next/no-img-element */

export const runtime = "edge";

/*
 * The link-preview card, drawn as a crop of the hero: the mint band, the sun
 * badge, the headline with ፊደል in green, and the same two tilted phones.
 *
 * Colours are copies of the tokens in globals.css — Satori cannot read CSS
 * variables. Fonts are the page's three faces as TTF (Satori cannot read
 * woff2), fetched per render; the route is cached by the CDN.
 */
const color = {
  mint: "#eaf7e6",
  forest: "#0e3b2a",
  primary: "#1b7f35",
  muted: "#46604f",
  sun: "#ffc83d",
  leaf: "#4cc93b",
  leafInk: "#6bd45b",
};

const FONT_BASE = "https://cdn.jsdelivr.net/fontsource/fonts";

async function loadFont(file: string) {
  const response = await fetch(`${FONT_BASE}/${file}`);
  if (!response.ok) throw new Error(`Failed to load font ${file}`);
  return response.arrayBuffer();
}

export async function GET(req: NextRequest) {
  const { hero } = siteConfig;
  // Other pages can pass their own title; the homepage shows the hero headline.
  const customTitle = req.nextUrl.searchParams.get("title");

  const [display, sansMedium, sansBold, ethiopic] = await Promise.all([
    loadFont("bricolage-grotesque@5.2.5/latin-800-normal.ttf"),
    loadFont("dm-sans@5.2.5/latin-500-normal.ttf"),
    loadFont("dm-sans@5.2.5/latin-700-normal.ttf"),
    loadFont("noto-sans-ethiopic@5.2.5/ethiopic-800-normal.ttf"),
  ]);

  const phone = (name: string) => `${siteConfig.url}/screenshots/${name}-og.png`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          background: color.mint,
          fontFamily: "DM Sans",
          color: color.forest,
          overflow: "hidden",
        }}
      >
        {/* Faded letters in the corners, as on the hero. */}
        <div
          style={{
            position: "absolute",
            left: 640,
            top: 14,
            fontFamily: "Noto Sans Ethiopic",
            fontSize: 96,
            color: color.leafInk,
            opacity: 0.35,
            transform: "rotate(10deg)",
          }}
        >
          ቀ
        </div>
        <div
          style={{
            position: "absolute",
            left: 600,
            bottom: -50,
            fontFamily: "Noto Sans Ethiopic",
            fontSize: 120,
            color: color.leafInk,
            opacity: 0.35,
            transform: "rotate(6deg)",
          }}
        >
          ሰ
        </div>

        {/* Left: badge, headline, lead, wordmark. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 720,
            paddingLeft: 72,
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: color.sun,
              borderRadius: 18,
              padding: "8px 18px",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            {`${hero.badge[0]} · ${hero.badge[1]}`}
          </div>

          {/* Satori does not wrap mixed-font inline text, so the headline is
              set as explicit lines. */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 26,
              fontFamily: "Bricolage Grotesque",
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            {customTitle ? (
              <div style={{ display: "flex" }}>{customTitle}</div>
            ) : null}
            {customTitle ? null : (
              <div style={{ display: "flex", alignItems: "center", height: 62, whiteSpace: "nowrap" }}>
                <div style={{ display: "flex", marginRight: 14 }}>{hero.titleStart}</div>
                <div
                  style={{
                    display: "flex",
                    fontFamily: "Noto Sans Ethiopic",
                    color: color.primary,
                    letterSpacing: 0,
                  }}
                >
                  {hero.titleFidel}
                </div>
              </div>
            )}
            {customTitle ? null : (
              <div style={{ display: "flex", height: 62, whiteSpace: "nowrap" }}>
                {hero.titleEnd}
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 24,
              fontWeight: 500,
              lineHeight: 1.4,
              color: color.muted,
              maxWidth: 540,
            }}
          >
            Lessons, letter tracing, word games and a daily puzzle — free.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 36,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            <img
              src={`${siteConfig.url}${siteConfig.logo}`}
              alt=""
              width={56}
              height={45}
              style={{ objectFit: "contain", marginRight: 14 }}
            />
            {siteConfig.name}
          </div>
        </div>

        {/* Right: the hero's two phones over the leaf disc. */}
        <div style={{ display: "flex", position: "relative", width: 480, height: 630 }}>
          <div
            style={{
              position: "absolute",
              left: 30,
              top: 105,
              width: 420,
              height: 420,
              borderRadius: 9999,
              background: color.leaf,
              opacity: 0.15,
            }}
          />
          <img
            src={phone("lessons")}
            alt=""
            width={210}
            height={424}
            style={{
              position: "absolute",
              left: 44,
              top: 70,
              transform: "rotate(-6deg)",
            }}
          />
          <img
            src={phone("dashboard")}
            alt=""
            width={210}
            height={424}
            style={{
              position: "absolute",
              left: 238,
              top: 120,
              transform: "rotate(6deg)",
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Bricolage Grotesque", data: display, weight: 800, style: "normal" },
        { name: "DM Sans", data: sansMedium, weight: 500, style: "normal" },
        { name: "DM Sans", data: sansBold, weight: 700, style: "normal" },
        { name: "Noto Sans Ethiopic", data: ethiopic, weight: 800, style: "normal" },
      ],
    }
  );
}
