import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

// The link preview used when the site is shared (LinkedIn, Slack, iMessage).
export const alt = "Lucy Scott Brown - Senior product leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/headshot.jpg"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "white",
          padding: "0 90px",
          borderTop: "12px solid #185FA5",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 600, color: "#0a0a0a", letterSpacing: -2 }}>
            Lucy Scott Brown
          </div>
          <div style={{ fontSize: 36, color: "#4B5563" }}>Senior product leader</div>
          <div style={{ fontSize: 28, color: "#185FA5", marginTop: 24 }}>
            lucyscottbrown.com
          </div>
        </div>
        <img
          alt=""
          src={`data:image/jpeg;base64,${photo}`}
          width={340}
          height={440}
          style={{ objectFit: "cover", objectPosition: "top", borderRadius: 16 }}
        />
      </div>
    ),
    size,
  );
}
